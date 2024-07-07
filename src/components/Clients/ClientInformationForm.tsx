import { Button, Col, Row } from "antd";
import React, { useState } from "react";
import FormInput from "../shared/Forms/FormInput";
import { DeleteOutlined } from "@ant-design/icons";

const ClientInformationForm = () => {
  const [contactPersons, setContactPersons] = useState([{ id: Date.now() }]);

  const addContactPerson = () => {
    setContactPersons([...contactPersons, { id: Date.now() }]);
  };

  const removeContactPerson = (id: number) => {
    setContactPersons(contactPersons.filter((person) => person.id !== id));
  };

  return (
    <>
      <div
        style={{
          border: "1px solid #d9d9d9",
          borderRadius: "5px",
          padding: "15px",
          marginBottom: "25px",
        }}
      >
        <p
          style={{
            fontSize: "18px",
            marginBottom: "10px",
          }}
        >
          Client Details Form
        </p>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col
            className="gutter-row"
            span={24}
            style={{ marginBottom: "10px" }}
          >
            <FormInput
              type="text"
              name="client.name"
              size="large"
              placeholder="Company Name"
            />
          </Col>
          <Col
            className="gutter-row"
            span={24}
            style={{ marginBottom: "10px" }}
          >
            <FormInput
              type="text"
              name="client.address"
              size="large"
              placeholder="Company Address"
            />
          </Col>
          <Col
            className="gutter-row"
            span={24}
            style={{ marginBottom: "10px" }}
          >
            <FormInput
              type="text"
              name="client.branch"
              size="large"
              placeholder="Company Branch"
            />
          </Col>
        </Row>
      </div>

      {contactPersons.map((person, index) => (
        <div
          key={person.id}
          style={{
            border: "1px solid #d9d9d9",
            borderRadius: "5px",
            padding: "15px",
            marginBottom: "25px",
            position: "relative",
          }}
        >
          <p
            style={{
              fontSize: "18px",
              marginBottom: "10px",
            }}
          >
            Contact Person Details{" "}
            {index === 0 && contactPersons.length > 1 ? 1 : null}
            {index !== 0 ? index + 1 : null}
          </p>
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col
              className="gutter-row"
              span={12}
              style={{ marginBottom: "10px" }}
            >
              <FormInput
                type="text"
                name={`client.contactPersons[${index}].name`}
                size="large"
                placeholder="Name"
              />
            </Col>
            <Col
              className="gutter-row"
              span={12}
              style={{ marginBottom: "10px" }}
            >
              <FormInput
                type="text"
                name={`client.contactPersons[${index}].designation`}
                size="large"
                placeholder="Designation"
              />
            </Col>
          </Row>
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col
              className="gutter-row"
              span={12}
              style={{ marginBottom: "10px" }}
            >
              <FormInput
                type="text"
                name={`client.contactPersons[${index}].email`}
                size="large"
                placeholder="Email"
              />
            </Col>
            <Col
              className="gutter-row"
              span={12}
              style={{ marginBottom: "10px" }}
            >
              <FormInput
                type="text"
                name={`client.contactPersons[${index}].mobile`}
                size="large"
                placeholder="Contact Number"
              />
            </Col>
          </Row>
          {contactPersons.length < 3 && index === 0 && (
            <Button
              type="primary"
              onClick={addContactPerson}
              style={{
                position: "absolute",
                color: "white",
                top: "-15px",
                right: "10px",
                backgroundColor: "#2663EB",
              }}
            >
              Add More Person
            </Button>
          )}
          {index > 0 && (
            <Button
              type="primary"
              danger
              onClick={() => removeContactPerson(person.id)}
              style={{
                position: "absolute",
                color: "white",
                top: "-15px",
                right: "10px",
                backgroundColor: "red",
                padding: "2px 5px",
                borderRadius: "5px",
              }}
            >
              <DeleteOutlined style={{ fontSize: "20px" }} />
            </Button>
          )}
        </div>
      ))}
    </>
  );
};

export default ClientInformationForm;
