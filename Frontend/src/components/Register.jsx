import React from "react";
import { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { axios, getToken } from "../utils/axios";
import { useDispatch } from "react-redux";
import { setUser } from "../state/user";
import { useNavigate } from "react-router";

const Register = () => {
  const [email, setMail] = useState("");
  const [password, setPass] = useState("");
  const [name, setName] = useState("");
  const dis = useDispatch();
  const navi = useNavigate();
  return (
    <div style={{ height: "100vh", display: "flex", alignItems: "center" }}>
      <Container style={{ width: "45% " }}>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              maxLength={20}
              placeholder="Enter Name"
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              maxLength={255}
              placeholder="Enter email"
              onChange={(e) => setMail(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              minLength={8}
              onChange={(e) => setPass(e.target.value)}
            />
          </Form.Group>

          <Button
            variant="primary"
            onClick={async () => {
              await getToken();
              const userR = await axios.post(
                "http://localhost:8000/register",
                { email, name, password },
                { withCredentials: true }
              );
              dis(setUser(userR.data.user));
              navi("/");
            }}
          >
            Registrate
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default Register;
