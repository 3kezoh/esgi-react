import React from "react";
import PropTypes from "prop-types";
import styles from "./icon.module.css";

const Icon = ({ alt, src }) => (
  <img alt={alt} className={styles.icon} src={src} />
);

Icon.propTypes = {
  alt: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
};

export default Icon;
