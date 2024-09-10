import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

function ToOffer() {
  const [selectedService, setSelectedService] = useState("-SELECT-");
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  const handleServiceSelect = (service) => {
    setSelectedService(service);
  };
  return (
    <div className="offer-container">
      <h1
        style={{
          color: "white",
          textAlign: "center",
          marginBottom: "5%",
          fontWeight: "bolder",
        }}
      >
        REGISTER TO OFFER SERVICES
      </h1>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="validationCustom01">
            <Form.Label>First name</Form.Label>
            <Form.Control required type="text" placeholder="First name" />
            <Form.Control.Feedback type="invalid">
              Please provide a valid name.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom02">
            <Form.Label>Last name</Form.Label>
            <Form.Control required type="text" placeholder="Last name" />
            <Form.Control.Feedback type="invalid">
              Please provide a valid name.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustomUsername">
            <Form.Label>Email ID</Form.Label>
            <InputGroup hasValidation>
              <Form.Control
                type="email"
                placeholder="example@gmail.com"
                required
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid email id.
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} md="6" controlId="validationCustom03">
            <Form.Label>City</Form.Label>
            <Form.Control type="text" placeholder="City" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid city.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationCustom04">
            <Form.Label>State</Form.Label>
            <Form.Control type="text" placeholder="State" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid state.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationCustom05">
            <Form.Label>Zip</Form.Label>
            <Form.Control type="number" placeholder="Zip" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid zip.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} md="12" controlId="validationCustom09">
            <Form.Label>Service you Offer</Form.Label>
            <InputGroup className="mb-3">
              <DropdownButton
                variant="outline-secondary"
                title="Select Service"
                id="input-group-dropdown-1"
                onSelect={handleServiceSelect}
              >
                <Dropdown.Item eventKey="-SELECT-">-SELECT-</Dropdown.Item>
                <Dropdown.Item eventKey="Home Deep Cleaning Service">
                  Home Deep Cleaning Service
                </Dropdown.Item>
                <Dropdown.Item eventKey="NRI Home and Maintenance Services">
                  NRI Home and Maintenance Services
                </Dropdown.Item>
                <Dropdown.Item eventKey="Office Cleaning Services">
                  Office Cleaning Services
                </Dropdown.Item>
                <Dropdown.Item eventKey="Move-in/Moveout Cleaning">
                  Move-in/Moveout Cleaning
                </Dropdown.Item>
                <Dropdown.Item eventKey="Carpet Cleaning Service">
                  Carpet Cleaning Service
                </Dropdown.Item>
                <Dropdown.Item eventKey="Sofa Cleaning Service">
                  Sofa Cleaning Service
                </Dropdown.Item>
                <Dropdown.Item eventKey="Disinfection and Sanitizing Services">
                  Disinfection and Sanitizing Services
                </Dropdown.Item>
              </DropdownButton>
              <Form.Control
                aria-label="Text input with dropdown button"
                value={selectedService}
              />
            </InputGroup>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="validationCustom06">
            <Form.Label>Phone Number</Form.Label>
            <InputGroup hasValidation>
              <InputGroup.Text id="inputGroupPrepend">+91</InputGroup.Text>
              <Form.Control
                type="number"
                placeholder="Phone number"
                aria-describedby="inputGroupPrepend"
                required
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid number.
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom07">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid state.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom08">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Confirm Password"
              required
            />
            <Form.Control.Feedback type="invalid">
              Password doesnt match.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Form.Group className="mb-3">
          <Form.Check
            required
            label="Agree to terms and conditions"
            feedback="You must agree before submitting."
            feedbackType="invalid"
          />
        </Form.Group>
        <Button type="submit">Submit form</Button>
      </Form>
    </div>
  );
}

export default ToOffer;
