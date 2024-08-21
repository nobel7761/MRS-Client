import StepperForm from "../shared/Forms/StepperForm";
import ClientInformationForm from "./ClientInformationForm";
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
      <h1 className="flex justify-center uppercase font-extrabold text-primary text-3xl">
        Be Our Precious Client
      </h1>
      <StepperForm
        submitHandler={(value) => handleStudentSubmit(value)}
        steps={steps}
      />
    </div>
  );
};

export default ClientRequisitionForm;
