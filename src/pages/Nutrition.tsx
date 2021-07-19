import Layout from "../components/Layout";

import NutriImg from "../assets/nutri.jpeg";
import { Aspas } from "../components/IconsComponents/Aspas";

import {
  Container,
  Flex,
  Text,
  ImageRight,
  Ingredients,
  Card,
} from "../styles/templates/Nutricion";

export default function Nutrition() {
  return (
    <Layout>
      <Container>
        <Flex>
          <Text>
            <Aspas />
            <h1>
              A melhor alimentação <span>saudável</span>
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
              pellentesque vulputate at mattis nibh nulla est. Pharetra, eget
              purus tortor nibh porta ipsum enim urna viverra. Lorem ipsum dolor
              sit amet, consectetur adipiscing elit. Quis pellentesque vulputate
              at mattis nibh nulla est. Pharetra, eget purus tortor nibh porta
              ipsum enim urna viverra. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Quis pellentesque vulputate at mattis nibh nulla
              est. Pharetra, eget purus tortor nibh porta ipsum enim urna
              viverra.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
              pellentesque vulputate at mattis nibh nulla est. Pharetra, eget
              purus tortor nibh porta ipsum enim urna viverra. Lorem ipsum dolor
              sit amet, consectetur adipiscing elit. Quis pellentesque vulputate
              at mattis nibh nulla est. Pharetra, eget purus tortor nibh porta
              ipsum enim urna viverra. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Quis pellentesque vulputate at mattis nibh nulla
              est. Pharetra, eget purus tortor nibh porta ipsum enim urna
              viverra.
            </p>
          </Text>

          <ImageRight>
            <img src={NutriImg} alt="Nuticionista Subway" />
          </ImageRight>
        </Flex>
        <Ingredients>
          <Card>
            <h2>Alimentos Frescos </h2>
            <p>
              Está ligada ao consumo de alimentos que contenha vários elementos
              benéficos à saúde.
            </p>
            <button>Ingredientes</button>
          </Card>
          <Card>
            <h2>Alimentos Frescos </h2>
            <p>
              Está ligada ao consumo de alimentos que contenha vários elementos
              benéficos à saúde.
            </p>
            <button>Valor Nutricional</button>
          </Card>
        </Ingredients>
      </Container>
    </Layout>
  );
}
