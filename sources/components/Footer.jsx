import React from "react";
import Facebook from "../public/images/facebook.svg";
import Instagram from "../public/images/instagram.svg";
import ExternalLink from "./ExternalLink";
import Icon from "./Icon";

const Footer = () => (
  <footer>
    <h2>Recipes</h2>
    <p>A site with a thousand recipes</p>
    <ExternalLink href="http://www.facebook.com/recipes">
      <Icon alt="Go to our facebook page" src={Facebook} />
    </ExternalLink>
    <ExternalLink href="http://www.facebook.com/recipes">
      <Icon alt="Go to our instagram page" src={Instagram} />
    </ExternalLink>
  </footer>
);

export default Footer;
