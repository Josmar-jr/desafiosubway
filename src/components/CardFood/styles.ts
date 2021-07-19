import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;

  display: grid;
  flex-wrap: wrap;
  grid-template-columns: repeat(4, 1fr);

  grid-gap: 2rem;
  padding: 2rem 1rem;

  li {
    max-width: 250px;
    /* height: 250px; */
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    border-radius: 1rem;

    margin-top: 2.5rem;

    background-color: ${({ theme }) => theme.colors.white200};
    box-shadow: 0px 4px 10px rgba(0, 87, 45, 0.1),
      -2px 0px 10px -1px rgba(0, 137, 56, 0.1);

    position: relative;
    cursor: pointer;
    div {
      width: 140px;
      height: 140px;
      border-radius: 50%;

      display: flex;
      align-items: center;
      justify-content: center;

      img {
        transition: 0.5s ease;
        width: 90%;
      }
    }
    &:hover {
      img {
        transform: scale(1.1);
      }
    }

    h3 {
      text-align: center;
      font-size: 1.5rem;
      margin: 1rem 0;
      text-transform: capitalize;
      color: ${({ theme }) => theme.colors.primary200};
    }

    p {
      color: ${({ theme }) => theme.colors.gray300};
    }
  }

  @media (max-width: 1040px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 720px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 500px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
