import { getSearchParams } from "@/utils/fetch/getSearchParams";
import discoverMovie from "@/utils/tmdb/discoverMovie";

export async function GET(request) {
  const { page } = getSearchParams(request);
  try {
    const data = await discoverMovie(page);
    return Response.json({ message: "Success", data }, { status: 200 });
  } catch (e) {
    return Response.json(
      { message: "Sorry, something went wrong." },
      {
        status: 500,
      },
    );
  }
}
