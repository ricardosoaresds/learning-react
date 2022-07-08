import './App.css'

function App() {
  const name = 'Ricardo'

  const newName = name.toUpperCase()

  function sum(a, b, c) {
    return (a + b) * c
  }

  const url = 'https://via.placeholder.com/150'

  return (
    <div className="App">
      <h1>Alterations on JSX!!</h1>
      <p>Hello, {name}!</p>
      <p>Hello, {newName}!</p>
      <p> Soma: {sum(1, 1, 3)}</p>
      <img src={url} alt="Minha Imagem" />
    </div>
  )
}

export default App
