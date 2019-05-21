import React from "react";
import { Provider } from "react-redux";

import "antd/dist/antd.css";

import store from "./store";
import { GlobalStyle, Layout } from "./styles";
import Routes from "./config/routes";

const App: React.FC = () => (
  <Provider store={store}>
    <GlobalStyle />
    <Layout>
      <Routes />
    </Layout>
  </Provider>
);

export default App;
