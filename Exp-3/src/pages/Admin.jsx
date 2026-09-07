import Navbar from "../components/Navbar";

const Admin = () => {
  return (
    <>
      <Navbar />

      <main className="dashboard">
        <div className="welcome">
          <p className="eyebrow">Admin Area</p>
          <h1>Administrator Panel</h1>

          <p>
            This page is accessible only to users with the Admin
            role.
          </p>
        </div>

        <div className="info-card">
          <h3>Admin Permissions</h3>
          <p>✓ Manage users</p>
          <p>✓ Manage application</p>
          <p>✓ View protected resources</p>
        </div>
      </main>
    </>
  );
};

export default Admin;