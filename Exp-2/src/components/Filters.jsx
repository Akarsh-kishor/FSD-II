import { useSelector } from "react-redux";
import { selectPosts } from "../features/posts/postSelectors";

function Filters() {
  const posts = useSelector(selectPosts);

  return (
    <section className="filters">
      <h2>Filters</h2>

      <p>Total posts loaded: {posts.length}</p>

      <button onClick={() => window.location.reload()}>
        Refresh Posts
      </button>
    </section>
  );
}

export default Filters;