import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <ul className="menu bg-base-100 shadow gap-1 w-56">
      <li className=" rounded-full transition-all duration-100 ease-in hover:bg-primary">
        <Link to="/">
          <Icon icon="material-symbols:home-rounded" width="24" height="24" />
          Rencana Hasil Kerja
        </Link>
      </li>
      <li className=" rounded-full transition-all duration-100 ease-in hover:bg-primary ">
        <Link to="/activity">
          <Icon
            icon="material-symbols:browse-activity"
            width="24"
            height="24"
          />
          Rekomendasi Kegiatan
        </Link>
      </li>
    </ul>
  );
}

export default React.memo(Menu);
