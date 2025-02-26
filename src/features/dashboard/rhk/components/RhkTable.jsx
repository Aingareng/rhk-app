import PropTypes from "prop-types";
import { useLocalStorage } from "../../../../shared/hooks/useLocalStorage";
import { useEffect } from "react";
// import useRhk from "../hooks/useRhk";
import data from "../../../../shared/libs/dummy";

export default function RhkTable({ onSelecttedIds }) {
  const [selectedIds, setSelectedIds] = useLocalStorage(
    "selectedCheckboxes",
    []
  );

  // const { rhk, error } = useRhk();
  // console.log("🚀 ~ RhkTable ~ rhk:", rhk);
  // console.log("🚀 ~ RhkTable ~ error:", error);

  // const data = rhk || [];

  const isAllSelected = selectedIds.length === data.length;

  useEffect(() => {
    onSelecttedIds(selectedIds);
  }, [selectedIds, onSelecttedIds]);

  function handleCheckboxChange(id) {
    let updatedSelectedIds;
    if (selectedIds.includes(id)) {
      updatedSelectedIds = selectedIds.filter((itemId) => itemId !== id);
    } else {
      updatedSelectedIds = [...selectedIds, id];
    }
    setSelectedIds(updatedSelectedIds);
    onSelecttedIds(updatedSelectedIds);
  }

  const handleSelectAllChange = () => {
    if (isAllSelected) {
      setSelectedIds([]);
      onSelecttedIds([]);
    } else {
      const allIds = data.map((item) => item.id);
      setSelectedIds(allIds);
      onSelecttedIds(allIds);
    }
  };

  return (
    <div className="overflow-x-auto rounded-2xl">
      <table className="table">
        {/* head */}
        <thead className="bg-primary">
          <tr>
            <th>
              <label>
                <input
                  type="checkbox"
                  className="checkbox checkbox-accent"
                  checked={isAllSelected}
                  onChange={handleSelectAllChange}
                />
              </label>
            </th>
            <th>Rencana Hasil Kerja</th>
            <th>Poin</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {data.map((item) => (
            <tr key={item.id}>
              <th>
                <label>
                  <input
                    type="checkbox"
                    className="checkbox checkbox-accent"
                    checked={selectedIds.includes(item.id)}
                    onChange={() => handleCheckboxChange(item.id)}
                  />
                </label>
              </th>
              <td>
                <div className="flex items-center gap-3">
                  <p>{item.planing}</p>
                </div>
              </td>
              <td>
                <span className="badge badge-ghost ">{item.poin}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

RhkTable.propTypes = {
  onSelecttedIds: PropTypes.func.isRequired,
};
