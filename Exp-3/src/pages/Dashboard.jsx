import { useAuth } from "../context/AuthContext";
import Navbar from "../components/Navbar";
import "./Dashboard.css";

const Dashboard = () => {
  const { user } = useAuth();

  return (
    <>
      <Navbar />

      <main className="dashboard">
        <div className="welcome">
          <p className="eyebrow">Dashboard</p>

          <h1>Welcome, {user?.username}</h1>

          <p>
            You are logged in successfully using token-based
            authentication.
          </p>
        </div>

        <div className="cards">
          <div className="info-card">
            <h3>Authentication</h3>
            <p>Authenticated</p>
          </div>

          <div className="info-card">
            <h3>Role</h3>
            <p>{user?.role}</p>
          </div>

          <div className="info-card">
            <h3>Access</h3>
            <p>Protected</p>
          </div>
        </div>
      </main>
    </>
  );
};

export default Dashboard;