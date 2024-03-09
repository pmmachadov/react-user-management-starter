/* eslint-disable react/prop-types */

const Table = ({ rowData, columnDef, footerData }) => {
  const tableHeader = (
    <thead className="thead-dark">
      <tr>
        {columnDef?.map((col) => (
          <th className="text-center" scope="row" key={col.id}>
            {col.id}
          </th>
        ))}
      </tr>
    </thead>
  );
  const tableBody = (
    <tbody>
      {rowData?.map((row, index) => {
        return (
          <tr key={index}>
            {columnDef?.map(({ title }, index) => (
              <td className="text-center" key={index}>
                {row[title].toString()}
              </td>
            ))}
          </tr>
        );
      })}
    </tbody>
  );
  const tableFooter = (
    <tfoot>
      <tr>
        <td colSpan={columnDef && columnDef.length} className="text-center">
          {footerData}
        </td>
      </tr>
    </tfoot>
  );
  return (
    <div className="table-responsive-lg">
      <table className="table">
        {tableHeader}
        {tableBody}
        {tableFooter}
      </table>
    </div>
  );
};
export default Table;
