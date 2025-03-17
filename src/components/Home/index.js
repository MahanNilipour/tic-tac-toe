import { Link } from "react-router-dom";

import styled from "styled-components";

const Home = () => {
  return (
    <NavigationContainer>
      <Link to="/game">START</Link>
      <a href="https://www.wikihow.com/Video/Play-Tic-Tac-Toe" target="_blank">
        RULES
      </a>
    </NavigationContainer>
  );
};

export default Home;

const NavigationContainer = styled.nav`
  display: flex;
  align-items: center;
  flex-direction: column;
  min-height: calc(100vh - 6em);
  & a {
    color: var(--accent);
    background-color: white;
    padding: 0.5em 1em;
    border: 0.25em var(--accent) solid;
    border-radius: 2em;
    margin: 0.5em 0;
    transition: scale 0.2s ease-in-out;
  }
  & a:hover {
    scale: 1.05;
  }
  & a:active {
    scale: 0.95;
  }
`;
