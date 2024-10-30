import PlusIcon from '@/components/Icons/PlusIcon';
import {
  AddButton,
  AddCard,
  AddTitleCard,
  Container,
  PetsList,
  SeeAllButton,
  Title,
  TitleContainer,
} from './MyPets.styles';
import CardPet from '../CardPet/Cardpet';

const MyPets = () => {
  return (
    <Container>
      <TitleContainer>
        <Title>Meus Pets</Title>
        <SeeAllButton>Ver todos</SeeAllButton>
      </TitleContainer>
      <PetsList>
        <AddCard>
          <AddButton>
            <PlusIcon />
          </AddButton>
          <AddTitleCard>Adicionar pet</AddTitleCard>
        </AddCard>
        {Array.from({ length: 10 }).map((_, index) => (
          <CardPet key={index} />
        ))}
      </PetsList>
    </Container>
  );
};

export default MyPets;
