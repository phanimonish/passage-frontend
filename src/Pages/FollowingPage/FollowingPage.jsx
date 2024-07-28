import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import "../../Pages/HomePage/HomePage.css";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import Post from "../../Components/Post/Post";
import { FollowingPosts } from "../../Components/Data";



export default function FollowingPage() {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
      <Navbar />
      <div className="home-container">
        <div className="home-blog-posts">
          <Box
            className="tabs"
            sx={{ maxWidth: {}, bgcolor: "background.paper" }}
          >
            <AddRoundedIcon className="add-icon" />
            <Tabs
              value={value}
              onChange={handleChange}
              variant="scrollable"
              scrollButtons="auto"
              aria-label="scrollable auto tabs example"
            >
              <Tab className="text-form" label="For you" />
              <Tab className="text-form" label="Following" />
              <Tab className="text-form" label="Javascript" />
              <Tab className="text-form" label="React" />
              <Tab className="text-form" label="Web Development" />
            </Tabs>
          </Box>
          <div className="blog-posts">
            {FollowingPosts.map((post) => {
              return <Post post={post} />;
            })}
          </div>
        </div>
        <div className="home-suggestions-container"></div>
      </div>
    </div>
  );
}
