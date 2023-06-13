import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700&display=swap');
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
    font-family: 'Nunito', sans-serif;
}
body{
  color:#6c7983;
  font-size: 1.2rem;
}
`;

export default GlobalStyle;