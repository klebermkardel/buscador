import {} from 'react-icons/fi'

function App() {
  return (
    <div className="container">
      <h1 className="title">Buscador CEP</h1>

      <div className="containerInput">
        <input
        type="text"
        placeholder="Digite seu CEP..."
        />

        <button className="buttonSearch">
          Buscar
        </button>
      </div>
    </div>
  );
}

export default App;
