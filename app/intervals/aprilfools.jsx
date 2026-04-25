import { useCounter } from "./useCounter.jsx";

export default function Counter1() {
  const count = useCounter(1000);
  return <h1>Seconds passed: {count}</h1>;
}
