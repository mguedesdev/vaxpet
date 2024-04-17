import PawBulletIcon from '@/components/Icons/PawBulletIcon';
import {
  BackgroundImage,
  Button,
  ContentText,
  ImageContainer,
  Input,
  InputContainer,
  NewsletterContainer,
  TitleContainer,
} from './Newsletter.styles';

const NewsletterSub = () => {
  return (
    <NewsletterContainer>
      <TitleContainer>
        <h1>Vamos Conversar!</h1>
        <PawBulletIcon />
      </TitleContainer>
      <ContentText>
        {`Mantenha-se informado com as últimas novidades e atualizações do VaxPet.
        Inscreva-se agora e receba tudo diretamente na sua caixa de entrada.`}
      </ContentText>
      <InputContainer>
        <Input type="email" placeholder="Digite seu melhor e-mail" />
        <Button>Enviar</Button>
      </InputContainer>
      <ImageContainer>
        <BackgroundImage
          src="./images/ImageNewsletter.png"
          alt="Hero Background"
        />
      </ImageContainer>
    </NewsletterContainer>
  );
};

export default NewsletterSub;
