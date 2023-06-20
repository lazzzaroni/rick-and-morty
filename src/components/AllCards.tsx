import Image from "next/image";
import Link from "next/link";
import { type ApiData } from "types";

export default function AllCards({ data }: { data: ApiData }) {
  return (
    <>
      {data.results.map((character) => (
        <Link
          href={`/character/${character.id}`}
          className=""
          key={character.id}
        >
          <article className="flex flex-col items-center rounded-lg bg-slate-200 p-4 text-center shadow-black">
            <Image
              src={character.image}
              alt={`${character.name} Image`}
              height={100}
              width={100}
              className="rounded-lg"
            />
            <p className="flex h-14 items-center justify-center text-center">
              {character.name}
            </p>
          </article>
        </Link>
      ))}
    </>
  );
}
