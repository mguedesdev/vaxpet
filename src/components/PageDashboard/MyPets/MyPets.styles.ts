import styled from 'styled-components';

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const Title = styled.h2`
  font-size: 1.25rem;
  font-weight: 600px;
  width: 100%;
  text-align: start;
`;

export const SeeAllButton = styled.button`
  color: #eb612c;
  font-size: 1rem;
  border: none;
  background-color: transparent;
  width: fit-content;
  white-space: nowrap;
  font-weight: 600;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  height: 100%;
  width: 100%;
  gap: 0.5rem;
`;

export const PetsList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1.5rem;
  width: 100%;
  padding: 1rem;
  overflow-y: auto;
  > * {
    aspect-ratio: 3/4;
  }
`;

export const AddCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  flex-direction: column;
  width: 100%;
  height: 100%;
  border-radius: 20px;
  padding: 1.5rem;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.25);

  &:hover {
    button {
      background-color: rgba(235, 97, 44, 1);
    }
    h2 {
      color: rgba(235, 97, 44, 1);
    }
  }
`;

export const AddButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  aspect-ratio: 1/1;
  border: none;
  background-color: rgba(235, 97, 44, 0.8);
  color: #fff;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.4s ease-in-out;
`;

export const AddTitleCard = styled.h2`
  font-size: 1.25rem;
  font-weight: 600px;
  color: rgba(235, 97, 44, 0.8);
  transition: all 0.4s ease-in-out;
`;
