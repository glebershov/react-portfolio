import './posts.css'
import { useState, useEffect } from 'react';

let posts = [];
let currentPost = 0;
let totalPosts = 100;
const limit = 12;
let showOnlyLikes = false;

// const container = document.getElementById('postsContainer');
// const loadPostButton = document.getElementById('loadPost');
// const showLikesButton = document.getElementById('showLikes');

// container.addEventListener('click', (e) => {
//     if (e.target.classList.contains('like-btn')) {
//         const postId = parseInt(e.target.dataset.postId);
//         const post = posts.find(p => p.id === postId);
//         if (post) {
//             post.likes = !post.likes;
//             e.target.classList.toggle('active', post.likes);
//             e.target.textContent = post.likes ? 'Liked' : 'Like';

//             if (showOnlyLikes) {
//                 renderPosts();
//             }
//         }
//     }
// });

// function createPostCard(post) {
//     return `
//         <>
//         <article className="post-card">
//             <h3 className="post-title">${post.title}</h3>
//             <p className="post-body">${post.body}</p>
//             <div className="post-meta">
//                 Post ID: ${post.id} | User ID: ${post.userId}
//                 <button className="like-btn ${post.likes ? 'active' : ''}" 
//                         data-post-id="${post.id}"
//                         style="margin-left: 10px; cursor: pointer;">
//                     ${post.likes ? 'Liked' : 'Like'}
//                 </button>
//             </div>
//         </article>
//         </>
//     `;
// }

// async function loadPosts(containerPosts) {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/posts');
//         if (!response.ok) throw new Error('Ошибка загрузки');

//         posts = await response.json();
//         console.log(posts);
//         posts = posts.map(post => ({
//             ...post,
//             likes: false
//         }));
//         containerPosts.innerHTML = '';
//         showPostCard();
//     } catch (error) {
//         containerPosts.innerHTML = 
//             <div className="error" style="color: red; text-align: center;">
//                 Ошибка: ${error.message}
//             </div>
//         ;
//     }
// }

// function renderPosts() {
//     container.innerHTML = '';
//     const postsToShow = showOnlyLikes ?
//         posts.filter(post => post.likes) :
//         posts.slice(0, currentPost);

//     postsToShow.forEach(post => {
//         container.insertAdjacentHTML('beforeend', createPostCard(post));
//     });
// }

// function showPostCard() {
//     if (showOnlyLikes) return;

//     const nextPost = currentPost + limit;
//     currentPost = Math.min(nextPost, totalPosts);
//     renderPosts();
// }

// showLikesButton.addEventListener('click', function () {
//     showOnlyLikes = !showOnlyLikes;

//     loadPostButton.style.display = showOnlyLikes ? 'none' : 'block';

//     this.textContent = showOnlyLikes ? 'Show All Posts' : 'Show Liked Posts';

//     renderPosts();
// });

// loadPostButton.addEventListener('click', showPostCard);
// // window.onload = () => loadPosts(container);
// useEffect(() => {
//     loadPosts(container)}
//     , [])

function Posts() {
    return  
    <div className="wrapper">
        <div className="container">
            <div className="posts-container" id="postsContainer">
                <div className="loading">Загрузка постов...</div>
            </div>
            <button className="btn-post" id="loadPost">Load posts</button>
            <button className="btn-post" id="showLikes">Show likes</button>
        </div>
    </div>
    
}

export default Posts;