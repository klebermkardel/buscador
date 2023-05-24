import { FiSearch } from 'react-icons/fi'

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
          <FiSearch size={25} color="#fff"/>
        </button>
      </div>

      <main className='main'>
        <h2>CEP: 99999-999</h2>
        <span>Rua Teste Alguma Coisa</span>
        <span>Algum Complemento</span>
        <span>Jardim Alguma Coisa</span>
        <span>Cidade - UF</span>
      </main>
    </div>
  );
}

export default App;
