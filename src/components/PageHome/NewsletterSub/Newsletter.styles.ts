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

  @media (max-width: 1300px) {
    padding: 3rem 2rem;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;

  h1 {
    font-size: clamp(2rem, 5vw, 3rem);
    font-weight: 800;
    line-height: 2.5rem;
  }

  svg {
    width: 2.5rem;
    height: 2.5rem;
    margin-left: 1rem;

    @media (max-width: 768px) {
      width: 2rem;
      height: 2rem;
    }
  }
`;

export const ContentText = styled.p`
  font-size: clamp(1.1rem, 1vw, 1.6rem);
  line-height: 2rem;
  text-align: justify;
  width: 100%;
  white-space: pre-line;
  color: ${({ theme }) => theme.colors.black};
  padding: 2rem 0;

  @media (max-width: 1300px) {
    /* text-align: center; */
  }
`;

export const InputContainer = styled.div`
  display: flex;
  gap: 1rem;
  width: 40%;
  position: relative;

  @media (max-width: 1300px) {
    width: 60%;
  }

  @media (max-width: 768px) {
    width: 100%;
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

  @media (max-width: 1300px) {
    width: 100%;
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
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  @media (max-width: 768px) {
    padding: 0rem 0.8rem;
    span {
      display: none;
    }
  }
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
