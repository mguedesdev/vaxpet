import React, { useEffect } from 'react';
import { ModalContent, Overlay } from './Modal.styles';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  isScrollable?: boolean;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
  isScrollable = true,
}) => {
  useEffect(() => {
    if (isOpen && !isScrollable) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  return (
    <>
      <Overlay isOpen={isOpen} onClick={onClose} />
      {isOpen && <ModalContent>{children}</ModalContent>}
    </>
  );
};

export default Modal;
