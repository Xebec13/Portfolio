import "./nav.css";

const NavItems = [
  { text: "About", href: "" },
  { text: "Projects", href: "" },
  { text: "Resume", href: "" },
  { text: "Contact", href: "" },
];

const Nav = () => (
  <header>
    {NavItems.map(({ text, href }, index) => (
      <ul className="nav" key={index}>
        <li>
          <a href={href}>{text}</a>
        </li>
      </ul>
    ))}
  </header>
);

export default Nav;
