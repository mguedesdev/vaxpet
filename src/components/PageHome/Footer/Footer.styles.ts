import styled from 'styled-components';

export const FooterContainer = styled.footer`
  color: #fff;
  padding: 1rem 0;
  text-align: center;
  width: 100%;
  max-width: 1440px;

  @media (max-width: 1600px) {
    padding: 1rem 3.5rem;
  }

  @media (max-width: 768px) {
    padding: 1rem 0;
    text-align: start;
  }
`;

export const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0rem;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 0 2rem;
  }
`;

export const FooterText = styled.p`
  font-size: 1rem;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

export const ContainerButtons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-top: 1rem;

  @media (max-width: 768px) {
    margin-top: 0.5rem;
  }
`;

export const SocialButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.1);
  }

  svg {
    width: 2rem;
    height: 2rem;
  }

  @media (max-width: 768px) {
    svg {
      width: 1.8rem;
      height: 1.8rem;
    }
  }
`;
