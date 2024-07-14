import LoadingIcon from "@/components/shared/LoadingIcon";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import swal from "sweetalert";

const IntroForm = ({ onClose }: { onClose: () => void }) => {
  const { control, handleSubmit, reset } = useForm();
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (data: any) => {
    try {
      setIsLoading(true);
      const response = await fetch("/api/forms", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      reset();
      onClose();
      swal("Your form is submitted", "success");
    } catch (error) {
      swal("Failed to Submit", "error");
    } finally {
      setIsLoading(false); // Set loading state back to false
    }
  };
  return (
    <div>
      <form
        className="bg-white rounded  w-full "
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Name
          </label>
          <Controller
            name="name"
            defaultValue=""
            control={control}
            render={({ field }) => (
              <input
                {...field}
                type="name"
                required
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            )}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Email
          </label>
          <Controller
            name="email"
            defaultValue=""
            control={control}
            render={({ field }) => (
              <input
                {...field}
                type="email"
                required
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            )}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Phone
          </label>
          <Controller
            name="phone"
            defaultValue=""
            control={control}
            render={({ field }) => (
              <input
                {...field}
                type="tel"
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            )}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Message
          </label>
          <Controller
            name="message"
            defaultValue=""
            control={control}
            render={({ field }) => (
              <input
                {...field}
                type="text"
                required
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            )}
          />
        </div>

        <div className="mb-4 ">
          <button
            type="submit"
            disabled={isLoading}
            className={`bg-blue-500 flex justify-center gap-x-2 text-center rounded-md py-2 text-white cursor-pointer hover:bg-blue-700 w-full ${
              isLoading ? "cursor-not-allowed bg-blue-400" : null
            }`}
          >
            {isLoading && <LoadingIcon />}
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default IntroForm;
