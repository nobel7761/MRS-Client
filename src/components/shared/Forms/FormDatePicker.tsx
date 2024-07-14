// import { DatePicker, DatePickerProps, Input } from "antd";
// import { Controller, useFormContext } from "react-hook-form";
// import dayjs, { Dayjs } from "dayjs";

// type UMDatePikerProps = {
//   onChange?: (valOne: Dayjs | null, valTwo: string) => void;
//   name: string;
//   label?: string;
//   value?: Dayjs;
//   size?: "large" | "small";
// };

// const FormDatePicker = ({
//   name,
//   label,
//   onChange,
//   size = "large",
// }: UMDatePikerProps) => {
//   const { control, setValue } = useFormContext();

//   const handleOnChange: DatePickerProps["onChange"] = (date, dateString) => {
//     onChange ? onChange(date, dateString as string) : null;
//     setValue(name, dateString);
//   };

//   return (
//     <div>
//       {label ? label : null}
//       <br />
//       <Controller
//         name={name}
//         control={control}
//         render={({ field }) => (
//           <DatePicker
//             value={dayjs(field.value) || ""}
//             size={size}
//             onChange={handleOnChange}
//             style={{ width: "100%" }}
//           />
//         )}
//       />
//     </div>
//   );
// };

// export default FormDatePicker;

import { Controller, useFormContext } from "react-hook-form";
import DatePicker from "react-datepicker";

type UMDatePikerProps = {
  onChange?: (valOne: Date | null, valTwo: string) => void;
  name: string;
  label?: string;
  value?: Date;
  size?: "large" | "small";
};

const FormDatePicker = ({
  name,
  label,
  onChange,
  size = "large",
}: UMDatePikerProps) => {
  const { control, setValue } = useFormContext();

  const handleOnChange = (date: Date | null, dateString: string) => {
    onChange ? onChange(date, dateString) : null;
    setValue(name, dateString);
  };

  return (
    <div className="mb-4">
      {label && (
        <label className="block text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <br />
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <DatePicker
            selected={(field.value && new Date(field.value)) || null}
            onChange={(date) => {
              const dateString = date ? date.toISOString() : "";
              handleOnChange(date, dateString);
            }}
            className={`mt-1 block w-full ${
              size === "large" ? "py-2 px-3" : "py-1 px-2"
            } border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
          />
        )}
      />
    </div>
  );
};

export default FormDatePicker;
