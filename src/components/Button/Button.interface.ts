import { ButtonHTMLAttributes } from 'react';

export interface IButton extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
  children: React.ReactNode;
  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;
  htmlType?: ButtonHTMLAttributes<HTMLButtonElement>['type'];
  type?:
    | 'primary'
    | 'secondary'
    | 'secondary2'
    | 'thetriary'
    | 'outline'
    | 'outline-yellow';
  subtitle?: string;
}
