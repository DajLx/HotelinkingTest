import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Container } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../state/user";
import { useSelector } from "react-redux";

function LoginForm() {
  const dis = useDispatch();
  const user = useSelector((state) => state.user);
  useEffect(() => {
    console.log(user);
  }, [user]);
  const [mail, setMail] = useState("");
  const [pass, setPass] = useState("");
  return (
    <div style={{ height: "100vh", display: "flex", alignItems: "center" }}>
      <Container style={{ width: "45% " }}>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={(e) => {
                setMail(e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => {
                setPass(e.target.value);
              }}
            />
          </Form.Group>

          <Button
            variant="primary"
            onClick={() => {
              dis(setUser({ mail, clave: pass }));
              console.log(user);
            }}
          >
            Inicia sesion
          </Button>
        </Form>
      </Container>
    </div>
  );
}

export default LoginForm;
