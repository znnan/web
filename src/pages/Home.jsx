import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useLanguage } from '../contexts/LanguageContext'
import { getTranslation } from '../i18n'
import { useScrollAnimation, useParallax } from '../hooks/useScrollAnimation'
import { 
  FaGlobe, 
  FaRocket, 
  FaBriefcase, 
  FaHandshake,
  FaChartLine,
  FaClipboardList,
  FaCog,
  FaCheckCircle,
  FaArrowRight
} from 'react-icons/fa'

const Home = () => {
  const { language } = useLanguage()

  const services = [
    {
      title: getTranslation(language, 'services.service1.title'),
      description: getTranslation(language, 'services.service1.description'),
      icon: FaGlobe,
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: getTranslation(language, 'services.service2.title'),
      description: getTranslation(language, 'services.service2.description'),
      icon: FaRocket,
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: getTranslation(language, 'services.service3.title'),
      description: getTranslation(language, 'services.service3.description'),
      icon: FaBriefcase,
      color: 'from-indigo-500 to-blue-500',
    },
    {
      title: getTranslation(language, 'services.service4.title'),
      description: getTranslation(language, 'services.service4.description'),
      icon: FaHandshake,
      color: 'from-green-500 to-emerald-500',
    },
  ]

  const processSteps = [
    { key: 'processStep1', icon: FaChartLine, color: 'bg-blue-500' },
    { key: 'processStep2', icon: FaClipboardList, color: 'bg-purple-500' },
    { key: 'processStep3', icon: FaCog, color: 'bg-indigo-500' },
    { key: 'processStep4', icon: FaCheckCircle, color: 'bg-green-500' },
  ]

  const [bannerRef, bannerVisible] = useScrollAnimation(0.2)
  const [introRef, introVisible] = useScrollAnimation(0.2)
  const [servicesRef, servicesVisible] = useScrollAnimation(0.1)
  const [processRef, processVisible] = useScrollAnimation(0.1)
  const [parallaxRef, parallaxOffset] = useParallax(0.3)

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
    <div className="overflow-hidden">
      {/* Banner Section with Parallax */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden animated-gradient">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div 
            className="absolute top-20 left-10 w-72 h-72 bg-white opacity-10 rounded-full blur-3xl"
            style={{ transform: `translateY(${parallaxOffset * 0.5}px)` }}
          />
          <div 
            className="absolute bottom-20 right-10 w-96 h-96 bg-white opacity-10 rounded-full blur-3xl"
            style={{ transform: `translateY(${-parallaxOffset * 0.5}px)` }}
          />
        </div>

        <div 
          ref={parallaxRef}
          className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32"
        >
          <motion.div
            ref={bannerRef}
            initial="hidden"
            animate={bannerVisible ? 'visible' : 'hidden'}
            variants={containerVariants}
            className="text-center"
          >
            <motion.h1 
              variants={itemVariants}
              className="text-5xl md:text-7xl font-bold mb-6 text-white drop-shadow-2xl"
            >
              {getTranslation(language, 'home.bannerTitle')}
            </motion.h1>
            <motion.p 
              variants={itemVariants}
              className="text-xl md:text-3xl text-white/90 mb-12 drop-shadow-lg"
            >
              {getTranslation(language, 'home.bannerSubtitle')}
            </motion.p>
            <motion.div 
              variants={itemVariants}
              className="flex justify-center"
            >
              <div className="w-full max-w-4xl h-80 rounded-2xl overflow-hidden shadow-2xl glass hover-glow">
                <div className="w-full h-full bg-gradient-to-br from-white/20 to-white/5 flex items-center justify-center">
                  <span className="text-white/80 text-lg font-medium">
                    Banner Image Placeholder
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
          </div>
        </motion.div>
      </section>

      {/* Introduction Section with Glass Effect */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <motion.div
          ref={introRef}
          initial="hidden"
          animate={introVisible ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">
                {getTranslation(language, 'home.introTitle')}
              </span>
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="glass-dark rounded-2xl p-8 md:p-12 shadow-xl">
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                  {getTranslation(language, 'home.introText')}
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Services Preview Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-50/50 via-transparent to-primary-50/50"></div>
        <motion.div
          ref={servicesRef}
          initial="hidden"
          animate={servicesVisible ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-center mb-16"
          >
            <span className="gradient-text">
              {getTranslation(language, 'home.servicesTitle')}
            </span>
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="group relative"
                >
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover-glow border border-gray-100 h-full">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 transform group-hover:rotate-6 transition-transform duration-300`}>
                      <IconComponent className="text-white text-2xl" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-6 line-clamp-3">
                      {service.description}
                    </p>
                    <Link
                      to="/services"
                      className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium text-sm group-hover:gap-2 transition-all"
                    >
                      {language === 'zh' ? '了解更多' : 'Learn More'}
                      <FaArrowRight className="ml-1 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-b from-white via-gray-50 to-white relative">
        <motion.div
          ref={processRef}
          initial="hidden"
          animate={processVisible ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-center mb-16"
          >
            <span className="gradient-text">
              {getTranslation(language, 'home.processTitle')}
            </span>
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {processSteps.map((step, index) => {
              const IconComponent = step.icon
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.1 }}
                  className="text-center relative"
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className={`${step.color} w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg hover:shadow-xl transition-shadow`}
                  >
                    <IconComponent className="text-white text-3xl" />
                  </motion.div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {getTranslation(language, `home.${step.key}`)}
                  </h3>
                  {index < processSteps.length - 1 && (
                    <div className="hidden md:flex absolute top-12 left-full w-full items-center">
                      <div className="flex-grow border-t-2 border-dashed border-primary-300"></div>
                      <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="px-2 text-primary-500 text-2xl"
                      >
                        →
                      </motion.div>
                      <div className="flex-grow"></div>
                    </div>
                  )}
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </section>
    </div>
  )
}

export default Home
