import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    text-align: center;
`;
export const FirstTitle = styled.h1`
    font-size: 2rem;
    margin: 0;
    color: #556581;
    
    &Plus {
      color: #2a9d8f;
    }
    &.minus {
      color: #e63946;
    }
`;
export const SecondTitle = styled.h2`
    color: #000;
    font-size: 7rem;
    margin: 0;
    margin-bottom: 20px;   
`;
export const Button = styled.button`
background: transparent;
    border: 2px solid transparent;
    text-align: center;
    font-size: 22px;
    border-radius: 15px;
    padding: 10px 25px;
    cursor: pointer;
    margin: 0 10px;
    transition: all 0.05s ease-in-out;

    &.minus {
      background-color: #e63946;
      color: #fff;
      box-shadow: 0 4px 0 darken(#e63946, 10%);
      border: 1px solid darken(#e63946, 15%);
    }

    &.plus {
      background-color: #2a9d8f;
      color: #fff;
      box-shadow: 0 4px 0 darken(#2a9d8f, 10%);
      border: 1px solid darken(#2a9d8f, 15%);
    }

    &:hover {
      transform: translateY(-2px);
    }

    &:active {
      transform: translateY(2px);
      box-shadow: none;
    }
`