import PropTypes from "prop-types";
import Navbar from "../../shared/components/Navbar";
import Menu from "../../shared/components/Menu";
import { Outlet } from "react-router-dom";

export default function DashboardLayout() {
  return (
    <div className="grid grid-cols-[16rem_auto] grid-rows-[4rem_auto] h-screen relative ">
      {/* Navbar */}
      <header className="col-span-2">
        <Navbar />
      </header>

      {/* Sidebar */}
      <Menu />

      {/* Main Content */}
      <main className="p-6 overflow-auto">
        <Outlet />
      </main>
    </div>
  );
}

DashboardLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
