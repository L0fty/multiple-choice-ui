import React, { Component } from "react";
import darkTheme from "./styles/Themes";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import Practice from "./pages/Practice";
import Header from "./components/header/Header";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${props => props.theme.body};
    margin: 0px;
    color: ${props => props.theme.font};
  }
  button {
    all: unset;
  }
`;

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={{ ...darkTheme }}>
        <div className="App">
          <Header>Rapid</Header>
          <Practice />
          <GlobalStyle />
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
