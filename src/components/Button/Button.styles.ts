import styled from 'styled-components';

export const Button = styled.button`
  cursor: pointer;
  font-size: 1.2rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.white};
  border-radius: 0.4rem;
  padding: 0.5rem 1rem;
  min-width: 8rem;
  text-align: center;
  transition: 0.4s;
  border: none;

  &.primary {
    background-color: ${({ theme }) => theme.colors.primary};

    &:hover {
      background-color: ${({ theme }) => theme.colors.primaryLight};
      box-shadow: 0 0 0.5rem ${({ theme }) => theme.colors.primaryLight};
    }
  }

  &.secondary {
    background-color: ${({ theme }) => theme.colors.secondary};

    &:hover {
      background-color: ${({ theme }) => theme.colors.secondaryLight};
      box-shadow: 0 0 0.5rem ${({ theme }) => theme.colors.secondaryLight};
    }
  }

  &.text {
    background-color: transparent;
    font-weight: 800;
    color: ${({ theme }) => theme.colors.primary};

    &:hover {
      color: ${({ theme }) => theme.colors.secondary};
    }
  }

  &.hero {
    background-color: ${({ theme }) => theme.colors.secondary};
    padding: 0.7rem 1.5rem;
    font-size: 1.5rem;
    min-width: 12rem;
    border-radius: 0.7rem;

    &:hover {
      background-color: ${({ theme }) => theme.colors.primary};
    }
  }
`;
