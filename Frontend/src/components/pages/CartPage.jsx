import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CartPage = () => {
  const [cart, setCart] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const res = await axios.post('http://localhost:3000/api/cart/fetch', {}, { withCredentials: true });
        setCart(res.data); // Store the full cart in the state
      } catch (err) {
        const message = err.response?.data?.error || 'Failed to fetch cart';
        setError(message);
      }
    };

    fetchCart();
  }, []);

  const handleCheckout = async () => {
  try {
    const res = await axios.post(
      'http://localhost:3000/api/cart/checkout',
      { cartId: cart.cartId },
      { withCredentials: true }
    );
    const { checkoutUrl } = res.data;
    window.open(checkoutUrl, '_blank');
  } catch (err) {
    alert('Failed to generate checkout: ' + (err.response?.data?.error || err.message));
  }
};


  if (error) return <div>{error}</div>;
  if (!cart) return <div>Loading cart...</div>;

  return (
    <div style={{ padding: '2rem', backgroundColor: '#f4f4f4' }}>
      <h2>Your Cart</h2>
      {cart.items.length === 0 ? (
        <p>Your cart is empty!</p>
      ) : (
        <>
          <p>Total items: {cart.items.reduce((sum, item) => sum + item.quantity, 0)}</p>
          <div>
            {cart.items.map((item) => (
              <div
                key={item.variantId}
                style={{ padding: '10px', border: '1px solid #ddd', marginBottom: '10px' }}
              >
                <h3>Variant ID: {item.variantId}</h3>
                <p>Quantity: {item.quantity}</p>
              </div>
            ))}
          </div>
        </>
      )}
     <button
  onClick={handleCheckout}
  style={{
    padding: '10px 20px',
    backgroundColor: '#28a745',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer'
  }}
>
  Go to Checkout
</button>

    </div>
  );
};

export default CartPage;

