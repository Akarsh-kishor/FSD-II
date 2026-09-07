import Navbar from "../components/Navbar";

const Editor = () => {
  return (
    <>
      <Navbar />

      <main className="dashboard">
        <div className="welcome">
          <p className="eyebrow">Editor Area</p>
          <h1>Editor Panel</h1>

          <p>
            This page is accessible to Admin and Editor users.
          </p>
        </div>

        <div className="info-card">
          <h3>Editor Permissions</h3>
          <p>✓ Create content</p>
          <p>✓ Edit content</p>
          <p>✓ View protected resources</p>
        </div>
      </main>
    </>
  );
};

export default Editor;