import { getSearchParams } from "@/utils/fetch/getSearchParams";
import searchMovie from "@/utils/tmdb/searchMovie";

export async function GET(request) {
  const { page, word } = getSearchParams(request);
  try {
    const response = await searchMovie(page, word);
    const results = await response.json();

    return Response.json(
      { message: "Success", data: results },
      { status: 200 },
    );
  } catch (e) {
    return Response.json(
      { message: "Sorry, something went wrong." },
      {
        status: 500,
      },
    );
  }
}
