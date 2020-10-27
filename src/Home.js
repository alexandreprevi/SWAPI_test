import React, { useState } from "react";

// Hook
import { useHomeFetch } from "./hooks/useHomeFetch";

// Components
import SearchBar from "./components/SearchBar";
import Spinner from "./components/Spinner";
import Button from "./components/Button";
import CharacterList from "./components/CharacterList";
import Character from "./components/Character";
import NotResult from "./components/NoResult";

// Image
import NotFoundImage from "./images/pexels-craig-adderley.jpg";

const Home = () => {
  const {
    state,
    loading,
    error,
    searchTerm,
    setSearchTerm,
    setLoadingMore,
  } = useHomeFetch();
  const [expandedItem, setExpandedItem] = useState(null);

  if (error) return <div>Something went wrong...</div>;

  console.log(state);

  return (
    <>
      <SearchBar setSearchTerm={setSearchTerm} />
      <CharacterList
        header={searchTerm ? "Search Result" : "Star Wars Characters"}
      >
        {state.results.map((character, index) => (
          <Character
            key={index}
            name={character.name}
            birth={character.birth_year}
            skin_color={character.skin_color}
            height={character.height}
            index={index}
            expandedItem={expandedItem}
            setExpandedItem={setExpandedItem}
          />
        ))}
        {loading && <Spinner />}
        {state.results.length < state.count && !loading && (
          <Button text="Load More" callback={() => setLoadingMore(true)} />
        )}
      </CharacterList>
      {state.results.length < 1 && <NotResult image={NotFoundImage} />}
    </>
  );
};

export default Home;
