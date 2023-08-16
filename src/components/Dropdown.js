import { useEffect, useRef, useState } from "react";
import { GoChevronDown } from "react-icons/go";
import Panel from "./Panel";

function Dropdown({ options, value, onChange }) {
  const divEl = useRef();
  useEffect(() => {
    const handleCl = (event) => {
      if (divEl.current !== null) {
        if (!divEl.current.contains(event.target)) {
          setIsOpen(false);
        }
      }
    };
    document.addEventListener("click", handleCl, true);
    return () => {
      document.removeEventListener("click", handleCl);
    };
  }, []);
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  const handleOptionClick = (option) => {
    onChange(option);
    setIsOpen(!isOpen);
  };
  const renderedOptions = options.map((option) => {
    return (
      <div
        className="hover:bg-sky-100 rounded cursor-pointer p-1"
        key={option.value}
        onClick={() => handleOptionClick(option)}
      >
        {option.label}
      </div>
    );
  });

  return (
    <div ref={divEl} className="w-48 relative">
      <Panel
        className="flex justify-between items-center cursor-pointer "
        onClick={handleClick}
      >
        {value?.label || "...select"}
        <GoChevronDown className="text=lg" />
      </Panel>

      {isOpen && <Panel className="absolute top-full">{renderedOptions}</Panel>}
    </div>
  );
}
export default Dropdown;
