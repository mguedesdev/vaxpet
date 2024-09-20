import styled from 'styled-components';

interface AccordionTitleProps {
  isOpen: boolean;
}

export const AccordionContainer = styled.div`
  margin-bottom: 1rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 0.5rem;
  background-color: #444;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const AccordionTitle = styled.button<AccordionTitleProps>`
  background-color: ${({ theme }) => theme.colors.primary80};
  color: white;
  padding: 0.7rem 1rem;
  width: 100%;
  text-align: left;
  border: none;
  outline: none;
  cursor: pointer;
  font-size: clamp(1rem, 2vw, 1.1rem);
  font-weight: 600;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 0.5rem;

  &:after {
    content: '${props => (props.isOpen ? '-' : '+')}';
    font-size: 1.8rem;
    min-width: 1rem;
    text-align: center;

    filter: drop-shadow(0 2px 2px rgba(0, 0, 0, 1));
  }
`;

interface AccordionContentProps {
  isOpen: boolean;
}

export const AccordionContent = styled.div<AccordionContentProps>`
  max-height: ${props => (props.isOpen ? '300px' : '0')};
  overflow: hidden;
  background-color: #444;
  color: #ddd;
  padding: ${props => (props.isOpen ? '1rem' : '0 1rem')};

  transition: all 0.3s ease;
`;
