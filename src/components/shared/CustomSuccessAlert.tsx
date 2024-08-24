// CustomSuccessAlert.js
import swal from "sweetalert";

interface CustomSuccessAlertProps {
  // onConfirm: () => void;
  onCancel: () => void;
}

const CustomSuccessAlert = ({
  // onConfirm,
  onCancel,
}: CustomSuccessAlertProps) => {
  return swal({
    title: "Successfully Submitted the Form.",
    icon: "success",
    // buttons: {
    //   confirm: {
    //     text: "Delete",
    //     value: true,
    //     visible: true,
    //     className: "btn btn-success",
    //     closeModal: true,
    //   },
    // },
  }).then(() => {
    onCancel();
  });
};

export default CustomSuccessAlert;
