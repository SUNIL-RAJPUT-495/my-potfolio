import './App.css'
import { Contact } from './components/Contact'
import { Header} from './components/Header'
import { Home } from './components/Home'
import { Potfolio } from './components/Potfolio'
import { Process } from './components/Process'
import { Services } from './components/Services'
import { Blog } from './components/Blog'


function App() {
  return (
    <>
    <Header/>
  <Home/>
  <Process/>
  <Potfolio/>
  <Blog/>
  <Services/>
  <Contact/>
    </>
    )
}

export default App
