import { Button } from '@/components/Button/Button.styles';
import {
  HeroContentContainer,
  HeroDescription,
  HeroTitle,
} from './Hero.styles';

interface HeroContentProps {
  openModal: () => void;
}

const HeroContent = ({ openModal }: HeroContentProps) => {
  return (
    <HeroContentContainer>
      <HeroTitle>Cuidando dos seus pets na palma da mão</HeroTitle>
      <HeroDescription>
        Acompanhe a saúde e o bem-estar dos seus pets de forma fácil e
        eficiente. Nossa plataforma permite que você gerencie consultas
        veterinárias, agende vacinas, e acompanhe o histórico de cuidados com
        praticidade, tudo em um só lugar.
      </HeroDescription>
      <Button className="hero" onClick={() => openModal()}>
        Comece agora!
      </Button>
    </HeroContentContainer>
  );
};

export default HeroContent;
