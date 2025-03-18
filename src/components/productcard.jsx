import React from 'react';
import ViewProductButton from '../components/button'; // Importing the button component

const ProductCard = () => {
  // Static product details
  const productImage = 'https://via.placeholder.com/150'; 
  const productName = 'Example Product';
  const productPrice = '$100';

  return (
    <div style={styles.card}>
      <img src={productImage} alt={productName} style={styles.image} />
      <h3 style={styles.name}>{productName}</h3>
      <p style={styles.price}>{productPrice}</p>
      <ViewProductButton />
    </div>
  );
};

// Styles
const styles = {
  card: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    width: '220px',
    padding: '16px',
    textAlign: 'center',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    borderRadius: '8px',
  },
  name: {
    fontSize: '18px',
    fontWeight: 'bold',
    margin: '10px 0',
  },
  price: {
    fontSize: '16px',
    color: '#555',
    marginBottom: '12px',
  },
};

export default ProductCard;
