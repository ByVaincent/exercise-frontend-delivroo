import { useEffect, useState } from "react";

import "./App.css";

import fetchDatas from "./assets/utils/fetchApiDatas";
import Header from "./components/Header";

import loader from "./assets/img/KSYL.gif";
import SectionShop from "./components/Section-shop";
import Nav from "./components/Nav/Nav";
import Menus from "./components/Menus/Menus";

function App() {
  const [datas, setDatas] = useState(undefined);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    (async () => {
      try {
        setDatas(await fetchDatas());
        setLoaded(true);
      } catch (error) {
        console.log(error.message);
      }
    })();
  }, []);
  console.log(datas);

  return (
    <>
      <Header datas={datas} loaded={loaded} />
      {!loaded ? (
        <img className="loader" src={loader} alt="Loader" />
      ) : (
        <main>
          <SectionShop datas={datas} />
          <Nav datas={datas} />
          <Menus datas={datas} />
        </main>
      )}
    </>
  );
}

export default App;
