

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    
    
    :root{
  --purple-primary: #554DDE;
  --accent-pink: #F44E77;
  --neutral-light: #F2F6FF;
  --lavender-secondary: #6A6D9E; /*Primary Font Color*/
  --dark-primary: #16194F;
  --border-colour: #CAB6F1;
  }
    *{
        margin:0;
        padding:0;
        font-family:"Nunito", sans-serif;
        text-decoration:none;
        list-style:none;
        box-sizing:border-box;
    }
    body{
    background:var(--neutral-light)
}
    

    a{
        border:none;
        outline:none;
        color:inherit
        
    }

    

`

export default GlobalStyle;