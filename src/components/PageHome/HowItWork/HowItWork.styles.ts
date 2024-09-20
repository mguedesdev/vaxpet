import styled from 'styled-components';

export const StyledSection = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem 0rem;
  background-color: ${({ theme }) => theme.colors.primary};
  z-index: 1;
  max-width: 1440px;

  h2 {
    font-size: clamp(2rem, 5vw, 3rem);
    color: ${({ theme }) => theme.colors.secondary};
    margin-bottom: 1rem;
  }

  p {
    font-size: clamp(1rem, 2vw, 1.1rem);
    line-height: 1.5rem;
    color: ${({ theme }) => theme.colors.white};

    @media (max-width: 768px) {
      text-align: center;
    }
  }

  @media (max-width: 768px) {
    padding: 3rem 2rem;
  }
`;

export const HowCardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 6rem;
  margin-top: 2.5rem;
  margin-bottom: 1.5rem;
  width: 100%;
  max-width: 1200px;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    justify-items: center;
    gap: 2rem;
  }
`;
