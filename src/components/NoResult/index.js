import React from "react";

// Styles
import { Wrapper, Content, Text } from "./NoResult.styles";

const NoResult = ({ image }) => (
  <Wrapper image={image}>
    <span>Foto av Craig Adderley från Pexels</span>
    <Content>
      <Text>
        <h1>Sorry,</h1>
        <p>Nothing was found</p>
      </Text>
    </Content>
  </Wrapper>
);
export default NoResult;
