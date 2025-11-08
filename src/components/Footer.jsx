import { useLanguage } from '../contexts/LanguageContext'
import { getTranslation } from '../i18n'

const Footer = () => {
  const { language } = useLanguage()

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">NovaBridge Consulting</h3>
            <p className="text-gray-400 text-sm">
              {getTranslation(language, 'footer.location')}
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <p className="text-gray-400 text-sm">
              {getTranslation(language, 'footer.email')}
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <p className="text-gray-400 text-sm">
              {getTranslation(language, 'footer.icp') || 'ICP License: Pending'}
            </p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} NovaBridge Consulting. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

