import React from 'react'
const ProductItem =(props)=>{
    const Product =props.product;
    const Image=props.image;
    return (
        <div>
            <img src={Image} className="img-pro" alt="Product"/>
            <h3>{Product.ten}</h3>
            <h4>{Product.giahang}</h4>
        </div>

    )
}

export default ProductItem ;