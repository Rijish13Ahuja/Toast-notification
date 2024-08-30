import { useEffect } from 'react';
import styled from '@emotion/styled';
import { FaInfoCircle, FaCheckCircle, FaExclamationTriangle, FaTimesCircle } from 'react-icons/fa';

const ToastMessage = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  background-color: ${({ type }) => {
    switch (type) {
      case 'success':
        return '#4CAF50';
      case 'error':
        return '#F44336';
      case 'warning':
        return '#FF9800';
      case 'info':
      default:
        return '#2196F3';
    }
  }};
  color: white;
  padding: 12px 16px;
  border-radius: 5px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
  opacity: 1;
  transform: translateY(0);

  &.fade-out {
    opacity: 0;
    transform: translateY(20px);
  }

  @media (max-width: 768px) {
    padding: 10px 14px;
    font-size: 14px;
  }
`;

const ToastIcon = styled.div`
  font-size: 24px;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

export const Toast = ({ toast, removeToast }) => {
  const { message, type, id } = toast;
  
  useEffect(() => {
    const timer = setTimeout(() => removeToast(id), 3000); // Auto-dismiss after 3 seconds
    return () => clearTimeout(timer);
  }, [id, removeToast]);

  return (
    <ToastMessage type={type}>
      <ToastIcon>
        {type === 'success' && <FaCheckCircle />}
        {type === 'error' && <FaTimesCircle />}
        {type === 'warning' && <FaExclamationTriangle />}
        {type === 'info' && <FaInfoCircle />}
      </ToastIcon>
      {message}
    </ToastMessage>
  );
};
export default Toast;