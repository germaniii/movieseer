import { defaultHeaders } from "./client";

const discoverMovie = (page = 1, sortBy = "popularity.desc") => {
  const searchParamsObj = new URLSearchParams({
    page,
    include_adult: false,
    include_video: false,
    language: "en-US",
    sort_by: sortBy,
  });

  const searchParams = searchParamsObj.toString();

  return fetch(
    `${process.env.TMDB_BASE_URL}${process.env.TMDB_BASE_PATH}/discover/movie?${searchParams}`,
    {
      method: "GET",
      headers: {
        ...defaultHeaders,
      },
    },
  );
};

export default discoverMovie;
