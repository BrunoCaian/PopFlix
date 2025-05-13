import { createGlobalStyle } from "styled-components";
import popflixBanner from './assets/popflixBanner.jpeg'


export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    .page-wrapper {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
    }

    main {
        flex: 1;
    }

    body {
        background: #1e1e2f;

        background-size: cover;
        font-family: 'Montserrat', sans-serif;

}
    body.login-background {
        background-image: url(${popflixBanner});
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
}

    @media (max-width: 480px) {
        body.login-background {
            background-color: #000 !important;
            background-image: none !important;
        }
    }
`