import PropTypes from "prop-types";

export default function RkTable({ data }) {
  return (
    <div className="overflow-x-auto rounded-2xl">
      <table className="table">
        {/* head */}
        <thead className="bg-primary">
          <tr>
            <th>
              <label>NO</label>
            </th>
            <th>Rencana Hasil Kerja</th>
            <th>Poin</th>
            <th>Rekomendasi Kegiatan</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}

          {data.map((item, index) => (
            <tr key={item.id} className="hover">
              <th>
                <label>{index + 1}</label>
              </th>
              <td>
                <div className="flex items-center gap-3">
                  <p>{item.planing}</p>
                </div>
              </td>
              <td>
                <span className="badge badge-ghost ">{item.poin}</span>
              </td>
              <td>{item.activity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

RkTable.propTypes = {
  data: PropTypes.array.isRequired,
};
RkTable.defaultProps = {
  data: [],
};
