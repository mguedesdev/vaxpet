import { Button } from '@/components/Button/Button.styles';
import {
  HeroContentContainer,
  HeroDescription,
  HeroTitle,
} from './Hero.styles';

const HeroContent = () => {
  return (
    <HeroContentContainer>
      <HeroTitle>Cuidando dos seus pets na palma da mão</HeroTitle>
      <HeroDescription>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        lacinia neque ac lectus lobortis pharetra. Cras bibendum ultrices quam,
        mollis lacinia mi ultricies quis.
      </HeroDescription>
      <Button className="hero">Comece agora!</Button>
    </HeroContentContainer>
  );
};

export default HeroContent;
