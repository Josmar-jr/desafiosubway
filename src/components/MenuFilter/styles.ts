import styled from "styled-components";

export const Container = styled.ul`
  margin-top: 8rem;
  padding: 1rem 0;
  margin: 8rem auto 0 auto;

  max-width: 800px;
  border-radius: 20px;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.colors.white};

  li {
    padding: 0.15rem 1rem;
    cursor: pointer;
    + li {
      border-left: 1px solid ${({ theme }) => theme.colors.gray100};
    }
    button {
      background: transparent;
      color: ${({ theme }) => theme.colors.primary300};
      width: 100%;
      transition: 0.3s ease;

      &:hover {
        opacity: 0.8;
        box-shadow: none;
      }
    }
  }
  @media (max-width: 440px) {
    flex-direction: column;
    li {
      + li {
        border-left: none;
      }
    }
  }
`;
