import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CartProduct from "../components/Cart/CartProduct";
import { getAllProducts, purchaseCart } from "../store/slices/cart.slice";

const Cart = () => {
  const { products } = useSelector((store) => store.cart);

  const dispatch = useDispatch();

  const totalPriceCart = products.reduce((total, product) => total +  (product.quantity * product.product.price) , 0)

  const handlePurchaseCart = () => {
      dispatch (purchaseCart())
  }

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  return (
    <main>
      <section>
        {
        products.map((product) => (
          <CartProduct key={product.id} product={product}/>
        ))
        }
      </section>
          <hr />
      <section>
        <div>
          <h3>Total</h3>
          <h3>$ {totalPriceCart}</h3>
        </div>
        <button onClick={handlePurchaseCart}>CheckOut</button>
      </section>

    </main>
  );
};

export default Cart;
