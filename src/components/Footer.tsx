"use client";
import Link from "next/link";

type Props = {
  topic: string;
  page: string | undefined;
  prevPage: string | null;
  nextPage: string | null;
};

export default function Footer({ nextPage, page, prevPage, topic }: Props) {
  if (!prevPage && !nextPage) return;

  const pageNum: number[] = [];

  if (prevPage && nextPage) {
    for (let i = Number(prevPage) + 1; i < Number(nextPage); i++) {
      pageNum.push(i);
    }
  }

  const nextPageArea = nextPage ? (
    <Link
      href={`/results/${topic}/${nextPage}`}
      className={!prevPage ? "mx-auto" : ""}
    >
      {!prevPage ? "more" : ""} &gt;&gt;&gt;
    </Link>
  ) : null;

  const prevPageArea = prevPage ? (
    <>
      <Link
        href={`/results/${topic}/${prevPage}`}
        className={!nextPage ? "mx-auto" : ""}
      >
        &lt;&lt;&lt; {!nextPage ? "back" : ""}
      </Link>
      {pageNum.map((num, i) =>
        page && num === Number(page) ? (
          num
        ) : (
          <Link href={`/results/${topic}/${num}`} key={i} className="underline">
            {num}
          </Link>
        )
      )}
    </>
  ) : null;
  return (
    <footer className="flex flex-row justify-between items-center px-2 py-4 font-bold w-60 mx-auto">
      {prevPageArea}
      {nextPageArea}
    </footer>
  );
}
