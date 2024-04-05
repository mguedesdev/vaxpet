import { ReactNode } from 'react';
import { CardIconContainer } from './How.styles';

interface HowIconProps {
  children: ReactNode;
}

const HowIcon = ({ children }: HowIconProps) => {
  return <CardIconContainer>{children}</CardIconContainer>;
};

export default HowIcon;
