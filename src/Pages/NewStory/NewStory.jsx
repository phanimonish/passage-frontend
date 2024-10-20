import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import Logout from "@mui/icons-material/Logout";
import SpeedDial from "../../Components/SpeedDial/SpeedDial";
import Cookies from "js-cookie";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import TextareaAutosize from "react-textarea-autosize";
import ImageUploader from "../../Components/ImageUploader/ImageUploader";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import "./NewStory.css";

export default function NewStory() {
  const { postId } = useParams();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [imageURL, setImageURL] = useState("");
  const [category, setCategory] = useState("");
  const [anchorEl, setAnchorEl] = useState(null);
  const [showTitle, setShowTitle] = useState(false);
  const [showStory, setShowStory] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = Cookies.get("token");
    if (!token) {
      navigate("/login");
    } else if (postId) {
      const fetchPostData = async () => {
        try {
          const response = await axios.get(
            `https://passage-backend.onrender.com/api/post/${postId}`
          );
          const { title, description, category, imageUrl } = response.data;
          setTitle(title);
          setDescription(description);
          setCategory(category);
          setImageURL(imageUrl); // Set image URL from response
        } catch (error) {
          console.error("Error fetching post data:", error);
        }
      };
      fetchPostData();
    }
  }, [navigate, postId]);

  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  const handlePost = async (e) => {
    e.preventDefault();
    const decode = jwtDecode(Cookies.get("token"));
    const username = decode.username;

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("username", username);
    formData.append("category", category);
    if (imageFile) {
      formData.append("image", imageFile);
    } else {
      formData.append("existingImage", imageURL);
    }

    try {
      if (postId) {
        await axios.patch(
          `https://passage-backend.onrender.com/api/post/${postId}`,
          formData,
          {
            headers: { "Content-Type": "multipart/form-data" },
          }
        );
      } else {
        await axios.post(`https://passage-backend.onrender.com/api/post`, formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
      }
      navigate("/home");
    } catch (error) {
      console.error("Error posting data:", error.response || error.message);
    }
  };

  const handleLogout = () => {
    Cookies.remove("token");
    navigate("/");
    navigate(0);
  };

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="new-story">
      <AppBar className="navbar" position="static">
        <Container maxWidth="xl">
          <Toolbar className="navbar-box" disableGutters>
            <div className="nav-left-content">
              <h2 className="logo">Passage</h2>
            </div>
            <div className="nav-right-content">
              <Button
                className="publish-btn"
                onClick={handlePost}
                variant="outlined"
              >
                Publish
              </Button>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <Tooltip title="Account settings">
                  <IconButton
                    onClick={handleClick}
                    size="small"
                    aria-controls={open ? "account-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                  >
                    <Avatar sx={{ width: 38, height: 38 }} />
                  </IconButton>
                </Tooltip>
                <Menu
                  anchorEl={anchorEl}
                  id="account-menu"
                  open={open}
                  onClose={handleClose}
                  onClick={handleClose}
                >
                  <MenuItem onClick={handleClose}>
                    <Avatar /> Profile
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <Avatar /> My account
                  </MenuItem>
                  <Divider />
                  <MenuItem onClick={handleLogout}>
                    <ListItemIcon>
                      <Logout fontSize="small" />
                    </ListItemIcon>
                    Logout
                  </MenuItem>
                </Menu>
              </Box>
            </div>
          </Toolbar>
        </Container>
      </AppBar>

      <div className="story-content">
        <Box className="category-box">
          <FormControl sx={{ minWidth: 180 }} size="small">
            <Select
              value={category}
              onChange={handleChange}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
            >
              <MenuItem value="">
                <em>Select category</em>
              </MenuItem>
              <MenuItem value={"originals"}>Originals</MenuItem>
              <MenuItem value={"javascript"}>Javascript</MenuItem>
              <MenuItem value={"react"}>React</MenuItem>
              <MenuItem value={"web development"}>Web Development</MenuItem>
              <MenuItem value={"others"}>Others</MenuItem>
            </Select>
          </FormControl>
        </Box>

        <ImageUploader
          previousImageUrl={imageURL}
          onFileSelect={(file) => setImageFile(file)}
        />

        <div className="title">
          {showTitle && <SpeedDial />}
          {showTitle && (
            <Divider className="vertical-divider" orientation="vertical" />
          )}
          <input
            onClick={() => setShowTitle((prev) => !prev)}
            placeholder="Title"
            className="title-input"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="story">
          {showStory && <SpeedDial />}
          {showStory && (
            <Divider className="vertical-divider" orientation="vertical" />
          )}
          <TextareaAutosize
            onClick={() => setShowStory((prev) => !prev)}
            placeholder="Tell your story"
            className="story-input"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}
