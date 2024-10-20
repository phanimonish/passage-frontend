import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import "../HomePage/HomePage.css";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Post from "../../Components/Post/Post";
import Cookies from "js-cookie";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";
import PropTypes from "prop-types";
import { Avatar } from "@mui/material";
import { jwtDecode } from "jwt-decode";

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

export default function ProfilePage() {
  const [posts, setPosts] = useState([]);
  const [bio, setBio] = useState(""); // State to store bio
  const [value] = useState(0); // Active tab index
  const [loading, setLoading] = useState(true);
  const [bioLoading, setBioLoading] = useState(true); // State to manage bio loading
  const navigate = useNavigate();

  const token = Cookies.get("token");
  const decode = jwtDecode(token);
  const username = decode.username;

  useEffect(() => {
    if (!token) {
      navigate("/");
    } else {
      setLoading(true);
      axios
        .get(`https://passage-backend.onrender.com/api/posts/post/${username}`, {
          headers: {
            Authorization: token,
          },
        })
        .then((res) => {
          setPosts(res.data);
          setLoading(false);
        })
        .catch(() => setLoading(false));

      // Fetch the bio data
      setBioLoading(true);
      axios
        .get(`https://passage-backend.onrender.com/api/user/`, {
          headers: {
            Authorization: token,
          },
        })
        .then((res) => {
          setBio(res.data.bio);
          setBioLoading(false);
        })
        .catch(() => setBioLoading(false));
    }
  }, [navigate, token, username, bio]);

  return (
    <div>
      <Navbar />
      <div className="home-container">
        <div className="home-blog-posts">
          <div className="profile-header">
            <Box>
              <h1 style={{ textTransform: "capitalize", padding: "0rem 1rem" }}>
                {username}
              </h1>
                <p style={{ padding: "0rem 1rem", fontSize: "16px" }}></p>
            </Box>
          </div>
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
                <Tabs
                  value={value}
                  aria-label="basic tabs example"
                  variant="scrollable"
                  scrollButtons="auto"
                >
                  <Tab
                    className="text-form"
                    label="My Posts"
                    {...a11yProps(0)}
                    sx={{
                      fontWeight: value === 0 ? "bold" : "normal",
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
                    {posts.length === 0 ? (
                      <div>
                        <h3 style={{ textAlign: "center" }}>No posts</h3>
                        <p style={{ textAlign: "center" }}>
                          You haven't posted anything
                        </p>
                      </div>
                    ) : (
                      posts.map((post) => <Post key={post._id} post={post} />)
                    )}
                  </div>
                </CustomTabPanel>
              </div>
            )}
          </Box>
        </div>
        <div className="home-suggestions-container">
          <Avatar sx={{ width: 65, height: 65 }} />
          <h3 style={{ textTransform: "capitalize" }}>{username}</h3>
          <Link className="Link" to="/my-account">
            <p style={{ fontSize: "14px", color: "#1A8917" }}>Edit Profile</p>
          </Link>
          <p>{bio}</p>
        </div>
      </div>
    </div>
  );
}
