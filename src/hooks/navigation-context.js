import { useContext } from "react";
import NaviagtionContext from "../Context/navigation";

function useNavigation() {
  return useContext(NaviagtionContext);
}

export default useNavigation;
