import React, { useState, useEffect } from 'react';
import './posts.css';

function Posts() {
  const [allPosts, setAllPosts] = useState([]);
  const [visiblePosts, setVisiblePosts] = useState([]);
  const [likedPosts, setLikedPosts] = useState([]);
  const [showLiked, setShowLiked] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => {
        setAllPosts(data.slice(0, 100));
        setVisiblePosts(data.slice(0, 12));
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const handleLikeClick = (postId) => {
    setLikedPosts(prev => 
      prev.includes(postId) 
        ? prev.filter(id => id !== postId) 
        : [...prev, postId]
    );
  };

  const loadMore = () => {
    setVisiblePosts(prev => [
      ...prev,
      ...allPosts.slice(prev.length, prev.length + 10)
    ]);
  };

  return (
    <div className="page-wrapper">
      <div className="content-box">
        <h2>Список постов</h2>
        
        {loading ? (
          <p>Идет загрузка...</p>
        ) : (
          <>
            <div className="posts-list">
              {(showLiked 
                ? allPosts.filter(post => likedPosts.includes(post.id)) 
                : visiblePosts).map(post => (
                <div key={post.id} className="post-item">
                  <h3>{post.title}</h3>
                  <p>{post.body}</p>
                  <div className="post-footer">
                    <span>ID: {post.id}</span>
                    <button 
                      onClick={() => handleLikeClick(post.id)}
                      className={`like-btn ${
                        likedPosts.includes(post.id) ? 'active' : ''
                      }`}
                      style={{ marginLeft: '10px', cursor: 'pointer' }}
                    >
                      {likedPosts.includes(post.id) ? 'Liked' : 'Like'}
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="controls">
              {!showLiked && (
                <button 
                  onClick={loadMore}
                  disabled={visiblePosts.length >= 100}
                >
                  Загрузить еще
                </button>
              )}
              
              <button onClick={() => setShowLiked(!showLiked)}>
                {showLiked ? 'Все посты' : 'Понравившиеся'}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Posts;