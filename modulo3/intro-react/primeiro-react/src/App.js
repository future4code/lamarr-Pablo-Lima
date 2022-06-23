import levi from './images/levi.png'
import './App.css'

function App() {
  const mensagem = () => {
    alert('boa noite')
  }
  return (
    <div className="App">
      <h1>Prazer em te conhecer, eu me chamo Pablo</h1>
      <img src={levi} className="App-logo" alt="foto" />
      <p>Essa e minha primeira vez utilizando react</p>
      <button className="button" onClick={mensagem}>
        Clique aki
      </button>
    </div>
  )
}

export default App
