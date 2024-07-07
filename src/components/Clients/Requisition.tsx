import StepperForm from "../shared/Forms/StepperForm";
import ClientInformationForm from "./ClientInformationForm";
import ServiceAgreementForm from "./ServiceAgreementForm";
import ServiceRequisitionForm from "./ServiceRequisitionForm";

const ClientRequisitionForm = () => {
  const steps = [
    {
      title: "Client Information",
      content: <ClientInformationForm />,
    },
    {
      title: "Service Requisition",
      content: <ServiceRequisitionForm />,
    },
    {
      title: "Service Aggrement",
      content: <ServiceAgreementForm />,
    },
  ];

  const handleStudentSubmit = (data: any) => {
    try {
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Create Student</h1>
      <StepperForm
        submitHandler={(value) => handleStudentSubmit(value)}
        steps={steps}
      />
    </div>
  );
};

export default ClientRequisitionForm;
