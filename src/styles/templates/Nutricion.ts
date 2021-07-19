import styled from "styled-components";

export const Container = styled.section`
  max-width: 1416px;
  padding: 0 1rem;
  width: 100%;
  height: 100%;

  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3rem;

  padding: 12rem 0;

  @media (max-width: 960px) {
    flex-direction: column-reverse;
  }
  @media (max-width: 520px) {
    padding: 8rem 0;
  }
`;
export const Text = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  flex: 1 1 auto;
  width: 50%;

  h1 {
    color: ${({ theme }) => theme.colors.secondary200};
    max-width: 600px;
    span {
      font-size: 5.125rem;
    }
  }

  p {
    font-size: 1rem;
    margin: 1rem 0;
    color: ${({ theme }) => theme.colors.gray600};
  }

  @media (max-width: 960px) {
    width: 90%;
  }
  @media (max-width: 520px) {
    width: 90%;
    h1 {
      font-size: 2.7rem;
      span {
        font-size: 4rem;
      }
    }
    svg {
      width: 60px;
    }
  }
`;
export const ImageRight = styled.div`
  display: flex;
  flex: 2 1 auto;

  width: 220px;
  border-radius: 1rem;

  img {
    border-radius: 1rem;
    width: 100%;
  }
  @media (max-width: 960px) {
    width: 60%;
  }
`;
export const Ingredients = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding-bottom: 8rem;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;
export const Card = styled.div`
  height: 300px;
  color: ${({ theme }) => theme.colors.white};
  background-image: url("https://www.subway.com/-/media/_SubwayV2/NutritionInfoPage/Nutrition-Video-At-Home-v2.jpg");
  &:first-child {
  }
  background-size: cover;
  background-position: center center;

  text-align: center;
  padding: 1.5rem;
  border-radius: 1rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h2 {
    font-size: 2.5rem;
  }
  p {
    font-size: 1.25rem;
    margin: 0.2rem 0 2.2rem 0;
  }

  button {
    font-size: 1.25rem;
    padding: 0.5rem 1.5rem;
  }
`;
