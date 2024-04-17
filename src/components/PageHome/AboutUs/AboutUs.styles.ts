import styled from 'styled-components';

export const AboutUsContainer = styled.section`
  padding: 2rem 6rem;
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  height: 100%;
  gap: 2rem;
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;

  h1 {
    font-size: 3rem;
    font-weight: 800;
    line-height: 2.5rem;
  }

  svg {
    width: 2.5rem;
    height: 2.5rem;
    margin-left: 1rem;
  }
`;

export const Content = styled.div`
  display: flex;
  position: relative;
  justify-content: space-between;
  flex-direction: column;
  width: 35%;
  padding: 2rem 0;
  height: 100%;

  p {
    font-size: 1.25rem;
    line-height: 1.75rem;
    text-align: justify;
    width: 100%;
    white-space: pre-wrap;
    color: ${({ theme }) => theme.colors.primaryText};
    padding: 2rem 0;
  }

  .separator {
    position: absolute;
    border-bottom: 1px solid ${({ theme }) => theme.colors.primaryText};
    bottom: 0;
    width: 100%;
    background-color: blue;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  width: 45%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const Image = styled.img`
  width: 100%;
  max-width: 650px;
  height: auto;
`;
