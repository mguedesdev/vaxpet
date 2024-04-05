import { ButtonHTMLAttributes, ReactNode } from 'react';
import { Button } from '../Button/Button.styles';

interface HeaderActionProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  buttonType?: 'primary' | 'secondary' | 'text';
}

const HeaderAction = ({ buttonType, children, ...rest }: HeaderActionProps) => {
  return (
    <Button className={buttonType} {...rest} type="button">
      {children}
    </Button>
  );
};

export default HeaderAction;
