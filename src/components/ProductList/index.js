import React from 'react'
import {Product} from '../'

const ProductList = ({products, compare}) =>
  <div className="row display-flex">
      {products.map(product =>
        <Product key={product.id} product={product} compare={compare} />
      )}
  </div>;

export default ProductList
