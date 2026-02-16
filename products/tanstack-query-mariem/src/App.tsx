/*import { useState, useEffect } from 'react';
interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}
export default function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
const user = {
  name: 'John Doe',
  age: 30,
  sayHello(): void {
    console.log(`Hello, my name is ${this.name}`);
  }
}
const userJSON = '{"name": "Marie", "age": 28}'; 
  useEffect( () => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        //this is a http response that has informlation aboutt headers ,status ,body 
        console.log('Réponse brute :', response); 
        if (!response.ok) {
          throw new Error(`Erreur HTTP : ${response.status}`);
        }
        const data = await response.json(); //extraire des donne a partir du response et elle transforme le json text en javascript objects pour pouvoir les manipuler 
        setProducts(data);    // ✅ données prêtes
        setLoading(false); // ✅ fin du chargement
      } catch (err) {
        setError(err.message); // ❌ erreur
        setLoading(false);
      }
    };
const test = JSON.parse(userJSON);
console.log(test); // { name: 'Marie', age: 28 }
const test2 = JSON.stringify(user)  
  }, []); // [] = une seule fois

  if (loading) return <p>⏳ Chargement...</p>;
  if (error) return <p>❌ Erreur : {error}</p>;

  return (
    <ul>
      {products.slice(0, 5).map((product) => (
        <li key={product.id}>{product.title}</li>
      ))}
    </ul>
  );
}
  */
import TodoList from './TodoList';

export default function App() {
  return (
    <div>
      <h1>Ma Todo List</h1>
      <TodoList />
    </div>
  );
} 