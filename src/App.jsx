import React from 'react';
import ProductCard from './components/productcard'; // Importing the ProductCard component

const App = () => {
  const products = Array.from({ length: 8 }); // Creates 8 product cards

  return (
    <div style={styles.container}>
      {products.map((_, index) => (
        <ProductCard key={index} />
      ))}
    </div>
  );
};

// Styles
const styles = {
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
    gap: '16px',
    padding: '20px',
    justifyContent: 'center',
    backgroundColor: '#f8f9fa',
  },
};

export default App;
