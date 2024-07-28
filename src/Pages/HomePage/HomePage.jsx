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

import {
  Posts,
  FollowingPosts,
  JavascriptPosts,
  ReactPosts,
  WebDevelopmentPosts,
} from "../../Components/Data";

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
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
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
                <AddRoundedIcon className="add-icon" />
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
                    label="Following"
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
                {Posts.map((post) => {
                  return <Post post={post} />;
                })}
              </div>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
              <div className="blog-posts">
                {FollowingPosts.map((post) => {
                  return <Post post={post} />;
                })}
              </div>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
              <div className="blog-posts">
                {JavascriptPosts.map((post) => {
                  return <Post post={post} />;
                })}
              </div>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={3}>
              <div className="blog-posts">
                {ReactPosts.map((post) => {
                  return <Post post={post} />;
                })}
              </div>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={4}>
              <div className="blog-posts">
                {WebDevelopmentPosts.map((post) => {
                  return <Post post={post} />;
                })}
              </div>
            </CustomTabPanel>
          </Box>
        </div>
        <div className="home-suggestions-container">
          <h3>Staff Picks</h3>
          <div>
            {WebDevelopmentPosts.map((post) => {
              return <Picks post={post} />;
            })}
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
            <p5>
              Click the post on any story to easily view the post and make a
              custom list that you can share.
            </p5>
          </div>
        </div>
      </div>
    </div>
  );
}
