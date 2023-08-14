import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    width:100%;
    height:100%;

  }

  #root,
  html,
  body {
    width: 100%;
    height: 100vh;
    font-family: Roboto;
    background:#0D0D0D;
    color:#F5FBF2;
  }

  button {
    cursor:pointer;
    font-family: Roboto;
  }
`;