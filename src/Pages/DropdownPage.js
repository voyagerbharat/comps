import { useState } from "react";
import Dropdown from "../components/Dropdown";

function DropdownPage() {
  const [Selection, setSelection] = useState(null);
  const handleSelect = (option) => {
    setSelection(option);
  };
  const options = [
    {
      label: "henlo",
      value: 1,
    },
    {
      label: "henlsfo",
      value: 2,
    },
    {
      label: "henloag",
      value: 3,
    },
  ];
  return (
    <Dropdown value={Selection} onChange={handleSelect} options={options} />
  );
}

export default DropdownPage;
