import PropTypes from "prop-types";
import React from "react";

/**
 * @callback OnChange
 * @param {React.ChangeEvent<HTMLSelectElement>} event The event.
 */

/**
 * @typedef {Object} SelectProps The properties of the component.
 * @property {OnChange} onChange The function to call when the value changes.
 * @property {string[]} options The options to display.
 * @property {string} value The value of the select.
 */

/**
 * @description The properties of the component
 * @param {SelectProps} props
 * @returns {React.ReactElement} The component.
 */
function Select({ onChange, options, value }) {
  return (
    <select onChange={onChange} value={value}>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}

Select.propTypes = {
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  value: PropTypes.string.isRequired,
};

export default Select;
