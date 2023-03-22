import { useState } from "react";
import "./App.css";

function App() {
  const [buttonSort, setButtonSort] = useState(true);

  const [name, setName] = useState("");

  const [nameSorted, setNameSorted] = useState("");

  let [items, setItems] = useState([]);

  const [sorted, setSorted] = useState(false);

  function add() {
    if (name !== "") {
      items.push(name);
      setName("");
      setButtonSort(false);
    }
  }

  function sort(e) {
    e.preventDefault();
    setNameSorted(items[Math.floor(Math.random() * items.length)]);
    setSorted(true);
  }

  function remove() {
    items.pop();
    setItems([...items]);
  }

  return (
    <div className="App">
      <h1>Sorteador de nomes</h1>
      <ul>
        {items.map((item) => (
          <div>
            <li>{item}</li>
          </div>
        ))}
      </ul>

      <div className="containerInputs">
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}
          placeholder="Digite o nome..."
        />
        <div className="addName">
          <button className="button" onClick={add}>
            ADICIONAR
          </button>
          <button disabled={buttonSort} className="button" onClick={remove}>
            REMOVER
          </button>
        </div>

        <button
          disabled={buttonSort}
          id="sort"
          className="button"
          onClick={sort}
        >
          SORTEAR
        </button>
      </div>

      <div className={sorted ? "sortedName" : "noSorted"}>
        <h2>O nome sorteado foi:</h2>
        <h3>{nameSorted}</h3>
      </div>
    </div>
  );
}

export default App;
