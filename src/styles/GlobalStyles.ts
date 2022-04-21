import { createGlobalStyle } from "styled-components";


export default createGlobalStyle`

    @import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;1,200&family=Oswald:wght@200;300;400&display=swap');
    
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Nunito', sans-serif;
        user-select: none;
    }

    html {
        font-size: calc(60% + 0.8vmin); // Garante na responsividade
    }


`;