import { useState } from "react";

import "./PostComposer.css";

const MAX_CHARACTERS = 280;

function PostComposer({ onAddPost }) {

    const [content, setContent] = useState("");
    const [platform, setPlatform] = useState("Instagram");
    const [status, setStatus] = useState("Draft");
    const [error, setError] = useState("");

    const handleContentChange = (event) => {
        const value = event.target.value;

        if (value.length <= MAX_CHARACTERS) {
            setContent(value);
            setError("");
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const trimmedContent = content.trim();

        if (!trimmedContent) {
            setError("Post content cannot be empty.");
            return;
        }

        const newPost = {
            id: Date.now(),
            content: trimmedContent,
            platform,
            status,
            characterCount: trimmedContent.length,
        };

        onAddPost(newPost);

        setContent("");
        setPlatform("Instagram");
        setStatus("Draft");
        setError("");
    };

    return (
        <section className="composer">

            <div className="composer-header">

                <div>
                    <h2>Create Post</h2>

                    <p>
                        Compose a post and select where it will be published.
                    </p>
                </div>

            </div>

            <form
                className="composer-form"
                onSubmit={handleSubmit}
            >

                <div className="form-group">

                    <label htmlFor="content">
                        Post Content
                    </label>

                    <textarea
                        id="content"
                        value={content}
                        onChange={handleContentChange}
                        placeholder="Write your post..."
                        rows="6"
                    />

                    <div className="character-count">
                        {content.length}/{MAX_CHARACTERS}
                    </div>

                </div>

                {error && (
                    <div className="error-message">
                        {error}
                    </div>
                )}

                <div className="form-row">

                    <div className="form-group">

                        <label htmlFor="platform">
                            Platform
                        </label>

                        <select
                            id="platform"
                            value={platform}
                            onChange={(event) =>
                                setPlatform(event.target.value)
                            }
                        >
                            <option value="Instagram">
                                Instagram
                            </option>

                            <option value="Facebook">
                                Facebook
                            </option>

                            <option value="LinkedIn">
                                LinkedIn
                            </option>

                            <option value="Twitter">
                                Twitter
                            </option>
                        </select>

                    </div>

                    <div className="form-group">

                        <label htmlFor="status">
                            Status
                        </label>

                        <select
                            id="status"
                            value={status}
                            onChange={(event) =>
                                setStatus(event.target.value)
                            }
                        >
                            <option value="Draft">
                                Draft
                            </option>

                            <option value="Published">
                                Published
                            </option>
                        </select>

                    </div>

                </div>

                <div className="composer-actions">

                    <button
                        type="button"
                        className="secondary-button"
                        onClick={() => {
                            setContent("");
                            setError("");
                        }}
                    >
                        Clear
                    </button>

                    <button
                        type="submit"
                        className="primary-button"
                    >
                        Create Post
                    </button>

                </div>

            </form>

        </section>
    );
}

export default PostComposer;