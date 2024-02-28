/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import { Divider, Typography, theme, Col, Row } from "antd";
import { Article } from "./Interfaces";
import ArticleList from "./ArticleList";

const NewsPage: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]); // list of articles
  const [offset, setOffset] = useState<number>(0); // offset

  useEffect(() => {
    async function getArticles() {
      const resp = await fetch(
        `https://api.spaceflightnewsapi.net/v4/articles/?limit=10&offset=${offset}&ordering=-published_at`
      ); // fetch is an async function, so we have to `await` it.
      if (!resp.ok) return [];

      const data = await resp.json(); // *.json() is also async, so we have to `await` it as well.

      setArticles(data.results); // set state IN async function.
    }

    getArticles().catch(console.error); // calls async function, doesn't get return val. async functions return Promises by default, even when we return something that should be a value.
  }, [offset]);

  return (
    <>
      {/* You can delete this div if you want */}
      <div style={{ marginBottom: "10px" }}>{/* Add Switch inside here */}</div>
      <Divider />
      <Typography.Title level={1}>Articles</Typography.Title>

      <ArticleList news={articles} />

      {/* Add conditional render logic for table vs grad/list */}
      {/* Add pagination control using Antd(lookup the component). The same one should be used for both the table and grid views */}
      {/* It should be centered on the page */}
      {/* When you change the page, or the items per page, it should reset the scroll to the top of the page */}
    </>
  );
};

export default NewsPage;
