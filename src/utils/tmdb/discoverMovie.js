import { defaultHeaders } from "./client";
import getConfiguration from "./getConfiguration";

const discoverMovie = async (page = 1, sortBy = "popularity.desc") => {
  const searchParamsObj = new URLSearchParams({
    page,
    include_adult: false,
    include_video: false,
    language: "en-US",
    sort_by: sortBy,
  });

  const searchParams = searchParamsObj.toString();

  const result = await fetch(
    `${process.env.TMDB_BASE_URL}${process.env.TMDB_BASE_PATH}/discover/movie?${searchParams}`,
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

export default discoverMovie;
