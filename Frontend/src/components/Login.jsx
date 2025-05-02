import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Container } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../state/user";
import { useSelector } from "react-redux";
import { axios, getToken } from "../utils/axios";
import { useNavigate } from "react-router";

function LoginForm() {
  const dis = useDispatch();
  const navi = useNavigate();
  
  const [email, setMail] = useState("");
  const [password, setPass] = useState("");
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
            type="button"
            onClick={async () => {
              console.log(email, password);
              await getToken();

              const response = await axios.post(
                "http://localhost:8000/login",
                {
                  email,
                  password,
                },
                { withCredentials: true }
              );
              dis(setUser(response.data.user));
              navi("/");
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
