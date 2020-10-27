const API_URL = "https://swapi.dev/api/";
const PEOPLE_BASE_URL = `${API_URL}people/`;
const PEOPLE_SEARCH_BASE_URL = `${PEOPLE_BASE_URL}?search=`;

const apiSettings = {
  fetchPeoples: async (searchTerm, page) => {
    const endpoint = searchTerm
      ? `${PEOPLE_SEARCH_BASE_URL}${searchTerm}&page=${page}`
      : `${PEOPLE_BASE_URL}?page=${page}`;
    return await (await fetch(endpoint)).json();
  },
};

export default apiSettings;
