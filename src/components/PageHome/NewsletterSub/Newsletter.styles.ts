import styled from 'styled-components';

export const NewsletterContainer = styled.section`
  padding: 6rem 10rem;
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  height: 100%;
  z-index: 1;
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;

  h1 {
    font-size: 3rem;
    font-weight: 800;
    line-height: 2.5rem;
  }

  svg {
    width: 2.5rem;
    height: 2.5rem;
    margin-left: 1rem;
  }
`;

export const ContentText = styled.p`
  font-size: clamp(0.3rem, 1.3rem, 2rem);
  line-height: 2rem;
  text-align: justify;
  width: 100%;
  white-space: pre-line;
  color: ${({ theme }) => theme.colors.black};
  padding: 2rem 0;
`;

export const InputContainer = styled.div`
  display: flex;
  gap: 1rem;
  width: 40%;
  position: relative;

  @media (max-width: 1300px) {
    width: 60%;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.8rem 1rem;
  border: none;
  background-color: ${({ theme }) => theme.colors.black};
  border-radius: 0.5rem;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.white};

  &::placeholder {
    color: ${({ theme }) => theme.colors.grayLight};
  }
`;

export const Button = styled.button`
  padding: 0rem 2rem;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.white};
  border: none;
  border-radius: 0.5rem;
  font-size: 1rem;
  cursor: pointer;
`;

export const ImageContainer = styled.div`
  position: absolute;
  top: -50;
  right: 0px;
  z-index: -1;

  @media (max-width: 1600px) {
    top: -100%;
    right: -100px;
  }

  @media (max-width: 1300px) {
    top: -100%;
    width: 25%;
    right: -100px;
  }

  @media (max-width: 600px) {
    display: none;
  }
`;

export const BackgroundImage = styled.img`
  object-fit: cover;
`;
