import ArticleCard from "@/components/ArticleCard";
import { Article, Launch } from "./Interfaces";
import { Divider, Typography, theme, Col, Row } from "antd";

const ArticleList = ({ news }: { news: Article[] }) => {
  return (
    <>
      <Row>
        {news.map(function (data: Article, idx: number) {
          return <ArticleCard key={idx} article={data} />;
        })}
      </Row>
    </>
  );
};

export default ArticleList;
