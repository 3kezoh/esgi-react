import React from "react";
import Logo from "./Logo";

const links = [
  { id: 1, href: "/about", text: "About us" },
  { id: 2, href: "/newsletter", text: "Newsletter" },
];

const Navbar = () => (
  <nav>
    <Logo />
    <ul>
      {links.map(({ href, id, text }) => (
        <a key={id} href={href}>
          <li>{text}</li>
        </a>
      ))}
    </ul>
  </nav>
);

export default Navbar;
