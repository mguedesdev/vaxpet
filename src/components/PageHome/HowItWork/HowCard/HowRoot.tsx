import { ReactNode } from 'react';
import { CardContainer } from './How.styles';

interface HowRootProps {
  children: ReactNode;
}

const HowRoot = ({ children }: HowRootProps) => {
  return <CardContainer>{children}</CardContainer>;
};

export default HowRoot;
