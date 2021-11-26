import React from "react";
import {
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  Button,
  Offcanvas,
} from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => (
  <Navbar
    expand={false}
    sticky="top"
    bg="light"
    style={{ boxShadow: "0 0rem 1rem #00000088" }}
  >
    <Container>
      <Navbar.Brand style={{ fontWeight: "bold" }}>
        <Link to="/">ふじえだアプリ</Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="offcanvasNavbar" />
      <Navbar.Offcanvas
        id="offcanvasNavbar"
        aria-labelledby="offcanvasNavbarLabel"
        placement="end"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title id="offcanvasNavbarLabel">MENU</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          記事を検索
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="ここにキーワードを入力"
              className="me-2"
              aria-label="検索"
            />
            <Button variant="outline-success" style={{ width: "5rem" }}>
              検索
            </Button>
          </Form>
          <hr />
          <Nav className="justify-content-end flex-grow-1 pe-3">
            <Nav.Link>
              <Link to="/">ホーム</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/">利用規約</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/">プライバシーポリシー</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/">このアプリについて</Link>
            </Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Navbar.Offcanvas>
    </Container>
  </Navbar>
);

export default Header;
