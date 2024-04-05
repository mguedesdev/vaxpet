import { HeroImageContainer, ImageStyled } from './Hero.styles';

interface HeroImageProps {
  image: string;
}

const HeroImage = ({ image }: HeroImageProps) => {
  return (
    <HeroImageContainer className="hero-image">
      <ImageStyled src={image} alt="hero" />
    </HeroImageContainer>
  );
};

export default HeroImage;
