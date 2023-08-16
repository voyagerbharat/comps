import { useEffect, useState } from "react";

function useCounter(initialCount) {
  const [count, setCount] = useState(initialCount);
  useEffect(() => {
    console.log(count);
  }, [count]);
  function handleclick() {
    setCount(count + 1);
  }
  return {
    count: count,
    handleclick: handleclick,
  };
}

export default useCounter;
