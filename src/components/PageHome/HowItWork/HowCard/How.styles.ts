import styled from 'styled-components';
// eslint-disable-next-line import/no-extraneous-dependencies
import { rgba } from 'polished';

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 2rem;
  background-color: ${({ theme }) => rgba(theme.colors.primary60, 0.34)};
  border-radius: 2rem;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.3);
  height: 330px;
  width: 330px;
`;

export const CardIconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 6rem;
  height: 6rem;
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const CardTitle = styled.h3`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.white};
  margin: 1rem 0;
`;

export const CardDescription = styled.p`
  font-size: 1rem;
  font-weight: 300;
  color: ${({ theme }) => theme.colors.primaryText};
  text-align: center;
`;
