import { Menu } from 'lucide-react';
import { MobileButton } from './Header.styles';

interface HeaderButtonMobileProps {
  openMenu: () => void;
}

const HeaderButtonMobile = ({ openMenu }: HeaderButtonMobileProps) => {
  return (
    <MobileButton type="button" onClick={openMenu}>
      <Menu size={24} />
    </MobileButton>
  );
};

export default HeaderButtonMobile;
