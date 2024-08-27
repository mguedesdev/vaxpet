import { useState, ReactNode } from 'react';
import {
  AccordionContainer,
  AccordionContent,
  AccordionTitle,
} from './Accordion.styles';

interface AccordionItemProps {
  title: string;
  children: ReactNode;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <AccordionContainer>
      <AccordionTitle isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
        {title}
      </AccordionTitle>
      <AccordionContent isOpen={isOpen}>{children}</AccordionContent>
    </AccordionContainer>
  );
};

export default AccordionItem;
