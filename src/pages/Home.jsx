import { Link } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'
import { getTranslation } from '../i18n'

const Home = () => {
  const { language } = useLanguage()

  const services = [
    {
      title: getTranslation(language, 'services.service1.title'),
      description: getTranslation(language, 'services.service1.description'),
      icon: '🌍',
    },
    {
      title: getTranslation(language, 'services.service2.title'),
      description: getTranslation(language, 'services.service2.description'),
      icon: '🚀',
    },
    {
      title: getTranslation(language, 'services.service3.title'),
      description: getTranslation(language, 'services.service3.description'),
      icon: '💼',
    },
    {
      title: getTranslation(language, 'services.service4.title'),
      description: getTranslation(language, 'services.service4.description'),
      icon: '🤝',
    },
  ]

  const processSteps = [
    { key: 'processStep1', icon: '📊' },
    { key: 'processStep2', icon: '📋' },
    { key: 'processStep3', icon: '⚙️' },
    { key: 'processStep4', icon: '✅' },
  ]

  return (
    <div>
      {/* Banner Section */}
      <section className="relative bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {getTranslation(language, 'home.bannerTitle')}
            </h1>
            <p className="text-xl md:text-2xl text-primary-100 mb-8">
              {getTranslation(language, 'home.bannerSubtitle')}
            </p>
            <div className="flex justify-center">
              <div className="w-full max-w-4xl h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                <span className="text-gray-500 text-lg">
                  Banner Image Placeholder
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {getTranslation(language, 'home.introTitle')}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {getTranslation(language, 'home.introText')}
            </p>
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            {getTranslation(language, 'home.servicesTitle')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {service.description}
                </p>
                <Link
                  to="/services"
                  className="text-primary-600 hover:text-primary-700 font-medium text-sm"
                >
                  {language === 'zh' ? '了解更多 →' : 'Learn More →'}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            {getTranslation(language, 'home.processTitle')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center relative">
                <div className="bg-primary-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 text-4xl">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {getTranslation(language, `home.${step.key}`)}
                </h3>
                {index < processSteps.length - 1 && (
                  <div className="hidden md:flex absolute top-10 left-full w-full items-center">
                    <div className="flex-grow border-t-2 border-primary-300"></div>
                    <div className="px-2 text-primary-500 text-2xl">→</div>
                    <div className="flex-grow"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home

