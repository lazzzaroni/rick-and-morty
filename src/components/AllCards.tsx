import Image from "next/image";
import Link from "next/link";
import { type ApiData } from "types";

export default function AllCards({ data }: { data: ApiData }) {
  return (
    <>
      {data.results.map((character) => (
        <Link href={`/character/${character.id}`} key={character.id}>
          <article className="flex h-full items-center rounded-lg bg-slate-200 p-4 text-center shadow-lg shadow-gray-400/50 sm:flex-col">
            <Image
              src={character.image}
              alt={`${character.name} Image`}
              height={100}
              width={100}
              className="rounded-lg"
            />
            <div className="m-auto flex h-full content-center sm:m-0 sm:mt-4">
              <p className="flex items-center justify-center text-center">
                {character.name}
              </p>
            </div>
          </article>
        </Link>
      ))}
    </>
  );
}
