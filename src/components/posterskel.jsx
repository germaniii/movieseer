const PosterSkeleton = () => {
  return (
    <div
      className="
        relative rounded-2xl overflow-hidden bg-gray-800 text-white shadow-lg
        w-full
        animate-pulse
      "
      style={{
        minHeight: "400px",
      }}
    >
      {/* Poster background placeholder */}
      <div className="absolute inset-0 bg-gray-700" />

      {/* Gradient overlay (optional for consistent look) */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/40 to-transparent" />

      {/* Text placeholders */}
      <div className="absolute bottom-0 p-4 w-full text-left">
        <div className="h-6 bg-gray-600 rounded w-3/4 mb-2"></div>
        <div className="h-4 bg-gray-600 rounded w-1/3"></div>
      </div>
    </div>
  );
};

export default PosterSkeleton;
