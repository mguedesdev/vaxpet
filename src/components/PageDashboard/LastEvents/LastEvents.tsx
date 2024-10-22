import { LastEvents as Events } from '@/mock/LastEvents';
import {
  Event,
  EventsList,
  NextEventsContainer,
  Title,
} from './LastEvents.styles';

interface EventsProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
  title?: string;
}

const LastEvents = ({ title, ...rest }: EventsProps) => {
  return (
    <NextEventsContainer {...rest}>
      <Title>{title}</Title>
      <EventsList>
        {Events.map(event => (
          <Event>{event.message}</Event>
        ))}
      </EventsList>
    </NextEventsContainer>
  );
};

export default LastEvents;
