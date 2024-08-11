import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import "./HomePage.css";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import Post from "../../Components/Post/Post";
import Picks from "../../Components/Picks/Picks";
import Chip from "@mui/material/Chip";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import PropTypes from "prop-types";

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
  const [value, setValue] = useState(0);
  const navigate = useNavigate();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  axios.defaults.withCredentials = true;
  useEffect(() => {
    const token = Cookies.get("token");
    if (!token) {
      navigate("/");
    }
  }, [navigate]);

  useEffect(() => {
    axios.get(`https://passage-backend.onrender.com/api/posts`).then((res) => {
      setPosts(res.data.reverse());
    });
  }, []);

  return (
    <div>
      <Navbar />
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
                  />
                  <Tab
                    className="text-form"
                    label="Originals"
                    {...a11yProps(1)}
                  />
                  <Tab
                    className="text-form"
                    label="Javascript"
                    {...a11yProps(2)}
                  />
                  <Tab className="text-form" label="React" {...a11yProps(3)} />
                  <Tab
                    className="text-form"
                    label="Web Development"
                    {...a11yProps(4)}
                  />
                </Tabs>
              </div>
            </Box>
            <CustomTabPanel style={{ padding: "0%" }} value={value} index={0}>
              <div className="blog-posts">
                {posts.map((post) => (
                  <Post key={post.id} post={post} />
                ))}
              </div>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
              <div className="blog-posts">
                {posts.map((post) => (
                  <Post key={post.id} post={post} />
                ))}
              </div>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
              <div className="blog-posts">
                {posts.map((post) => (
                  <Post key={post.id} post={post} />
                ))}
              </div>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={3}>
              <div className="blog-posts">
                {posts.map((post) => (
                  <Post key={post.id} post={post} />
                ))}
              </div>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={4}>
              <div className="blog-posts">
                {posts.map((post) => (
                  <Post key={post.id} post={post} />
                ))}
              </div>
            </CustomTabPanel>
          </Box>
        </div>
        <div className="home-suggestions-container">
          <h3>Staff Picks</h3>
          <div>
            {posts.slice(0, 2).map((post) => (
              <Picks key={post.id} post={post} />
            ))}
          </div>
          <span className="picks-btn">see the full list</span>
          <div className="recommended-topics">
            <h3>Recommended Topics</h3>
            <div className="chips">
              <Chip className="chip" label="Full Stack Development" />
              <Chip className="chip" label="Python" />
              <Chip className="chip" label="Suits" />
              <Chip className="chip" label="Originals" />
              <Chip className="chip" label="Flutter" />
              <Chip className="chip" label="React native" />
              <Chip className="chip" label="Agile" />
              <Chip className="chip" label="Waterfall" />
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
