import React from 'react'

const Product = ({ product, compare }) =>
    <div key={product.id} className="col-sm-6 col-md-3 contentdiv">
        <img src={product.imageUrl} alt={product.name} />
        <span className="product_name">{product.title.title}</span>
        <button onClick={() => compare(product)} className={product.compare ? "btn btn-danger" : "btn btn-success"}>{product.compare ? "Remove" : "Compare"}</button>

    </div>;

export default Product
