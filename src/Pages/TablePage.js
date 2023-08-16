import SortableTable from "../components/SortableTable";
// import Table from "../components/Table";

function TablePage() {
  const data = [
    { name: "Orange", color: "bg-orange-500", score: 5 },
    { name: "Apple", color: "bg-red-500", score: 3 },
    { name: "Banana", color: "bg-yellow-500", score: 1 },
    { name: "Lime", color: "bg-green-500", score: 4 },
  ];
  const keyFn = (fruit) => {
    return fruit.name;
  };
  const config = [
    {
      label: "Fruits",
      render: (fruit) => fruit.name,
      sortValue: (fruit) => fruit.name,
    },
    {
      label: "Color",
      render: (fruit) => <div className={`p-3 m-2 ${fruit.color}`}></div>,
    },
    {
      label: "Score",
      render: (fruit) => fruit.score,
      sortValue: (fruit) => fruit.score,
      // header: () => {
      //   return <th className="bg-red-500"> Score </th>;
      // },
    },
  ];
  // return <Table config={config} data={data} keyFn={keyFn} />;
  return <SortableTable config={config} data={data} keyFn={keyFn} />;
}

export default TablePage;
