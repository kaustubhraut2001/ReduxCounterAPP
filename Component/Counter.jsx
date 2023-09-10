import React from "react";

import { useSelector, useDispatch } from "react-redux";

import { increment ,decrement } from "../redux/Counter.jsx";

const Counter = () => {
  const counters = useSelector((state) => state.counter.increment);
  console.log(counters);
  const dispatch = useDispatch();

  const increments = () => {
    dispatch(increment());
  };

  const decrements = () => {

	dispatch(decrement());
};
  return (
    <>
	<h3>{counters}</h3>
      <button onClick={increments}>Increament</button>
      <button onClick={decrements}>Decrement</button>
    </>
  );
};

export default Counter;
