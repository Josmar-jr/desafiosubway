import Layout from "../components/Layout";
import {
  Hero,
  FlexLeft,
  FlexRight,
  Differentials,
  Text,
  ContentImage,
  Larger,
  SectionMenu,
  TextMenu,
} from "../styles/templates/Home";

import { Apple, Cut, Drink } from "../components/IconsComponents/ListIcons";
import { Ifood, Rappi } from "../components/IconsComponents/HeroIcons";

import BurguerHero from "../assets/sanduiche-hero.png";
import Sheet from "../assets/sheet.png";
import PratoDifferentials from "../assets/ellipse-prato.png";
import Trigo from "../assets/trigo.png";
import PhotosGrid from "../components/PhotosGrid";
import FeedBacks from "../components/FeedBacks";

function Home() {
  return (
    <Layout>
      <Hero>
        <Larger direction={"column"}>
          <FlexLeft>
            <h1>
              Peça como quiser, como você quer<span>.</span>
            </h1>
            <span>
              <a href="https://www.ifood.com.br/lojas/subway">
                <Ifood />
              </a>
              <a href="https://www.rappi.com.br/restaurantes/900064176-subway-recife">
                <Rappi />
              </a>
            </span>
          </FlexLeft>
          <FlexRight>
            <div>
              <img src={BurguerHero} alt="Hamburguer Subway" />
            </div>
          </FlexRight>
        </Larger>
      </Hero>
      <Differentials>
        <img src={Sheet} alt="folha" />
        <img className="elementBack" src={Trigo} alt="trigo" />
        <Larger direction={"column"}>
          <Text>
            <h1>
              Diferencial do <span>Subway</span>
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
              pellentesque vulputate at mattis nibh nulla est. Pharetra, eget
              purus tortor nibh porta ipsum enim urna viverra.
            </p>
            <ul>
              <li>
                <span>
                  <Apple width={21} height={25} />
                </span>
                Lorem ipsum dolor sit amet
              </li>
              <li>
                <span>
                  <Cut />
                </span>
                Lorem ipsum dolor sit amet
              </li>
              <li>
                <span>
                  <Drink />
                </span>
                Lorem ipsum dolor sit amet
              </li>
            </ul>
          </Text>
          <ContentImage>
            <div>
              <img src={PratoDifferentials} alt="" />
            </div>
          </ContentImage>
        </Larger>
      </Differentials>
      <SectionMenu>
        <img className="elementBack2" src={Trigo} alt="trigo" />
        <Larger direction={"column"}>
          <PhotosGrid />
          <TextMenu>
            <h1>
              Conheça nosso<span> Cardápio</span>
            </h1>
            <button>Acessar</button>
          </TextMenu>
        </Larger>
        <img className="elementBack3" src={Sheet} alt="folha" />
      </SectionMenu>
      <FeedBacks />
    </Layout>
  );
}

export default Home;
