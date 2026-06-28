import { HashRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './contexts/ThemeContext'
import { LangProvider } from './contexts/LangContext'
import Nav from './components/Nav/Nav'
import Home from './pages/Home'

export default function App() {
  return (
    <ThemeProvider>
      <LangProvider>
        <HashRouter>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </HashRouter>
      </LangProvider>
    </ThemeProvider>
  )
}
