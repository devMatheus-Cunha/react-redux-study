import styled, { createGlobalStyle } from "styled-components";

export const Flex = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    @media (max-width: 1080px) {
      font-size: 93.75%; // 15px
    }
    @media (max-width: 720px) {
      font-size: 87.5%; // 14px
    }
  }
  body {
    background: #363f5f;
    -webkit-font-smoothing: antialiased;
    display: flex;
    flex-direction: column;
    text-align: center;
    font-size: 2rem;
    font-family: Oswald;
    color: #FFF;
    margin: 30px;
  }
  
  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }
  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }
  button {
    cursor: pointer;
  }
  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
