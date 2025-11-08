import { motion } from 'framer-motion'
import { useLanguage } from '../contexts/LanguageContext'
import { getTranslation } from '../i18n'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { 
  FaGlobe, 
  FaRocket, 
  FaBriefcase, 
  FaHandshake,
  FaCheck,
  FaArrowRight
} from 'react-icons/fa'

const Services = () => {
  const { language } = useLanguage()

  const services = [
    {
      title: getTranslation(language, 'services.service1.title'),
      description: getTranslation(language, 'services.service1.description'),
      icon: FaGlobe,
      color: 'from-blue-500 to-cyan-500',
      features: language === 'zh' 
        ? ['市场调研与分析', '竞争环境评估', '进入策略制定', '风险评估与缓解']
        : ['Market Research & Analysis', 'Competitive Environment Assessment', 'Entry Strategy Development', 'Risk Assessment & Mitigation'],
    },
    {
      title: getTranslation(language, 'services.service2.title'),
      description: getTranslation(language, 'services.service2.description'),
      icon: FaRocket,
      color: 'from-purple-500 to-pink-500',
      features: language === 'zh'
        ? ['市场本地化策略', '法规合规咨询', '文化适应指导', '运营设置支持']
        : ['Market Localization Strategy', 'Regulatory Compliance Consulting', 'Cultural Adaptation Guidance', 'Operational Setup Support'],
    },
    {
      title: getTranslation(language, 'services.service3.title'),
      description: getTranslation(language, 'services.service3.description'),
      icon: FaBriefcase,
      color: 'from-indigo-500 to-blue-500',
      features: language === 'zh'
        ? ['跨境并购咨询', '战略投资指导', '尽职调查', '交易结构设计', '并购后整合']
        : ['Cross-border M&A Consulting', 'Strategic Investment Guidance', 'Due Diligence', 'Deal Structuring', 'Post-merger Integration'],
    },
    {
      title: getTranslation(language, 'services.service4.title'),
      description: getTranslation(language, 'services.service4.description'),
      icon: FaHandshake,
      color: 'from-green-500 to-emerald-500',
      features: language === 'zh'
        ? ['战略伙伴识别', '分销渠道建立', '业务网络构建', '合作伙伴管理']
        : ['Strategic Partner Identification', 'Distribution Channel Establishment', 'Business Network Building', 'Partner Relationship Management'],
    },
  ]

  const [headerRef, headerVisible] = useScrollAnimation(0.2)
  const [servicesRef, servicesVisible] = useScrollAnimation(0.1)
  const [ctaRef, ctaVisible] = useScrollAnimation(0.2)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header Section */}
      <section className="relative bg-gradient-to-r from-primary-600 via-primary-700 to-primary-800 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <motion.div
          ref={headerRef}
          initial="hidden"
          animate={headerVisible ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <motion.h1 variants={itemVariants} className="text-5xl md:text-6xl font-bold text-center mb-6">
            {getTranslation(language, 'services.title')}
          </motion.h1>
          <motion.p variants={itemVariants} className="text-xl md:text-2xl text-center text-primary-100 max-w-3xl mx-auto">
            {getTranslation(language, 'services.subtitle')}
          </motion.p>
        </motion.div>
      </section>

      {/* Services Detail Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-50/30 to-transparent"></div>
        <motion.div
          ref={servicesRef}
          initial="hidden"
          animate={servicesVisible ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        >
          <div className="space-y-16">
            {services.map((service, index) => {
              const IconComponent = service.icon
              const isEven = index % 2 === 0
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className={`flex flex-col md:flex-row gap-8 items-center ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className="flex-shrink-0 w-full md:w-1/3">
                    <motion.div
                      whileHover={{ scale: 1.05, rotate: 5 }}
                      className={`bg-gradient-to-br ${service.color} rounded-2xl p-12 shadow-2xl hover:shadow-3xl transition-shadow`}
                    >
                      <IconComponent className="text-white text-6xl mx-auto" />
                    </motion.div>
                  </div>
                  <div className="flex-grow w-full md:w-2/3">
                    <div className="glass-dark rounded-2xl p-8 md:p-12 shadow-xl hover:shadow-2xl transition-all hover-glow">
                      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                        {service.title}
                      </h2>
                      <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                        {service.description}
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {service.features.map((feature, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="flex items-center text-gray-700 group"
                          >
                            <div className="flex-shrink-0 w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center mr-3 group-hover:bg-primary-500 transition-colors">
                              <FaCheck className="text-primary-600 group-hover:text-white text-sm transition-colors" />
                            </div>
                            <span className="text-gray-700 group-hover:text-primary-600 transition-colors">{feature}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <motion.section
        ref={ctaRef}
        initial="hidden"
        animate={ctaVisible ? 'visible' : 'hidden'}
        variants={containerVariants}
        className="relative bg-gradient-to-r from-primary-600 via-primary-700 to-primary-800 text-white py-20 overflow-hidden"
      >
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-6">
            {language === 'zh' 
              ? '准备开始您的国际化之旅？' 
              : 'Ready to Start Your International Journey?'}
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg md:text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            {language === 'zh'
              ? '联系我们，了解我们如何帮助您实现全球业务目标'
              : 'Contact us to learn how we can help you achieve your global business objectives'}
          </motion.p>
          <motion.a
            variants={itemVariants}
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 bg-white text-primary-600 px-8 py-4 rounded-xl font-semibold hover:bg-primary-50 transition-colors shadow-lg hover:shadow-xl"
          >
            {language === 'zh' ? '立即联系' : 'Get in Touch'}
            <FaArrowRight />
          </motion.a>
        </div>
      </motion.section>
    </div>
  )
}

export default Services
