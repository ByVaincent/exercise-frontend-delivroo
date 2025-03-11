import "./menus.css";
const Menus = ({ datas }) => {
  return (
    <div className="menus">
      <div className="container">
        <div className="offers">
          {datas.layoutGroups[0].layouts.map((menu) => {
            // filter the datas corresponding to the menu
            const categoryItems = datas.items.filter(
              (item) => item.categoryId === menu.key
            );

            return (
              <div key={menu.key} id={menu.key} className="offer">
                <h2>{menu.header}</h2>
                <h3>{menu.subheader}</h3>
                <div>
                  {categoryItems.map((item) => {
                    return (
                      <div className="menu">
                        <div>
                          <h4>{item.name}</h4>
                          <p>{item.description}</p>
                          <p>{item.price.formatted}</p>
                        </div>
                        <div>
                          {item.image && (
                            <img
                              src={item.image.url}
                              alt={item.image.altText}
                            />
                          )}
                        </div>
                        <div className="menu-button">
                          <button className="add-to-chart">+</button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
        <aside className="card">plop</aside>
      </div>
    </div>
  );
};
export default Menus;
