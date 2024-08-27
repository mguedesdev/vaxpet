import styled from 'styled-components';

export const FaqContainer = styled.section`
  padding: 4rem 10rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  height: 100%;
  gap: 1rem;
  z-index: 1;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const Title = styled.h1`
  font-size: 3rem;
  font-weight: 800;
  line-height: 2.5rem;
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: 2rem;
`;
