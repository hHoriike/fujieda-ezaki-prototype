import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Carousel } from "react-bootstrap";
import { fetchArticleList } from "../api/fetchArticle";
import Picsum from "./Picsum";

const CarouselBanner = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {fetchArticleList()
        .filter(({ showBanner }) => showBanner)
        .map(({ articleId, imgId, title, caption }) => (
          <Carousel.Item>
            <Link to={`/article/${articleId}`}>
              <Picsum className="d-block w-100" id={imgId} />
              <Carousel.Caption>
                <h3>{title}</h3>
                <p>{caption}</p>
              </Carousel.Caption>
            </Link>
          </Carousel.Item>
        ))}
    </Carousel>
  );
};

export default CarouselBanner;
