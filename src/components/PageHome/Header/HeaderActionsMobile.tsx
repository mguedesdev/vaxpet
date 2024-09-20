import { ReactNode } from 'react';
import { MobileMenu } from './Header.styles';

interface HeaderActionsMobileProps {
  children: ReactNode;
  openMenu?: boolean;
}

const HeaderActionsMobile = ({
  children,
  openMenu,
}: HeaderActionsMobileProps) => {
  return <MobileMenu openMenu={openMenu}>{children}</MobileMenu>;
};

export default HeaderActionsMobile;
