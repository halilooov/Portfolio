import './App.css'
import Header from './Components/Header/Header'
import Home from './Components/Home/Home'
import About from './Components/About/About';
import Skills from './Components/Skills/Skills';
import Portfolio from './Components/Portfolio/Portfolio';
import Contacts from './Components/Contacts/Contacts';

function App() {
  return (
    <div className="App">
        <div>
            <Header />
            <Home />
            <About />
            <Skills />
            <Portfolio />
            <Contacts />
        </div>
    </div>
  )
}

export default App
