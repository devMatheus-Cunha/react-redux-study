import styled from "styled-components";
import { transparentize } from "polished"


export const Container = styled.div`
  margin-top: 1.5rem;

  flex: 1;
  display: flex;
  flex-direction: column;
`;

interface IHeaderAndContent {
  activeColor: string;
}

export const Header = styled.div<IHeaderAndContent>`
  display: flex;
  justify-content: center;

  background: ${(props) => (props.activeColor)};

  span {
    flex: 1;
    padding: 5px;
  }
`;

export const Content = styled.div<IHeaderAndContent>`
flex: 1;
padding: 20px;
font-size: 20px;

background: ${(props) => (transparentize(0.7, props.activeColor))};

`;
