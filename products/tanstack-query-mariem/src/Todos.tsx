// 📁 components/TodoList.jsx
import { useState, useEffect } from 'react';

function TodoList() {
  // 1. Trois useState 😓
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // 2. Un useEffect 😓
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response) => {
        if (!response.ok) throw new Error('Erreur réseau');
        return response.json(); // Texte → Objet
      })
      .then((data) => {
        setTodos(data);      // ✅ Succès
        setLoading(false);   // ✅ Fin chargement
      })
      .catch((err) => {
        setError(err.message); // ❌ Erreur
        setLoading(false);
      });
  }, []); // [] = une seule fois au montage

  // 3. Gestion des états 😓
  if (loading) return <p>⏳ Chargement...</p>;
  if (error) return <p>❌ {error}</p>;

  // 4. Affichage
  return (
    <ul>
      {todos.slice(0, 5).map((todo) => (
        <li key={todo.id}>
          <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
            {todo.title}
          </span>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;