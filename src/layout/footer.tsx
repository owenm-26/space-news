import React from "react";
import { Layout } from "antd";
const { Header, Content, Footer } = Layout;

const CustomFooter = () => {
  return (
    <>
      <Footer style={{ textAlign: "center" }}>
        Owen Mariani ©{new Date().getFullYear()} Created by Ant UED
      </Footer>
      ;
    </>
  );
};

export default CustomFooter;