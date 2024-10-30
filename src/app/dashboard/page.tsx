'use client';

import NextEvents from '@/components/PageDashboard/NextEvents/NextEvents';
import LastEvents from '@/components/PageDashboard/LastEvents/LastEvents';
import MyPets from '@/components/PageDashboard/MyPets/MyPets';
import { Container, GridLayout, MainContainer } from './styles';

const DashboardPage = () => {
  return (
    <MainContainer>
      <GridLayout>
        <Container className="events-section">
          <NextEvents title="Próximos eventos" />
        </Container>
        <Container className="events-section">
          <LastEvents title="Últimos eventos adicionados" />
        </Container>
        <Container className="calendar-section" />
        <Container className="pets-section">
          <MyPets />
        </Container>
        <Container className="day-events-section" />
      </GridLayout>
    </MainContainer>
  );
};

export default DashboardPage;
