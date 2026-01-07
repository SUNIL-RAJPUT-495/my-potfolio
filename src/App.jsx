import './App.css'
import { Routes, Route } from 'react-router-dom';
import { Contact } from './components/Contact'
import { Header } from './components/Header'
import { Home } from './components/Home'
import { Potfolio } from './components/Potfolio'
import { Services } from './components/Services'
import BlinkitProject from './components/projects/blinkitproject' 
import BlinkitAdmin from './components/projects/blinkitAdmin'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <Potfolio />
              <Services />
              <Contact />
            </>
          }
        />
        <Route path="/blinkitProject" element={<BlinkitProject />} />
        <Route path="/BlinkitAdmin" element={<BlinkitAdmin/>}/>
      </Routes>
    </>
  )
}

export default App