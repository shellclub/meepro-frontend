import { ToastContainer, ToastOptions, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Toastify = () => {
  return (
    <>
      <ToastContainer
        position="top-right"
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
};

export const showToast = (message: string, options?: ToastOptions) => {
  toast(message, options);
};

export const showSuccessToast = (message: string, options?: ToastOptions) => {
  toast.success(message, options);
};

export const showErrorToast = (message: string, options?: ToastOptions) => {
  toast.error(message, options);
};

export default Toastify;
