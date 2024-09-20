import styled from 'styled-components';
import Link from 'next/link';

export const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 6rem;
  background-color: ${({ theme }) => theme.colors.background};
  width: 100%;
  margin-bottom: auto;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

interface HeaderButtonProps {
  $isActive?: boolean;
}

export const HeaderLinkButton = styled(Link)<HeaderButtonProps>`
  position: relative;
  padding: 0.7rem 1rem;
  border-radius: 0.5rem;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 800;
  text-decoration: none;
  font-size: 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 0.5rem;
    box-shadow:
      5px 5px 7px #a5a5a5,
      -5px -5px 7px #ffffff;

    opacity: 0;
    transition: opacity 0.5s;
    z-index: 1;
    pointer-events: none;
  }

  &:hover::before {
    opacity: 1;
  }

  ${({ $isActive }) =>
    $isActive &&
    `
      z-index: 2;
      background-color: #e3e3e3;

      &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: 0.5rem;
      box-shadow: inset 3px 3px 4px #a5a5a5,
            inset -2px -2px 4px #ffffff;
      opacity: 1;
      transition: opacity 0.3s;
      z-index: 0;
      pointer-events: none;
    }
  `}
`;
