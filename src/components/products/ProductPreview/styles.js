import styled from "styled-components";

const ProductPreviewStyles = styled.div`
  /* styles */
  /* position: relative; */
  /* max-width: 360px;  */
  align-self: stretch;
  padding: 1rem;
  background-color: #f8fafc;

  @media screen and (min-width: 590px) {
    width: 50%;
    max-width: 20rem;
  }
 
`;

const ProductImage = styled.div`
  
  img{
    width: 100%;
    height:auto;
  }
`;
 
 const ProductName = styled.h2`
   font-weight:700;
   color:#1e293b;
   word-wrap: break-word;
 `;
 

const ProductPrice = styled.p`
  font-size:1.5rem;
  font-weight: 100;
  letter-spacing: -1px;
  margin-top: -0.3rem;
  margin-bottom:0.25rem;
`;

const ProductDescription = styled.p`
  
`;
 
export {
  ProductPreviewStyles, ProductImage, ProductPrice, ProductName, ProductDescription
 
};
