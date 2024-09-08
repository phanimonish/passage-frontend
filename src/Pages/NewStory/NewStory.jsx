import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import "../../Components/Navbar/Navbar.css";
import { Tooltip } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import "./NewStory.css";
import SpeedDial from "../../Components/SpeedDial/SpeedDial";
import { useState } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import TextareaAutosize from "react-textarea-autosize";
import ImageUploader from "../../Components/ImageUploader/ImageUploader";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function NewStory() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const navigate = useNavigate();

  axios.defaults.withCredentials = true;
  useEffect(() => {
    const token = Cookies.get("token");
    if (!token) {
      navigate("/");
    }
  }, [navigate]);

  const [category, setCategory] = React.useState("");

  const handleChange = (event) => {
    setCategory(event.target.value);
    console.log(event.target.value);
  };

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const [showTitle, setShowTitle] = useState(false);
  const [showStory, setShowStory] = useState(false);

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
    }

    try {
      await axios.post(`https://passage-backend.onrender.com/api/post`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
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
  return (
    <div className="new-story">
      <div>
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
                <Button className="write-btn" variant="contained">
                  <svg class="svgIcon-use" width="25" height="25">
                    <path
                      d="M5 12.5c0 .552.195 1.023.586 1.414.39.39.862.586 1.414.586.552 0 1.023-.195 1.414-.586.39-.39.586-.862.586-1.414 0-.552-.195-1.023-.586-1.414A1.927 1.927 0 007 10.5c-.552 0-1.023.195-1.414.586-.39.39-.586.862-.586 1.414zm5.617 0c0 .552.196 1.023.586 1.414.391.39.863.586 1.414.586.552 0 1.023-.195 1.414-.586.39-.39.586-.862.586-1.414 0-.552-.195-1.023-.586-1.414a1.927 1.927 0 00-1.414-.586c-.551 0-1.023.195-1.414.586-.39.39-.586.862-.586 1.414zm5.6 0c0 .552.195 1.023.586 1.414.39.39.868.586 1.432.586.551 0 1.023-.195 1.413-.586.391-.39.587-.862.587-1.414 0-.552-.196-1.023-.587-1.414a1.927 1.927 0 00-1.413-.586c-.565 0-1.042.195-1.432.586-.39.39-.586.862-.587 1.414z"
                      fillRule="evenodd"
                    ></path>
                  </svg>
                </Button>
                <Button className="notifications" variant="contained">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                    aria-label="Notifications"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      d="M15 18.5a3 3 0 1 1-6 0"
                    ></path>
                    <path
                      stroke="currentColor"
                      strokeLinejoin="round"
                      d="M5.5 10.532V9a6.5 6.5 0 0 1 13 0v1.532c0 1.42.564 2.782 1.568 3.786l.032.032c.256.256.4.604.4.966v2.934a.25.25 0 0 1-.25.25H3.75a.25.25 0 0 1-.25-.25v-2.934c0-.363.144-.71.4-.966l.032-.032A5.35 5.35 0 0 0 5.5 10.532Z"
                    ></path>
                  </svg>
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
                      sx={{ ml: 2 }}
                      aria-controls={open ? "account-menu" : undefined}
                      aria-haspopup="true"
                      aria-expanded={open ? "true" : undefined}
                    >
                      <Avatar sx={{ width: 38, height: 38 }}></Avatar>
                    </IconButton>
                  </Tooltip>
                </Box>
                <Menu
                  anchorEl={anchorEl}
                  id="account-menu"
                  open={open}
                  onClose={handleClose}
                  onClick={handleClose}
                  PaperProps={{
                    elevation: 0,
                    sx: {
                      overflow: "visible",
                      filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                      mt: 1.5,
                      "& .MuiAvatar-root": {
                        width: 32,
                        height: 32,
                        ml: -0.5,
                        mr: 1,
                      },
                      "&::before": {
                        content: '""',
                        display: "block",
                        position: "absolute",
                        top: 0,
                        right: 14,
                        width: 10,
                        height: 10,
                        bgcolor: "background.paper",
                        transform: "translateY(-50%) rotate(45deg)",
                        zIndex: 0,
                      },
                    },
                  }}
                  transformOrigin={{ horizontal: "right", vertical: "top" }}
                  anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                >
                  <MenuItem onClick={handleClose}>
                    <Avatar /> Profile
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <Avatar /> My account
                  </MenuItem>
                  <Divider />
                  <MenuItem onClick={handleClose}>
                    <ListItemIcon>
                      <PersonAdd fontSize="small" />
                    </ListItemIcon>
                    Add another account
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <ListItemIcon>
                      <Settings fontSize="small" />
                    </ListItemIcon>
                    Settings
                  </MenuItem>
                  <MenuItem onClick={handleLogout}>
                    <ListItemIcon>
                      <Logout fontSize="small" />
                    </ListItemIcon>
                    Logout
                  </MenuItem>
                </Menu>
              </div>
            </Toolbar>
          </Container>
        </AppBar>
      </div>
      <div className="story-content">
        <Box className="category-box">
          <FormControl sx={{ minWidth: 180 }} size="small">
            <InputLabel className="label" id="demo-simple-select-label">
              Select category
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={category}
              label="Select category"
              onChange={handleChange}
            >
              <MenuItem value={"originals"}>Originals</MenuItem>
              <MenuItem value={"javascript"}>Javascript</MenuItem>
              <MenuItem value={"react"}>React</MenuItem>
              <MenuItem value={"web development"}>Web Development</MenuItem>
              <MenuItem value={"others"}>Others</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <ImageUploader onFileSelect={(file) => setImageFile(file)} />
        <div className="title">
          {showTitle && <SpeedDial className="" />}
          {showTitle && (
            <Divider className="vertical-divider" orientation="vertical" />
          )}
          <input
            onClick={() => setShowTitle((prev) => !prev)}
            placeholder="Title"
            className="title-input"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="story">
          {showStory && <SpeedDial className="" />}
          {showStory && (
            <Divider className="vertical-divider" orientation="vertical" />
          )}

          <TextareaAutosize
            onClick={() => setShowStory((prev) => !prev)}
            contentEditable="true"
            placeholder="Tell your story"
            className="story-input"
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}
