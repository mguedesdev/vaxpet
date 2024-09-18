import styled from 'styled-components';

export const Header = styled.header`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.4rem 8rem;
  width: 100%;
  z-index: 1;

  @media (max-width: 768px) {
    padding: 1.4rem 2rem;
    border-bottom: 1px solid ${({ theme }) => theme.colors.grayLight};
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    position: fixed;
    background-color: ${({ theme }) => theme.colors.background};
    top: 0;
    left: 0;
    z-index: 10;
  }
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

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const ActionsContainer = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const MobileButton = styled.button`
  display: none;

  @media (max-width: 768px) {
    display: block;
    background: none;
    border: none;
    font-size: 2rem;
    cursor: pointer;
  }
`;

interface MobileMenuProps {
  openMenu?: boolean;
}

export const MobileMenu = styled.div<MobileMenuProps>`
  left: 0;
  pointer-events: ${({ openMenu }) => (openMenu ? 'all' : 'none')};
  display: none;

  @media (max-width: 768px) {
    display: flex;
    position: absolute;
    top: 100%;
    left: ${({ openMenu }) => (openMenu ? '0' : '100%')};
    flex-direction: column;
    gap: 1rem;
    background-color: ${({ theme }) => theme.colors.background};
    width: 100%;
    padding: 1rem;
    height: 100vh;

    transition: all 0.5s ease-in-out;
  }
`;
