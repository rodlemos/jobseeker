import { Check, Container } from './styles';

interface Props {
  title: string;
  inputName: string;
  options: string[];
}

export function CheckInput({ title, inputName, options }: Props): JSX.Element {
  return (
    <Container>
      {title}
      <Check>
        {options.map(option => (
          <label>
            <input type="radio" name={inputName} />
            {option}
          </label>
        ))}
      </Check>
    </Container>
  );
}
