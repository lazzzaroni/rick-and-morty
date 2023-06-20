import { type Character } from "types";

export default function CharacterCard({ data }: { data: Character }) {
  return (
    <div>
      <h1>{data.name}</h1>
    </div>
  );
}
