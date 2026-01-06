import './App.css'
import { Routes, Route } from 'react-router-dom';
import { Contact } from './components/Contact'
import { Header } from './components/Header'
import { Home } from './components/Home'
import { Potfolio } from './components/Potfolio'
import { Services } from './components/Services'
import { ProjectDetail } from './components/ProjectDetail'

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
        <Route path="/project/:id" element={<ProjectDetail />} />
      </Routes>
    </>
  )
}

export default App
