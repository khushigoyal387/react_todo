import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Posts() {
  const [posts, setPosts] = useState([]);
  const totalPosts = 100;
  const postsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const [previousButton, setPreviousButton] = useState();

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts?_page=${currentPage}`)
      .then(response => {
        setPosts(response.data);
        setPreviousButton (currentPage>1);
      })

      .catch(error => {
        console.error('Error fetching posts:', error);
      });
  }, [currentPage]);

  const loadMorePosts = () => {
    if (posts.length < totalPosts) {
      setCurrentPage(prevPage => prevPage + 1);
    }
  };

  const previousPosts = () => {
    if (currentPage > 1) {
      setCurrentPage(prevPage => prevPage - 1);
    }
  };

  return (

    <div>

      <h1>Posts</h1>

      <ul>
        {posts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>

      {posts.length < totalPosts && (
        <button onClick={loadMorePosts}>Load More</button>
      )}

       {setPreviousButton && (
        <button onClick={previousPosts}>Previous</button>
      )}

    </div>

  );
}

export default Posts;
