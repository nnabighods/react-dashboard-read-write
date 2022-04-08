import React from 'react';
 
import {ProductCardStyles, ProductImage, ProductName, ProductPrice, ProductDescription} from './styles'


function ProductCard ({children, product, ...props})  {
  const{productName, productPrice, imageUrl,  productDescription} = {...product};
  return (
        <ProductCardStyles  {...props}>
           <ProductImage>
              <img src={imageUrl}  alt="Product Image" width="209" height="120"/>
           </ProductImage>
           <ProductName>{productName}</ProductName>
           <ProductPrice>${productPrice}</ProductPrice>
           <ProductDescription>
            {productDescription}
           </ProductDescription>
                

        </ProductCardStyles>
  )
}

export default ProductCard