import { EnumSize, EnumVariant } from '../../../models';
import { Sizes } from './Sizes';
import { Variants } from './Variants';

export const getStyles = (variant: EnumVariant, size: EnumSize, backgroundColor?: string, textColor?: string, borderColor?: string, danger?: boolean, disabled?: boolean, loading?: boolean) => {
  return `flex justify-center items-center gap-2 font-bold rounded-xl ${disabled || loading ? 'cursor-auto opacity-50' : 'hover:opacity-85 transition-opacity'}  ${Variants[variant](backgroundColor, textColor, borderColor, danger)} ${Sizes[size]}`;
};
