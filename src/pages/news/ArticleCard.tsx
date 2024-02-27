/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import { Divider, Typography, theme, Col, Row } from "antd";
import { Article, Launch } from "./Interfaces";

function ArticleCard({ article }: { article: Article }) {
  //get theme
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Col span={8}>
      <div
        style={{
          background: colorBgContainer,
          minHeight: 280,
          padding: 24,
          borderRadius: borderRadiusLG,
          justifyContent: "center",
          // margin: 10,
        }}
      >
        <h2>{article.title}</h2>
        <i> {article.summary}</i>
        <p>{article.published_at}</p>
        <img width="100%" src={article.image_url} alt="none" />
      </div>
    </Col>
  );
}

function catchNoImage() {
  return <img src="../../assets/404.png" alt="error-image"></img>;
}

export default ArticleCard;
