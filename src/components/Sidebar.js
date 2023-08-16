import Link from "./Link";

function Sidebar() {
  const links = [
    { label: "Dropdown", path: "/drp" },
    { label: "Buttons", path: "/btn" },
    { label: "Accordian", path: "/acc" },
    { label: "Modal", path: "/modal" },
    { label: "Table", path: "/table" },
    { label: "Count", path: "/count" },
  ];
  const renderedLinks = links.map((link) => {
    return (
      <Link
        to={link.path}
        className="mb-3"
        activeClassName="font-bold border-l-4 border-blue-500 pl-2"
      >
        {link.label}{" "}
      </Link>
    );
  });
  return (
    <div className="items-start sticky top-0 flex flex-col">
      {renderedLinks}
    </div>
  );
}
export default Sidebar;
