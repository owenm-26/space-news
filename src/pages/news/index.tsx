/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import { Divider, Typography, theme, Col, Row, Switch, Pagination } from "antd";
import { Article } from "@/types/types";
import ArticleList from "@/components/ArticleList";
import ArticleTable from "@/components/ArticleTable";

const NewsPage: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]); // list of articles
  const [offset, setOffset] = useState<number>(0); // offset
  const [limit, setLimit] = useState<number>(10);
  const [isList, setIsList] = useState<boolean>(true);
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    async function getArticles() {
      const resp = await fetch(
        `https://api.spaceflightnewsapi.net/v4/articles/?limit=${limit}&offset=${offset}&ordering=-published_at`
      ); // fetch is an async function, so we have to `await` it.
      if (!resp.ok) return [];

      const data = await resp.json(); // *.json() is also async, so we have to `await` it as well.

      setArticles(data.results); // set state IN async function.
      setCount(data.count);
    }

    getArticles().catch(console.error); // calls async function, doesn't get return val. async functions return Promises by default, even when we return something that should be a value.
  }, [limit, offset]);

  //change page
  const onPageChange = (page: number, pageSize: number) => {
    console.log("page: " + page);
    console.log("pageSize: " + pageSize);
    const newOffset = (page - 1) * pageSize; // Calculate the new offset correctly
    console.log("new offset: " + newOffset);
    setOffset(newOffset); // Set the new offset
    scrollToTop();
  };

  //change page length
  const onShowSizeChange = (current: number, size: number) => {
    setLimit(size);
    setOffset(0);
  };

  //scroll to top
  const isBrowser = () => typeof window !== "undefined"; //The approach recommended by Next.js

  function scrollToTop() {
    if (!isBrowser()) return;
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <>
      {/* You can delete this div if you want */}
      <div style={{ marginBottom: "10px" }}>{/* Add Switch inside here */}</div>
      <Divider />
      <div style={{ display: "flex" }}>
        <div style={{ marginRight: "10px" }}>View as:</div>
        <div style={{ marginRight: "10px" }}>
          <Switch
            checkedChildren="Table"
            unCheckedChildren="Grid"
            defaultChecked
            onChange={() => setIsList(!isList)}
          />
        </div>
        <span>(Switch between Table and Grid view)</span>
      </div>
      <Typography.Title level={1}>Articles</Typography.Title>
      {isList ? (
        <ArticleList news={articles} />
      ) : (
        <ArticleTable articles={articles} loading={false} />
      )}

      <Pagination
        total={count}
        pageSize={limit}
        showSizeChanger
        onChange={onPageChange}
        onShowSizeChange={onShowSizeChange}
        current={Math.floor(offset / limit) + 1}
        style={{ marginTop: "16px", textAlign: "center" }}
      />
      {/* Add conditional render logic for table vs grad/list */}
      {/* Add pagination control using Antd(lookup the component). The same one should be used for both the table and grid views */}
      {/* It should be centered on the page */}
      {/* When you change the page, or the items per page, it should reset the scroll to the top of the page */}
    </>
  );
};

export default NewsPage;
