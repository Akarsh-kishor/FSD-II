import { Navigate, Route, Routes } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Admin from "./pages/Admin";
import Editor from "./pages/Editor";
import Viewer from "./pages/Viewer";
import Unauthorized from "./pages/Unauthorized";

import ProtectedRoute from "./components/ProtectedRoute";
import RoleRoute from "./components/RoleRoute";

const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />

      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin"
        element={
          <RoleRoute allowedRoles={["Admin"]}>
            <Admin />
          </RoleRoute>
        }
      />

      <Route
        path="/editor"
        element={
          <RoleRoute allowedRoles={["Admin", "Editor"]}>
            <Editor />
          </RoleRoute>
        }
      />

      <Route
        path="/viewer"
        element={
          <RoleRoute allowedRoles={["Admin", "Editor", "Viewer"]}>
            <Viewer />
          </RoleRoute>
        }
      />

      <Route
        path="/unauthorized"
        element={<Unauthorized />}
      />

      <Route
        path="/"
        element={<Navigate to="/dashboard" replace />}
      />

      <Route
        path="*"
        element={<Navigate to="/dashboard" replace />}
      />
    </Routes>
  );
};

export default App;