import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 15.25rem 12.45rem 12.5rem;
  grid-template-rows: repeat(2, 228px);
  grid-template-areas:
    "A1 A2 AB3"
    "B12 B12 AB3";
  gap: 0.65rem;
  flex: 2 1 auto;

  > div {
    border-radius: 1rem;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
  }

  @media (max-width: 1100px) {
    grid-template-columns: 15.25rem 12.45rem;
    grid-template-areas:
      "A1 A2"
      "B12 B12";
    grid-template-rows: repeat(2, 228px);
  }
  @media (max-width: 960px) {
    width: 100%;
    justify-content: center;

    /* flex: 1 1 auto; */
    transform: translate3d(0.65rem, 0, 0);
  }
  @media (max-width: 430px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 180px);
  }
`;
