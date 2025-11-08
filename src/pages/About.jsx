import { motion } from 'framer-motion'
import { useLanguage } from '../contexts/LanguageContext'
import { getTranslation } from '../i18n'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { 
  FaGlobe, 
  FaLightbulb, 
  FaBolt, 
  FaBullseye,
  FaUsers,
  FaAward
} from 'react-icons/fa'

const About = () => {
  const { language } = useLanguage()

  const values = [
    {
      title: getTranslation(language, 'about.values.value1'),
      description: language === 'zh'
        ? '我们的团队由来自不同国家和文化背景的专业人士组成，拥有丰富的国际业务经验。'
        : 'Our team consists of professionals from diverse countries and cultural backgrounds with extensive international business experience.',
      icon: FaGlobe,
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: getTranslation(language, 'about.values.value2'),
      description: language === 'zh'
        ? '我们不仅提供理论指导，更注重实际执行，帮助客户将战略转化为可操作的业务成果。'
        : 'We not only provide theoretical guidance but also focus on practical execution, helping clients transform strategies into actionable business results.',
      icon: FaLightbulb,
      color: 'from-yellow-500 to-orange-500',
    },
    {
      title: getTranslation(language, 'about.values.value3'),
      description: language === 'zh'
        ? '我们理解时间就是竞争力，因此致力于快速响应客户需求，加速项目落地进程。'
        : 'We understand that time is competitive advantage, so we are committed to rapid response to client needs and accelerated project implementation.',
      icon: FaBolt,
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: getTranslation(language, 'about.values.value4'),
      description: language === 'zh'
        ? '每个客户都有独特的需求，我们提供高度定制化的解决方案，确保最佳的业务匹配。'
        : 'Every client has unique needs, and we provide highly customized solutions to ensure optimal business alignment.',
      icon: FaBullseye,
      color: 'from-green-500 to-emerald-500',
    },
  ]

  const teamMembers = [
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
  ]

  const [headerRef, headerVisible] = useScrollAnimation(0.2)
  const [missionRef, missionVisible] = useScrollAnimation(0.2)
  const [valuesRef, valuesVisible] = useScrollAnimation(0.1)
  const [clientsRef, clientsVisible] = useScrollAnimation(0.2)
  const [teamRef, teamVisible] = useScrollAnimation(0.1)

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
            {getTranslation(language, 'about.title')}
          </motion.h1>
          <motion.p variants={itemVariants} className="text-xl md:text-2xl text-center text-primary-100 max-w-3xl mx-auto">
            {getTranslation(language, 'about.subtitle')}
          </motion.p>
        </motion.div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white relative">
        <motion.div
          ref={missionRef}
          initial="hidden"
          animate={missionVisible ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="max-w-4xl mx-auto">
            <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold mb-8 text-center">
              <span className="gradient-text">
                {getTranslation(language, 'about.mission.title')}
              </span>
            </motion.h2>
            <motion.div variants={itemVariants} className="glass-dark rounded-2xl p-8 md:p-12 shadow-xl">
              <p className="text-lg md:text-xl text-gray-700 text-center leading-relaxed">
                {getTranslation(language, 'about.mission.text')}
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50 relative">
        <motion.div
          ref={valuesRef}
          initial="hidden"
          animate={valuesVisible ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="gradient-text">
              {getTranslation(language, 'about.values.title')}
            </span>
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -10, scale: 1.05 }}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all hover-glow border border-gray-100"
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${value.color} flex items-center justify-center mx-auto mb-6 shadow-lg`}
                  >
                    <IconComponent className="text-white text-3xl" />
                  </motion.div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 text-sm text-center leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </section>

      {/* Clients Section */}
      <section className="py-20 bg-white relative">
        <motion.div
          ref={clientsRef}
          initial="hidden"
          animate={clientsVisible ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold mb-8">
              <span className="gradient-text">
                {getTranslation(language, 'about.clients.title')}
              </span>
            </motion.h2>
            <motion.p variants={itemVariants} className="text-lg md:text-xl text-gray-600 mb-12">
              {getTranslation(language, 'about.clients.text')}
            </motion.p>
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 md:grid-cols-4 gap-8"
            >
              {[1, 2, 3, 4].map((i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.1 }}
                  className="bg-gradient-to-br from-gray-100 to-gray-200 h-32 rounded-xl flex items-center justify-center shadow-md hover:shadow-xl transition-shadow"
                >
                  <span className="text-gray-400 text-sm font-medium">
                    {language === 'zh' ? '客户标志' : 'Client Logo'}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative">
        <motion.div
          ref={teamRef}
          initial="hidden"
          animate={teamVisible ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="gradient-text">
              {language === 'zh' ? '我们的团队' : 'Our Team'}
            </span>
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all text-center hover-glow border border-gray-100"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-32 h-32 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg"
                >
                  <FaUsers className="text-white text-5xl" />
                </motion.div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-primary-600 font-medium mb-4">{member.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  )
}

export default About
