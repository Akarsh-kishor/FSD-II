import Navbar from "../components/Navbar";

const Viewer = () => {
  return (
    <>
      <Navbar />

      <main className="dashboard">
        <div className="welcome">
          <p className="eyebrow">Viewer Area</p>
          <h1>Viewer Panel</h1>

          <p>
            This page is accessible to authenticated users.
          </p>
        </div>

        <div className="info-card">
          <h3>Viewer Permissions</h3>
          <p>✓ View content</p>
          <p>✓ Read protected resources</p>
          <p>✕ Cannot modify content</p>
        </div>
      </main>
    </>
  );
};

export default Viewer;