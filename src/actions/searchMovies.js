import discoverMovie from "@/utils/tmdb/discoverMovie";
import searchMovie from "@/utils/tmdb/searchMovie";

const search = async (page, searchWord) => {
  var result;
  if (!!searchWord?.length) {
    result = await searchMovie();
  } else {
    result = await fetch(`/api/search?${searchWord}`, searchWord);
  }

  return result;
};

export default search;
