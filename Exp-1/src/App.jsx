import { useState } from "react";

import Navbar from "./components/Navbar";
import PostComposer from "./components/PostComposer";

import "./App.css";

function App() {
    const [posts, setPosts] = useState([]);

    const handleAddPost = (post) => {
        setPosts((currentPosts) => [
            post,
            ...currentPosts,
        ]);
    };

    const handleDeletePost = (id) => {
        setPosts((currentPosts) =>
            currentPosts.filter((post) => post.id !== id)
        );
    };

    return (
        <div className="app">

            <Navbar postCount={posts.length} />

            <main className="main-content">

                <section className="page-header">
                    <h1>Post Composer</h1>

                    <p>
                        Create and manage your social media posts.
                    </p>
                </section>

                <PostComposer
                    onAddPost={handleAddPost}
                />

                <section className="posts-section">

                    <div className="section-header">
                        <h2>Posts</h2>

                        <span>
                            {posts.length}{" "}
                            {posts.length === 1 ? "post" : "posts"}
                        </span>
                    </div>

                    {posts.length === 0 ? (

                        <div className="empty-state">
                            <h3>No posts yet</h3>

                            <p>
                                Create your first post using the
                                composer above.
                            </p>
                        </div>

                    ) : (

                        <div className="post-grid">

                            {posts.map((post) => (

                                <article
                                    className="post-card"
                                    key={post.id}
                                >

                                    <div className="post-card-header">

                                        <span className="platform">
                                            {post.platform}
                                        </span>

                                        <span
                                            className={`status ${post.status.toLowerCase()}`}
                                        >
                                            {post.status}
                                        </span>

                                    </div>

                                    <p className="post-content">
                                        {post.content}
                                    </p>

                                    <div className="post-card-footer">

                                        <span>
                                            {post.characterCount} characters
                                        </span>

                                        <button
                                            type="button"
                                            onClick={() =>
                                                handleDeletePost(post.id)
                                            }
                                        >
                                            Delete
                                        </button>

                                    </div>

                                </article>

                            ))}

                        </div>

                    )}

                </section>

            </main>

        </div>
    );
}

export default App;