import { useLanguage } from '../contexts/LanguageContext'
import { getTranslation } from '../i18n'

const About = () => {
  const { language } = useLanguage()

  const values = [
    {
      title: getTranslation(language, 'about.values.value1'),
      description: language === 'zh'
        ? '我们的团队由来自不同国家和文化背景的专业人士组成，拥有丰富的国际业务经验。'
        : 'Our team consists of professionals from diverse countries and cultural backgrounds with extensive international business experience.',
      icon: '🌐',
    },
    {
      title: getTranslation(language, 'about.values.value2'),
      description: language === 'zh'
        ? '我们不仅提供理论指导，更注重实际执行，帮助客户将战略转化为可操作的业务成果。'
        : 'We not only provide theoretical guidance but also focus on practical execution, helping clients transform strategies into actionable business results.',
      icon: '💡',
    },
    {
      title: getTranslation(language, 'about.values.value3'),
      description: language === 'zh'
        ? '我们理解时间就是竞争力，因此致力于快速响应客户需求，加速项目落地进程。'
        : 'We understand that time is competitive advantage, so we are committed to rapid response to client needs and accelerated project implementation.',
      icon: '⚡',
    },
    {
      title: getTranslation(language, 'about.values.value4'),
      description: language === 'zh'
        ? '每个客户都有独特的需求，我们提供高度定制化的解决方案，确保最佳的业务匹配。'
        : 'Every client has unique needs, and we provide highly customized solutions to ensure optimal business alignment.',
      icon: '🎯',
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
            {getTranslation(language, 'about.title')}
          </h1>
          <p className="text-xl text-center text-primary-100 max-w-3xl mx-auto">
            {getTranslation(language, 'about.subtitle')}
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
              {getTranslation(language, 'about.mission.title')}
            </h2>
            <p className="text-lg text-gray-600 text-center leading-relaxed">
              {getTranslation(language, 'about.mission.text')}
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            {getTranslation(language, 'about.values.title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="text-5xl mb-4 text-center">{value.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-sm text-center">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {getTranslation(language, 'about.clients.title')}
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              {getTranslation(language, 'about.clients.text')}
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="bg-gray-100 h-32 rounded-lg flex items-center justify-center"
                >
                  <span className="text-gray-400 text-sm">
                    {language === 'zh' ? '客户标志' : 'Client Logo'}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            {language === 'zh' ? '我们的团队' : 'Our Team'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: language === 'zh' ? '张明' : 'Michael Zhang',
                role: language === 'zh' ? '首席执行官' : 'CEO',
                bio: language === 'zh'
                  ? '拥有20年国际业务经验，曾领导多个成功的跨境并购项目。'
                  : '20 years of international business experience, led multiple successful cross-border M&A projects.',
              },
              {
                name: language === 'zh' ? 'Sarah Chen' : 'Sarah Chen',
                role: language === 'zh' ? '战略总监' : 'Strategy Director',
                bio: language === 'zh'
                  ? '专注于市场拓展策略，帮助50+企业成功进入国际市场。'
                  : 'Specializes in market expansion strategies, helped 50+ companies successfully enter international markets.',
              },
              {
                name: language === 'zh' ? 'James Wang' : 'James Wang',
                role: language === 'zh' ? '投资顾问' : 'Investment Advisor',
                bio: language === 'zh'
                  ? '在跨境投资和并购领域拥有丰富经验，完成交易总额超过10亿美元。'
                  : 'Extensive experience in cross-border investments and M&A, completed deals totaling over $1 billion.',
              },
            ].map((member, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md text-center"
              >
                <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-gray-400">
                    {language === 'zh' ? '头像' : 'Photo'}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-primary-600 mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default About

