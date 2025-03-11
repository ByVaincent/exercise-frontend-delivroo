import "./Nav.css";

const Nav = ({ datas }) => {
  return (
    <nav>
      <div className="container">
        {datas.layoutNavigation.map((link) => {
          return (
            <a key={link.layoutId} href={`#${link.layoutId}`}>
              {link.label}
            </a>
          );
        })}
      </div>
    </nav>
  );
};
export default Nav;
