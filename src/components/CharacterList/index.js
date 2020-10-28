import React from "react";

// Styles
import { Wrapper, Content } from "./CharacterList.styles";

const CharacterList = ({ header, children }) => (
  <Wrapper>
    <h1>{header}:</h1>
    <Content>{children}</Content>
  </Wrapper>
);

export default CharacterList;
