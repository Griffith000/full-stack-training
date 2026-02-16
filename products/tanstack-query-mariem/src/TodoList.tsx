// 📁 components/TodoList.jsx
import { useQuery } from '@tanstack/react-query';
import { fetchTodos } from './api/todo.js';

function TodoList() {
  // 🎣 UN SEUL HOOK remplace 3 useState + 1 useEffect !
  const { 
    data: todos,     // Les données (on renomme data → todos)
    isLoading,       // Premier chargement (spinner)
    isFetching,      // Re-fetch en arrière-plan
    error,           // Erreur
    refetch          // Pour re-fetcher manuellement
  } = useQuery({
    queryKey: ['todos'],           // est l'IDENTIFIANT UNIQUE de votre requête dans le cache.
    queryFn: fetchTodos,          
    staleTime: 1000 * 60,          // Optionnel : écrase la config globale
    enabled: true,                // contrôle si la requête doit s'exécuter automatiquement ou non.
  });

  // Gestion des états
  if (isLoading) return <p>⏳ Premier chargement...</p>;
  if (error) return <p>❌ Erreur : {error.message}</p>;
console.log("data",todos)
  return (
    <div>
      {/* Indicateur de re-fetch silencieux */}
      {isFetching && <small>🔄 Mise à jour...</small>}
      
      <ul>
        {todos?.slice(0, 5).map((todo) => (
          <li key={todo.id}>
            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
              {todo.title}
            </span>
          </li>
        ))}
      </ul>
      
      {/* Bouton pour re-fetcher manuellement */}
      <button onClick={refetch}>🔄 Rafraîchir</button>
    </div>
  );
}

export default TodoList;