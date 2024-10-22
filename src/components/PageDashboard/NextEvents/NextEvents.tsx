import { NextEvents as Events } from '@/mock/NextEvents';
import {
  Event,
  EventsList,
  NextEventsContainer,
  Title,
} from './NextEvents.styles';

interface EventsProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
  title?: string;
}

const NextEvents = ({ title, ...rest }: EventsProps) => {
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

export default NextEvents;
