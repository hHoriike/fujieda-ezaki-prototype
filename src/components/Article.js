import React, { useState } from "react";
import { Card, Container } from "react-bootstrap";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { fetchArticle } from "../api/fetchArticle";
import ConsumeCouponModal from "./ConsumeCouponModal";
import Picsum from "./Picsum";

const Article = (props) => {
  const { articleId } = useParams();
  const { imgId, title, caption, category, categoryColor, text, coupon } =
    fetchArticle(articleId);
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
    <Container fluid className="p-0">
      <Container
        style={{
          padding: 0,
          width: "100vw",
          height: "300px",
          position: "relative",
        }}
      >
        <Picsum id={imgId} width="100%" height="300px" />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundImage: "linear-gradient(0,#000000AA,transparent 30%)",
            color: "#FFF",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "1rem",
            fontSize: "1.2rem",
          }}
        >
          <span
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
          </span>
          <span>{title}</span>
        </div>
      </Container>

      <Container className="p-3">
        <div style={{ fontSize: "1.2rem", textAlign: "center" }}>{caption}</div>
        <hr />
        <div className="pt-3" style={{ textAlign: "center" }}>
          {text?.split("\n").map((paragraph) => (
            <p key={paragraph} >{paragraph}</p>
          ))}
        </div>
      </Container>

      {coupon ? (
        <>
          <Container>
            <hr />
            <Card className="text-center">
              <Card.Body
                className={isCouponEnabled ? "" : "bg-light text-muted"}
              >
                <Card.Title className="mb-3">{coupon.title}</Card.Title>
                <Card.Text className="text-muted">
                  {coupon.description}
                </Card.Text>
                <Card.Text className="text-muted">
                  ???????????? {coupon.start}???{coupon.end}
                </Card.Text>
              </Card.Body>
              <Card.Footer
                onClick={isCouponEnabled ? handleClickConsumeCoupon : () => {}}
                className={`text-white bg-${
                  isCouponEnabled ? "primary" : "secondary"
                }`}
              >
                {isCouponEnabled
                  ? "???????????????????????????"
                  : "???????????????????????????????????????"}
              </Card.Footer>
            </Card>
          </Container>
          <ConsumeCouponModal
            show={modalShow}
            onHide={hideModal}
            confirmed={confirmed}
          />
        </>
      ) : null}

      <Container className="pb-4">
        <hr />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Link to="/" style={{ textAlign: "center", color: "#0BB" }}>
            ??????????????????
          </Link>
        </div>
      </Container>
    </Container>
  );
};

export default Article;
