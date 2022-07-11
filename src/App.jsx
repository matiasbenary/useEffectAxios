import { useEffect, useState } from "react";

import axios from "axios";

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  // Sin nada se ejecuta cada renderizado
  // [] se ejecuta una sola vez
  // [varible1,variable2] cuando se modifique variable1 o variable2 se ejecuta
  console.log("Pagina Actual:", page);
  useEffect(() => {
    const getCharcters = async () => {
      setLoading(true);
      const response = await axios.get(
        `https://rickandmortyapi.com/api/character?page=${page}`
      );
      console.log(response);
      setCharacters(response.data.results);
      setLoading(false);
    };
    getCharcters();
  }, [page]);
  return (
    <div>
      {loading && <h2>Cargando</h2>}
      <button onClick={() => setPage(page - 1)}>Anterior</button>
      <button onClick={() => setPage(page + 1)}>Siguiente</button>
      {characters.map((character) => (
        <div key={`character-${character.id}`}>
          <h2>{character.name}</h2>
          <img src={character.image} />
        </div>
      ))}
    </div>
  );
};
export default App;
