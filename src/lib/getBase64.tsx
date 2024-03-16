import { getPlaiceholder } from "plaiceholder";
import type { Photo, ImagesResults } from "@/models/Image";

const getBase64 = async (imgUrl: string) => {
  try {
    const res = await fetch(imgUrl);

    if (!res.ok) {
      throw new Error(`Failed to fetch image: ${res.status} ${res.statusText}`);
    }

    const buffer = await res.arrayBuffer();

    const { base64 } = await getPlaiceholder(Buffer.from(buffer));

    return base64;
  } catch (error) {
    if (error instanceof Error) console.log(error.stack);
  }
};

export const addBlurDataUrls = async (
  images: ImagesResults
): Promise<Photo[]> => {
  const base64Promises = images.photos.map((photo) =>
    getBase64(photo.src.large)
  );

  const base64Results = await Promise.all(base64Promises);

  const photosWithBlur: Photo[] = images.photos.map((photo, i) => {
    photo.blurredDataUrl = base64Results[i];
    return photo;
  });
  return photosWithBlur;
};
