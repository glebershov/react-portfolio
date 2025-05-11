import React, { useEffect } from 'react';
import './posts.css';
import { useSelector, useDispatch } from 'react-redux';
import { likePost, setShowLiked, loadMore } from '../model/Store/postsSlice.ts';
import { fetchPosts } from '../../../entities/post/index.js';
import { FC } from 'react';
import { AppDispatch, RootState } from '../model/Store/store.ts';

interface Post {
userId: number,
id: number,
title: string,
body: string
}

export interface Posts {
allPosts: Post[],
visiblePosts: Post[],
likedPosts: number[],
showLiked: boolean,
loading: boolean,
Error: null | string
}

const Posts: FC = () => {
const dispatch = useDispatch<AppDispatch>();
const {
allPosts,
visiblePosts,
likedPosts,
showLiked,
loading
}  = useSelector((state: RootState ) => state.posts);

useEffect(() => {
dispatch(fetchPosts());
}, [dispatch]);

const handleLikeClick = (postId :number) => {
dispatch(likePost(postId));
};

return (
<div className="wrapper">
<div className="content-box">
<h2>Список постов</h2>

text
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