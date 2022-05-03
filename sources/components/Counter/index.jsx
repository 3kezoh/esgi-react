import React, { Fragment, useState } from "react";
import Button from "../Button";

const Counter = () => {
  const initialCounter = 0;
  const initialStep = 0;

  const [counter, setCounter] = useState(initialCounter);
  const [step, setStep] = useState(initialStep);

  const increment = () => setCounter(counter + step);
  const decrement = () => setCounter(counter - step);
  const reset = () => setCounter(initialCounter);

  return (
    <Fragment>
      <div>{counter}</div>
      <Button onClick={increment}>Increment</Button>
      <Button onClick={decrement}>Decrement</Button>
      <Button onClick={reset}>Reset</Button>
      <input onChange={} placeholder="step" />
    </Fragment>
  );
};

// reset set step

export default Counter;
