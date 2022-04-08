import styled from 'styled-components';



const ProductEditorStyles  = styled.div`
     /* width:fit-content;
     margin: 0 auto; */
     display: flex;
     flex-direction: column;
     gap: 3rem;

     @media screen and (min-width: 590px) {
          flex-direction: row;
          justify-content: center;
          align-items:center;
     }
`;

export {ProductEditorStyles}