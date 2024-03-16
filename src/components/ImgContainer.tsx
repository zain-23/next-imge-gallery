import type { Photo } from "@/models/Image";
import Image from "next/image";

type Props = {
  photo: Photo;
};

const ImgContainer = ({ photo }: Props) => {
  return (
    <div className="h-64 bg-gray-200 rounded-xl relative overflow-hidden group">
      <Image
        src={photo.src.large}
        alt={photo.alt}
        fill={true}
        className="object-cover group-hover:opacity-75"
        placeholder="blur"
        blurDataURL={photo.blurredDataUrl}
      />
    </div>
  );
};

export default ImgContainer;
