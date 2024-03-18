import fetchImages from "@/lib/fetchImage";
import { ImagesResults } from "@/models/Image";
import React from "react";
import ImgContainer from "./ImgContainer";
import { addBlurDataUrls } from "@/lib/getBase64";
import { getPrevNextPage } from "@/lib/getPrevNextPage";
import Footer from "./Footer";

type Props = {
  topic?: string | undefined;
  page?: string | undefined;
};

const Gallery = async ({ topic = "curated", page }: Props) => {
  let url;
  if (topic === "curated" && page) {
    url = `https://api.pexels.com/v1/curated?page=${page}`;
  } else if (topic === "curated") {
    url = `https://api.pexels.com/v1/curated`;
  } else if (!page) {
    url = `https://api.pexels.com/v1/search?query=${topic}`;
  } else {
    url = `https://api.pexels.com/v1/search?query=${topic}&page=${page}`;
  }

  const images: ImagesResults | undefined = await fetchImages(url);

  if (!images || images.per_page === 0)
    return <h2 className="m-4 text-2xl font-bold"></h2>;

  const photosWithBlur = await addBlurDataUrls(images);
  const { nextPage, prevPage } = getPrevNextPage(images);

  const footerProps = {
    page,
    nextPage,
    prevPage,
    topic,
  };
  return (
    <main className="max-w-7xl mx-auto">
      <section className="px-1 my-3 grid grid-cols-gallery auto-rows-[10px]">
        {photosWithBlur.map((photo) => (
          <ImgContainer photo={photo} key={photo.id} />
        ))}
      </section>
      <Footer {...footerProps} />
    </main>
  );
};
export default Gallery;
