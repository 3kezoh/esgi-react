import PropTypes from "prop-types";
import React from "react";
import Button from "./Button";

const Recipe = ({ title, description }) => (
  <div>
    <h2>{title}</h2>
    <p>{description}</p>
    <Button>Share</Button>
    <Button>Read</Button>
  </div>
);

Recipe.propTypes = {
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Recipe;
