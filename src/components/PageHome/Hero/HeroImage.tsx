import {
  Circle,
  CirclesContainer,
  HeroImageContainer,
  ImageStyled,
} from './Hero.styles';

interface HeroImageProps {
  image: string;
}

const HeroImage = ({ image }: HeroImageProps) => {
  return (
    <HeroImageContainer className="hero-image">
      <CirclesContainer>
        <Circle />
        <Circle className="circle2" />
        <ImageStyled src={image} alt="hero" />
      </CirclesContainer>
    </HeroImageContainer>
  );
};

export default HeroImage;
