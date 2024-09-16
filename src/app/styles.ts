import styled from 'styled-components';

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
  }
`;

export const StyledHeroBackground = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  z-index: -1;
`;

export const HeroBackgroundImage = styled.img`
  object-fit: cover;
`;
