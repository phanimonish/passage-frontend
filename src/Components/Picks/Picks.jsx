import React from "react";
import Avatar from "@mui/material/Avatar";

export default function Picks({ post }) {
  return (
    <div>
      <div className="">
        <div className="author">
          <Avatar sx={{ width: 28, height: 28 }} alt="" src={post.user} />
          <p5 className="author-name">{post.username}</p5>
        </div>
        <div className="post-content">
          <div className="post-left">
            <h4 className="post-head">{post.title}</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
