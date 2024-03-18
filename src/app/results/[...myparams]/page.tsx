import Gallery from "@/components/Gallery";
import React from "react";

type Props = {
  params: {
    myparams?: (string | undefined)[];
  };
};

export const genarateMetadata = ({ params: { myparams } }: Props) => {
  console.log(myparams);

  const topic = myparams?.[0] ?? "curated";
  const page = myparams?.[1] ?? "1";
  return {
    title: `Results for ${topic} - Page ${page}`,
  };
};

const Page = ({ params: { myparams } }: Props) => {
  const topic = myparams?.[0] ?? "curated";
  const page = myparams?.[1] ?? "1";
  return <Gallery topic={topic} page={page} />;
};

export default Page;
