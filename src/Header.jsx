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
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
        <li>
          <a href="/aboutus">About Us</a>
        </li>
        <li>
          <a href="/blog">Blog</a>
        </li>
      </ul>
    </header>
  );
}

export default Header;
