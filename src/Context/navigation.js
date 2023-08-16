import { createContext, useEffect, useState } from "react";

const NaviagtionContext = createContext();

function NavigationProvider({ children }) {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handler = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener("popstate", handler);
    return () => {
      window.removeEventListener("popstate", handler);
    };
  }, []);

  const navigate = (to) => {
    window.history.pushState({}.dictionary, "", to);
    setCurrentPath(to);
  };

  return (
    <NaviagtionContext.Provider value={{ currentPath, navigate }}>
      {children}
    </NaviagtionContext.Provider>
  );
}
export { NavigationProvider };
export default NaviagtionContext;
