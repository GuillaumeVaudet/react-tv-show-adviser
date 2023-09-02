import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body{
    font-family: 'Maximum Impact', serif;
    color: white;
  }
  
  a{
    text-decoration: none;
  }
  hr, p, ul, h1, h2, h3, h4, h5, h6{
    margin: 0;
  }
  
  ul{
    padding: 0;
  }
  
  ::-webkit-scrollbar{
    background-color: transparent;
  }
  ::-webkit-scrollbar-thumb:horizontal{
    background-color: rgba(0, 0, 0, 0.61);
    border-radius: 10px;
  }
`
export default GlobalStyle