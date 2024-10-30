import styled from 'styled-components';

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  gap: 2rem;
  height: 100%;
  width: 100%;
  padding: 1rem 6rem 1rem;
  margin-bottom: 2rem;
`;

export const GridLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(18, 1fr); /* 10 colunas de tamanho igual */
  grid-template-rows: repeat(11, 1fr); /* 10 linhas de tamanho igual */
  width: 100%;
  height: 90%;
  gap: 1.5rem; /* Espaçamento entre os elementos do grid */

  /* Layout dos primeiros 2 quadros (Próximos eventos e Últimos eventos adicionados) */
  .events-section {
    grid-column: span 7; /* Ocupar 4/10 das colunas */
    grid-row: span 5; /* Ocupar 5/11 das linhas */
  }

  /* Calendário ocupa 2/10 das colunas */
  .calendar-section {
    grid-column: span 4; /* Ocupar 2/10 das colunas */
    grid-row: span 5; /* Ocupar 5/11 das linhas */
  }

  /* A lista de pets ocupa 8/10 das colunas */
  .pets-section {
    grid-column: span 14; /* Ocupar 8/10 das colunas */
    grid-row: span 6; /* Ocupar 6/11 das linhas */
  }

  /* Eventos do dia selecionado ocupam 2/10 das colunas */
  .day-events-section {
    grid-column: span 4; /* Ocupar 2/10 das colunas */
    grid-row: span 6; /* Ocupar 6/11 das linhas */
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(20, 1fr);

    .events-section,
    .calendar-section,
    .pets-section,
    .day-events-section {
      grid-column: span 1;
    }

    .events-section {
      grid-row: span 12;
    }

    .calendar-section {
      grid-row: span 10;
    }

    .pets-section {
      grid-row: span 20;
      order: 1;
    }

    .day-events-section {
      grid-row: span 10;
    }
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  height: 100%;
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 0.6rem;
  box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.15);
`;
