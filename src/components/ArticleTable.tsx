import React from "react";
import { Table, Pagination } from "antd";
import { Article, Launch } from "@/types/types";
import type { TableColumnsType } from "antd";
import { makeDate } from "@/components/ArticleCard";

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
      width: 500,
    },
    {
      title: "News Source",
      dataIndex: "news_site",
      width: 100,
    },
    {
      title: "Published At",
      dataIndex: "published_at",
      width: 200,
      render: (publishedAt: string) => makeDate(publishedAt),
    },
  ];

  return (
    <>
      <Table columns={columns} dataSource={articles} pagination={false} />
    </>
  );
};
export default ArticleTable;
