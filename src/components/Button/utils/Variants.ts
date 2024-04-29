import { EnumVariant } from '../../../models';

export const Variants: Record<EnumVariant, (backgroundColor?: string, textColor?: string, borderColor?: string, danger?: boolean) => string> = {
  primary: (backgroundColor?: string, textColor?: string, borderColor?: string, danger?: boolean) =>
    `${danger ? 'bg-red-500' : backgroundColor ? backgroundColor : 'bg-primary'} ${textColor ? textColor : 'text-white'} ${borderColor ? borderColor : 'border-none'} `,
  secondary: (backgroundColor?: string, textColor?: string, borderColor?: string, danger?: boolean) =>
    `${backgroundColor ? backgroundColor : 'bg-white'}  ${danger ? 'text-red-500' : textColor ? textColor : 'text-primary'} ${danger ? 'border border-red-500' : borderColor ? borderColor : 'border border-2 border-primary'} `,
};
