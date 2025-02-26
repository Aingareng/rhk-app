import { useState } from "react";
import RhkTable from "../../../features/dashboard/rhk/components/RhkTable";
import { Link } from "react-router-dom";
import data from "../../../shared/libs/dummy";

export default function RhkPage() {
  const [itemIds, setItemIds] = useState([]);

  const selectedData = data.filter((item) => itemIds.includes(item.id));
  const totalPoin = selectedData.reduce((acc, curr) => acc + curr.poin, 0);

  function handleSelectedIds(selectedIds) {
    setItemIds(selectedIds);
  }

  return (
    <div className=" h-full relative">
      <section className="grid grid-cols-1 gap-5">
        <header className=" flex justify-between items-center">
          <h1 className="text-3xl font-bold">Rencana Hasil Kerja</h1>
        </header>
        <main className="bg-base-100 rounded-2xl p-2 shadow">
          <RhkTable onSelecttedIds={handleSelectedIds} />
        </main>
      </section>
      {totalPoin > 0 && (
        <div className="absolute bottom-0 w-full flex items-center justify-center ">
          <div
            className={`bg-base-100 rounded-full p-2 shadow w-max flex items-center gap-2 justify-between 
            transition-all duration-1000 ease-in-out opacity-0 scale-95
            ${itemIds.length > 0 ? "opacity-100 scale-100" : ""}`}
          >
            <p className="text-sm font-semibold">Total Poin {totalPoin}</p>
            <Link
              to={totalPoin > 32 ? "/activity" : "#"}
              className="btn btn-primary"
              role="button"
            >
              Proses
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
