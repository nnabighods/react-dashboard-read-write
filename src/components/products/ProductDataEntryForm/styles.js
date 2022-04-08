import styled from "styled-components";

const ProductDataEntryFormStyles = styled.form`
  /* width: 380px; */
  input:focus, textarea:focus{
    border-color:cornflowerblue;
    background-color: #eff6ff;
    outline-color: cornflowerblue;
  }
  fieldset{
    display:flex;
    gap:1rem;
    margin-bottom: 1.5rem;
  }

  @media screen and (min-width: 590px) {
    width: 50%;
  }
`;

const ProductImage = styled.div``;

const ProductName = styled.div`
     flex:3;
`;

const ProductPrice = styled.div`
   flex:2;
`;

const ProductDescription = styled.div`
   textarea{
     resize: none;
     font-size:14px;
   }
`;

export {
  ProductDataEntryFormStyles,
  ProductDescription,
  ProductImage,
  ProductName,
  ProductPrice,
};
