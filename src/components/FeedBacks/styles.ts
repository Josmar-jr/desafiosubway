import styled from "styled-components";

export const Container = styled.div`
  max-width: 1416px;

  width: 100%;

  margin: 0 auto;

  display: flex;
  align-items: center;
  position: relative;
  padding: 5rem 0;

  .containerSwiper {
    width: 100%;
    height: 100%;
    padding: 1rem 0;
  }
  .itemSwiper {
    display: block;
    max-width: 410px !important;
    padding: 24px 36px;
    margin: 0 16px;
    border-radius: 50px;

    background: #fdfdfd;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    img {
      width: 60px;
      height: 60px;
      border-radius: 50%;
    }

    span {
      font-size: 1.5rem;
      font-weight: 600;
      font-family: Sora !important;
      text-transform: capitalize;

      margin: 1rem 0 0.25rem 0;
      color: ${({ theme }) => theme.colors.primary200};
    }

    p {
      width: 100%;
      color: ${({ theme }) => theme.colors.gray500};
    }
  }
  .btn {
    width: 46px;
    height: 46px;
    position: absolute;
    top: 10px;

    background: #f3f5f4;
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;

    box-shadow: 0px 51px 80px rgba(0, 87, 45, 0.08),
      0px 15.375px 24.1177px rgba(0, 87, 45, 0.053),
      0px 6.38599px 10.0172px rgba(0, 87, 45, 0.04),
      0px 2.30969px 3.62304px rgba(0, 87, 45, 0.025);
  }

  .prev {
    right: 140px;
    background-image: ulr("../../assets/icon-arrow.svg");
  }
  .next {
    right: 70px;
    svg {
      transform: rotate(180deg);
    }
  }
`;
