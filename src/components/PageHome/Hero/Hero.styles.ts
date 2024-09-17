import styled, { keyframes } from 'styled-components';

export const HeroContainer = styled.section`
  display: grid;
  grid-template-columns: 5fr 4fr;
  gap: 2rem;
  height: 95vh;
  position: relative;
  z-index: 1;
  padding: 0 8rem;
`;

export const CirclesContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: -1;
`;

const rotate1 = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(180deg);
  }
`;

const rotate2 = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const Circle = styled.div`
  position: absolute;
  width: 85%;
  aspect-ratio: 1 / 1;
  background-color: #eb612c;
  border-radius: 50%;
  opacity: 0.1;
  z-index: -1;
  animation: ${rotate1} 6s infinite alternate;
  transform-origin: 48% 52%;

  &.circle2 {
    animation: ${rotate2} 12s infinite;
    transform-origin: 52% 48%;
  }
`;

export const HeroImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 95%;
  position: relative;
`;

export const ImageStyled = styled.img`
  width: 95%;
  height: 95%;
  object-fit: contain;
`;

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const HeroContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  height: 100%;
  gap: 1rem;
  padding-bottom: 3rem;

  button {
    margin-top: 2rem;
  }
`;

export const HeroTitle = styled.h1`
  font-size: 4.5rem;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.primary};
  animation: ${fadeIn} 2s;
`;

export const HeroDescription = styled.p`
  font-size: 1.3rem;
  color: ${({ theme }) => theme.colors.primaryText};
  margin-top: 1rem;
  white-space: pre-line;
  text-align: justify;
  width: 100%;
  animation: ${fadeIn} 4s;
`;
