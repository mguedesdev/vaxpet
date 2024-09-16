import EmailIcon from '@/components/Icons/EmailIcon';
import LinkedinIcon from '@/components/Icons/LinkedinIcon';
import {
  ContainerButtons,
  FooterContainer,
  FooterContent,
  FooterText,
  SocialButton,
} from './Footer.styles';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterText>
          © 2023 Matheus Guedes Ribeiro. Todos os direitos reservados.
        </FooterText>
        <ContainerButtons>
          <SocialButton
            onClick={() => window.open('mailto:mathheus.gr@gmail.com')}
          >
            <EmailIcon />
          </SocialButton>
          <SocialButton
            onClick={() =>
              window.open('https://www.linkedin.com/in/mathheusg/')
            }
          >
            <LinkedinIcon />
          </SocialButton>
        </ContainerButtons>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
