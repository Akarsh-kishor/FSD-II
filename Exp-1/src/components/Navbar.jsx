import "./Navbar.css";

function Navbar({ postCount }) {
    return (
        <header className="navbar">

            <div className="navbar-inner">

                <div className="brand">
                    Post Composer
                </div>

                <div className="post-count">
                    {postCount}{" "}
                    {postCount === 1 ? "Post" : "Posts"}
                </div>

            </div>

        </header>
    );
}

export default Navbar;