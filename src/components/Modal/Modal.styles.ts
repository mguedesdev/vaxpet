import styled from 'styled-components';

export const Overlay = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: black;
  opacity: ${props => (props.isOpen ? 0.7 : 0)};
  transition: opacity 0.6s ease;
  pointer-events: ${props => (props.isOpen ? 'auto' : 'none')};
  z-index: 999;
`;

export const ModalContent = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  /* background-color: white; */
  /* padding: 2rem; */
  z-index: 1000;
  /* box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.3); */
  /* border-radius: 8px; */
`;
