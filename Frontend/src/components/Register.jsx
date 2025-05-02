import React from "react";
import { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
const Register = () => {
  const [mail, setMail] = useState("");
  const [pass, setPass] = useState("");
  const [name, setName] = useState("");
  return (
    <div style={{ height: "100vh", display: "flex", alignItems: "center" }}>
      <Container style={{ width: "45% " }}>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={(e) => setMail(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => setPass(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Name"
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>

          <Button variant="primary" onClick={() => console.log(pass, mail)}>
            Registrate
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default Register;
