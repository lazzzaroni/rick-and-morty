import Image from "next/image";
import { type Character } from "types";

export default function CharacterCard({ data }: { data: Character }) {
  return (
    <>
      <article
        key={data.id}
        className="flex flex-col items-center rounded-lg bg-slate-200 p-4 text-center shadow-white dark:shadow-black"
      >
        <Image
          src={data.image}
          alt={`${data.name} Image`}
          height={256}
          width={256}
          className="m-4 rounded-lg"
        />
        <p>Name: {data.name}</p>
        <p>Lives in: {data.location.name}</p>
        <p>Species: {data.species}</p>
        <i>Id: {data.id} </i>
      </article>
    </>
  );
}
