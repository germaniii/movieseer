"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";

const Pagination = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const page = Number(searchParams.get("page")) || 1;
  const search = searchParams.get("search") || "";

  const onPageChange = useCallback(
    (newPage) => {
      if (newPage < 1) return;
      const params = new URLSearchParams(searchParams.toString());
      params.set("page", newPage);
      if (search) params.set("search", search);
      router.push(`?${params.toString()}`);
    },
    [router, searchParams, search],
  );

  return (
    <div className="flex justify-center items-center gap-4 mt-8">
      <button
        onClick={() => onPageChange(page - 1)}
        disabled={page <= 1}
        className="cursor-pointer px-4 py-2 text-lg rounded-full bg-gray-800 text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-700"
      >
        &lt;
      </button>

      <span className="text-white text-lg">{page}</span>

      <button
        onClick={() => onPageChange(page + 1)}
        className="cursor-pointer px-4 py-2 text-lg rounded-full bg-gray-800 text-white hover:bg-gray-700"
      >
        &gt;
      </button>
    </div>
  );
};

export default Pagination;
