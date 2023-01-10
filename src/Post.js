import React from "react";
import "./Post.css";
import { Avatar } from "@mui/material";

function Post() {
  return (
    <div className="post">
      <div className="post__header">
        <Avatar
          className="post__avatar"
          alt="ketan"
          src="/static/images/avatar/1.jpg"
        />
        <h3>Username</h3>
        {/* header -> avatar + username  */}
      </div>

      <img
        className="post__image"
        src="https://t3.ftcdn.net/jpg/05/15/63/82/360_F_515638234_Leo0UBEay0ozXWnObkkxLRNJXM9xhdWG.jpg"
      />
      {/* image */}

      <h4 className="post__text">
        <strong>MiKetan </strong>
        trying to clone the instagram app
      </h4>
      {/* username + caption */}
    </div>
  );
}

export default Post;
