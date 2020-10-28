import React from "react";

// Styles
import { Wrapper } from "./Character.styles";

const Character = ({
  name,
  birth,
  height,
  skin_color,
  index,
  setExpandedItem,
  expandedItem,
}) => {
  const handleExpansion = () => {
    expandedItem === name ? setExpandedItem(null) : setExpandedItem(name);
  };
  return (
    <Wrapper>
      <h2 onClick={handleExpansion}>{name}</h2>
      {expandedItem === name && (
        <>
          <p>Birth Year: {birth}</p>
          <p>Height: {height}</p>
          <p>Skin Color: {skin_color}</p>
        </>
      )}
    </Wrapper>
  );
};

export default Character;
