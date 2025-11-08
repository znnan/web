import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from '../contexts/LanguageContext'
import { getTranslation } from '../i18n'

const Navbar = () => {
  const { language, toggleLanguage } = useLanguage()
  const location = useLocation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isActive = (path) => location.pathname === path
  const isHomePage = location.pathname === '/'

  const navItems = [
    { path: '/', key: 'home' },
    { path: '/services', key: 'services' },
    { path: '/case-studies', key: 'caseStudies' },
    { path: '/about', key: 'about' },
    { path: '/contact', key: 'contact' },
  ]

  // 在首页且未滚动时，使用透明背景
  const navbarClass = isHomePage && !scrolled
    ? 'bg-transparent backdrop-blur-sm'
    : scrolled
    ? 'bg-white/90 backdrop-blur-md shadow-lg'
    : 'bg-white shadow-md'

  const textClass = isHomePage && !scrolled ? 'text-white' : 'text-gray-700'
  const logoClass = isHomePage && !scrolled 
    ? 'text-white' 
    : 'gradient-text'

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navbarClass}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center"
          >
            <Link to="/" className={`text-2xl font-bold ${logoClass}`}>
              NovaBridge
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="relative"
              >
                <motion.div
                  whileHover={{ y: -2 }}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    isActive(item.path)
                      ? isHomePage && !scrolled
                        ? 'text-white bg-white/20'
                        : 'text-primary-700 bg-primary-50'
                      : isHomePage && !scrolled
                      ? 'text-white/90 hover:text-white hover:bg-white/10'
                      : 'text-gray-700 hover:text-primary-700'
                  }`}
                >
                  {getTranslation(language, `nav.${item.key}`)}
                  {isActive(item.path) && (
                    <motion.div
                      layoutId="activeTab"
                      className={`absolute bottom-0 left-0 right-0 h-0.5 rounded-full ${
                        isHomePage && !scrolled ? 'bg-white' : 'bg-primary-600'
                      }`}
                      initial={false}
                    />
                  )}
                </motion.div>
              </Link>
            ))}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleLanguage}
              className={`px-4 py-2 text-sm font-medium border rounded-lg transition-colors ${
                isHomePage && !scrolled
                  ? 'text-white border-white/30 bg-white/10 hover:bg-white/20'
                  : 'text-gray-700 hover:text-primary-700 border-gray-300 hover:border-primary-500 bg-white hover:bg-primary-50'
              }`}
            >
              {language === 'zh' ? 'EN' : '中文'}
            </motion.button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={toggleLanguage}
              className={`px-3 py-2 text-sm font-medium border rounded-lg ${
                isHomePage && !scrolled
                  ? 'text-white border-white/30 bg-white/10'
                  : 'text-gray-700 border-gray-300'
              }`}
            >
              {language === 'zh' ? 'EN' : '中文'}
            </motion.button>
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`${textClass} hover:text-primary-700 focus:outline-none`}
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
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className={`md:hidden pb-4 overflow-hidden ${
                isHomePage && !scrolled ? 'bg-white/10 backdrop-blur-md' : 'bg-white'
              }`}
            >
              {navItems.map((item, index) => (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                      isActive(item.path)
                        ? isHomePage && !scrolled
                          ? 'text-white bg-white/20'
                          : 'text-primary-700 bg-primary-50'
                        : isHomePage && !scrolled
                        ? 'text-white/90 hover:text-white hover:bg-white/10'
                        : 'text-gray-700 hover:text-primary-700 hover:bg-gray-50'
                    }`}
                  >
                    {getTranslation(language, `nav.${item.key}`)}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}

export default Navbar
