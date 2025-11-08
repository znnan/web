import { useLocation } from 'react-router-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Services from './pages/Services'
import CaseStudies from './pages/CaseStudies'
import About from './pages/About'
import Contact from './pages/Contact'
import { LanguageProvider } from './contexts/LanguageContext'

function AppContent() {
  const location = useLocation()
  const isHomePage = location.pathname === '/'

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className={`flex-grow ${!isHomePage ? 'pt-16' : ''}`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

function App() {
  return (
    <LanguageProvider>
      <Router>
        <AppContent />
      </Router>
    </LanguageProvider>
  )
}

export default App
