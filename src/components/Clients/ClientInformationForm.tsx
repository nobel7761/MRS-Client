// import { Button, Col, Row } from "antd";
// import { useState } from "react";
// import FormInput from "../shared/Forms/FormInput";
// import { DeleteOutlined } from "@ant-design/icons";

// const ClientInformationForm = () => {
//   const [contactPersons, setContactPersons] = useState([{ id: Date.now() }]);

//   const addContactPerson = () => {
//     setContactPersons([...contactPersons, { id: Date.now() }]);
//   };

//   const removeContactPerson = (id: number) => {
//     setContactPersons(contactPersons.filter((person) => person.id !== id));
//   };

//   return (
//     <>
//       <div
//         style={{
//           border: "1px solid #d9d9d9",
//           borderRadius: "5px",
//           padding: "15px",
//           marginBottom: "25px",
//         }}
//       >
//         <p
//           style={{
//             fontSize: "18px",
//             marginBottom: "10px",
//           }}
//         >
//           Client Details Form
//         </p>
//         <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
//           <Col
//             className="gutter-row"
//             span={24}
//             style={{ marginBottom: "10px" }}
//           >
//             <FormInput
//               type="text"
//               name="client.name"
//               size="large"
//               placeholder="Company Name"
//             />
//           </Col>
//           <Col
//             className="gutter-row"
//             span={24}
//             style={{ marginBottom: "10px" }}
//           >
//             <FormInput
//               type="text"
//               name="client.address"
//               size="large"
//               placeholder="Company Address"
//             />
//           </Col>
//           <Col
//             className="gutter-row"
//             span={24}
//             style={{ marginBottom: "10px" }}
//           >
//             <FormInput
//               type="text"
//               name="client.branch"
//               size="large"
//               placeholder="Company Branch"
//             />
//           </Col>
//         </Row>
//       </div>

//       {contactPersons.map((person, index) => (
//         <div
//           key={person.id}
//           style={{
//             border: "1px solid #d9d9d9",
//             borderRadius: "5px",
//             padding: "15px",
//             marginBottom: "25px",
//             position: "relative",
//           }}
//         >
//           <p
//             style={{
//               fontSize: "18px",
//               marginBottom: "10px",
//             }}
//           >
//             Contact Person Details{" "}
//             {index === 0 && contactPersons.length > 1 ? 1 : null}
//             {index !== 0 ? index + 1 : null}
//           </p>
//           <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
//             <Col
//               className="gutter-row"
//               span={12}
//               style={{ marginBottom: "10px" }}
//             >
//               <FormInput
//                 type="text"
//                 name={`client.contactPersons[${index}].name`}
//                 size="large"
//                 placeholder="Name"
//               />
//             </Col>
//             <Col
//               className="gutter-row"
//               span={12}
//               style={{ marginBottom: "10px" }}
//             >
//               <FormInput
//                 type="text"
//                 name={`client.contactPersons[${index}].designation`}
//                 size="large"
//                 placeholder="Designation"
//               />
//             </Col>
//           </Row>
//           <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
//             <Col
//               className="gutter-row"
//               span={12}
//               style={{ marginBottom: "10px" }}
//             >
//               <FormInput
//                 type="text"
//                 name={`client.contactPersons[${index}].email`}
//                 size="large"
//                 placeholder="Email"
//               />
//             </Col>
//             <Col
//               className="gutter-row"
//               span={12}
//               style={{ marginBottom: "10px" }}
//             >
//               <FormInput
//                 type="text"
//                 name={`client.contactPersons[${index}].mobile`}
//                 size="large"
//                 placeholder="Contact Number"
//               />
//             </Col>
//           </Row>
//           {contactPersons.length < 3 && index === 0 && (
//             <Button
//               type="primary"
//               onClick={addContactPerson}
//               style={{
//                 position: "absolute",
//                 color: "white",
//                 top: "-15px",
//                 right: "10px",
//                 backgroundColor: "#2663EB",
//               }}
//             >
//               Add More Person
//             </Button>
//           )}
//           {index > 0 && (
//             <Button
//               type="primary"
//               danger
//               onClick={() => removeContactPerson(person.id)}
//               style={{
//                 position: "absolute",
//                 color: "white",
//                 top: "-15px",
//                 right: "10px",
//                 backgroundColor: "red",
//                 padding: "2px 5px",
//                 borderRadius: "5px",
//               }}
//             >
//               <DeleteOutlined style={{ fontSize: "20px" }} />
//             </Button>
//           )}
//         </div>
//       ))}
//     </>
//   );
// };

// export default ClientInformationForm;

"use client";

import React, { useState } from "react";
import FormInput from "../shared/Forms/FormInput";
import { FaTrashAlt } from "react-icons/fa";

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
      <div className="border border-gray-300 rounded p-4 mb-6">
        <p className="text-lg mb-2">Client Details Form</p>
        <div className="grid grid-cols-1 gap-4">
          <div className="mb-2">
            <FormInput
              type="text"
              name="client.name"
              size="large"
              placeholder="Company Name"
            />
          </div>
          <div className="mb-2">
            <FormInput
              type="text"
              name="client.address"
              size="large"
              placeholder="Company Address"
            />
          </div>
          <div className="mb-2">
            <FormInput
              type="text"
              name="client.branch"
              size="large"
              placeholder="Company Branch"
            />
          </div>
        </div>
      </div>

      {contactPersons.map((person, index) => (
        <div
          key={person.id}
          className="relative border border-gray-300 rounded p-4 mb-6"
        >
          <p className="text-lg mb-2">
            Contact Person Details{" "}
            {index === 0 && contactPersons.length > 1 ? 1 : null}
            {index !== 0 ? index + 1 : null}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="mb-2">
              <FormInput
                type="text"
                name={`client.contactPersons[${index}].name`}
                size="large"
                placeholder="Name"
              />
            </div>
            <div className="mb-2">
              <FormInput
                type="text"
                name={`client.contactPersons[${index}].designation`}
                size="large"
                placeholder="Designation"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="mb-2">
              <FormInput
                type="text"
                name={`client.contactPersons[${index}].email`}
                size="large"
                placeholder="Email"
              />
            </div>
            <div className="mb-2">
              <FormInput
                type="text"
                name={`client.contactPersons[${index}].mobile`}
                size="large"
                placeholder="Contact Number"
              />
            </div>
          </div>
          {contactPersons.length < 3 && index === 0 && (
            <button
              type="button"
              onClick={addContactPerson}
              className="absolute top-0 right-0 mt-2 mr-2 bg-blue-500 text-white px-2 py-1 rounded"
            >
              Add More Person
            </button>
          )}
          {index > 0 && (
            <button
              type="button"
              onClick={() => removeContactPerson(person.id)}
              className="absolute top-0 right-0 mt-2 mr-2 bg-red-500 text-white p-1 rounded"
            >
              <FaTrashAlt size={20} />
            </button>
          )}
        </div>
      ))}
    </>
  );
};

export default ClientInformationForm;
