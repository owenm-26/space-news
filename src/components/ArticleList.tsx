import React from "react";
import { Card, Row, Skeleton, Pagination } from "antd";
import { Article } from "@/types/types";
import { ArticleCard } from "@/components/ArticleCard";

interface ArticleListProps {
  news: Article[];
}

// You'll need to replace undefined with the correct type
const ArticleList: React.FC<ArticleListProps> = ({ news }) => {
  /**
   * This component renders a list of articles. It takes as input an array of articles and a boolean indicating whether the list is loading.
   * You will need to write a props interface for this component.
   *
   * You should use your custom ArticleCard component to build this.
   * No data manipulation is needed here.
   * Don't forget to add a unique key prop to each ArticleCard.
   * Don't forget to add a Skeleton component for when the list is loading. You might need conditional render logic for this
   *
   */

  return (
    <>
      <Row>
        {news.map(function (data: Article, idx: number) {
          return <ArticleCard key={idx} article={data} />;
        })}
      </Row>
      {/* <Pagination
        total={news.length}
        defaultCurrent={10}
        pageSize={limit}
        showSizeChanger
        onChange={onPageChange}
        onShowSizeChange={onShowSizeChange}
        current={offset}
        style={{ marginTop: "16px", textAlign: "center" }}
      /> */}
    </>
  );
};

export default ArticleList;
