import React from "react";
import { Container } from "react-bootstrap";
import { fetchArticleList } from "../api/fetchArticle";
import CarouselBanner from "./CarouselBanner";
import Header from "./Header";
import NewsCard from "./NewsCard";

const Home = () => {
  const [tags, setTags] = React.useState([]);
  const toggleTag = (name) => () => {
    if (tags.includes(name)) {
      setTags((tags) => tags.filter((t) => t !== name));
    } else {
      setTags((tags) => [...tags, name]);
    }
  };
  return (
    <Container style={{ padding: "0 0 1rem 0" }}>
      <Header />
      <Container className="p-0">
        <CarouselBanner />
      </Container>
      <Container
        className="p-2"
        fluid
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "0.5rem",
          overflowX: "scroll",
          flexWrap: "nowrap",
        }}
      >
        {[
          "グルメ",
          "健康・美容",
          "警察署からのお知らせ",
          "訃報",
          "市役所からのお知らせ",
        ].map((categoryName) => (
          <span
            key={categoryName}
            style={{
              backgroundColor: tags.includes(categoryName) ? "#555" : "#EEE",
              color: tags.includes(categoryName) ? "#FFF" : "#000",
              padding: "0.1rem 0.4rem",
              flex: "0 0 fit-content",
              borderRadius: "100rem",
              fontSize: "0.9rem",
              whiteSpace: "nowrap",
            }}
            onClick={toggleTag(categoryName)}
          >
            {categoryName}
          </span>
        ))}
      </Container>
      <Container
        style={{
          width: "100vw",
          padding: "0 1rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        {fetchArticleList()
          .filter(
            ({ category }) => tags.length === 0 || tags?.includes(category)
          )
          .map((props) => (
            <NewsCard key={props.articleId} {...props} />
          ))}
      </Container>
    </Container>
  );
};

export default Home;
