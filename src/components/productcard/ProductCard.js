import React from "react";

import Card from 'react-bootstrap/Card';



function ProductCard ({children, product, ...props}) {
    const{productName, productPrice, imageUrl,  productDescription} = {...product};
    return (
        <Card {...props} className="shadow">
        <Card.Img variant="top" src={imageUrl} alt="Seed Packet" />
        <Card.Body>
            <Card.Title>{productName}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">${productPrice}</Card.Subtitle>
            <Card.Text>
            {productDescription}
            </Card.Text>
        </Card.Body>
        </Card>
    );
  }
  
  export default ProductCard;