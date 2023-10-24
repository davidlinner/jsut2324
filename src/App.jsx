import './App.css'
import MyComponent from './MyComponent/MyComponent'
import Card from './Card/Card'

function App() {
  return (
    <main>
      <h1>hello world!</h1>
      <MyComponent subject="fellow researchers" b="test" />
      <Card 
      title="MY Card" 
      text="This is the text that should appear on my card"/>
    </main>
  )
}

export default App
