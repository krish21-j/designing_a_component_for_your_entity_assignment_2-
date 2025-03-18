import React from 'react';

const ViewProductButton = () => {
  return (
    <button style={styles.button}>
      View Product
    </button>
  );
};

// Styles
const styles = {
  button: {
    backgroundColor: '#007bff',
    color: 'white',
    padding: '10px 16px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '14px',
    fontWeight: 'bold',
    transition: 'background 0.3s ease',
  },
};

export default ViewProductButton;
