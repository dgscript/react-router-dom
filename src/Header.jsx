import { Link } from "react-router-dom";

function Header() {
  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        maxWidth: "1000px",
        margin: "0 auto",
      }}
    >
      <h1>React Routers</h1>
      <ul
        style={{
          display: "flex",
          listStyle: "none",
          gap: "10px",
          fontSize: "1.3rem",
        }}
      >
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/contact">Contact</Link>
        </li>

        <li>
          <Link to="/aboutus">About Us</Link>
        </li>

        <li>
          <Link to="/blog">Blog</Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
