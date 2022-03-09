import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../../redux/actions/cartAction';
import Products from '../Products/Products';

const Shop = () => {
      const products = [
            {name : 'samsung', id : 1},
            {name : 'Apple', id : 2},
            {name : 'sony', id : 3},
            {name : 'oppo', id : 4},
            {name : 'xiaomi', id :5},

      ]
      return (
            <div>
                  <h2>this is shop</h2>
                  {
                        products.map(pd =><Products product={pd}></Products>)
                  }
            </div>
      );
};

const mapStoreToProps = state =>{
      return{
            cart : state.cart,
            products : state.products
      }
}
const mapDispatchToprops = {
      addToCart : addToCart
}

const connetToStore =  connect(mapStoreToProps,mapDispatchToprops)
connetToStore(Shop)

export default Shop;