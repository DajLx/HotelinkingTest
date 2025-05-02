import React from "react";
import { InputGroup, ListGroup, Form, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { axios, getToken } from "../utils/axios";
import { checkCode } from "../state/promos";
import Swal from "sweetalert2";
import { Toast } from "../utils/swal";

const Promos = () => {
  
  const promos = useSelector((state) => state.promos);
  const dist = useDispatch();
  console.log();
  return (
    <Container style={{ padding: "3rem" }}>
      <Row>
        {promos.map((promoLooper) => {
          return (
            <InputGroup style={{ marginBottom: "1rem" }} key={promoLooper.id}>
              <InputGroup.Radio
                aria-label="Radio button for following text input"
                checked={promoLooper.canjeado ? true : false}
                onChange={async () => {
                  Swal.fire({
                    title: "confimacion",
                    text: "estas seguro que quieres continuar?",
                    icon: "question",
                    showDenyButton: true,
                    confirmButtonText: "si",
                  }).then(async (respo) => {
                    if (respo.value) {
                      Toast.fire({
                        icon: "success",
                        title: "Codigo canjeado!",
                      });
                      await getToken();
                      const res = await axios.put(
                        "http://localhost:8000/checkCode",
                        {
                          code: promoLooper.id,
                        },
                        { withCredentials: true }
                      );
                      console.log(promoLooper);
                      if (
                        res.data.message === "Código canjeado correctamente."
                      ) {
                        dist(checkCode(promoLooper.id));
                      }
                    } else {
                        Toast.fire({
                            icon: "info",
                            title: "Codigo no canjeado!",
                          });
                    }
                  });
                }}
              />
              <Form.Control
                aria-label="Text input with radio button"
                readOnly={true}
                placeholder={`codigo de ${promoLooper.descuento} de descuento ${promoLooper.code} `}
              />
            </InputGroup>
          );
        })}
      </Row>
    </Container>
  );
};

export default Promos;
//
