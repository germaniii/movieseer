import Link from "next/link";
import Pagination from "./pagination";
import Poster from "./poster";
import searchAction from "@/actions/search";

const MovieList = async ({ search }) => {
  const page = search?.page ?? 1;
  const searchWord = search?.search ?? "";
  const result = await searchAction(page, searchWord);
  return (
    <>
      {result?.results?.length > 0 ? (
        <>
          <div
            className="
              grid gap-3 w-full
              grid-cols-1
              sm:grid-cols-2
              md:grid-cols-3
              lg:grid-cols-4
              xl:grid-cols-5
            "
          >
            {result.results.map((detail) => (
              <Poster key={detail.id} details={detail} />
            ))}
          </div>
          <Pagination />
        </>
      ) : (
        <>
          <p className="w-full text-center">
            No matches.{" "}
            <Link href="?page=1&search=">
              <span className="w-full text-center text-blue-600 hover:text-blue-300">
                Click here to go back to the homepage.
              </span>
            </Link>
          </p>
        </>
      )}
    </>
  );
};

export default MovieList;
