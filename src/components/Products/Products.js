import React from 'react';

const Products = (props) => {
      const {name ,id} = props.product
      const productStyle={
            border: '1px solid purple',
            padding : '10px',
            margin : '5px',
            width : '70%',
            borderRadius :'5px'
      }
      return (
            <div style={productStyle}>
                 <h5>{name}</h5>
                 <button>Add to cart</button> 
            </div>
      );
};

export default Products;