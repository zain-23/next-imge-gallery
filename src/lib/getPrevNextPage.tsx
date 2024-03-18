import { ImagesResults } from "@/models/Image";

const getPageNum = (url: string) => {
  const { searchParams } = new URL(url);
  return searchParams.get("page");
};

export const getPrevNextPage = (image: ImagesResults) => {
  let nextPage = image?.next_page ? getPageNum(image.next_page) : null;
  const prevPage = image?.prev_page ? getPageNum(image.prev_page) : null;
  const totalPages =
    image.total_results % image.per_page
      ? Math.ceil(image.total_results / image.per_page)
      : image.total_results / image.per_page + 1;

  if (prevPage && Number(prevPage) + 5 < totalPages) {
    nextPage = Number(prevPage + 5).toString();
  }

  if (nextPage && Number(nextPage) >= totalPages) nextPage = null;

  return {
    prevPage,
    nextPage,
  };
};
