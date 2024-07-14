// import { Col, Row } from "antd";
// import FormInput from "../shared/Forms/FormInput";

// const ServiceRequisitionForm = () => {
//   return (
//     <div>
//       <div
//         style={{
//           border: "1px solid #d9d9d9",
//           borderRadius: "5px",
//           padding: "15px",
//           marginBottom: "10px",
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
//               label="Company / Business Name"
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
//               label="Company / Business Address"
//             />
//           </Col>
//           <Col
//             className="gutter-row"
//             span={24}
//             style={{ marginBottom: "10px" }}
//           >
//             <FormInput
//               type="text"
//               name="client.mobile"
//               size="large"
//               label="Company / Business Contact Number"
//             />
//           </Col>
//           <Col
//             className="gutter-row"
//             span={24}
//             style={{ marginBottom: "10px" }}
//           >
//             <FormInput
//               type="text"
//               name="client.email"
//               size="large"
//               label="Company / Business Email"
//             />
//           </Col>

//           {/* <Col className="gutter-row" span={8} style={{ marginBottom: "10px" }}>
//             <FormSelect
//               size="large"
//               name="student.academicDepartment"
//               options={academicDepartmentOptions}
//               label="Academic Department"
//               placeholder="Select"
//             />
//           </Col>
//           <Col className="gutter-row" span={8} style={{ marginBottom: "10px" }}>
//             <FormSelect
//               size="large"
//               name="student.academicFaculty"
//               options={academicFacultyOptions}
//               label="Academic Faculty"
//               placeholder="Select"
//             />
//           </Col>
//           <Col className="gutter-row" span={8} style={{ marginBottom: "10px" }}>
//             <FormSelect
//               size="large"
//               name="student.academicSemester"
//               options={academicSemesterOptions}
//               label="Academic Semester"
//               placeholder="Select"
//             />
//           </Col>
//           <Col className="gutter-row" span={8} style={{ marginBottom: "10px" }}>
//             <FormSelect
//               size="large"
//               name="student.gender"
//               options={genderOptions}
//               label="Gender"
//               placeholder="Select"
//             />
//           </Col> */}
//         </Row>
//       </div>
//     </div>
//   );
// };

// export default ServiceRequisitionForm;

import FormInput from "../shared/Forms/FormInput";

const ServiceRequisitionForm = () => {
  return (
    <div>
      <div className="border border-gray-300 rounded p-4 mb-4">
        <p className="text-lg mb-2">Client Details Form</p>
        <div className="grid grid-cols-1 gap-4">
          <div className="mb-2">
            <FormInput
              type="text"
              name="client.name"
              size="large"
              label="Company / Business Name"
            />
          </div>
          <div className="mb-2">
            <FormInput
              type="text"
              name="client.address"
              size="large"
              label="Company / Business Address"
            />
          </div>
          <div className="mb-2">
            <FormInput
              type="text"
              name="client.mobile"
              size="large"
              label="Company / Business Contact Number"
            />
          </div>
          <div className="mb-2">
            <FormInput
              type="text"
              name="client.email"
              size="large"
              label="Company / Business Email"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceRequisitionForm;
