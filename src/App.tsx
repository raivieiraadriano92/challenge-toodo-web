import React from "react";
import { Provider } from "react-redux";
// @ts-ignore
import { PersistGate } from "redux-persist/lib/integration/react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "antd/dist/antd.css";

import store from "./core/store";
import { Content, GlobalStyle, Layout } from "./styles";

import Footer from "./components/Footer";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

const App: React.FC = () => (
  <Provider store={store.store}>
    <PersistGate loading={null} persistor={store.persistor}>
      <GlobalStyle />
      <Router>
        <Layout>
          <Header />
          <Content>
            <Route exact path="/" component={TodoList} />
            <Route exact path="/add" component={TodoForm} />
            <Route exact path="/edit/:id" component={TodoForm} />
          </Content>
          <Footer />
        </Layout>
      </Router>
    </PersistGate>
  </Provider>
);

export default App;
