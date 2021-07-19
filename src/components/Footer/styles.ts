import styled from "styled-components";

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.primary200};
  padding: 2rem 0;
  div {
    width: 100%;
    max-width: 1416px;
    padding: 0 1rem;
    margin: 0 auto;
    width: 100%;
    height: 100%;

    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }
  text-align: center;
  > p {
    display: block;
    color: white;
    font-size: 1rem;
    font-weight: 500;
    margin-top: 2.5rem;
  }
  h3 {
    color: white;
  }
`;
export const ListNav = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  li {
    a {
      color: ${({ theme }) => theme.colors.gray100};
      font-size: 1rem;

      &:hover {
        text-decoration: underline;
      }
    }
  }
  @media (max-width: 540px) {
    display: none;
  }
`;
export const Contact = styled.span`
  ul {
    margin-top: 1rem;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.75rem;

    a {
      padding: 0.5rem;
      path {
        transition: 0.3s ease;
      }
      &:hover {
        path {
          fill: white;
        }
      }
    }
  }
`;
