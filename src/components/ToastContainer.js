import React from 'react';
import styled from 'styled-components';
import { createPortal } from 'react-dom';
import Toast from './Toast';

const positions = {
  'top-right': 'top: 10px; right: 10px;',
  'bottom-center': 'bottom: 10px; left: 50%; transform: translateX(-50%);',
};

const Container = styled.div`
  position: fixed;
  z-index: 1000;
  ${({ position }) => positions[position]};
`;

const ToastContainer = ({ toasts, removeToast }) => {
  return createPortal(
    <Container position="top-right">
      {toasts.map(toast => (
        <Toast key={toast.id} toast={toast} removeToast={removeToast} />
      ))}
    </Container>,
    document.body
  );
};

export default ToastContainer;
