import React from "react";
import { Table } from "antd";
import { Article } from "@/types/types";
import type { TableColumnsType } from "antd";

interface ArticleTableProps {
  articles: Article[];
  loading: boolean;
}

const ArticleTable: React.FC<ArticleTableProps> = ({ articles, loading }) => {
  /**
   * This component renders a table of articles. It takes as input an array of articles and a boolean indicating whether the table is loading.
   * You should use the Antd Table component to build this.
   * No data manipulation is needed here.
   * You will need to write a custom render function for the "published_at" column to format the date.
   *
   */
  const columns: TableColumnsType<Article> = [
    {
      title: "Title",
      dataIndex: "title",
    },
    {
      title: "News Source",
      dataIndex: "news_source",
    },
    {
      title: "Published At",
      dataIndex: "published_at",
    },
  ];

  // for (let i = 0; i < 100; i++) {
  //   articles.push({
  //     key: i,
  //     title: {article.title}
  // }

  return (
    <Table
      columns={columns}
      dataSource={articles}
      pagination={{ pageSize: 10 }}
      scroll={{ y: 240 }}
    />
  );
};

export default ArticleTable;
