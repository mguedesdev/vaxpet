import styled from 'styled-components';

export const AboutUsContainer = styled.section`
  padding: 4rem 10rem;
  padding-bottom: 0;
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
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
  width: 50%;
  padding: 2rem 0rem;
  height: 100%;
`;

export const Separator = styled.div`
  position: absolute;
  border-bottom: 1px solid ${({ theme }) => theme.colors.primaryText};
  bottom: 0;
  width: 100%;
  background-color: blue;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 4.5rem;

  p {
    font-size: 1.25rem;
    line-height: 1.75rem;
    text-align: justify;
    width: 100%;
    white-space: break-spaces;
    color: ${({ theme }) => theme.colors.primaryText};
    padding-top: 2.5rem;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const Image = styled.img`
  width: 100%;
  max-width: 700px;
  height: auto;
`;
