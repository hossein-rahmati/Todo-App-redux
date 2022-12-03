import { increment, decrement } from "../features/counter/CounterSlice";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

const Counter = () => {
  const [inputValue, setInputValue] = useState("");
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <span>counter: {count}</span>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={() => dispatch(increment(Number(inputValue) || 1))}>
          increment
        </button>
        <button onClick={() => dispatch(decrement(Number(inputValue) || 1))}>
          decrement
        </button>
      </div>
    </div>
  );
};

export default Counter;
