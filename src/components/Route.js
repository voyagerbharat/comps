import useNavigation from "../hooks/navigation-context";

function Route({ path, children }) {
  const { currentPath } = useNavigation();

  if (path === currentPath) {
    return children;
  } else return null;
}
export default Route;
