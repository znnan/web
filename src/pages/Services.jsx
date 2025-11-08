import { useLanguage } from '../contexts/LanguageContext'
import { getTranslation } from '../i18n'

const Services = () => {
  const { language } = useLanguage()

  const services = [
    {
      title: getTranslation(language, 'services.service1.title'),
      description: getTranslation(language, 'services.service1.description'),
      icon: '🌍',
      features: language === 'zh' 
        ? ['市场调研与分析', '竞争环境评估', '进入策略制定', '风险评估与缓解']
        : ['Market Research & Analysis', 'Competitive Environment Assessment', 'Entry Strategy Development', 'Risk Assessment & Mitigation'],
    },
    {
      title: getTranslation(language, 'services.service2.title'),
      description: getTranslation(language, 'services.service2.description'),
      icon: '🚀',
      features: language === 'zh'
        ? ['市场本地化策略', '法规合规咨询', '文化适应指导', '运营设置支持']
        : ['Market Localization Strategy', 'Regulatory Compliance Consulting', 'Cultural Adaptation Guidance', 'Operational Setup Support'],
    },
    {
      title: getTranslation(language, 'services.service3.title'),
      description: getTranslation(language, 'services.service3.description'),
      icon: '💼',
      features: language === 'zh'
        ? ['跨境并购咨询', '战略投资指导', '尽职调查', '交易结构设计', '并购后整合']
        : ['Cross-border M&A Consulting', 'Strategic Investment Guidance', 'Due Diligence', 'Deal Structuring', 'Post-merger Integration'],
    },
    {
      title: getTranslation(language, 'services.service4.title'),
      description: getTranslation(language, 'services.service4.description'),
      icon: '🤝',
      features: language === 'zh'
        ? ['战略伙伴识别', '分销渠道建立', '业务网络构建', '合作伙伴管理']
        : ['Strategic Partner Identification', 'Distribution Channel Establishment', 'Business Network Building', 'Partner Relationship Management'],
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
            {getTranslation(language, 'services.title')}
          </h1>
          <p className="text-xl text-center text-primary-100 max-w-3xl mx-auto">
            {getTranslation(language, 'services.subtitle')}
          </p>
        </div>
      </section>

      {/* Services Detail Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {services.map((service, index) => (
              <div
                key={index}
                className={`bg-white rounded-lg shadow-lg p-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex flex-col md:flex gap-8`}
              >
                <div className="flex-shrink-0">
                  <div className="bg-primary-100 w-24 h-24 rounded-full flex items-center justify-center text-5xl">
                    {service.icon}
                  </div>
                </div>
                <div className="flex-grow">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h2>
                  <p className="text-lg text-gray-600 mb-6">
                    {service.description}
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {service.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-center text-gray-700"
                      >
                        <svg
                          className="w-5 h-5 text-primary-600 mr-2"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            {language === 'zh' 
              ? '准备开始您的国际化之旅？' 
              : 'Ready to Start Your International Journey?'}
          </h2>
          <p className="text-lg text-primary-100 mb-6">
            {language === 'zh'
              ? '联系我们，了解我们如何帮助您实现全球业务目标'
              : 'Contact us to learn how we can help you achieve your global business objectives'}
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors"
          >
            {language === 'zh' ? '立即联系' : 'Get in Touch'}
          </a>
        </div>
      </section>
    </div>
  )
}

export default Services

