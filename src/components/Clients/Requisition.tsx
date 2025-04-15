import { archivo } from "@/fonts";
import StepperForm from "../shared/Forms/StepperForm";
import ClientInformationForm from "./ClientInformationForm";
import ContactPersonInformationForm from "./ContactPersonInformationForm";
import ServiceRequisitionForm from "./ServiceRequisitionForm";

const ClientRequisitionForm = () => {
  const steps = [
    {
      title: "Client Information",
      content: <ClientInformationForm />,
    },
    {
      title: "Contact Person Information",
      content: <ContactPersonInformationForm />,
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
      <h1
        className={`flex justify-center uppercase font-extrabold text-primary text-3xl ${archivo.className}`}
      >
        Start Hiring Reliable Staff Today
      </h1>
      <StepperForm
        submitHandler={(value) => handleStudentSubmit(value)}
        steps={steps}
      />
    </div>
  );
};

export default ClientRequisitionForm;
