// import { Input } from "antd";
// import { Controller, useFormContext } from "react-hook-form";

// type TextAreaProps = {
//   name: string;
//   label?: string;
//   rows?: number;
//   value?: string;
//   placeholder?: string;
// };

// const FormTextArea = ({
//   name,
//   label,
//   rows,
//   value,
//   placeholder,
// }: TextAreaProps) => {
//   const { control } = useFormContext();
//   return (
//     <div className={`flex flex-col  w-full`}>
//       {label ? label : null}
//       <Controller
//         name={name}
//         control={control}
//         render={({ field }) => (
//           <Input.TextArea
//             rows={rows}
//             placeholder={placeholder}
//             {...field}
//             defaultValue={value}
//           />
//         )}
//       />
//     </div>
//   );
// };

// export default FormTextArea;

import { Controller, useFormContext } from "react-hook-form";

type TextAreaProps = {
  name: string;
  label?: string;
  rows?: number;
  value?: string;
  placeholder?: string;
};

const FormTextArea = ({
  name,
  label,
  rows = 4,
  value,
  placeholder,
}: TextAreaProps) => {
  const { control } = useFormContext();
  return (
    <div className="flex flex-col w-full mb-4">
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {label}
        </label>
      )}
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <textarea
            rows={rows}
            placeholder={placeholder}
            {...field}
            defaultValue={value}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        )}
      />
    </div>
  );
};

export default FormTextArea;
