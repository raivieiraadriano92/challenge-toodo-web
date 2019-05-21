import styled, { createGlobalStyle } from "styled-components";
import { Layout as LayoutAntd } from "antd";

export const Content = styled(LayoutAntd.Content)`
  padding: 50px;
`;

export const GlobalStyle = createGlobalStyle`
  #root {
    height: 100%;
  }
`;

export const Layout = styled(LayoutAntd)`
  height: 100%;
`;
