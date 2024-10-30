import styled from 'styled-components';

export const NextEventsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  height: 100%;
  padding: 1rem;
`;

export const Title = styled.h2`
  font-size: 1.25rem;
  font-weight: 600px;
`;

export const EventsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  padding-right: 0.5rem;
`;

export const Event = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  border: 1px solid ${({ theme }) => theme.colors.grayLight};
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.colors.white};
  min-height: 60px;
`;
