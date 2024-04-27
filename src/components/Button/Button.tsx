interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}

export const Button: React.FC<Props> = ({ label, ...props }) => {
  return <button {...props}>{label}</button>;
};
