import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "antd/dist/antd.css";

import store from "./store";
import { Content, GlobalStyle, Layout } from "./styles";

import Footer from "./components/Footer";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

const App: React.FC = () => (
  <Provider store={store}>
    <GlobalStyle />
    <Router>
      <Layout>
        <Header />
        <Content>
          <Route exact path="/" component={TodoList} />
          <Route exact path="/add" component={TodoForm} />
          <Route exact path="/add/{id}" component={TodoForm} />
        </Content>
        <Footer />
      </Layout>
    </Router>
  </Provider>
);

export default App;
