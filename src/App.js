import React, { Component } from "react";
import darkTheme from "./styles/Themes";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import Header from "./components/header/Header";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${props => props.theme.body};
    }
`;

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={{ ...darkTheme }}>
        <div className="App">
          <Header />
          <GlobalStyle />
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
