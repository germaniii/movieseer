import { defaultHeaders } from "./client";

const searchMovie = async (page = 1, query = "") => {
  const searchParamsObj = new URLSearchParams({
    query,
    page,
    include_adult: false,
    language: "en-US",
    // year: "",
    // region: '',
    // primary_release_year: '',
  });
  const searchParams = searchParamsObj.toString();

  return fetch(
    `${process.env.TMDB_BASE_URL}${process.env.TMDB_BASE_PATH}/search/movie?${searchParams}`,
    {
      method: "GET",
      headers: {
        ...defaultHeaders,
      },
    },
  );
};

export default searchMovie;
