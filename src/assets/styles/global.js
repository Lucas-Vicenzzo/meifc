// Tema Global da Apliocação
import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *{
    margin: unset;
    box-sizing: border-box;
  }
  body{
    background: #1a1a1a;
    font-size: 16px;
    width: 100vw;
    height: 100vh;

  }
  button {
    cursor: pointer;
  }
`;
