import React from "react";
import PropTypes from "prop-types";

const ExternalLink = ({ children, href }) => (
  <a href={href} rel="noopener noreferrer" target="_blank">
    {children}
  </a>
);

ExternalLink.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
};

export default ExternalLink;
