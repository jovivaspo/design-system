import { EnumSize, EnumVariant } from '../../models';
import { IconLoader } from '../Icons/IconLoader.component';
import { getStyles } from './utils/getStyles';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  variant?: EnumVariant;
  size?: EnumSize;
  backgroundColor?: string;
  textColor?: string;
  borderColor?: string;
  danger?: boolean;
  disabled?: boolean;
  loading?: boolean;
  icon?: JSX.Element;
  onClick?: () => void;
}

export const Button = ({ variant = EnumVariant.primary, size = EnumSize.medium, label, textColor, backgroundColor, borderColor, danger, disabled, loading, icon, ...props }: ButtonProps) => {
  return (
    <button type='button' className={getStyles(variant, size, backgroundColor, textColor, borderColor, danger, disabled, loading)} {...props}>
      {!!loading && (
        <IconLoader
          className={`
      ${size === EnumSize.small ? 'w-3 h-3' : size === EnumSize.large ? 'w-5 h-5' : 'w-4 h-4'}
      ${textColor ? textColor : variant === EnumVariant.primary ? 'text-white' : danger ? 'text-red-500' : 'text-primary'}
      `}
        />
      )}
      {label}
      {!loading && icon}
    </button>
  );
};
