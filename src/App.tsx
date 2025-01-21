import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Background } from './components/Background'
import { Footer } from './sections/Footer'
import { Navbar } from './sections/Navbar'
import { Search } from './pages/Search';
import { Pokemon } from './pages/Pokemon';
import { Compare } from './pages/Compare';
import { MyPokemon } from './pages/MyPokemon';
import { About } from './pages/About';
import "./styles/base/App.scss";

function App() {
  return (
    <>
    <div className="main-container">
      <Background />
      <BrowserRouter>
      <div className="app">
        <Navbar />
        <Routes>
          <Route element={<Search />} path="/search" />
          <Route element={<Pokemon />} path="/pokemon/:id" />
          <Route element={<Compare />} path="/compare" />
          <Route element={<MyPokemon />} path="/mypokemon" />
          <Route element={<About />} path="/about" />
          <Route element={<Navigate to="/pokemon/1" />} path="*" />
        </Routes>
        <Footer />
      </div>
      </BrowserRouter>
    </div>
    </>
  )
}

export default App
