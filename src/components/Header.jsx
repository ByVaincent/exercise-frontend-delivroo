import Button from "./Button";

const Header = ({ datas, loaded }) => {
  return (
    <header>
      <div className="container">
        <img src="logo-teal.svg" alt="Logo de delivroo" />
        <input
          className="search-bar"
          type="text"
          placeholder={`Chercher ${loaded ? datas.header.title : null}`}
        />
        <div className="user-tools">
          <Button icon={"icon-users"} text={"Inscription ou connexion"} />
          <Button icon={"icon-user"} text={"Votre compte"} />
        </div>
      </div>
    </header>
  );
};
export default Header;
