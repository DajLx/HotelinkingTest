import { Button, Card, Col, Container, Row } from "react-bootstrap";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { Toast } from "../utils/swal";

console.log("entre en el mainview");

const MainView = () => {
  const user = useSelector((state) => state.user);
  const offerts = useSelector((state) => state.offerts);
  useEffect(() => {
    console.log(user);
  }, [user]);
  console.log(user);
  const navi = useNavigate();
  const [description, setDescription] = useState(null);
  return (
    <Container>
      <Row>
        {}
        {offerts.map((ofertas) => {
          return (
            <Col key={ofertas.id} xs={6} style={{ border: "black solid  1px" }}>
              <Card>
                <Card.Img
                  variant="top"
                  src={ofertas.imgSrc}
                  style={{ height: "25rem" }}
                />
                <Card.Body>
                  <Card.Title>{ofertas.producto}</Card.Title>
                  <Card.Text>
                    Ahorre hasta un {ofertas.descuento} de descuento, disponible
                    hasta {ofertas.disponible_hasta}.
                  </Card.Text>
                  <Button
                    variant="primary"
                    style={{ marginRight: "1rem" }}
                    onClick={() => {
                      setDescription(
                        description === ofertas.id ? null : ofertas.id
                      );
                    }}
                  >
                    {description === ofertas.id
                      ? "Ocultar Descripcion"
                      : "Descripcion"}
                  </Button>
                  <Button
                    onClick={() => {
                      if (!user.name) {
                        navi("/login");
                      } else {
                        Toast.fire({
                          icon: "success",
                          title: "Comprado",
                        });
                      }
                    }}
                  >
                    Comprar {ofertas.precio_oferta}$
                  </Button>

                  <Card.Text style={{ marginTop: "1rem" }}>
                    {description === ofertas.id ? ofertas.descripcion : null}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};
export default MainView;
