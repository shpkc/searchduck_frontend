import React from 'react';
import {ThemeProvider} from "styled-components";
import GlobalStyles from "../Styles/GlobalStyles";
import Theme from "../Styles/Theme";
import { HashRouter as Router } from "react-router-dom";
import Routes from "./Routes"

export default () => (
  <ThemeProvider theme={Theme}>
    <>
    <GlobalStyles/>
    <Router>
      <>
      <Routes />
      </>
    </Router>
    </>
  </ThemeProvider>

);