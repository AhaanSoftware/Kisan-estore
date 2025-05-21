import React, { useEffect, useState, useMemo } from 'react';
import { useUser } from '../contexts/UserContext';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const ProductDetails = ({ productId: hardcodedId }) => {
  const { accessToken, userType, name, email } = useUser();
  const [product, setProduct] = useState(null);
  const [cartCount, setCartCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();
  const productId = id || hardcodedId;

  useEffect(() => {
    if (!accessToken) {
      navigate('/login');
    }
  }, [accessToken, navigate]);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const res = await axios.get(`http://localhost:3000/api/products/${productId}`);
        const data = res.data;

        if (data && data.variants?.length > 0) {
          setProduct(data);
          setError(null);
        } else {
          setError('Product or variants not found');
        }
      } catch (err) {
        setError('Failed to load product');
      } finally {
        setLoading(false);
      }
    };

    if (accessToken) fetchProduct();
  }, [productId, accessToken]);

  // Fetch cart count on mount
  useEffect(() => {
    const fetchCart = async () => {
      try {
        const res = await axios.post('http://localhost:3000/api/cart/fetch', {}, { withCredentials: true });
        const items = res.data.items || [];
        const total = items.reduce((sum, item) => sum + item.quantity, 0);
        setCartCount(total);
      } catch (err) {
        console.warn('Cart fetch failed:', err.response?.data?.error || err.message);
      }
    };

    fetchCart();
  }, []);

  const addToCart = async (variantId, quantity = 1) => {
    try {
      const res = await axios.post(
        'http://localhost:3000/api/cart/add',
        { variantId, quantity },
        { withCredentials: true } // Ensure cookies are sent for session tracking
      );

      const cart = res.data;

      if (!cart.cartId) {
        alert('Failed to add to cart');
        return;
      }

      sessionStorage.setItem('cartId', cart.cartId); // Store cartId for later use

      // Update cart count
      const totalQuantity = cart.items?.reduce((sum, item) => sum + item.quantity, 0) || 0;
      setCartCount(totalQuantity);

      navigate('/cart'); // Navigate to cart page after adding item
    } catch (err) {
      const errorMessage = err.response?.data?.error || 'Error adding to cart';
      console.error('Add to cart failed:', err);
      alert(errorMessage);
    }
  };

  const filteredVariants = useMemo(() => {
    return product?.variants.filter((variant) =>
      userType === 'csc'
        ? variant.title.toLowerCase().includes('csc')
        : !variant.title.toLowerCase().includes('csc')
    );
  }, [product, userType]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!product) return <div>No product found</div>;

  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: '2rem auto', backgroundColor: '#fff' }}>
      <div style={{ position: 'absolute', top: 20, right: 20 }}>
        <div><strong>{name}</strong></div>
        <div>{email}</div>
        <div style={{ marginTop: '10px', fontWeight: 'bold' }}>Cart Items: {cartCount}</div>
      </div>

      <h1>{product.title}</h1>

      {product.imageUrl ? (
        <img src={product.imageUrl} alt={product.title} style={{ width: '100%', maxHeight: '400px' }} />
      ) : (
        <div style={{ width: '100%', height: '300px', backgroundColor: '#eee', textAlign: 'center', lineHeight: '300px' }}>
          No Image Available
        </div>
      )}

      <div dangerouslySetInnerHTML={{ __html: product.description }} />

      <h3>Variants:</h3>
      {filteredVariants.length === 0 ? (
        <p>No variants available for your user type.</p>
      ) : (
        <ul>
          {filteredVariants.map((variant) => (
            <li key={variant.id}>
              {variant.title} - {parseFloat(variant.price).toFixed(2)} {variant.currencyCode}
              <button onClick={() => addToCart(variant.id)} style={{ marginLeft: '10px' }}>
                Add to Cart
              </button>
            </li>
          ))}
        </ul>
      )}

      <button
        onClick={() =>
          navigate('/checkout', {
            state: {
              productId,
              title: product.title,
              price: filteredVariants[0]?.price || null,
            },
          })
        }
        disabled={filteredVariants.length === 0}
      >
        Buy Now
      </button>
    </div>
  );
};

export default ProductDetails;
