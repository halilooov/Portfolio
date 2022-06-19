import './App.css'
import Header from './Components/Header/Header'
import Home from './Components/Home/Home'
import About from './Components/About/About';
import Skills from './Components/Skills/Skills';

function App() {
  return (
    <div className="App">
        <div>
            <Header />
            <Home />
            <About />
            <Skills />
        </div>
    </div>
  )
}

export default App
