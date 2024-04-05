import { CardContent, CardDescription, CardTitle } from './How.styles';

interface HowContentProps {
  title: string;
  description: string;
}

const HowContent = ({ title, description }: HowContentProps) => {
  return (
    <CardContent>
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
    </CardContent>
  );
};

export default HowContent;
