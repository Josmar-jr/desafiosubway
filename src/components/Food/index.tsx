import { Container } from "./styles";

function Food({ fooda }: any) {
  // const a = allFoods;
  return (
    <Container>
      <li>{fooda}</li>
    </Container>
  );
}

export default Food;
