'use client';

import { Header } from '@/components/Header/Index';
import { Hero } from '@/components/PageHome/Hero';
import HowItWork from '@/components/PageHome/HowItWork/HowItWork';
import {
  HeroBackgroundImage,
  MainContainer,
  StyledHeroBackground,
} from './styles';

const Home = () => {
  return (
    <MainContainer>
      <StyledHeroBackground>
        <HeroBackgroundImage
          src="./images/hero-background.png"
          alt="Hero Background"
        />
      </StyledHeroBackground>
      <Header.Root>
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
    </MainContainer>
  );
};

export default Home;
