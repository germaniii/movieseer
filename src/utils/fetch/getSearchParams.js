export const getSearchParams = (request) => {
  return Object.fromEntries(new URL(request.url).searchParams);
};
