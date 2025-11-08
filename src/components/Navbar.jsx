import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'
import { getTranslation } from '../i18n'

const Navbar = () => {
  const { language, toggleLanguage } = useLanguage()
  const location = useLocation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const isActive = (path) => location.pathname === path

  const navItems = [
    { path: '/', key: 'home' },
    { path: '/services', key: 'services' },
    { path: '/case-studies', key: 'caseStudies' },
    { path: '/about', key: 'about' },
    { path: '/contact', key: 'contact' },
  ]

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-primary-700">
              NovaBridge
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive(item.path)
                    ? 'text-primary-700 bg-primary-50'
                    : 'text-gray-700 hover:text-primary-700 hover:bg-gray-50'
                }`}
              >
                {getTranslation(language, `nav.${item.key}`)}
              </Link>
            ))}
            <button
              onClick={toggleLanguage}
              className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-primary-700 border border-gray-300 rounded-md hover:border-primary-500 transition-colors"
            >
              {language === 'zh' ? 'EN' : '中文'}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={toggleLanguage}
              className="px-3 py-2 text-sm font-medium text-gray-700 border border-gray-300 rounded-md"
            >
              {language === 'zh' ? 'EN' : '中文'}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-primary-700 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive(item.path)
                    ? 'text-primary-700 bg-primary-50'
                    : 'text-gray-700 hover:text-primary-700 hover:bg-gray-50'
                }`}
              >
                {getTranslation(language, `nav.${item.key}`)}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar

