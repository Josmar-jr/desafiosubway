import { ArrowsLogo } from "../components/IconsComponents/ArrowsLogo";
import Layout from "../components/Layout";

import { Container, Text, Form } from "../styles/templates/Contacts";

export default function Contacts() {
  function onSubmitForm(e: any): void {
    e.preventDefault();
  }

  return (
    <Layout>
      <Container>
        <div>
          <Text>
            <h1>Para fazer parte da maior franquia</h1>
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
            <ArrowsLogo />
          </Text>
          <Form>
            <div>
              <label>Nome: </label>
              <input type="text" />
            </div>
            <div>
              <label>Email: </label>
              <input type="text" />
            </div>
            <div>
              <label htmlFor="">Telefone: </label>
              <input type="phone" />
            </div>
            <button onClick={onSubmitForm}>Confirmar e Enviar</button>
          </Form>
        </div>
      </Container>
    </Layout>
  );
}
