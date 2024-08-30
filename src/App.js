// App.js
import React from 'react';
import { ToastProvider, useToast } from '../src/components/ToastContext';


const App = () => {
  const { addToast } = useToast();

  const triggerToast = () => {
    addToast('This is an info toast!', {
      type: 'info',
      id: Math.random(),
      delay: 5000,
      position: 'top-right'
    });
  };

  return (
    <div>
      <h1>Toast Notification</h1>
      <button onClick={triggerToast}>Show Info Toast</button>
    </div>
  );
};

export default function WrappedApp() {
  return (
    <ToastProvider>
      <App />
    </ToastProvider>
  );
}
