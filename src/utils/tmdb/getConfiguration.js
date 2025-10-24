import { defaultHeaders } from "./client";

const getConfiguration = async () => {
  return fetch(
    `${process.env.TMDB_BASE_URL}${process.env.TMDB_BASE_PATH}/configuration`,
    {
      method: "GET",
      headers: {
        ...defaultHeaders,
      },
    },
  );
};

export default getConfiguration;
