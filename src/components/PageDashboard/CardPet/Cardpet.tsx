import {
  InfoText,
  Button,
  ButtonText,
  Card,
  Container,
  Name,
  PetImage,
  PetImageContainer,
  InfoContainer,
} from './CardPet.styles';

const CardPet = () => {
  return (
    <Container>
      <Card>
        <PetImageContainer>
          <PetImage src="/images/placeholderCardPet.png" alt="Pet" />
          <Button>
            <ButtonText>Detalhes</ButtonText>
          </Button>
        </PetImageContainer>
        <InfoContainer>
          <Name>Billi</Name>
          <InfoText>Raça: Golden Retriever</InfoText>
          <InfoText>Idade: 2 anos</InfoText>
        </InfoContainer>
      </Card>
    </Container>
  );
};
export default CardPet;
