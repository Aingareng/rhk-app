import RkTable from "../../../features/dashboard/rk/components/RkTable";
import Button from "../../../shared/components/Button";
import { useLocalStorage } from "../../../shared/hooks/useLocalStorage";
import data from "../../../shared/libs/dummy";

export default function RkPage() {
  const [selectedIds] = useLocalStorage("selectedCheckboxes", []);

  const rhkData = data.filter((item) => selectedIds.includes(item.id));

  let mainContent = <RkTable data={rhkData} />;

  if (rhkData.length === 0) {
    mainContent = (
      <div className="flex flex-col items-center justify-center h-full gap-5">
        <p className="text-lg font-semibold text-center">
          Tidak ada rencana hasil kerja yang dipilih.
        </p>
      </div>
    );
  }

  return (
    <>
      {" "}
      <section className="grid grid-cols-1 gap-5">
        <header className=" flex justify-between items-center">
          <h1 className="text-3xl font-bold">Rekomendasi Kegiatan</h1>
        </header>
        <main
          className={`bg-base-100 rounded-2xl p-2 grid grid-cols-1 gap-5 shadow ${
            rhkData.length === 0 ? "h-[50vh]" : ""
          } `}
        >
          {mainContent}

          {rhkData.length > 0 && (
            <div className="flex justify-end">
              <Button
                className={`btn btn-primary w-max rounded-lg ${
                  rhkData.length === 0 ? "" : "cursor-not-allowed"
                }`}
              >
                Kirim
              </Button>
            </div>
          )}
        </main>
      </section>
    </>
  );
}
