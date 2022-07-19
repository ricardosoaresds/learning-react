import './App.css'
import HelloWorld from './components/HelloWorld'
import SayMyName from './components/SayMyName'
import Pessoa from './components/Pessoa'
import Frase from './components/Frase'

function App() {
  const name = 'Ricardo'

  return (
    <div className="App">
      <h1>Css testing</h1>
      <Frase />
      <HelloWorld />
      <SayMyName name="Matheus" />
      <SayMyName name={name} />
      <Pessoa
        nome="Rodrigo"
        idade="30"
        profissao="Programador"
        foto="https://via.placeholder.com/150"
      />
    </div>
  )
}

export default App
