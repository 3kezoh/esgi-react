import React from "react";
import PropTypes from "prop-types";

function Button({ children, ...props }) {
  return (
    <button type="button" {...props}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Button;
