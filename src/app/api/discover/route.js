import { getSearchParams } from "@/utils/fetch/getSearchParams";
import discoverMovie from "@/utils/tmdb/discoverMovie";

export async function GET(request) {
  const { page } = getSearchParams(request);
  try {
    const response = await discoverMovie(page);
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
