import type { Cat } from "../types";

export default function CatCard(props: { data: Cat }) {
  const cat: Cat = props.data;
  return (
    <div key={cat.id}>
      <h2>Cat ID: {cat.id}</h2>
      <p>Color: {cat.color}</p>
      <p>Funny: {cat.funny ? "Yes" : "No"}</p>
      <img src={cat.image} alt={`Cat ${cat.id}`} width="200" />
    </div>
  );
}
