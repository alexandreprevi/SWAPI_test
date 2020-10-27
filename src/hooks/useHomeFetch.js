import { useState, useEffect } from "react";

// API
import API from "../API";

const initialState = {
  page: 0,
  count: 0,
  next: "",
  previous: null,
  results: [],
};

export const useHomeFetch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [state, setState] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);

  const fetchPeoples = async (page, searchTerm = "") => {
    try {
      setError(false);
      setLoading(true);

      const people = await API.fetchPeoples(searchTerm, page);

      setState((prev) => ({
        page,
        ...people,
        results:
          page > 1 ? [...prev.results, ...people.results] : [...people.results],
      }));
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  };

  // Initial fetch and on search
  useEffect(() => {
    setState(initialState);
    fetchPeoples(1, searchTerm);
  }, [searchTerm]);

  // Load more people
  useEffect(() => {
    if (!loadingMore) return;

    fetchPeoples(state.page + 1, searchTerm);
    setLoadingMore(false);
  }, [loadingMore, searchTerm, state.page]);

  return { state, loading, error, searchTerm, setSearchTerm, setLoadingMore };
};
