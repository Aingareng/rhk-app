import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import RhkPage from "../pages/dashboard/rhk/RhkPage";
import RkPage from "../pages/dashboard/rk/RkPage";
import DashboardLayout from "../pages/dashboard/DashboardLayout";
import ProtectedRoute from "../shared/components/ProtectedRoute.JSX";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />

        <Route element={<ProtectedRoute />}>
          <Route element={<DashboardLayout />}>
            <Route path="/" element={<RhkPage />} />
            <Route path="/activity" element={<RkPage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
