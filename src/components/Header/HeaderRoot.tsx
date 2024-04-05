import { ReactNode } from 'react';
import { Header } from './Header.styles';

interface HeaderRootProps {
  children: ReactNode;
}

const HeaderRoot = ({ children }: HeaderRootProps) => {
  return <Header>{children}</Header>;
};

export default HeaderRoot;
