import RegisterIcon from '@/components/Icons/RegisterIcon';
import FollowIcon from '@/components/Icons/FollowIcon';
import ProtectIcon from '@/components/Icons/ProtectIcon';
import { HowCard } from './HowCard';
import { HowCardContainer, StyledSection } from './HowItWork.styles';

const HowItWork = () => {
  return (
    <StyledSection>
      <h2>Como Funciona?</h2>
      <p>
        Em apenas três passos simples, o VaxPet mantém o calendário de saúde do
        seu pet organizado e atualizado.
      </p>
      <p>
        Deixe os lembretes por nossa conta e foque em dar amor e carinho para
        seu amigo de quatro patas.
      </p>
      <HowCardContainer>
        <HowCard.Root>
          <HowCard.Icon>
            <RegisterIcon />
          </HowCard.Icon>
          <HowCard.Content
            title="Registrar"
            description="Crie um perfil para seu pet em segundos e comece sua jornada com o VaxPet."
          />
        </HowCard.Root>
        <HowCard.Root>
          <HowCard.Icon>
            <FollowIcon />
          </HowCard.Icon>
          <HowCard.Content
            title="Acompanhar"
            description="Monitore as datas de vacinação e a saúde do seu pet com nosso sistema intuitivo."
          />
        </HowCard.Root>
        <HowCard.Root>
          <HowCard.Icon>
            <ProtectIcon />
          </HowCard.Icon>
          <HowCard.Content
            title="Proteger"
            description="Garanta o bem-estar do seu amigo com alertas e informações para mantê-lo protegido."
          />
        </HowCard.Root>
      </HowCardContainer>
    </StyledSection>
  );
};

export default HowItWork;
