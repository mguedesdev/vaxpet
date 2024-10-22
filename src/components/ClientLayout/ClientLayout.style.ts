import styled from 'styled-components';

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  background-color: ${({ theme }) => theme.colors.background};
  height: 100vh;
  overflow-y: hidden;
`;
