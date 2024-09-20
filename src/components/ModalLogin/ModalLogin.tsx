import { useState } from 'react';
import { motion, AnimatePresence, color } from 'framer-motion';
import { useRouter } from 'next/navigation';
import BackButtonIcon from '../Icons/BackButtonIcon';
import {
  ActionsContainer,
  BackButton,
  CustomButton,
  CustomImage,
  FormContainer,
  FormInputsContainer,
  ImageContainer,
  Input,
  InputContainer,
  Label,
  LinkButton,
  LinkContainer,
  LoginForm,
  ModalContent,
  TitleForm,
} from './ModalLogin.styles';

interface ModalLoginProps {
  onClose: () => void;
  register: boolean;
}

const ModalLogin = ({ onClose, register = false }: ModalLoginProps) => {
  const [isRegister, setIsRegister] = useState(register);
  const router = useRouter();

  const handleToggleForm = () => {
    setIsRegister(!isRegister);
  };

  return (
    <ModalContent>
      <BackButton onClick={onClose}>
        <BackButtonIcon />
      </BackButton>
      <ImageContainer>
        <AnimatePresence>
          {!isRegister && (
            <motion.div
              key="login"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 0.9,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
              }}
            >
              <CustomImage
                src="/images/modal-login-background.png"
                alt="Modal Login Background"
                width={1200}
                height={1200}
                quality={100}
              />
            </motion.div>
          )}

          {isRegister && (
            <motion.div
              key="register"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 0.9,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
              }}
            >
              <CustomImage
                src="/images/modal-register-background.png"
                alt="Modal Register Background"
                width={1200}
                height={1200}
                quality={100}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </ImageContainer>

      <FormContainer>
        <AnimatePresence mode="wait">
          <motion.div
            key={isRegister ? 'register' : 'login'}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.2,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            style={{
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
            }}
          >
            <LoginForm>
              <TitleForm>{isRegister ? 'Cadastre-se' : 'Entrar'}</TitleForm>

              <FormInputsContainer>
                {isRegister ? (
                  <>
                    <InputContainer>
                      <Label htmlFor="name">Nome Completo</Label>
                      <Input
                        type="text"
                        id="name"
                        placeholder="Seu nome completo"
                      />
                    </InputContainer>
                    <InputContainer>
                      <Label htmlFor="email">Email</Label>
                      <Input
                        type="email"
                        id="email"
                        placeholder="exemplo@email.com"
                      />
                    </InputContainer>
                    <InputContainer>
                      <Label htmlFor="password">Senha</Label>
                      <Input
                        type="password"
                        id="password"
                        placeholder="••••••••"
                      />
                    </InputContainer>
                    <InputContainer>
                      <Label htmlFor="confirm-password">Confirmar Senha</Label>
                      <Input
                        type="password"
                        id="confirm-password"
                        placeholder="••••••••"
                      />
                    </InputContainer>
                  </>
                ) : (
                  <>
                    <InputContainer>
                      <Label htmlFor="email">Email</Label>
                      <Input
                        type="email"
                        id="email"
                        placeholder="exemplo@email.com"
                      />
                    </InputContainer>
                    <InputContainer>
                      <Label htmlFor="password">Senha</Label>
                      <Input
                        type="password"
                        id="password"
                        placeholder="••••••••"
                      />
                      {!isRegister && (
                        <LinkContainer
                          style={{
                            display: 'flex',
                            justifyContent: 'flex-end',
                            width: '100%',
                          }}
                        >
                          <LinkButton
                            style={{
                              fontSize: '0.875rem',
                              textDecoration: 'underline',
                              fontWeight: 500,
                              color: '#888',
                            }}
                          >
                            Recuperar senha
                          </LinkButton>
                        </LinkContainer>
                      )}
                    </InputContainer>
                  </>
                )}
              </FormInputsContainer>
              <CustomButton
                type="button"
                onClick={() => {
                  router.push('/dashboard');
                }}
              >
                {isRegister ? 'Registrar' : 'Entrar'}
              </CustomButton>
              <ActionsContainer>
                <LinkContainer>
                  <span>
                    {isRegister
                      ? 'Já possuí uma conta?'
                      : 'Ainda não possuí uma conta?'}
                  </span>
                  <LinkButton onClick={handleToggleForm}>
                    {isRegister ? 'Entrar' : 'Cadastre-se'}
                  </LinkButton>
                </LinkContainer>
              </ActionsContainer>
            </LoginForm>
          </motion.div>
        </AnimatePresence>
      </FormContainer>
    </ModalContent>
  );
};

export default ModalLogin;
