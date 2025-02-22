import { useState } from "react";
import Post from "../post/Post";
import Share from "../share/Share";
import "./feed.css";
import axios from "axios";
import { useEffect } from "react";
// import { Posts } from "../../dummyData";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";

/*eslint-disable*/
export default function Feed({username}) {
  const [posts, setPosts] = useState([]);
  const { user } = useContext(AuthContext);


  useEffect(() => {
    const fetchPosts = async () => {
      const res = username
        ? await axios.get(`${import.meta.env.VITE_BACKEND_API}/posts/profile/` + username)
        : await axios.get(`${import.meta.env.VITE_BACKEND_API}/posts/timeline/` + user._id);
      setPosts(
        res.data.sort((p1, p2) => {
          return new Date(p2.createdAt) - new Date(p1.createdAt);
        })
      );
    };
    fetchPosts();
  }, [username, user?._id]);

  return (
    <div className="feed">
      <div className="feedWrapper">
        {username===user.username && <Share />}
        {posts.map((post) => (
          <Post key={post._id} post={post} />
        ))}
      </div>
    </div>
  );
}
