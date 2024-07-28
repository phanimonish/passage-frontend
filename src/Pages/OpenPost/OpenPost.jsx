import React from "react";
import { Posts } from "../../Components/Data";
import Navbar from "../../Components/Navbar/Navbar";
import Post from "../../Components/Post/Post";

function OpenPost() {
  return (
    <div>
      <Navbar />
      <div>
        {Posts.map((post) => {
          return <Post post={post} />;
        })}
      </div>
    </div>
  );
}

export default OpenPost;
