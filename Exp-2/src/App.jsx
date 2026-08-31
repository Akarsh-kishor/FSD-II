import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchPosts } from "./features/posts/postsSlice";

import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import Filters from "./components/Filters";
import Analytics from "./components/Analytics";

function App() {
  const dispatch = useDispatch();

  const status = useSelector((state) => state.posts.status);
  const error = useSelector((state) => state.posts.error);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchPosts());
    }
  }, [status, dispatch]);

  return (
    <div className="app">
      <header className="header">
        <h1>Social Media Dashboard</h1>
        <p>Experiment 2 - Redux Toolkit</p>
      </header>

      <main className="container">
        <PostForm />

        <Filters />

        <Analytics />

        {status === "loading" && (
          <p className="message">Loading posts...</p>
        )}

        {status === "failed" && (
          <p className="error">
            Error: {error}
          </p>
        )}

        {status === "succeeded" && <PostList />}
      </main>
    </div>
  );
}

export default App;