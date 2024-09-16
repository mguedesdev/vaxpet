import styled from 'styled-components';
import Image from 'next/image';

export const ModalContent = styled.div`
  display: flex;
  justify-content: center;
  border-radius: 2rem;
  background-color: white;
  box-shadow: 0px 4px 20px 11px rgba(0, 0, 0, 0.25);
  overflow: hidden;
  max-width: 750px;
  width: 100%;
  position: relative;

  @media (max-width: 768px) {
    height: 60vh;
    max-width: 100%;
  }
`;

export const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 500px;
  max-width: 50%;
  height: 650px;
  overflow: hidden;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const CustomImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const FormContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  max-width: 60%;
  @media (max-width: 768px) {
    max-width: 100%;
    width: 100%;
    padding: 1rem;
  }
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
`;

export const TitleForm = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: 1rem;
`;

export const FormInputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

export const Label = styled.label`
  font-size: 1.125rem;
  color: ${({ theme }) => theme.colors.black};
`;

export const Input = styled.input`
  padding: 0.65rem;
  border-radius: 0.5rem;
  border: 2px solid ${({ theme }) => theme.colors.grayLight};
  background-color: #f3f3f3;
  outline: none;
  font-size: 1rem;
  transition: all 0.3s;

  &:focus {
    border-color: #c4c4c4;
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray};
  }
`;

export const CustomButton = styled.button`
  padding: 1rem;
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: white;
  font-size: 1.25rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.4s;
  border: none;
  margin-top: 1rem;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryDark};
  }
`;

export const ActionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const LinkContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
  color: ${({ theme }) => theme.colors.primaryText};
  font-size: 0.85rem;
  font-weight: 700;
`;

export const LinkButton = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 0.85rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    text-decoration: underline;
  }
`;

export const BackButton = styled.button`
  position: absolute;
  top: 1rem;
  left: 1rem;
  background-color: transparent;
  border: none;
  cursor: pointer;
  transition: all 0.3s;
  z-index: 9999;

  &:hover {
    transform: scale(1.1);
  }

  svg {
    width: 2rem;
    height: 2rem;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }
`;
