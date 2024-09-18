import styled from 'styled-components';

export const CardContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  border-radius: 2rem;
  background: #282828;
  height: 330px;
  width: 330px;
  overflow: hidden;

  box-shadow:
    9px 9px 18px #171717,
    -9px -9px 18px #393939;

  transition: box-shadow 0.3s;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 2rem;
    background: transparent;
    box-shadow:
      inset 9px 9px 18px #171717,
      inset -9px -9px 18px #393939;
    opacity: 0;
    transition: opacity 0.3s;
    z-index: 1;
    pointer-events: none;
  }

  & > * {
    position: relative;
    z-index: 2;
  }

  &:hover {
    box-shadow: none;
  }

  &:hover::before {
    opacity: 1;
  }

  @media (max-width: 768px) {
    height: 270px;
    width: 270px;
  }
`;

export const CardIconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 6rem;
  height: 6rem;

  svg {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 768px) {
    width: 4rem;
    height: 4rem;
  }
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
