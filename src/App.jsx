import { Routes, Route, Navigate } from "react-router-dom";

import ProtectedRoute from "./components/common/ProtectedRoute";

// Pages
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import AllNotes from "./pages/AllNotes";
import CreateNote from "./pages/CreateNote";
import NoteDetail from "./pages/NoteDetails";
import ManageByDate from "./pages/ManageByDate";
import Profile from "./pages/Profile";

const App = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Protected Routes */}
      <Route element={<ProtectedRoute />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/notes" element={<AllNotes />} />
        <Route path="/notes/create" element={<CreateNote />} />
        <Route path="/notes/:id" element={<NoteDetail />} />
        <Route path="/manage-by-date" element={<ManageByDate />} />
        <Route path="/profile" element={<Profile />} />
      </Route>

      {/* Default Route */}
      <Route path="/" element={<Navigate to="/dashboard" replace />} />

      {/* Unknown Routes */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default App;
