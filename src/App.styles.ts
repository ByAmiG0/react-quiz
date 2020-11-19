import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle `
  html {
    height: 100%;
  }

  body {
    background-image: linear-gradient(120deg, #e2c35d, #d88771);
    margin: 0;
    padding: 0 20px;
    display: flex;
    justify-content: center;
    font-family: 'Roboto', sans-serif;
  }

  * {
    box-sizing: border-box;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > p {
    color: #fff;
  }

  .score {
    color: #fff;
    font-size: 2rem;
    margin: 0;
  }

  h1 {
    font-size: 3rem;
    color: #fff;
    text-align: center;
  }

  .start, .next {
    cursor: pointer;
    background-image: linear-gradient(120deg, #fff, #ffcc91);
    border: 2px solid #d38558;
    box-shadow: 0 5px 10px rgba(0, 0, 0, .5);
    border-radius: 10px;
    height: 40px;
    text-align: center;
    margin: 20px 0;
    padding: 0 40px;
  }

  .start {
    max-width: 200px;
  }
`;