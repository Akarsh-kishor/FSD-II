import { useSelector } from "react-redux";
import { selectPosts } from "../features/posts/postSelectors";

function PostList() {
  const posts = useSelector(selectPosts);

  return (
    <section className="posts-section">
      <h2>Posts</h2>

      <div className="post-grid">
        {posts.slice(0, 12).map((post) => (
          <article className="post-card" key={post.id}>
            <h3>{post.title}</h3>

            <p>{post.body}</p>

            <span>Post #{post.id}</span>
          </article>
        ))}
      </div>
    </section>
  );
}

export default PostList;