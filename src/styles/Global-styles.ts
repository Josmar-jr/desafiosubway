import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

@media (max-width: 1080px) {
  html {
    font-size: 93.75%;
  }
}

@media (max-width: 720px) {
  html {
    font-size: 87.5%;
  }
}

body,
input,
textarea,
button {
  color: var(--gray-500);
  overflow-x: hidden;
}

p, a, button {
  font: 500 1rem Source Sans Pro, sans-serif;
}

button {
  transition: .3s ease;
  &:hover {
    opacity: 0.9;
  }
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: 600;
  font-family: "Sora", sans-serif;
}

body {
  background-color: #E5F1EB;
}

h1 {
  font-size: 3rem;
}

h2 {
  font-size: 1.5rem;
}

a {
  text-decoration: none;
  cursor: pointer;
}

li {
  list-style: none;
}

button {
  cursor: pointer;
  text-transform: uppercase;
  font-weight: 500;
  border: none;
  letter-spacing: .08rem;
  border-radius: 1rem;
  background: linear-gradient(220.94deg, #004e27 14.43%, #00572d 85.28%);
}
`;

export default GlobalStyle;
