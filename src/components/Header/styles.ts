import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 90px;

  z-index: 999;

  background-color: ${({ theme }) => theme.colors.white100};
  /* background: transparent; */

  position: fixed;
  top: 0;
  left: 0;

  > div {
    max-width: 1416px;
    width: 100%;
    height: 100%;

    padding: 0 1rem;

    margin: 0 auto;

    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  nav {
    /* flex: 1 1 auto; */
    display: flex;
    align-items: center;

    &:first-child {
      justify-content: flex-start;
      gap: 0.5rem;
    }
    &:last-child {
      justify-content: flex-end;
    }
  }
  @media (max-width: 960px) {
    display: none;
  }
`;

export const Logo = styled.div``;
export const ListNav = styled.ul`
  display: flex;
  gap: 1rem;

  li {
    a {
      padding: 0.5rem 0.5rem;
      text-transform: uppercase;
      font-weight: 500;
      color: ${({ theme }) => theme.colors.primary200};
      transition: 0.3s ease;
      position: relative;

      &:hover {
        opacity: 0.7;
        &::after {
          width: 80%;
        }
      }

      &::after {
        content: "";
        display: block;

        position: absolute;
        top: 90%;
        left: 0;

        width: 0;
        height: 2px;

        transition: 0.5s ease;
        transform: translate(12%, -50%);

        background-color: ${({ theme }) => theme.colors.secondary100};
      }
    }
  }
`;
export const Contacts = styled.nav`
  display: flex;
  align-items: center;

  button {
    padding: 0.7rem 1.5rem;

    color: ${({ theme }) => theme.colors.white};

    transition: 0.3s ease;
  }

  a {
    font-size: 1rem;
    text-transform: uppercase;
    margin-left: 1.5rem;
    margin-right: 0.75rem;
    color: ${({ theme }) => theme.colors.primary200};
  }
`;

export const ContainerHeader = styled.header`
  @media (min-width: 960px) {
    display: none;
  }
  width: 100%;
  height: 70px;

  z-index: 999;

  background-color: ${({ theme }) => theme.colors.white100};
  /* background: transparent; */

  position: fixed;
  top: 0;
  left: 0;

  > div {
    max-width: 1416px;
    width: 100%;
    height: 100%;

    padding: 0 1rem;

    margin: 0 auto;

    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
export const MenuHamburger = styled.button`
  width: 36px;
  height: 36px;

  background: transparent;

  position: relative;
  cursor: pointer;

  z-index: 999;
  transition: 0.7s ease;

  &:after {
    content: "";
    position: absolute;
    width: 70%;
    height: 2.5px;
    border-radius: 2px;
    background-color: ${({ theme }) => theme.colors.primary300};
    top: 40%;
    left: 17%;
    transition: 0.5s ease;
  }
  &:before {
    content: "";
    position: absolute;
    width: 70%;
    height: 2.5px;
    border-radius: 2px;
    background-color: ${({ theme }) => theme.colors.primary300};
    top: 64%;
    left: 17%;
    transition: 0.5s ease;
  }

  &:hover {
    box-shadow: none;
  }

  &.activeBx {
    &:after {
      content: "";
      position: absolute;
      top: 50%;
      left: 17%;
      width: 70%;
      height: 2.5px;
      border-radius: 2px;
      transform: rotate(-135deg);
      background-color: ${({ theme }) => theme.colors.primary300};
    }
    &:before {
      content: "";
      position: absolute;
      top: 50%;
      left: 17%;
      width: 70%;
      height: 2.5px;
      transform: rotate(315deg);
      background-color: ${({ theme }) => theme.colors.primary300};
    }
  }
`;

interface DropdownPropStyle {
  isActive: boolean;
}

export const Dropdown = styled.ul<DropdownPropStyle>`
  @media (min-width: 960px) {
    display: none;
  }
  transition: 0.5s ease-out;
  background-color: ${({ theme }) => theme.colors.white100};
  height: 50vh;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1.5rem;

  transform: ${({ isActive }) =>
    isActive ? "translateY(0px)" : "translateY(-500px)"};

  position: fixed;
  top: 32px;
  left: 0;
  z-index: 555;

  li {
    a {
      font-size: 1.5rem;
      padding: 0.5rem 1rem;
      color: ${({ theme }) => theme.colors.primary200};
    }
  }
`;
