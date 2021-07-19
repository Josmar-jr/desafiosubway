import { ReactNode } from "react";
import Footer from "../Footer";
import { Header } from "../Header";

import { Container } from "./styles";

interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {
  document.title = "Redesign Subway";
  return (
    <Container>
      <Header />
      {children}
      <Footer />
    </Container>
  );
}

export default Layout;
