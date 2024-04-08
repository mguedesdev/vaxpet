import styled from 'styled-components';

export const AboutUsContainer = styled.section`
  padding: 2rem 6rem;
  width: 100%;
  display: flex;
  align-items: center;
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 2rem;
  width: 70%;

  h1 {
    font-size: 3rem;
    font-weight: 800;
    text-align: left;
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
  justify-content: space-between;
  align-items: flex-end;
  flex-direction: column;
  width: 50%;

  p {
    font-size: 1.25rem;
    line-height: 1.75rem;
    text-align: justify;
    width: 70%;
    white-space: pre-wrap;
    color: ${({ theme }) => theme.colors.primaryText};
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 50%;
`;

export const Image = styled.img`
  width: 100%;
  max-width: 650px;
  height: auto;
`;
