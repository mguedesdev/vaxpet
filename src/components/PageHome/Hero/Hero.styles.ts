import styled from 'styled-components';

export const HeroContainer = styled.section`
  display: grid;
  grid-template-columns: 5fr 4fr;
  gap: 2rem;
  height: 95vh;
  position: relative;
  z-index: 1;
  padding: 0 8rem;
`;

export const HeroImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 95%;
`;

export const ImageStyled = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
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
`;

export const HeroDescription = styled.p`
  font-size: 1.3rem;
  color: ${({ theme }) => theme.colors.primaryText};
  margin-top: 1rem;
  white-space: pre-line;
  text-align: justify;
  width: 100%;
`;
