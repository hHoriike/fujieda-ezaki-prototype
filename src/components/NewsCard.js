import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";

const NewsCard = ({
  articleId,
  imgId,
  title,
  caption,
  category,
  categoryColor,
}) => {
  return (
    <Card style={{ width: "100%" }}>
      <Link to={`/article/${articleId}`}>
        <Card.Img
          variant="top"
          src={`https://picsum.photos/id/${imgId}/200/300`}
          style={{ width: "100%", height: "120px", objectFit: "cover" }}
        />
        <Card.ImgOverlay
          style={{
            height: "120px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "flex-start",
            backgroundImage: "linear-gradient(0,#000000AA,transparent)",
          }}
        >
          <Card.Text
            style={{
              backgroundColor: categoryColor,
              width: "fit-content",
              padding: "0.2rem 0.5rem",
              color: "#FFF",
              borderRadius: "0.2rem",
              fontSize: "0.8rem",
            }}
          >
            {category}
          </Card.Text>
          <Card.Title style={{ color: "#FFF" }}>{title}</Card.Title>
        </Card.ImgOverlay>
        <Card.Body style={{ padding: "0.5rem 1rem" }}>
          <Card.Text>{caption}</Card.Text>
        </Card.Body>
      </Link>
    </Card>
  );
};

export default NewsCard;
