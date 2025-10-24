import { defaultHeaders } from "./client";
import getConfiguration from "./getConfiguration";

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

  const result = await fetch(
    `${process.env.TMDB_BASE_URL}${process.env.TMDB_BASE_PATH}/search/movie?${searchParams}`,
    {
      method: "GET",
      headers: {
        ...defaultHeaders,
      },
    },
  );

  const results = await result.json();
  const configRes = await getConfiguration();
  const config = await configRes.json();

  const imageBaseUrl = config?.images?.secure_base_url ?? "";
  const posterSize = config?.images?.poster_sizes?.at(-1) ?? "original";

  const data = {
    ...results,
    results: results.results.map((result) => ({
      ...result,
      release_date: result.release_date
        ? new Date(result.release_date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })
        : "",
      poster_path: `${imageBaseUrl}${posterSize}/${result.poster_path}`,
    })),
  };

  return data;
};

export default searchMovie;
