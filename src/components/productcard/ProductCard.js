import React from "react";

import Card from 'react-bootstrap/Card';
import * as Icon from 'react-feather';

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
            <div className="d-flex justify-content-end mt-3 gap-3"> 
                <Icon.Edit2 className="card-edit-btn"/>
                <Icon.Trash className="text-danger card-delete-btn"/>
            </div>
        </Card.Body>
        </Card>
    );
  }
  
  export default ProductCard;