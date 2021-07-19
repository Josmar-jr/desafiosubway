import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1416px;
    padding: 10rem 1rem 7.5rem 1rem;
    width: 100%;

    margin: 0 auto;

    display: flex;
    align-items: center;
  }

  @media (max-width: 960px) {
    > div {
      flex-direction: column;
    }
  }
`;
export const Text = styled.div`
  max-width: 540px;

  h1 {
    color: ${({ theme }) => theme.colors.secondary200};
  }
  p {
    margin: 1rem 0 1.5rem 0;
  }
  svg {
    margin-bottom: 1rem;
  }
  @media (max-width: 520px) {
    h1 {
      font-size: 2.8rem;
    }
  }
`;
export const Form = styled.form`
  max-width: 480px;
  width: 100%;
  border-radius: 12px;
  background: ${({ theme }) => theme.colors.white100};

  @media (max-width: 960px) {
    max-width: 540px;
  }

  padding: 2rem;
  > div {
    display: flex;
    flex-direction: column;

    label {
      font-family: "Sora", sans-serif;
      font-size: 1.25rem;
      color: ${({ theme }) => theme.colors.gray700};
      margin: 1rem 0 0.25rem 0;
    }

    input {
      border-radius: 12px;
      border: 1px solid ${({ theme }) => theme.colors.primary200};
      padding: 0.35rem;
    }
  }

  button {
    margin-top: 2.25rem;
    padding: 0.5rem 1.5rem;
    width: 100%;
    color: ${({ theme }) => theme.colors.white};
    border-radius: 12px;
  }
`;
