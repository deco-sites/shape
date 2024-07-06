import { useState } from "preact/hooks";

interface Props {
  /**
   * @description The initial value of the counter.
   * @default 0
   */
  initialValue?: number;
}

export default function Counter({ initialValue = 0 }: Props) {
  const [count, setCount] = useState(initialValue);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div class="flex items-center justify-center gap-4">
      <button class="btn btn-sm btn-circle btn-outline" onClick={decrement}>
        -
      </button>
      <span class="text-2xl font-bold">{count}</span>
      <button class="btn btn-sm btn-circle btn-outline" onClick={increment}>
        +
      </button>
    </div>
  );
}