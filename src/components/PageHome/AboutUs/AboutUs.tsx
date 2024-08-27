import PawBulletIcon from '@/components/Icons/PawBulletIcon';
import {
  AboutUsContainer,
  Content,
  Image,
  ImageContainer,
  Separator,
  TextContainer,
  TitleContainer,
} from './AboutUs.styles';

const AboutUs = () => {
  return (
    <AboutUsContainer>
      <Content>
        <TitleContainer>
          <h1>Sobre nós</h1>
          <PawBulletIcon />
        </TitleContainer>
        <TextContainer>
          <p>
            No VaxPet, entendemos a importância de manter a saúde do seu animal
            de estimação sempre em dia. Com a nossa plataforma intuitiva, você
            não só acompanha o histórico de vacinação do seu pet, mas também
            recebe lembretes para as próximas doses e consultas veterinárias.
            Assim, garantimos que nenhum cuidado essencial seja esquecido,
            mantendo seu companheiro sempre protegido e saudável.
          </p>

          <p>
            Além disso, oferecemos uma gama de recursos informativos e
            educacionais. Através do VaxPet, você tem acesso a artigos, dicas de
            saúde e recomendações personalizadas fornecidas por especialistas
            veterinários. Quer se trate de uma dúvida sobre nutrição,
            comportamento ou bem-estar, nossa plataforma está pronta para ajudar
            a enriquecer a vida do seu pet, tornando o cuidado com a saúde
            animal fácil e acessível.
          </p>
        </TextContainer>
        <Separator />
      </Content>

      <ImageContainer>
        <Image src="./images/ImageAboutUs.png" alt="About Us" />
      </ImageContainer>
    </AboutUsContainer>
  );
};

export default AboutUs;
