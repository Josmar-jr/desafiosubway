import { Container } from "./styles";
import { Arrow } from "../IconsComponents/Arrow";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";

// import Swiper core and required modules
import SwiperCore, { Pagination, Navigation } from "swiper/core";

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

type card = {
  id: number;
  name: string;
  image: string;
  description: string;
};

export default function FeedBacks() {
  const params = {
    navigation: {
      nextEl: ".next",
      prevEl: ".prev",
    },
    spaceBetween: 40,
    loop: false,
    grabCursor: true,
  };

  const cards: Array<card> = [
    {
      id: 1,
      image: "https://github.com/josmar-jr.png",
      name: "josmar",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra, eget purus tortor nibh porta ipsum enim urna viverra.",
    },
    {
      id: 2,
      image: "https://github.com/josmar-jr.png",
      name: "josmar",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra, eget purus tortor nibh porta ipsum enim urna viverra.",
    },
    {
      id: 3,
      image: "https://github.com/josmar-jr.png",
      name: "josmar",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra, eget purus tortor nibh porta ipsum enim urna viverra.",
    },
    {
      id: 4,
      image: "https://github.com/josmar-jr.png",
      name: "josmar",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra, eget purus tortor nibh porta ipsum enim urna viverra.",
    },
  ];

  return (
    <Container>
      <Swiper slidesPerView="auto" {...params} className="containerSwiper">
        {cards.map((card) => (
          <SwiperSlide key={card.id} className="itemSwiper">
            <img
              src="https://github.com/josmar-jr.png"
              alt="Profile Josmar Jr"
            />
            <span>{card.name}</span>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
              pellentesque vulputate at mattis nibh nulla est. Pharetra, eget
              purus tortor nibh porta ipsum enim urna viverra.
            </p>
          </SwiperSlide>
        ))}
      </Swiper>
      <button className="btn next">
        <Arrow />
      </button>
      <button className="btn prev">
        <Arrow />
      </button>
    </Container>
  );
}
