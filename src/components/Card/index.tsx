import React, { ReactNode } from "react";

// styles
import { Container, Header, Content } from "./styles";

// interface
interface ICardProps {
  title?: string;
  colors: string;
  children?: ReactNode;
}

const Card = ({ title, children, colors }: ICardProps) => {

  return (
    <Container>
      <Header activeColor={colors}>
        <span>{title}</span>
      </Header>
      <Content activeColor={colors}>{children}</Content>
    </Container>
  );
};

export default Card;
