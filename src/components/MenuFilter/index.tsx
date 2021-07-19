import { Container } from "./styles";

type MenuFilterProps = {
  filter: any;
  buttons: string[];
};

function MenuFilter({ filter, buttons }: MenuFilterProps) {
  return (
    <Container>
      {buttons.map((category: any, index: number) => (
        <li key={index}>
          <button type="button" onClick={() => filter(category)}>
            {category}
          </button>
        </li>
      ))}
    </Container>
  );
}

export default MenuFilter;
