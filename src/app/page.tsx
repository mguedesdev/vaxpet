'use client';

import { Hero } from '@/components/PageHome/Hero';
import HowItWork from '@/components/PageHome/HowItWork/HowItWork';
import AboutUs from '@/components/PageHome/AboutUs/AboutUs';
import NewsletterSub from '@/components/PageHome/NewsletterSub/NewsletterSub';
import Faq from '@/components/PageHome/Faq/Faq';
import Footer from '@/components/PageHome/Footer/Footer';
import { useModal } from '@/hooks/useModal';
import Modal from '@/components/Modal/Modal';
import ModalLogin from '@/components/ModalLogin/ModalLogin';
import { useState } from 'react';
import { Header } from '@/components/PageHome/Header/Index';
import {
  HeroBackgroundImage,
  MainContainer,
  StyledHeroBackground,
  StyledSection,
} from './styles';

const Home = () => {
  const { isOpen, openModal, closeModal } = useModal();
  const [isRegister, setIsRegister] = useState(false);
  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  const handleOpenModal = (register: boolean) => {
    setIsRegister(register);
    openModal();
    setOpenMobileMenu(false);
  };

  const handleClickAction = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setOpenMobileMenu(false);
  };

  if (openMobileMenu) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }

  return (
    <MainContainer>
      <Header.Root>
        <Header.Logo />
        <Header.ButtonMobile
          openMenu={() => setOpenMobileMenu(!openMobileMenu)}
        />

        <Header.ActionsMobile openMenu={openMobileMenu}>
          <Header.Action
            buttonType="text"
            onClick={() => handleClickAction('how-it-work')}
          >
            Como funciona
          </Header.Action>
          <Header.Action
            buttonType="text"
            onClick={() => handleClickAction('about-us')}
          >
            Sobre
          </Header.Action>
          <Header.Action
            buttonType="text"
            onClick={() => handleClickAction('faq')}
          >
            FAQ
          </Header.Action>
          <Header.Action
            buttonType="primary"
            onClick={() => handleOpenModal(false)}
          >
            Entrar
          </Header.Action>
          <Header.Action
            buttonType="secondary"
            onClick={() => handleOpenModal(true)}
          >
            Cadastre-se
          </Header.Action>
        </Header.ActionsMobile>
        <Header.Actions>
          <Header.Action
            buttonType="text"
            onClick={() =>
              document
                .getElementById('about-us')
                ?.scrollIntoView({ behavior: 'smooth' })
            }
          >
            Sobre
          </Header.Action>
          <Header.Action
            buttonType="text"
            onClick={() =>
              document
                .getElementById('how-it-work')
                ?.scrollIntoView({ behavior: 'smooth' })
            }
          >
            Como funciona
          </Header.Action>
          <Header.Action
            buttonType="text"
            onClick={() =>
              document
                .getElementById('faq')
                ?.scrollIntoView({ behavior: 'smooth' })
            }
          >
            FAQ
          </Header.Action>
          <Header.Action
            buttonType="primary"
            onClick={() => handleOpenModal(false)}
          >
            Entrar
          </Header.Action>
          <Header.Action
            buttonType="secondary"
            onClick={() => handleOpenModal(true)}
          >
            Cadastre-se
          </Header.Action>
        </Header.Actions>
      </Header.Root>
      <Hero.Root>
        <StyledHeroBackground>
          <HeroBackgroundImage
            src="./images/Rectangle 248.png"
            alt="Hero Background"
          />
        </StyledHeroBackground>
        <Hero.Image image="./images/ImageHome-1.png" />
        <Hero.Content openModal={() => handleOpenModal(false)} />
      </Hero.Root>
      <StyledSection id="how-it-work">
        <HowItWork />
      </StyledSection>
      <StyledSection id="about-us">
        <AboutUs />
      </StyledSection>
      <NewsletterSub />
      <StyledSection id="faq">
        <Faq />
      </StyledSection>
      <Footer />

      <Modal isOpen={isOpen} onClose={closeModal}>
        <ModalLogin onClose={closeModal} register={isRegister} />
      </Modal>
    </MainContainer>
  );
};

export default Home;
