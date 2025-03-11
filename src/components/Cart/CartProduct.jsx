import convertCentToEuro from "../../assets/utils/convertCentToEuros";
const CartProduct = ({ product, cart, setCart, index }) => {
  const price = product.price.fractional * product.quantity;

  return (
    <div className="articles">
      <div>
        {product.quantity === 0 ? (
          <i
            className="icon-cross"
            onClick={() => {
              const newCart = [...cart];
              const filteredCart = newCart.filter((item) => {
                if (item.id === product.id) {
                  return false;
                } else {
                  return true;
                }
              });

              setCart(filteredCart);
            }}
          ></i>
        ) : (
          <i
            className="icon-minus"
            onClick={() => {
              if (product.quantity >= 1) {
                const newCart = [...cart];
                newCart[index].quantity -= 1;
                setCart(newCart);
              }
            }}
          ></i>
        )}

        {product.quantity}
        <i
          className="icon-plus"
          onClick={() => {
            const newCart = [...cart];
            newCart[index].quantity += 1;
            setCart(newCart);
          }}
        ></i>
      </div>
      <span>{product.name}</span>
      <span>{convertCentToEuro(price)}</span>
    </div>
  );
};
export default CartProduct;
