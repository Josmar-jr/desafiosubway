import { Container } from "./styles";

type Food = {
  id: number;
  name: string;
  image: string;
  category: string;
  description: string;
};
type CardFoodProps = {
  foods: Array<Food>;
};

function CardFood({ foods }: CardFoodProps) {
  return (
    <Container>
      {foods.map(({ id, name, description, image }) => (
        <li key={id}>
          <div>
            <img src={image} alt="" />
          </div>
          <h3>{name}</h3>
          <p>{description}</p>
        </li>
      ))}
    </Container>
  );
}

export default CardFood;
