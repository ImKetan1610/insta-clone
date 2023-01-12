import React from "react";
import "./App.css";
import Post from "./Post";
import { useState } from "react";

function App() {
  const [posts, setPosts] = useState([
    {
      username: "ketan123",
      caption: "its working",
      imageUrl: "https://t4.ftcdn.net/jpg/04/36/07/73/360_F_436077392_gwyweA3NRfasttPrI3dtjG8spEJnUFU0.jpg",
    },
    {
      username: "Renu",
      caption: "Dope",
      imageUrl: "https://t3.ftcdn.net/jpg/05/15/63/82/360_F_515638234_Leo0UBEay0ozXWnObkkxLRNJXM9xhdWG.jpg",
    },
    {
      username: "Tannu",
      caption: "This is fun project",
      imageUrl: "https://thumbs.dreamstime.com/b/lord-radha-krishna-beautiful-wallpaper-hindu-god-colorful-background-163718626.jpg",
    },
  ]);

  return (
    <div className="App">
      <div className="app__header">
        <img
          className="app__headerImage"
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt=""
        />
      </div>
      <h1>hi this is an insta app</h1> 

      {posts.map((post) => (
        <Post
          username={post.username}
          caption={post.caption}
          imageUrl={post.imageUrl}
        />
      ))}

      {/* <Post
        username="ketan123"
        caption="its working"
        imageUrl="https://t4.ftcdn.net/jpg/04/36/07/73/360_F_436077392_gwyweA3NRfasttPrI3dtjG8spEJnUFU0.jpg"
      />
      <Post
        username="Renu"
        caption="Dope"
        imageUrl="https://t3.ftcdn.net/jpg/05/15/63/82/360_F_515638234_Leo0UBEay0ozXWnObkkxLRNJXM9xhdWG.jpg"
      />
      <Post
        username="Tannu"
        caption="This is fun project"
        imageUrl="https://thumbs.dreamstime.com/b/lord-radha-krishna-beautiful-wallpaper-hindu-god-colorful-background-163718626.jpg"
      /> */}
    </div>
  );
}

export default App;
