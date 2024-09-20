import { Home, DoorOpen, User, CalendarCheck2, List } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { Header } from '../PageHome/Header/Index';
import {
  ButtonsContainer,
  HeaderLinkButton,
  Menu,
} from './HeaderDashboard.styles';

const HeaderDashboard = () => {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;
  return (
    <Menu>
      <Header.Logo />
      <ButtonsContainer>
        <HeaderLinkButton href="/dashboard" $isActive={isActive('/dashboard')}>
          <Home size={24} />
          Dashboard
        </HeaderLinkButton>
        <HeaderLinkButton href="/pets" $isActive={isActive('/pets')}>
          <List size={24} />
          Meus pets
        </HeaderLinkButton>
        <HeaderLinkButton href="/events" $isActive={isActive('/events')}>
          <CalendarCheck2 size={24} />
          Eventos
        </HeaderLinkButton>
        <HeaderLinkButton href="/profile" $isActive={isActive('/profile')}>
          <User size={24} />
          Perfil
        </HeaderLinkButton>
        <HeaderLinkButton
          href="/logout"
          $isActive={isActive('/logout')}
          passHref
        >
          <DoorOpen size={24} />
          Sair
        </HeaderLinkButton>
      </ButtonsContainer>
    </Menu>
  );
};

export default HeaderDashboard;
