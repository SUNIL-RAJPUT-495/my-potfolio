import './App.css'
import { Contact } from './components/Contact'
import { Header} from './components/Header'
import { Home } from './components/Home'
import { Potfolio } from './components/Potfolio'
import { Services } from './components/Services'


function App() {
  return (
    <>
    <Header/>
  <Home/>
  <Potfolio/>
  
  <Services/>
  <Contact/>
    </>
    )
}

export default App
