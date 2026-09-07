import { Link } from "react-router-dom";

const Unauthorized = () => {
  return (
    <main className="dashboard">
      <div className="welcome">
        <p className="eyebrow">403</p>

        <h1>Access Denied</h1>

        <p>
          You do not have permission to access this page.
        </p>

        <Link to="/dashboard">Return to Dashboard</Link>
      </div>
    </main>
  );
};

export default Unauthorized;