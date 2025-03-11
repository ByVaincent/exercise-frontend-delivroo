import Cart from "../Cart/Cart";
import { useState } from "react";
import "./menus.css";

const Menus = ({ datas }) => {
  //Cart state
  const [cart, setCart] = useState([]);
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
              <div key={menu.key}>
                {menu.header && menu.header !== "Populaires" && (
                  <div id={menu.key} className="offer">
                    <h2>{menu.header}</h2>
                    <h3>{menu.subheader}</h3>
                    <div>
                      {categoryItems.map((item) => {
                        return (
                          <div className="menu" key={item.uid}>
                            <div>
                              <h4>{item.name}</h4>
                              <div className="description">
                                <p>{item.description}</p>
                              </div>

                              <p>{item.price.formatted}</p>
                            </div>
                            <div className="menu-image">
                              {item.image ? (
                                <img
                                  src={item.image.url}
                                  alt={item.image.altText}
                                />
                              ) : (
                                <img
                                  src={"placeholder.svg"}
                                  alt={"placeholder"}
                                />
                              )}
                            </div>
                            <div className="menu-button">
                              <button
                                className="add-to-chart"
                                onClick={() => {
                                  const newCart = [...cart];

                                  //check if the product is already in cart: if yes update quantity, else create the product in cart
                                  const itemAlreadyInCart = newCart.filter(
                                    (product) => {
                                      if (product.uid === item.uid) {
                                        return true;
                                      }
                                    }
                                  );

                                  if (itemAlreadyInCart.length === 0) {
                                    newCart.push({ ...item, quantity: 1 });
                                  } else if (itemAlreadyInCart.length === 1) {
                                    newCart.forEach((productInCart) => {
                                      if (
                                        productInCart.uid ===
                                        itemAlreadyInCart[0].uid
                                      ) {
                                        productInCart.quantity++;
                                      }
                                    });
                                  }

                                  setCart(newCart);
                                }}
                              >
                                +
                              </button>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <Cart cart={cart} setCart={setCart} />
      </div>
    </div>
  );
};
export default Menus;
