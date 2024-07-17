import { useState } from "react";
import FormDatePicker from "../shared/Forms/FormDatePicker";
import FormInput from "../shared/Forms/FormInput";
import FormInputGroup from "../shared/Forms/FormInputGroup";
import FormSelect from "../shared/Forms/FormSelect";
import FormTextArea from "../shared/Forms/FormTextArea";
import CustomAlert from "../shared/Alert";
import { FaTrashAlt } from "react-icons/fa";

const ServiceRequisitionForm = () => {
  const [requisitions, setRequisitions] = useState([{ id: Date.now() }]);

  const addRequisition = () => {
    setRequisitions([...requisitions, { id: Date.now() }]);
  };

  const confirmRemoveRequisition = (id: number) => {
    CustomAlert({
      onConfirm: () => removeRequisition(id),
      onCancel: () => console.log("Deletion cancelled"),
    });
  };

  const removeRequisition = (id: number) => {
    setRequisitions(requisitions.filter((person) => person.id !== id));
  };

  return (
    <div>
      {requisitions.map((requisition, index) => (
        <div
          key={index}
          className="relative border border-gray-300 rounded p-4 mb-6"
        >
          <p className="text-lg mb-2">
            Requisition Details{" "}
            {index === 0 && requisitions.length > 1 ? 1 : null}
            {index !== 0 ? index + 1 : null}
          </p>

          <div className="">
            <FormSelect
              name="requisition.position"
              size="large"
              placeholder="Select Position"
              options={[
                { label: "HR", value: "hr" },
                { label: "Engineer", value: "engineer" },
              ]}
            />
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <FormInput
                type="number"
                name="requisition.numberOfVacancy"
                size="large"
                placeholder="Number of vacancy"
              />

              <FormInput
                type="number"
                name="requisition.salary"
                size="large"
                placeholder="Salary"
              />

              <FormInput
                type="text"
                name="requisition.height"
                size="large"
                placeholder="Height"
              />

              <FormInput
                type="text"
                name="requisition.age"
                size="large"
                placeholder="Age"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <FormSelect
                name="requisition.gender"
                size="large"
                placeholder="Select Gender"
                options={[
                  { label: "Male", value: "male" },
                  { label: "Female", value: "female" },
                ]}
              />

              <FormSelect
                name="requisition.tips"
                size="large"
                placeholder="Tips System"
                options={[
                  { label: "Personal", value: "personal" },
                  { label: "Box System", value: "box" },
                  { label: "Not Applicable", value: "not applicable" },
                ]}
              />

              <FormSelect
                name="requisition.overTime"
                size="large"
                placeholder="Paid Overtime Facility"
                options={[
                  { label: "Applicable", value: "applicable" },
                  { label: "Not Applicable", value: "not applicable" },
                ]}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <FormInput
                type="number"
                name="requisition.workingHoursForSingleDay"
                size="large"
                placeholder="Working hours / day"
              />

              <FormDatePicker
                type="Time"
                name="requisition.workingHourEnds"
                placeholder="Starts at"
              />

              <FormDatePicker
                type="Time"
                name="requisition.workingHourStarts"
                placeholder="Ends at"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <FormSelect
                name="requisition.education"
                size="large"
                placeholder="Minimum Education"
                options={[
                  { label: "Class 5", value: "5" },
                  { label: "Class 8", value: "8" },
                  { label: "SSC", value: "ssc" },
                  { label: "HSC", value: "hsc" },
                  {
                    label: "University Student",
                    value: "university student",
                  },
                  { label: "Uneducated", value: "uneducated" },
                  { label: "Not Applicable", value: "not applicable" },
                ]}
              />

              <FormDatePicker
                name="requisition.joiningDate"
                placeholder="Joining Date"
                type="Date"
              />

              <FormInputGroup
                name="requisition.numberOfLeave"
                placeholder="Number of leave"
                type="number"
                options={[
                  { label: "Week", value: "week" },
                  { label: "Month", value: "Month" },
                ]}
              />
            </div>

            <FormTextArea
              name="requisition.responsibility"
              placeholder="Job Responsibility"
            />
          </div>

          {index === 0 && (
            <button
              type="button"
              onClick={addRequisition}
              className="absolute top-0 right-0 -mt-4 mr-2 bg-blue-500 text-white px-2 py-1 rounded"
            >
              Add More Person
            </button>
          )}

          {index > 0 && (
            <button
              type="button"
              onClick={() => confirmRemoveRequisition(requisition.id)}
              className="absolute top-0 right-0 -mt-4 mr-2 bg-red-500 text-white p-1 rounded"
            >
              <FaTrashAlt size={20} />
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default ServiceRequisitionForm;
