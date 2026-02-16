
export const fetchTodos = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos');
  
  if (!response.ok) {
    throw new Error(`Erreur HTTP: ${response.status}`);
  }
  
  return response.json(); // 📝 Texte JSON → 🎯 Objet JavaScript
};