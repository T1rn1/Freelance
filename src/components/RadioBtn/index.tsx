import { RadioLabel, StyledRadio } from './styled';

interface RadioProps {
  label: string;
  name: string;
  checked: boolean;
  onChange: () => void;
}

const RadioButton: React.FC<RadioProps> = ({ label, name, checked, onChange }) => {
  return (
    <RadioLabel>
      <StyledRadio checked={checked} name={name} onChange={onChange} />
      {label}
    </RadioLabel>
  );
};

export default RadioButton;
