import React from "react";
import { Modal, Button } from "react-bootstrap";

const ConsumeCouponModal = ({ show, onHide, confirmed }) => (
  <Modal
    show={show}
    onHide={onHide}
    size="lg"
    aria-labelledby="contained-modal-title-vcenter"
    centered
  >
    <Modal.Body>
      <h4 className="mb-4">このクーポンを使用しますか？</h4>
      <p>一度使用したクーポンは使えなくなります</p>
    </Modal.Body>
    <Modal.Footer>
      <Button onClick={confirmed}>クーポンを使う</Button>
      <Button onClick={onHide} variant="light">
        キャンセル
      </Button>
    </Modal.Footer>
  </Modal>
);

export default ConsumeCouponModal;
