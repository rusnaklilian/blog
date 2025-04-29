import React, { useState } from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { db, auth } from '../firebase-config';
import { useNavigate } from 'react-router-dom';

function CreatePost({ isAuth }) {
  const [title, setTitle] = useState('');
  const [postText, setPostText] = useState('');
  
  const postsCollectionRef = collection(db, 'posts');
  const navigate = useNavigate();

  if (!isAuth) {
    navigate('/login');
  }

  const createPost = async () => {
    try {
      await addDoc(postsCollectionRef, {
        title,
        content: postText,
        author: {
          name: auth.currentUser.displayName,
          id: auth.currentUser.uid,
        },
      });

      alert('Post created successfully!');
      setTitle('');
      setPostText('');
      navigate('/');
    } catch (error) {
      console.error('Error creating post:', error);
      alert('Error creating post');
    }
  };

  return (
    <div className="createPostPage">
      <h1>Create A Post</h1>
      <div className="inputGp">
        <label>Title:</label>
        <input
          placeholder="Title..."
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
      </div>
      <div className="inputGp">
        <label>Post:</label>
        <textarea
          placeholder="Post content..."
          value={postText}
          onChange={(event) => setPostText(event.target.value)}
        />
      </div>
      <button onClick={createPost}>Post</button>
    </div>
  );
}

export default CreatePost;
