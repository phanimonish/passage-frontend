import React, { useEffect, useState } from "react";
import "../HomePage/HomePage.css";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import Post from "../../Components/Post/Post";
import Picks from "../../Components/Picks/Picks";
import Chip from "@mui/material/Chip";
import { Link } from "react-router-dom";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";
import PropTypes from "prop-types";
import { AppBar, Container, Toolbar, Button } from "@mui/material";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function HomePage() {
  const [posts, setPosts] = useState([]);
  const [value, setValue] = useState(0); // Active tab index
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const getCategoryFromIndex = (index) => {
    switch (index) {
      case 0:
        return null; // "For you"
      case 1:
        return "originals";
      case 2:
        return "javascript";
      case 3:
        return "react";
      case 4:
        return "web development";
      default:
        return null;
    }
  };

  const getIndexFromCategory = (category) => {
    switch (category) {
      case "originals":
        return 1;
      case "javascript":
        return 2;
      case "react":
        return 3;
      case "web development":
        return 4;
      default:
        return 0; // "For you"
    }
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
    setSelectedCategory(getCategoryFromIndex(newValue));
  };

  const handleChipClick = (category) => {
    const index = getIndexFromCategory(category);
    setValue(index); // Set the active tab index
    setSelectedCategory(category); // Set the category to load posts for
  };

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://passage-backend.onrender.com/api/posts`, {
        params: { category: selectedCategory },
      })
      .then((res) => {
        setPosts(res.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [selectedCategory]);
  return (
    <div>
      <AppBar className="navbar" position="static">
        <Container maxWidth="xl">
          <Toolbar className="navbar-box" disableGutters>
            <div className="nav-left-content" style={{width: "60%"}}>
              <h2 className="logo">Passage</h2>
            </div>
            <div className="nav-right-content">
              <Button className="login-btn" href="/login" variant="outlined" >
                Log In
              </Button>
            </div>
          </Toolbar>
        </Container>
      </AppBar>
      <div className="home-container">
        <div className="home-blog-posts">
          <Box>
            <Box
              className="tabs"
              sx={{
                borderBottom: 1,
                borderColor: "divider",
                padding: 0,
              }}
            >
              <div style={{ display: "flex" }}>
                <Link className="add-icon" to="/new-story">
                  <AddRoundedIcon />
                </Link>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  aria-label="basic tabs example"
                  variant="scrollable"
                  scrollButtons="auto"
                >
                  <Tab
                    className="text-form"
                    label="For you"
                    {...a11yProps(0)}
                    sx={{
                      fontWeight: value === 0 ? 'bold' : 'normal',
                    }}
                  />
                  <Tab
                    className="text-form"
                    label="Originals"
                    {...a11yProps(1)}
                    sx={{
                      fontWeight: value === 1 ? 'bold' : 'normal',
                    }}
                  />
                  <Tab
                    className="text-form"
                    label="Javascript"
                    {...a11yProps(2)}
                    sx={{
                      fontWeight: value === 2 ? 'bold' : 'normal',
                    }}
                  />
                  <Tab
                    className="text-form"
                    label="React"
                    {...a11yProps(3)}
                    sx={{
                      fontWeight: value === 3 ? 'bold' : 'normal',
                    }}
                  />
                  <Tab
                    className="text-form"
                    label="Web Development"
                    {...a11yProps(4)}
                    sx={{
                      fontWeight: value === 4 ? 'bold' : 'normal',
                    }}
                  />
                </Tabs>
              </div>
            </Box>

            {loading ? (
              <div
                className="homepage-posts"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <CircularProgress />
              </div>
            ) : (
              <div>
                <CustomTabPanel value={value} index={0}>
                  <div className="blog-posts">
                    {posts.map((post) => (
                      <Post key={post._id} post={post} />
                    ))}
                  </div>
                </CustomTabPanel>
                <CustomTabPanel value={value} index={1}>
                  <div className="blog-posts">
                    {posts.map((post) => (
                      <Post key={post._id} post={post} />
                    ))}
                  </div>
                </CustomTabPanel>
                <CustomTabPanel value={value} index={2}>
                  <div className="blog-posts">
                    {posts.map((post) => (
                      <Post key={post._id} post={post} />
                    ))}
                  </div>
                </CustomTabPanel>
                <CustomTabPanel value={value} index={3}>
                  <div className="blog-posts">
                    {posts.map((post) => (
                      <Post key={post._id} post={post} />
                    ))}
                  </div>
                </CustomTabPanel>
                <CustomTabPanel value={value} index={4}>
                  <div className="blog-posts">
                    {posts.map((post) => (
                      <Post key={post._id} post={post} />
                    ))}
                  </div>
                </CustomTabPanel>
              </div>
            )}
          </Box>
        </div>
        <div className="home-suggestions-container">
          <h3>Staff Picks</h3>
          <div>
            {posts.slice(0, 2).map((post) => (
              <Picks key={post._id} post={post} />
            ))}
          </div>
          <span className="picks-btn">see the full list</span>

          <div className="recommended-topics">
            <h3>Recommended Topics</h3>
            <div className="chips">
              <Chip
                className="chip"
                label="Originals"
                onClick={() => handleChipClick("originals")}
              />
              <Chip
                className="chip"
                label="Javascript"
                onClick={() => handleChipClick("javascript")}
              />
              <Chip
                className="chip"
                label="React"
                onClick={() => handleChipClick("react")}
              />
              <Chip
                className="chip"
                label="Web Development"
                onClick={() => handleChipClick("web development")}
              />
            </div>
          </div>

          <div>
            <h3>Reading list</h3>
            <p>
              Click the post on any story to easily view the post and make a
              custom list that you can share.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
