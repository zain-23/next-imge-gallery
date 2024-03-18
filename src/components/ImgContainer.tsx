import type { Photo } from "@/models/Image";
import Image from "next/image";
import Link from "next/link";

type Props = {
  photo: Photo;
};

const ImgContainer = ({ photo }: Props) => {
  const widthHeightRatio = photo.height / photo.width;
  const galleryHeight = Math.ceil(250 * widthHeightRatio);
  const photoSpan = Math.ceil(galleryHeight / 10) + 1;

  return (
    <div
      className="w-[250px] justify-self-center"
      style={{
        gridRow: `span ${photoSpan}`,
      }}
    >
      <Link
        href={photo.url}
        target="_blank"
        className="grid place-content-center"
      >
        <div className="rounded-xl overflow-hidden group">
          <Image
            src={photo.src.large}
            alt={photo.alt}
            width={250}
            height={galleryHeight}
            sizes="250px"
            className="group-hover:opacity-75"
            placeholder="blur"
            blurDataURL={photo.blurredDataUrl}
          />
        </div>
      </Link>
    </div>
  );
};

export default ImgContainer;
