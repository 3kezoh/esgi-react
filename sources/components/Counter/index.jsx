import React, { useState } from "react";
import Button from "../Button";
import PropTypes from "prop-types";
import styles from "./counter.module.css";

function Counter({ counter: initialCounter, step: initialStep }) {
  const [counter, setCounter] = useState(initialCounter);
  const [step, setStep] = useState(initialStep);

  function onIncrement() {
    setCounter(counter + step);
  }

  function onDecrement() {
    setCounter(counter - step);
  }

  function onReset() {
    setCounter(initialCounter);
  }

  function onSet({ target }) {
    const { value } = target;

    if (value) {
      setCounter(parseInt(value, 10));
    }
  }

  function onStepChange({ target }) {
    setStep(parseInt(target.value, 10) || 0);
  }

  return (
    <div className={styles.counter}>
      <input
        onChange={onSet}
        placeholder="counter"
        type="number"
        value={counter}
      />
      <Button onClick={onIncrement}>Increment</Button>
      <Button onClick={onDecrement}>Decrement</Button>
      <Button onClick={onReset}>Reset</Button>
      <label htmlFor="step">Step</label>
      <input
        id="step"
        onChange={onStepChange}
        placeholder="step"
        type="number"
        value={step}
      />
    </div>
  );
}

Counter.propTypes = {
  counter: PropTypes.number.isRequired,
  step: PropTypes.number.isRequired,
};

export default Counter;
