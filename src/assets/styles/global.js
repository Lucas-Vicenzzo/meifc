// Tema Global da Apliocação
import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: sans-serif;
  }
  body{
    background: #1a1a1a;
    font-size: 16px;
  }
  button {
    cursor: pointer;
  }
`;
