import fetchImages from "@/lib/fetchImage";
import { ImagesResults } from "@/models/Image";
import React from "react";
import ImgContainer from "./ImgContainer";
import { addBlurDataUrls } from "@/lib/getBase64";

const Gallery = async () => {
  const url = "https://api.pexels.com/v1/curated";

  const images: ImagesResults | undefined = await fetchImages(url);

  if (!images) return <h2 className="m-4 text-2xl font-bold"></h2>;

  const photosWithBlur = await addBlurDataUrls(images);

  return (
    <main className="max-w-7xl mx-auto">
      <section className="px-2 my-3 grid grid-cols-gallery gap-2">
        {photosWithBlur.map((photo) => (
          <ImgContainer photo={photo} key={photo.id} />
        ))}
      </section>
    </main>
  );
};
export default Gallery;
