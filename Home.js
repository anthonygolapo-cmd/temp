import { useEffect, useState } from "react";
import axios from "axios";

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/api/posts")
      .then(res => setPosts(res.data));
  }, []);

  return (
    <div>
      <h1>Blog Posts</h1>
      {posts.map(p => (
        <div key={p.id}>
          <h2>{p.title}</h2>
          <p>{p.content}</p>
        </div>
      ))}
    </div>
  );
}

export default Home;


