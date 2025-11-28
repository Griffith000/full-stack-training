export interface Cat {
  id: string;
  color: string;
  funny: boolean;
  image: string;
}

export const Cats: Cat[] = [
  { id: "1", color: "black", funny: true, image: "/cat1.jpg" },
  { id: "2", color: "white", funny: false, image: "/cat2.jpg" },
  { id: "3", color: "orange", funny: true, image: "/cat3.jpg" },
];
