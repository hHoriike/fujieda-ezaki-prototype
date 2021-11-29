import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Card, Container } from "react-bootstrap";
import ConsumeCouponModal from "./ConsumeCouponModal";

const NewsCard = ({
  articleId,
  imgId,
  title,
  caption,
  category,
  categoryColor,
  coupon,
  showCoupon,
}) => {
  const [modalShow, setModalShow] = useState(false);
  const hideModal = () => setModalShow(false);
  const [isCouponEnabled, setIsCouponEnabled] = useState(true);
  const handleClickConsumeCoupon = () => {
    setModalShow(true);
  };
  const confirmed = () => {
    setIsCouponEnabled(false);
    hideModal();
  };
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
      {showCoupon && coupon ? (
        <Card.Body>
          <>
            <Container
              className="p-0"
              style={{ fontSize: "0.9rem", marginTop: "-2rem" }}
            >
              <hr />
              <Card className="text-center">
                <Card.Body
                  className={isCouponEnabled ? "" : "bg-light text-muted"}
                >
                  <Card.Title className="mb-3" style={{ fontSize: "1.1rem" }}>
                    {coupon.title}
                  </Card.Title>
                  <Card.Text className="text-muted">
                    {coupon.description}
                  </Card.Text>
                  <Card.Text className="text-muted">
                    有効期間 {coupon.start}～{coupon.end}
                  </Card.Text>
                </Card.Body>
                <Card.Footer
                  onClick={
                    isCouponEnabled ? handleClickConsumeCoupon : () => {}
                  }
                  className={`text-white bg-${
                    isCouponEnabled ? "primary" : "secondary"
                  }`}
                >
                  {isCouponEnabled
                    ? "このクーポンを使う"
                    : "このクーポンは使用済みです"}
                </Card.Footer>
              </Card>
            </Container>
            <ConsumeCouponModal
              show={modalShow}
              onHide={hideModal}
              confirmed={confirmed}
            />
          </>
        </Card.Body>
      ) : null}
    </Card>
  );
};

export default NewsCard;
