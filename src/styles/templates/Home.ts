import styled from "styled-components";

import HeroBack from "../../assets/back-hero.png";

export const Hero = styled.main`
  height: 100vh;
  width: 100%;
  background: url("${HeroBack}") no-repeat center center;
  background-size: cover;
  @media (max-width: 960px) {
    height: 100vh;
  }
`;

interface LargerStyleProp {
  direction: string;
}

export const Larger = styled.div<LargerStyleProp>`
  max-width: 1416px;
  padding: 0 1rem;
  width: 100%;
  height: 100%;

  margin: 0 auto;

  display: flex;
  align-items: center;

  @media (max-width: 960px) {
    flex-direction: ${({ direction }) =>
      direction === "column" ? "column" : "column-reverse"};
  }
`;

export const FlexLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 2 1 auto;
  h1 {
    font-size: 4.5rem;
    color: ${({ theme }) => theme.colors.white};
    line-height: 1.15;
    max-width: 650px;
    span {
      color: ${({ theme }) => theme.colors.secondary300} !important;
    }
  }

  > span {
    margin-top: 2rem;

    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 2rem;

    svg {
      opacity: 0.5;

      transition: 0.3s ease;
      &:hover {
        opacity: 1;
      }
    }
  }
  @media (max-width: 960px) {
    text-align: center;
    transform: translate3d(0, 40px, 0);

    > span {
      justify-content: center;
    }
    h1 {
      font-size: 4rem;
    }
  }
  @media (max-width: 420px) {
    h1 {
      font-size: 3.5rem;
    }
  }
`;
export const FlexRight = styled.div`
  display: flex;
  flex: 1 1 auto;
  > div {
    width: 400px;
    img {
      width: 100%;
      transform: scale(1.6);
    }
  }

  @media (max-width: 1120px) {
    > div {
      width: 340px;
      margin-right: 1rem;
      img {
        transform: scale(1.4);
        width: 100%;
      }
    }
  }
  @media (max-width: 960px) {
    > div {
      margin-top: auto;
      img {
        transform: scale(1.4) translateY(-29px);
      }
    }
  }
  @media (max-width: 420px) {
    > div img {
      transform: scale(1) translateY(-29px);
    }
  }
`;

export const Differentials = styled.div`
  padding: 6rem 0;
  position: relative;

  > img {
    position: absolute;
    &:first-child {
      left: -55px;
      top: 10px;
    }

    width: 8%;
  }
  .elementBack {
    right: -55px;
    bottom: 10px;
  }
`;

export const Text = styled.div`
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  h1 {
    font-size: 3rem;
    color: ${({ theme }) => theme.colors.secondary300};

    span {
      position: relative;

      &:after {
        position: absolute;
        content: "";
        left: 0;
        bottom: 0;
        height: 5px;
        border-radius: 6px;
        width: 100%;
        background-color: ${({ theme }) => theme.colors.primary300};
      }
    }
  }
  p {
    max-width: 400px;
    font-size: 1rem;
    margin: 1rem 0 2rem 0;
    color: ${({ theme }) => theme.colors.gray600};
  }

  ul {
    li {
      color: #1a1b1a;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1rem;

      + li {
        margin-top: 1rem;
      }

      span {
        border-radius: 50%;
        display: block;
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #f3f5f4;
        box-shadow: 0px 51px 80px rgba(0, 87, 45, 0.08),
          0px 15.375px 24.1177px rgba(0, 87, 45, 0.053),
          0px 6.38599px 10.0172px rgba(0, 87, 45, 0.04),
          0px 2.30969px 3.62304px rgba(0, 87, 45, 0.025);
        cursor: pointer;
        transition: 0.3s ease;

        &:hover {
          box-shadow: 0px 51px 80px rgba(0, 87, 45, 0.5),
            0px 15.375px 24.1177px rgba(0, 87, 45, 0.2),
            0px 6.38599px 10.0172px rgba(0, 87, 45, 0.15),
            0px 2.30969px 3.62304px rgba(0, 87, 45, 0.15);
          transform: scale(1.1);
        }
      }
    }
  }

  @media (max-width: 960px) {
    width: 100%;
  }
`;
export const ContentImage = styled.div`
  flex: 2 1 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  > div {
    max-width: 520px;
    img {
      width: 100%;
    }
  }
  @media (max-width: 960px) {
    margin: 2rem 0;
  }
  @media (max-width: 620px) {
    > div {
      max-width: 360px;
    }
  }
`;

export const SectionMenu = styled.div`
  padding: 6rem 0;
  position: relative;
  img {
    position: absolute;
    width: 8%;
  }
  .elementBack2 {
    transform: rotate(90deg);
    bottom: 20px;
    left: -50px;
  }
  .elementBack3 {
    bottom: -480px;
    right: -60px;
  }
`;

export const TextMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  flex: 1 1 auto;

  h1 {
    text-align: center;
    color: ${({ theme }) => theme.colors.secondary300};
    max-width: 390px;
    line-height: 1.5em;
    span {
      font-size: 5.125rem;
    }
  }

  button {
    padding: 0.7rem 2rem;
    color: ${({ theme }) => theme.colors.white};
    margin-top: 4rem;
    border-radius: 1rem;
  }
`;
