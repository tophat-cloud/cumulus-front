import React, { useState } from "react";
import styled from "styled-components";
import Footer from "./Footer";
import Header from "./Header";
import SideBar from "./SideBar";
import Container from "@material-ui/core/Container";

const Layout = styled.div`
  display: flex;
  min-height: 100vh;
  background-color: whitesmoke;
`;

const Main = styled(Container)`
  min-height: calc(100vh - 100px - 64px);
  width: 100%;
  padding: 16px;
`;

const Wrapper = styled.main`
  margin-top: 64px;
  width: 100%;
  flex-grow: 1;
  margin-left: 200px;
`;


export default ({ children }) => {
  const [open, setOpen] = useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Layout>
      <Header
        open={open}
        handleDrawerOpen={handleDrawerOpen}
      />

      <SideBar
        open={open}
        handleDrawerClose={handleDrawerClose}
      />
      

      <Wrapper>
        <Main>
          { children }
        </Main>
        <Footer/>
      </Wrapper>

    </Layout>
  )
};
