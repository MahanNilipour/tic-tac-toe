import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

	:root {
		--accent: blue;
		--player1: red;
		--player2: lime;
	}

  body {
		font-size: 1.5rem;
		font-family: 'Roboto Condensed', sans-serif;
		margin: 0;
		min-height: 100vh;
		min-width: 100vw;
		text-align: center;
		background: repeating-linear-gradient(
  -45deg,
  cornsilk,
  cornsilk 5px,
  lightgray 5px,
  lightgray 10px
);
	}
	*:focus {
		outline: .25em yellow solid;
	}

	h1 {
		font-weight: 700;
		color: black;
  	-webkit-text-fill-color: var(--accent);
  	-webkit-text-stroke: .05em white;
		margin: 0 0 1em;
		line-height: 1;
		padding-top: 1em;
	}

`;

export default GlobalStyles;
