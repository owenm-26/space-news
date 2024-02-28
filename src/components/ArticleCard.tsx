/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Card, Row, Col, Typography, Divider, theme } from "antd";
import { Article } from "@/types/types";
// This gets you access to the image for 404 fallback.
// The href/source/url can be retrieved via image404.src
import image404 from "../assets/404.png";
const { Title, Text } = Typography;

interface ArticleCardProps {
  article: Article;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  //get theme
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  function makeDate(date: string) {
    const d = new Date(date);
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    const formatted = d.toLocaleDateString("en-US", options);
    return formatted;
  }
  return (
    <Col span={8}>
      <a href={article.url}>
        <Card
          title={article.title}
          bordered={false}
          hoverable
          style={{
            background: colorBgContainer,
            minHeight: 280,
            padding: 0,
            borderRadius: borderRadiusLG,
            justifyContent: "center",
            margin: 5,
          }}
          cover={getImage(article.image_url)}
          extra={makeDate(article.published_at)}
        >
          <Title level={4} underline>
            {article.title}
          </Title>

          <Divider />
          <Text>{article.summary}</Text>
        </Card>
      </a>
    </Col>
  );

  function getImage(url: string) {
    if (url) {
      return <img width="100%" src={article.image_url} alt="none" />;
    } else {
      return <img src={image404.src} alt="error-image"></img>;
    }
  }
};
  /**
   * This component renders a single article. It takes as input an article object.
   * You should read the Antd documentation to figure out how to build this.
   * You should not use the Next.js Image component, instead use a regular img tag.
   * You will need to handle 404s for images, you can use the image404 variable above.
   * Don't forget to format the date correctly
   *
   * You should display the following information:
   * 1. Title
   * 2. Image
   * 3. Summary
   * 4. Published At
   *
   * When you click on this component, it should take you to the article's url(same tab or different is fine).
   *
   * Don't forget that you need to add a unique key prop to each ArticleCard.
   */


export default ArticleCard;
