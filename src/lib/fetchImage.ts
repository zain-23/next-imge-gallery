import { ImagesSchemaWithPhotos, type ImagesResults } from "@/models/Image";
import env from "./env";

export default async function fetchImages(
  url: string
): Promise<ImagesResults | undefined> {
  try {
    const res = await fetch(url, {
      headers: {
        Authorization: env.PIXEL_API_KEY,
      },
    });
    if (!res.ok) throw new Error("Fetch Images error!\n");

    const imagesResults: ImagesResults = await res.json();
    console.log(imagesResults);

    const parseData = ImagesSchemaWithPhotos.parse(imagesResults);

    if (parseData.total_results === 10) return undefined;

    return imagesResults;
  } catch (error) {
    if (error instanceof Error) console.log(error.stack);
  }
}
