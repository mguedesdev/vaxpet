import styled from 'styled-components';

export const Header = styled.header`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.4rem 8rem;
  width: 100%;
  z-index: 1;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 800;
  font-size: 2.5rem;
  cursor: pointer;

  .vax {
    color: ${({ theme }) => theme.colors.primary};
    transition: 0.5s;
  }

  .pet {
    transition: 0.5s;

    color: ${({ theme }) => theme.colors.secondary};
  }

  &:hover {
    .vax {
      color: ${({ theme }) => theme.colors.secondary};
    }

    .pet {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

export const ActionsContainer = styled.div`
  display: flex;
  gap: 1rem;
`;
