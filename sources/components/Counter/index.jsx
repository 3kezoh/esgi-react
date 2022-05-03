import React, { useState } from "react";
import Button from "../Button";
import PropTypes from "prop-types";
import styles from "./counter.module.css";

const Counter = ({ counter: initialCounter, step: initialStep }) => {
  const [counter, setCounter] = useState(initialCounter);
  const [step, setStep] = useState(initialStep);

  const handleIncrement = () => {
    setCounter(counter + step);
  };

  const handleDecrement = () => {
    setCounter(counter - step);
  };

  const handleReset = () => {
    setCounter(initialCounter);
  };

  const handleSet = ({ target }) => {
    const { value } = target;

    if (value) {
      setCounter(parseInt(value, 10));
    }
  };

  const handleStepChange = ({ target }) => {
    setStep(parseInt(target.value, 10) || 0);
  };

  return (
    <div className={styles.counter}>
      <input
        onChange={handleSet}
        placeholder="counter"
        type="number"
        value={counter}
      />
      <Button onClick={handleIncrement}>Increment</Button>
      <Button onClick={handleDecrement}>Decrement</Button>
      <Button onClick={handleReset}>Reset</Button>
      <label htmlFor="step">Step</label>
      <input
        id="step"
        onChange={handleStepChange}
        placeholder="step"
        type="number"
        value={step}
      />
    </div>
  );
};

Counter.propTypes = {
  counter: PropTypes.number.isRequired,
  step: PropTypes.number.isRequired,
};

export default Counter;
