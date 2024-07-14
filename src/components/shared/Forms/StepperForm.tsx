// "use client";

// import React, { useEffect, useState } from "react";
// import { useForm, FormProvider } from "react-hook-form";
// import { useRouter } from "next/navigation";
// import {
//   getFromLocalStorage,
//   setToLocalStorage,
// } from "@/components/utils/local-storage";

// interface ISteps {
//   title?: string;
//   content?: React.ReactElement | React.ReactNode;
// }

// interface IStepsProps {
//   steps: ISteps[];
//   submitHandler: (el: any) => void;
//   navigateLink?: string;
// }

// const StepperForm = ({ steps, submitHandler, navigateLink }: IStepsProps) => {
//   const router = useRouter();
//   const [current, setCurrent] = useState<number>(
//     !!getFromLocalStorage("step")
//       ? Number(JSON.parse(getFromLocalStorage("step") as string).step)
//       : 0
//   );

//   useEffect(() => {
//     setToLocalStorage("step", JSON.stringify({ step: current }));
//   }, [current]);

//   const next = () => {
//     setCurrent(current + 1);
//   };

//   const prev = () => {
//     setCurrent(current - 1);
//   };

//   const methods = useForm();
//   const { handleSubmit, reset } = methods;

//   const handleStudentOnSubmit = (data: any) => {
//     submitHandler(data);
//     reset();
//     setToLocalStorage("step", JSON.stringify({ step: 0 }));
//     navigateLink && router.push(navigateLink);
//   };

//   return (
//     <>
//       <div className="flex justify-center mb-4">
//         {steps.map((step, index) => (
//           <div
//             key={index}
//             className={`flex items-center ${
//               index < steps.length - 1 ? "mr-2" : ""
//             }`}
//           >
//             <div
//               className={`w-8 h-8 flex items-center justify-center rounded-full ${
//                 current === index
//                   ? "bg-blue-500 text-white"
//                   : "bg-gray-300 text-gray-700"
//               }`}
//             >
//               {index + 1}
//             </div>
//             {index < steps.length - 1 && (
//               <div className="flex-1 h-1 bg-gray-300"></div>
//             )}
//           </div>
//         ))}
//       </div>
//       <FormProvider {...methods}>
//         <form onSubmit={handleSubmit(handleStudentOnSubmit)}>
//           <div>{steps[current].content}</div>
//           <div className="mt-6">
//             {current < steps.length - 1 && (
//               <button
//                 type="button"
//                 className="bg-blue-500 text-white px-4 py-2 rounded"
//                 onClick={() => next()}
//               >
//                 Next
//               </button>
//             )}
//             {current === steps.length - 1 && (
//               <button
//                 type="submit"
//                 className="bg-blue-500 text-white px-4 py-2 rounded"
//                 onClick={() => alert("Processing complete!")}
//               >
//                 Done
//               </button>
//             )}
//             {current > 0 && (
//               <button
//                 type="button"
//                 className="bg-gray-500 text-white px-4 py-2 rounded ml-2"
//                 onClick={() => prev()}
//               >
//                 Previous
//               </button>
//             )}
//           </div>
//         </form>
//       </FormProvider>
//     </>
//   );
// };

// export default StepperForm;

"use client";

import React, { useEffect, useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { useRouter } from "next/navigation";
import {
  getFromLocalStorage,
  setToLocalStorage,
} from "@/components/utils/local-storage";

interface ISteps {
  title: string;
  content: React.ReactElement | React.ReactNode;
}

interface IStepsProps {
  steps: ISteps[];
  submitHandler: (data: any) => void;
  navigateLink?: string;
}

const StepperForm = ({ steps, submitHandler, navigateLink }: IStepsProps) => {
  const router = useRouter();
  const [current, setCurrent] = useState<number>(
    !!getFromLocalStorage("step")
      ? Number(JSON.parse(getFromLocalStorage("step") as string).step)
      : 0
  );

  useEffect(() => {
    setToLocalStorage("step", JSON.stringify({ step: current }));
  }, [current]);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const methods = useForm();
  const { handleSubmit, reset } = methods;

  const handleStudentOnSubmit = (data: any) => {
    submitHandler(data);
    reset();
    setToLocalStorage("step", JSON.stringify({ step: 0 }));
    navigateLink && router.push(navigateLink);
  };

  return (
    <>
      <ol className="flex items-center w-full text-sm font-medium text-center text-gray-500 dark:text-gray-400 sm:text-base mb-4">
        {steps.map((step, index) => (
          <li
            key={index}
            className={`flex items-center ${
              index < steps.length - 1
                ? "after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700"
                : ""
            }`}
          >
            <span
              className={`flex items-center ${
                current === index
                  ? "text-blue-600 dark:text-blue-500"
                  : "text-gray-500 dark:text-gray-400"
              }`}
            >
              <div
                className={`w-8 h-8 flex items-center justify-center rounded-full ${
                  current === index
                    ? "bg-blue-500 text-white"
                    : "bg-gray-300 text-gray-700"
                }`}
              >
                {index + 1}
              </div>
              <span className="mx-2">{step.title}</span>
            </span>
          </li>
        ))}
      </ol>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(handleStudentOnSubmit)}>
          <div>{steps[current].content}</div>
          <div className="mt-6">
            {current < steps.length - 1 && (
              <button
                type="button"
                className="bg-blue-500 text-white px-4 py-2 rounded"
                onClick={next}
              >
                Next
              </button>
            )}
            {current === steps.length - 1 && (
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded"
              >
                Done
              </button>
            )}
            {current > 0 && (
              <button
                type="button"
                className="bg-gray-500 text-white px-4 py-2 rounded ml-2"
                onClick={prev}
              >
                Previous
              </button>
            )}
          </div>
        </form>
      </FormProvider>
    </>
  );
};

export default StepperForm;
