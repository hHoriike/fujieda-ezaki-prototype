import React from "react";
import { Container } from "react-bootstrap";
import { fetchArticleList } from "../api/fetchArticle";
import NewsCard from "./NewsCard";

const CouponList = () => (
  <Container style={{ padding: "1rem 0 1rem 0" }}>
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
        .filter(({ coupon }) => !!coupon)
        .map((props) => (
          <NewsCard key={props.articleId} {...props} showCoupon={true} />
        ))}
    </Container>
  </Container>
);

export default CouponList;
