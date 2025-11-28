import { Cats } from "../types";
import type { Cat } from "../types";
import CatCard from "./CatCard";
export default function CatList() {
  return (
    <div>
      {Cats.map((cat: Cat) => (
        <CatCard key={cat.id} data={cat} />
      ))}
    </div>
  );
}
