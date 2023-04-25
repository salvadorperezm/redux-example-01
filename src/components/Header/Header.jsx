export const Header = () => {
  const links = [
    {
      title: "home",
    },
    {
      title: "about",
    },
    {
      title: "projects",
    },
  ];

  return (
    <header>
      <nav className="nav">
        <h2>Logo</h2>
        <ul className="nav__list">
          {links.map((link) => {
            return (
              <li key={link.title}>
                <a href="#" className="nav__link">
                  {link.title}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};
