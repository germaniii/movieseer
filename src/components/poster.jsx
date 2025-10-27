const Poster = ({ details }) => {
  const id = details.id ?? "";
  const title = details.title ?? "";
  const overview = details.overview ?? "";
  const releaseDate = details.release_date ?? "";
  const posterPath = details.poster_path ?? "";

  return (
    <div
      key={id}
      className="
        group cursor-pointer
        relative rounded-2xl overflow-hidden bg-gray-800 text-white shadow-lg
        transform transition-all hover:scale-103
        w-full
        h-full
      "
      style={{
        backgroundImage: `url(${posterPath})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "400px",
      }}
    >
      <div className="absolute inset-0 bg-linear-to-b from-70% to-blue-700 group-hover:from-30%" />
      <div className="absolute bottom-0 p-4 w-full text-left">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-sm opacity-80">{releaseDate}</p>
        <p className="hidden group-hover:block transform transition-all text-ellipsis overflow-y-scroll max-h-50 custom-scrollbar">
          {overview}
        </p>
      </div>
    </div>
  );
};

export default Poster;
