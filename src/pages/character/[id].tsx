import ApiService from "@/api/apiClient";
import CharacterCard from "@/components/CharacterCard";
import { type GetStaticPaths, type GetStaticProps } from "next";
import { useRouter } from "next/router";
import { QueryClient, dehydrate, useQuery } from "react-query";

export default function Character() {
  const router = useRouter();
  const characterID =
    typeof router.query?.id === "string" ? router.query.id : "";

  const {
    isSuccess,
    data: character,
    isLoading,
    isError,
  } = useQuery(
    ["getCharacter", characterID],
    async () => {
      return await ApiService.getByID(characterID);
    },
    {
      enabled: characterID.length > 0,
    }
  );

  if (isSuccess) {
    return (
      <div className="container">
        <CharacterCard data={character} />
      </div>
    );
  }

  if (isLoading) {
    return <div className="center">Loading...</div>;
  }

  if (isError) {
    return (
      <div className="center">
        We could not find character&nbsp;
        <span role="img" aria-label="sad">
          😢
        </span>
      </div>
    );
  }

  return <></>;
}

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params?.id as string;
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(["getCharacter", id], async () => {
    return await ApiService.findByID(id);
  });

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};
