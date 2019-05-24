import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "antd/dist/antd.css";

import AppContainer from "./core/components/AppContainer";
import { Content, GlobalStyle, Layout } from "./styles";

import Footer from "./components/Footer";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

const App: React.FC = () => (
  <AppContainer>
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
  </AppContainer>
);

export default App;
