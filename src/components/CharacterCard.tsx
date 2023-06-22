import Image from "next/image";
import { useRouter } from "next/router";
import { type Character } from "types";

export default function CharacterCard({ data }: { data: Character }) {
  const router = useRouter();
  return (
    <>
      <button
        className=" rounded border bg-gray-200 px-2 py-1 text-sm hover:bg-gray-300"
        onClick={() => router.back()}
      >
        Back to Characters
      </button>
      <article
        key={data.id}
        className="m-4 my-auto flex flex-col items-center rounded-lg bg-slate-200 text-center shadow-lg shadow-gray-400/50"
      >
        <Image
          src={data.image}
          alt={`${data.name} Image`}
          height={256}
          width={256}
          className="m-8 rounded-lg"
        />
        <div className="pb-4">
          <p>{data.name}</p>
          <p>Lives in: {data.location.name}</p>
          <p>Species: {data.species}</p>
          <i>Id: {data.id} </i>
        </div>
      </article>
    </>
  );
}
