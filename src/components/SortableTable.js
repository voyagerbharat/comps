import { useState } from "react";
import Table from "./Table";
import { GoArrowBoth, GoArrowDown, GoArrowUp } from "react-icons/go";

function SortableTable(props) {
  const [sortBy, setSortBy] = useState(null);
  const [sortOrder, setSortOrder] = useState(null);

  const handleClick = (label) => {
    if (sortBy && label !== sortBy) {
      setSortOrder("asc");
      setSortBy(label);
      return;
    }
    if (sortOrder === null) {
      setSortOrder("asc");
      setSortBy(label);
    } else if (sortOrder === "asc") {
      setSortOrder("desc");
      setSortBy(label);
    } else {
      setSortOrder(null);
      setSortBy(null);
    }
  };
  const { config, data } = props;
  const updatedConfig = config.map((col) => {
    if (!col.sortValue) {
      return col;
    }
    return {
      ...col,
      header: () => {
        return (
          <th
            className="cursor-pointer hover:bg-gray-100"
            onClick={() => {
              handleClick(col.label);
            }}
          >
            <div className="flex items-center">
              {getIcons(col.label, sortBy, sortOrder)}
              {col.label}
            </div>
          </th>
        );
      },
    };
  });

  let sortedData = data;
  if (sortBy && sortOrder) {
    const { sortValue } = config.find((column) => column.label === sortBy); // would give by the whole obj
    sortedData = [...data].sort((a, b) => {
      const valueA = sortValue(a);
      const valueB = sortValue(b);

      const reverseOrder = sortOrder === "asc" ? 1 : -1;
      if (typeof valueA === "string") {
        return valueA.localeCompare(valueB) * reverseOrder;
      } else {
        return (valueA - valueB) * reverseOrder;
      }
    });
  }

  return (
    <Table
      {...props}
      data={sortedData}
      config={updatedConfig}
      handleClick={handleClick}
    />
  );

  function getIcons(label, sortBy, sortOrder) {
    if (label !== sortBy) {
      return (
        <div>
          <GoArrowBoth />
        </div>
      );
    }
    if (sortOrder === null) {
      return (
        <div>
          <GoArrowBoth />
        </div>
      );
    } else if (sortOrder === "asc") {
      return (
        <div>
          <GoArrowUp />
        </div>
      );
    } else if (sortOrder === "desc")
      return (
        <div>
          <GoArrowDown />
        </div>
      );
  }
  // {..props} config would be overwritten by the new config which was written after this
}

export default SortableTable;
