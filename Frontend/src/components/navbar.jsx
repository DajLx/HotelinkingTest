import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { IoTicket } from "react-icons/io5";
import { useSelector, useDispatch } from "react-redux";
import { setUser } from "../state/user";
import { useLocation, useNavigate } from "react-router";
import { axios, getToken } from "../utils/axios";
import { addPromo } from "../state/promos";
import { Toast } from "../utils/swal";
const NavbarF = () => {
  const user = useSelector((state) => state.user);
  const dis = useDispatch();
  const location = useLocation();
  const logout = () => {
    dis(setUser({}));
    navi("/");
  };
  const navi = useNavigate();
  const getPromoNumber = () => {
    return Math.random() * 30;
  };
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand onClick={() => navi("/")}>HoteLinking</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link
                onClick={async () => {
                  if (!user.name) {
                    Toast.fire({
                      icon: "info",
                      title: "Debes iniciar sesion para poder canjear codigos",
                    });
                    navi("/login");
                  } else {
                    await getToken();
                    const numberD = `${Math.ceil(getPromoNumber())}%`;
                    console.log(numberD);
                    const res = await axios.post(
                      "http://localhost:8000/createCode",
                      {
                        numberD,
                      },
                      { withCredentials: true }
                    );
                    Toast.fire({
                      icon: "success",
                      title: `has creado una promocion con exito, codigo ${res.data.promotion.code}, que te otorga un descuento del ${res.data.promotion.descuento} de descuento`,
                    });

                    dis(addPromo(res.data.promotion));
                  }
                }}
              >
                Promo <IoTicket />
              </Nav.Link>
              <Nav.Link
                onClick={async () => {
                  navi("/promos");
                }}
              >
                Tus promociones
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              {user.name ? (
                <Navbar.Brand>
                  Signed as {user.name}, <a onClick={logout}>logout</a>
                </Navbar.Brand>
              ) : location.pathname !== "/login" ? (
                <a href="/login">login</a>
              ) : (
                <a href="/register">Register</a>
              )}
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarF;
