import Gallery from "@/components/Gallery";
import React from "react";

type Props = {
  params: {
    term?: string;
  };
};

export const genarateMetadata = ({ params: { term } }: Props) => {
  return {
    title: `Results for ${term}`,
  };
};

const Page = ({ params: { term } }: Props) => {
  return <Gallery topic={term} />;
};

export default Page;
