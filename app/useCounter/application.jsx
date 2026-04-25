import { useCounter } from "./useCounter.jsx";

export default function Counter3() {
  const count = useCounter();
  return <h1>Seconds passed: {count}</h1>;
}
