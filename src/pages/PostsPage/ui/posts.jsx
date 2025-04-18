import React, { useEffect } from 'react';
import './posts.css';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchPosts,
  likePost,
  setShowLiked,
  loadMore
} from '../../../api/Store/postsSlice';

const Posts = () => {
  const dispatch = useDispatch();
  const {
    allPosts,
    visiblePosts,
    likedPosts,
    showLiked,
    loading
  } = useSelector(state => state.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const handleLikeClick = (postId) => {
    dispatch(likePost(postId));
  };

  return (
    <div className="wrapper">
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
                    <h3 className='post-title'>{post.title}</h3>
                    <p className='post-body'>{post.body}</p>
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
            <div className='controls'>
              {!showLiked && (
                <button
                  className='btn-post'
                  onClick={() => dispatch(loadMore())}
                  disabled={visiblePosts.length >= 100}
                >
                  Загрузить еще
                </button>
              )}

              <button 
                className='btn-post' 
                onClick={() => dispatch(setShowLiked(!showLiked))}
              >
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