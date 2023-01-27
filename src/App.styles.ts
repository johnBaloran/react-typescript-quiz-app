import styled, { createGlobalStyle } from "styled-components";

const BGImage = require("./images/background-image.jpg");

export const GlobalStyle = createGlobalStyle`
html {
    height: 100%;
}

body {
    background-size:cover;
    margin:0;
    padding: 0 20px;
    display: flex;
    jusitfy-content:center;

}

* {
    box-sizing:border-box;
    font-family: "Roboto", sans-serif
}
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > p {
  }

  .score {
    font-size: 2rem;
    margin: 0;
  }

  .start,
  .next {
    cursor: pointer;
    background: linear-gradient(180deg, #fff, #ffcc91);
    border: 2px solid #d38558;
    box-shadow: 0px 50px 10px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    height: 40px;
    margin: 20px 0;
    padding: 0 40px;
  }

  .start {
    max-width: 200px;
  }
`;
