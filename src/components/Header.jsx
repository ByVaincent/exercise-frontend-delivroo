import { useState } from "react";
import Button from "./Button";
import removeAccents from "remove-accents";

const Header = ({ datas, loaded }) => {
  const [search, setSearch] = useState("");

  const regExp = new RegExp(removeAccents(search), "ig");
  let filteredDatas = [];

  if (loaded && search !== "") {
    filteredDatas = datas.items.filter((item) => {
      return regExp.test(removeAccents(item.name));
    });
  }

  return (
    <header>
      <div className="container">
        <img src="logo-teal.svg" alt="Logo de delivroo" />
        <div className="search-div">
          <input
            className="search-bar"
            type="text"
            placeholder={`Chercher ${loaded ? datas.header.title : ""}`}
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
          <div className="search-results">
            {filteredDatas.map((item, index) => {
              if (index < 10) {
                return (
                  <div key={item.id}>
                    <a href={`#${item.id}`} className="search-result-div">
                      <div>{item.name}</div>
                    </a>
                  </div>
                );
              }
            })}
          </div>
        </div>
        <div className="user-tools">
          <Button icon={"icon-users"} text={"Inscription ou connexion"} />
          <Button icon={"icon-user"} text={"Votre compte"} />
        </div>
      </div>
    </header>
  );
};
export default Header;
