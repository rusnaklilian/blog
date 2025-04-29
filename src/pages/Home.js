import React, { useEffect, useState } from 'react';
import { getDocs, collection } from 'firebase/firestore';
import { db } from '../firebase-config';
import { Link } from 'react-router-dom';

function Home({ isAuth }) {
  const [postList, setPostList] = useState([]);
  const postsCollectionRef = collection(db, 'posts');

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postsCollectionRef);
      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getPosts();
  }, []);

  return (
    <div className="homepage">
      <nav className="navbar">
        <Link to="/">Home</Link>
        {isAuth ? (
          <Link to="/createpost">Create Post</Link>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </nav>

      <div className="postsContainer">
        {postList.map((post) => (
          <div key={post.id} className="post">
            <div className="postHeader">
              <h1>{post.title}</h1>
            </div>
            <div className="postTextContainer">{post.content}</div> {/* Используем content вместо postText */}
            <h3>@{post.author?.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
