import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --maxWidth: 80rem;
        --white: #f1faee;
        --yellow: #FFE81F;
        --black: #000000;
        --fontXLarge: 2.5rem;
        --fontLarge: 1.5rem;
        --fontMedium: 1.2rem;
        --fontSmall: 0.8rem;
    }

    * {
        box-sizing: border-box;
        font-family: 'Abel', sans-serif;
    }

    body {
        margin: 0;
        padding: 0;


        h1 {
            font-size: var(--fontXLarge);
            font-weight: 600;
        }

        h3 {
            font-size: 1.1rem;
            font-weight: 600;
        }

        p {
            font-size: 1rem;
            color: var(--yellow);
            text-align: center;
        }

        .buttons {
            display: flex;
        }
    }
`;
