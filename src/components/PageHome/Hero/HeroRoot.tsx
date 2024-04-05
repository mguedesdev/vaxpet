import { ReactNode } from 'react';
import { HeroContainer } from './Hero.styles';

interface HeroProps {
  children: ReactNode;
}

const HeroRoot = ({ children }: HeroProps) => {
  return <HeroContainer>{children}</HeroContainer>;
};
export default HeroRoot;
