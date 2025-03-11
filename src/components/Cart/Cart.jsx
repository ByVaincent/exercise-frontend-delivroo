import { useState } from "react";
import Button from "../Button";
import "./cart.css";
import CartProduct from "./CartProduct";
import convertCentToEuro from "../../assets/utils/convertCentToEuros";

const Cart = ({ cart, setCart }) => {
  //calculate bill
  const totalCart = cart.map((product) => {
    return product.price.fractional * product.quantity;
  });

  let partialTotal = 0;
  if (cart.length !== 0) {
    partialTotal = totalCart.reduce(
      (accumulator, currentValue) => accumulator + currentValue
    );
  }

  const shippingCosts = 250;

  const total = partialTotal + shippingCosts;

  return (
    <>
      {cart.length > 0 ? (
        <aside className="cart-aside">
          <div className={"cart"}>
            {cart.map((product, index) => {
              return (
                <CartProduct
                  key={product.uid}
                  product={product}
                  cart={cart}
                  setCart={setCart}
                  index={index}
                />
              );
            })}
          </div>
          <div className="partial-total-div">
            <div className="partial-total">
              <span>Sous-total</span>
              <span>{convertCentToEuro(partialTotal)}</span>
            </div>
            <div className="shipping-costs">
              <span>Frais de livraison</span>
              <span>{convertCentToEuro(shippingCosts)}</span>
            </div>
          </div>

          <div className="total">
            <span>Total</span>
            <span>{convertCentToEuro(total)}</span>
          </div>
          <Button
            text={"Finaliser la commande"}
            disabled={cart.length === 0 && true}
          />
        </aside>
      ) : (
        <aside className="cart-aside empty-cart">
          <i className="icon-cart"></i>
        </aside>
      )}
    </>
  );
};
export default Cart;
