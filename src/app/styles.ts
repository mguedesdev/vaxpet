import styled, { keyframes } from 'styled-components';

export const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.background};
  z-index: -1;
  overflow: hidden;
`;

export const StyledSection = styled.section`
  display: flex;
  width: 100%;
  height: 100%;

  &#about-us,
  &#how-it-work,
  &#faq {
    scroll-margin-top: 100px;

    @media (max-width: 768px) {
      scroll-margin-top: 50px;
    }
  }
`;

const rotate1 = keyframes`
  0% {
    transform: translate(600px, 0) rotate(0deg);
  }
  100% {
    transform: translate(600px, 0)  rotate(-15deg);
  }
`;

export const StyledHeroBackground = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  z-index: -10;
  animation: ${rotate1} 6s infinite alternate;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const HeroBackgroundImage = styled.img`
  object-fit: cover;
`;
