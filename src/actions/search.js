import discoverMovie from "@/utils/tmdb/discoverMovie";
import searchMovie from "@/utils/tmdb/searchMovie";

const search = async (page, searchWord) => {
  var result;
  if (!!searchWord?.length) {
    result = await searchMovie(page, searchWord);
  } else {
    result = await discoverMovie(page);
  }

  return result;
};

export default search;
