import { ReactNode } from 'react';
import { ActionsContainer } from './Header.styles';

interface HeaderActionsProps {
  children: ReactNode;
}

const HeaderActions = ({ children }: HeaderActionsProps) => {
  return <ActionsContainer>{children}</ActionsContainer>;
};
export default HeaderActions;
