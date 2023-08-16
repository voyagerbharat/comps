import { Fragment } from "react";

function Table({ data, config, keyFn }) {
  const renderedHead = config.map((column) => {
    if (column.header) {
      return <Fragment key={column.label}>{column.header()}</Fragment>;
    }
    return <th key={column.label}> {column.label}</th>;
  });
  const renderedRows = data.map((rowData) => {
    const RenderedCells = config.map((col) => {
      return <td className="p-2">{col.render(rowData)}</td>;
    });
    return (
      <tr className="border-b" key={keyFn(rowData)}>
        {RenderedCells}
      </tr>
    );
  });
  return (
    <table className="table-auto border-spacing-2">
      <thead>
        <tr className="border-b-2">{renderedHead}</tr>
      </thead>
      <tbody>{renderedRows}</tbody>
    </table>
  );
}
export default Table;
