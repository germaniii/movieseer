import LoadingSkel from "@/components/loadingskel";
import MovieList from "@/components/movielist";
import SearchBar from "@/components/searchbar";
import Link from "next/link";
import { Suspense } from "react";

export default async function Home({ searchParams }) {
  const search = await searchParams;
  const page = search?.page ?? 1;
  const searchWord = search?.search ?? "";
  return (
    <div className="flex justify-center">
      <main className="bg-white dark:bg-black min-h-screen w-full max-w-7xl flex flex-col items-center py-10 px-5">
        <h1 className="font-bold text-5xl text-center mb-8">
          <Link href="?page=1&search=">PlatoSeer</Link>
        </h1>
        <div className="w-full flex justify-center mb-10">
          <SearchBar />
        </div>
        <div className="w-full">
          <Suspense key={searchWord} fallback={<LoadingSkel />}>
            <MovieList page={page} search={searchWord} />
          </Suspense>
        </div>
      </main>
    </div>
  );
}
