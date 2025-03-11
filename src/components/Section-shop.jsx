import Button from "./Button";

const SectionShop = ({ datas }) => {
  return (
    <section className="shop">
      <div className="container">
        <a href="#">
          <i className="icon-arrow-left"></i>Retour
        </a>
        <div className="infos-restaurant">
          <div className="restaurant">
            <img src={datas.header.image.url} alt="" />
            <div>
              <h1>{datas.header.title}</h1>
              {datas.header.headerTags.lines.map((line) => {
                return (
                  <p key={line.key}>
                    {line.spans.map((word) => {
                      return <span key={word.key}>{word.text}</span>;
                    })}
                  </p>
                );
              })}
            </div>
          </div>
          <div>
            <Button icon={"icon-users"} text={"Démarer une commande goupée"} />
          </div>
        </div>
      </div>
    </section>
  );
};
export default SectionShop;
