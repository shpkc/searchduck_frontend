import React from 'react';
import {ThemeProvider} from "styled-components";
import GlobalStyles from "../Styles/GlobalStyles";
import Theme from "../Styles/Theme";
import { HashRouter as Router } from "react-router-dom";
import Routes from "./Routes"
import Header from "./Header";
import Footer from "./Footer";



export default () => (
  <ThemeProvider theme={Theme}>
    <>
    <GlobalStyles/>
    <Router>
      <>
      <Header />
        <Routes />
      <Footer />
      </>
    </Router>
    </>
  </ThemeProvider>

);