import React from "react";
import CartItem from "./CartItem";
import {useDispatch,useSelector} from "react-redux";
const CartContainer = ({cart}) => {
  const dispatch =useDispatch();
  const data= useSelector(state=>state)
  console.log(data);
  
  const ClearHandler=()=>{
    dispatch({type:'EMPTY_CART'})
  }
  if (cart.length === 0) {
    return (
      <section className="cart">
        <header>
          <h2>your bag</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </section>
    );
  }
  return (
    <section className="cart">
      <header>
        <h2>your bag</h2>
      </header>
      <article>
        {cart.map(item => {
          return <CartItem key={item.id} {...item} />;
        })}
      </article>
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            total <span>$0.00</span>
          </h4>
        </div>
        <button className="btn clear-btn"  onClick={() =>ClearHandler()}>clear cart</button>
      </footer>
    </section>
  );
};

export default CartContainer;
