'use client';

import { Header } from '@/components/Header/Index';
import { Hero } from '@/components/PageHome/Hero';
import HowItWork from '@/components/PageHome/HowItWork/HowItWork';
import AboutUs from '@/components/PageHome/AboutUs/AboutUs';
import NewsletterSub from '@/components/PageHome/NewsletterSub/NewsletterSub';
import Faq from '@/components/PageHome/Faq/Faq';
import {
  HeroBackgroundImage,
  MainContainer,
  StyledHeroBackground,
} from './styles';

const Home = () => {
  return (
    <MainContainer>
      <Header.Root>
        <StyledHeroBackground>
          <HeroBackgroundImage
            src="./images/hero-background.png"
            alt="Hero Background"
          />
        </StyledHeroBackground>
        <Header.Logo />
        <Header.Actions>
          <Header.Action
            buttonType="text"
            onClick={() => console.log('Register')}
          >
            Sobre
          </Header.Action>
          <Header.Action
            buttonType="text"
            onClick={() => console.log('Register')}
          >
            Como funciona
          </Header.Action>
          <Header.Action
            buttonType="text"
            onClick={() => console.log('Register')}
          >
            FAQ
          </Header.Action>
          <Header.Action
            buttonType="primary"
            onClick={() => console.log('Login')}
          >
            Entrar
          </Header.Action>
          <Header.Action
            buttonType="secondary"
            onClick={() => console.log('Register')}
          >
            Cadastre-se
          </Header.Action>
        </Header.Actions>
      </Header.Root>
      <Hero.Root>
        <Hero.Image image="./images/ImageHome-1.png" />
        <Hero.Content />
      </Hero.Root>
      <HowItWork />
      <AboutUs />
      <NewsletterSub />
      <Faq />
    </MainContainer>
  );
};

export default Home;
