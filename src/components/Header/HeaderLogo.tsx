import { LogoContainer } from './Header.styles';

interface HeaderLogoProps extends React.HTMLAttributes<HTMLButtonElement> {}

const HeaderLogo = () => {
  return (
    <LogoContainer>
      <span className="vax">VAX</span>
      <span className="pet">PET</span>
    </LogoContainer>
  );
};

export default HeaderLogo;
