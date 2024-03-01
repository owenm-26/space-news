import React from "react";
import { Row, Col, List, Typography } from "antd";
import { Article } from "@/types/types";
const { Title, Text } = Typography;

interface ArticleStatisticsProps {
  articles: Article[];
  count: number;
}

const ArticleStatistics: React.FC<ArticleStatisticsProps> = ({
  articles,
  count,
}) => {
  /**
   * This component generates the following statistics:
   * 1. Unique news sources
   * 2. Date range of articles
   * 3. Number of featured articles
   *
   * It takes as input an array of articles
   *
   * You should use a combination of Antd components to buidld this.
   * You might need to do some data manipulation to get the data in the right format.
   *
   * I used a combination of the following components:
   * 1. List
   * 2. Row
   * 3. Col
   * 4. Typography.Text
   * 5. Typography.Title
   */
  //This is given to you
  const uniqueSources = [
    ...new Set(articles.map((article) => article.news_site)),
  ];
  // This might be helpful for you
  const dateRange = [
    new Date(
      Math.min(
        ...articles.map((article) => new Date(article.published_at).getTime())
      )
    ).toLocaleDateString(),
    new Date(
      Math.max(
        ...articles.map((article) => new Date(article.published_at).getTime())
      )
    ).toLocaleDateString(),
  ];

  const dateString = ["Earliest: " + dateRange[0], "Latest: " + dateRange[1]];

  return (
    <div>
      <Title>Article Statistics</Title>
      <Row>
        <Col span={8}>
          <List
            size="large"
            header={
              <Text>
                <b>Unique Sources</b>
              </Text>
            }
            footer={false}
            style={{ margin: 5 }}
            bordered
            dataSource={uniqueSources}
            renderItem={(item) => (
              <List.Item>
                <Text>{item}</Text>
              </List.Item>
            )}
          />
        </Col>
        <Col span={8}>
          <List
            size="large"
            header={
              <Text>
                <b>Date Range of Articles</b>
              </Text>
            }
            footer={false}
            bordered
            style={{ margin: 5 }}
            dataSource={dateString}
            renderItem={(item) => (
              <List.Item>
                <Text>{item}</Text>
              </List.Item>
            )}
          />
        </Col>
        <Col span={8}>
          <List
            size="large"
            header={
              <Text>
                <b>Number of Featured Articles</b>
              </Text>
            }
            footer={false}
            bordered
            style={{ margin: 5 }}
            dataSource={["Count: " + count]}
            renderItem={(item) => (
              <List.Item>
                <Text>{item}</Text>
              </List.Item>
            )}
          />
        </Col>
      </Row>
    </div>
  );
};

export default ArticleStatistics;
