import IPet from './pet';

interface IEvent {
  id: string;
  type: string;
  date: string;
  time: string;
  pet: IPet;
  message: string;
}

export default IEvent;
