import React from 'react';

const Category = ({ name, id }) => {
  return (
    <div
      style={{
        height: '200px',
        width: '200px',
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        border: '1px solid #000',
        margin: '10px',
      }}
    >
      {name}
    </div>
  );
};

export default Category;
