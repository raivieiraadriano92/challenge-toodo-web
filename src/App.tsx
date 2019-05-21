import React from "react";
import { Provider } from "react-redux";

import "antd/dist/antd.css";

import store from "./store";
import { GlobalStyle, Layout } from "./styles";
import Routes from "./config/routes";

import Footer from "./components/Footer";
import Header from "./components/Header";

const App: React.FC = () => (
  <Provider store={store}>
    <GlobalStyle />
    <Layout>
      <Header />
      <Routes />
      <Footer />
    </Layout>
  </Provider>
);

export default App;
