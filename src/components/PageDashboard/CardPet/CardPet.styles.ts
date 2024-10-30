import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.25);
  border-radius: 0.7rem;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export const PetImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60%;
  border-radius: 0.7rem 0.7rem 0 0;
  overflow: hidden;
  position: relative;

  img {
    transition: all 0.3s ease-in-out;
  }

  &:hover {
    img {
      transform: scale(1.1);
      transition: all 0.3s ease-in-out;
    }
  }
`;

export const PetImage = styled.img`
  width: 100%;
  object-fit: cover;
`;

export const Name = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.secondary};
`;

export const InfoText = styled.p`
  font-size: 1rem;
  font-weight: 500;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 0.5rem;
  width: 100%;
  height: 40%;
  justify-content: center;
`;

export const Button = styled.button`
  background-color: ${({ theme }) => `${theme.colors.primary}80`};
  position: absolute;
  width: 100%;
  height: 100%;
  color: white;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
  opacity: 0;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  transition: opacity 0.3s ease;

  &:hover {
    opacity: 1;
  }
`;

export const ButtonText = styled.span`
  font-size: 1.3rem;
  font-weight: 800;
`;
