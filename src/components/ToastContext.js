import React, { createContext, useContext, useState, useCallback } from 'react';
import ToastContainer from './ToastContainer';

const ToastContext = createContext();

export const useToast = () => useContext(ToastContext);

export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);

  const addToast = useCallback((message, options) => {
    setToasts(prevToasts => [...prevToasts, { message, ...options }]);
  }, []);

  const removeToast = useCallback(id => {
    setToasts(prevToasts => prevToasts.filter(toast => toast.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ addToast }}>
      {children}
      <ToastContainer toasts={toasts} removeToast={removeToast} />
    </ToastContext.Provider>
  );
};
