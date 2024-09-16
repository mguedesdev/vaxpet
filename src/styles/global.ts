import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Mulish';
    font-style: normal;
    font-weight: 900;
    src: url('/fonts/Mulish-Black.ttf') format('truetype');
  }

  @font-face {
    font-family: 'Mulish';
    font-style: normal;
    font-weight: 700;
    src: url('/fonts/Mulish-Bold.ttf') format('truetype');
  }

  @font-face {
    font-family: 'Mulish';
    font-style: normal;
    font-weight: 800;
    src: url('/fonts/Mulish-ExtraBold.ttf') format('truetype');
  }

  @font-face {
    font-family: 'Mulish';
    font-style: normal;
    font-weight: 300;
    src: url('/fonts/Mulish-Light.ttf') format('truetype');
  }

  @font-face {
    font-family: 'Mulish';
    font-style: normal;
    font-weight: 500;
    src: url('/fonts/Mulish-Medium.ttf') format('truetype');
  }

  @font-face {
    font-family: 'Mulish';
    font-style: normal;
    font-weight: 400;
    src: url('/fonts/Mulish-Regular.ttf') format('truetype');
  }

  @font-face {
    font-family: 'Mulish';
    font-style: normal;
    font-weight: 600;
    src: url('/fonts/Mulish-SemiBold.ttf') format('truetype');
  }

  *, *::after, *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  * {
    scrollbar-width: thin;
    scroll-behavior: smooth;
    font-family: 'Mulish', sans-serif;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type=number] {
    -moz-appearance: textfield;
    appearance: textfield;
  }

  html {
    @media (max-width: 1400px) {
      font-size: 93.75%;
    }
  }

  input, button, textarea {
    font-family: inherit;
  }

  body {
    text-rendering: optimizeLegibility;
  }

  button {
    cursor: pointer;
  }

  input {
      /* Estilo para campos preenchidos automaticamente */
  &:-webkit-autofill {
    box-shadow: 0 0 0 30px #f3f3f3 inset;
    -webkit-text-fill-color: ${({ theme }) => theme.colors.black};
    border: 2px solid ${({ theme }) => theme.colors.grayLight};
  }

  /* Ajuste da cor para Firefox (não possui autofill diretamente mas é bom prevenir) */
  &:-moz-autofill {
    box-shadow: 0 0 0 30px #f3f3f3 inset;
    -moz-text-fill-color: ${({ theme }) => theme.colors.black};
    border: 2px solid ${({ theme }) => theme.colors.grayLight};
  }
  }
`;
