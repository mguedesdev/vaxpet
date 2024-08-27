import AccordionItem from '@/components/Accordion/Accordion';
import { AccordionText, FaqContainer, Title } from './Faq.styles';

const Faq = () => {
  return (
    <FaqContainer>
      <Title>Perguntas Frequentes</Title>
      <AccordionItem title="Como posso receber notificações no meu celular?">
        <AccordionText>
          Para receber notificações no seu celular, você precisa baixar o nosso
          aplicativo e ativar as notificações nas configurações.
        </AccordionText>
      </AccordionItem>
      <AccordionItem title="Posso cadastrar mais de um pet?">
        <AccordionText>
          Sim, você pode cadastrar quantos pets quiser e gerenciar todos eles em
          um único lugar.
        </AccordionText>
      </AccordionItem>
      <AccordionItem title="Posso ver o histórico de serviços realizados no meu pet?">
        <AccordionText>
          Sim, você pode ver o histórico de serviços realizados no seu pet na
          aba de serviços.
        </AccordionText>
      </AccordionItem>
      <AccordionItem title="O que acontece se eu esquecer de uma vacinação?">
        <AccordionText>
          Caso você esqueça de uma vacinação, você receberá uma notificação
          informando que a vacinação está atrasada.
        </AccordionText>
      </AccordionItem>
      {/* <AccordionItem title="Como posso agendar um evento para um pet especifico">
        Para agendar um evento para um pet específico, basta selecionar o pet
        desejado no momento de criar o evento.
      </AccordionItem> */}
    </FaqContainer>
  );
};

export default Faq;
