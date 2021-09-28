import React, { ReactNode } from "react";

// styles
import { Container, Header, Content } from "./styles";

// interface
interface ICardProps {
  title?: string;
  colorHeader: string;
  colorContent: string;
  children?: ReactNode;
}

const Card = ({ title, children, colorHeader, colorContent }: ICardProps) => {

  return (
    <Container>
      <Header activeColor={colorHeader}>
        <span>{title}</span>
      </Header>
      <Content activeColor={colorContent}>{children}</Content>
    </Container>
  );
};

export default Card;
