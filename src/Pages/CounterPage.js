import Button from "../components/Button";
import useCounter from "../hooks/useCounter";

function CounterPage({ initialCount }) {
  const { count, handleclick } = useCounter(initialCount);
  return (
    <div>
      <h1>Count is {count}</h1>
      <Button onClick={handleclick}>Increment COunt</Button>
    </div>
  );
}

export default CounterPage;
