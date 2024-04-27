import styled from 'styled-components';

export const StyledSection = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3rem 8rem;
  background-color: ${({ theme }) => theme.colors.primary};
  z-index: 1;

  h2 {
    font-size: 3rem;
    color: ${({ theme }) => theme.colors.secondary};
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.1rem;
    line-height: 1.5rem;
    color: ${({ theme }) => theme.colors.white};
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
`;
