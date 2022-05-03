import React from "react";
import PropTypes from "prop-types";
import Recipe from "../Recipe";
import styles from "./recipes.module.css";

const Recipes = ({ recipes }) => (
  <div className={styles.recipes}>
    {recipes.map(({ description, id, title }) => (
      <Recipe key={id} description={description} title={title} />
    ))}
  </div>
);

Recipes.propTypes = {
  recipes: PropTypes.array.isRequired,
};

export default Recipes;
