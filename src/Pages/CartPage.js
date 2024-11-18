import React from 'react';
import '../Styles/Cart.css';
import { useDispatch, useSelector } from 'react-redux';
import { removetoCart } from '../redux/slice';

export default function CartPage() {
  const dispatch = useDispatch();
  const cartdata = useSelector((state) => state.cart);

  const removedata = (cartdata) => {
    dispatch(removetoCart(cartdata));
  };

  return (
    <div className="container">
      <h2 className="Cart bg-primary-subtle mt-4 py-3">My Cart ({cartdata.length})</h2>

      {cartdata.length === 0 ? (
        <h3 className="empty-cart-message">Your Cart is Empty</h3>
      ) : (
        <>
          <div className="row mt-4">
            {cartdata.map((value, index) => (
              <div key={index} className="col-md-4">
                <div className="card">
                  <div className="card-body">
                    <img
                      className="card-img-top"
                      src={value.thumbnail}
                      alt={value.title}
                    />
                    <div className="ms-3">
                      <h1>{value.title}</h1>
                      <button
                        className="btn btn-danger mt-2"
                        onClick={() => removedata(value)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="total-container mt-4">
            Total: $0.00
          </div>
        </>
      )}
    </div>
  );
}
