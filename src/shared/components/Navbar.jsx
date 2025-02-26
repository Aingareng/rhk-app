import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar bg-base-100 shadow">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-xl">
          Nama Aplikasi ?
        </Link>
      </div>
      <div className="flex-none">
        {/* Profile */}
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar placeholder"
          >
            <div className="bg-secondary text-neutral-content w-12 rounded-full">
              <span>SY</span>
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <Link
              to="/login"
              className="flex items-center gap-2 transition duration-150 ease-linear hover:text-error"
            >
              <Icon
                icon="material-symbols:logout-rounded"
                width="24"
                height="24"
              />
              Keluar
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default React.memo(Navbar);
