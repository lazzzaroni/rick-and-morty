import Image from "next/image";
import Link from "next/link";
import { type Character } from "types";

export default function AllCards({ cards }: { cards: Character[] }) {
  return (
    <>
      {cards.map((card: Character) => (
        <Link href={`/character/${card.id}`} key={card.id}>
          <Image
            src={card.image}
            alt={`${card.name} Image`}
            height={100}
            width={100}
          />
          <div>{card.name}</div>
        </Link>
      ))}
    </>
  );
}
