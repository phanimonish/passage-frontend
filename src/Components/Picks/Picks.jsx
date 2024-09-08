import React from "react";
import Avatar from "@mui/material/Avatar";

export default function Picks({ post, onClick }) {
  return (
    <div style={{ cursor: "pointer" }} onClick={onClick}>
      <div className="author">
        <Avatar sx={{ width: 28, height: 28 }} alt="" src={post.user} />
        <p className="author-name">{post.username}</p>
      </div>
      <div className="post-content">
        <div className="post-left">
          <h4 className="post-head">{post.title}</h4>
        </div>
      </div>
    </div>
  );
}
