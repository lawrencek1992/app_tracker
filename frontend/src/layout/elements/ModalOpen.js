import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import "./elements.css";

const ModalOpen = ({ modalContent }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  const handleSave = () => {
    setEmail(email);
    setPassword(password);
  };

  const handleClear = () => {
    setEmail("");
    setPassword("");
  };

  const handleShow = () => setShow(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <Button
        variant="outline-light"
        className="navigation"
        onClick={handleShow}
      >
        {modalContent}
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create Account</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                autoFocus
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            {email !== "" && password !== "" ? (
              <Form.Text className="text-muted">
                Email: {email} PassWord: {password}
              </Form.Text>
            ) : (
              ""
            )}
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save Changes
          </Button>
          <Button variant="warning" onClick={handleClear}>
            Clear Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalOpen;
