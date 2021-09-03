import React from 'react';
import {
  ToastContainer as CustomToastContainer,
  toast as customToast,
} from 'react-toastify';

const ToastContainer = () => {
  return (
    <>
      <CustomToastContainer
        position="top-left"
        autoClose={1500}
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

const toastError = (message: string) =>
  customToast.error(message, {
    position: 'top-left',
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });

const toastSuccess = (message: string) =>
  customToast.success(message, {
    position: 'top-left',
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });

export { ToastContainer, toastError, toastSuccess };
