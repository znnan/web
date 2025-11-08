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
  FaArrowRight,
  FaUsers,
  FaEnvelope,
  FaLaptopCode,
  FaIndustry,
  FaShoppingCart
} from 'react-icons/fa'

// 导入图片
import cbdBuildings from '../assets/images/CBD buildings dark cloudy.jpg'
import briefcaseWalking from '../assets/images/briefcase walrking light.jpg'
import handshake from '../assets/images/handshake.jpg'
import corporateHands from '../assets/images/coorperate hands.jpg'
import chess from '../assets/images/chess.jpg'
import operationData from '../assets/images/operation data.jpg'

const Home = () => {
  const { language } = useLanguage()

  const services = [
    {
      title: getTranslation(language, 'services.service1.title'),
      description: getTranslation(language, 'services.service1.description'),
      icon: FaGlobe,
      color: 'from-blue-500 to-cyan-500',
      image: cbdBuildings,
    },
    {
      title: getTranslation(language, 'services.service2.title'),
      description: getTranslation(language, 'services.service2.description'),
      icon: FaRocket,
      color: 'from-purple-500 to-pink-500',
      image: briefcaseWalking,
    },
    {
      title: getTranslation(language, 'services.service3.title'),
      description: getTranslation(language, 'services.service3.description'),
      icon: FaBriefcase,
      color: 'from-indigo-500 to-blue-500',
      image: chess,
    },
    {
      title: getTranslation(language, 'services.service4.title'),
      description: getTranslation(language, 'services.service4.description'),
      icon: FaHandshake,
      color: 'from-green-500 to-emerald-500',
      image: corporateHands,
    },
  ]

  const processSteps = [
    { key: 'processStep1', icon: FaChartLine, color: 'bg-blue-500' },
    { key: 'processStep2', icon: FaClipboardList, color: 'bg-purple-500' },
    { key: 'processStep3', icon: FaCog, color: 'bg-indigo-500' },
    { key: 'processStep4', icon: FaCheckCircle, color: 'bg-green-500' },
  ]

  const caseStudies = [
    {
      title: getTranslation(language, 'caseStudies.case1.title'),
      description: getTranslation(language, 'caseStudies.case1.description'),
      image: operationData,
      icon: FaLaptopCode,
      color: 'from-blue-500 to-cyan-500',
      industry: language === 'zh' ? '科技行业' : 'Technology',
      result: language === 'zh' ? '18个月内收入增长300%' : '300% Revenue Growth in 18 Months',
    },
    {
      title: getTranslation(language, 'caseStudies.case2.title'),
      description: getTranslation(language, 'caseStudies.case2.description'),
      image: chess,
      icon: FaIndustry,
      color: 'from-purple-500 to-pink-500',
      industry: language === 'zh' ? '制造业' : 'Manufacturing',
      result: language === 'zh' ? '成功完成5亿美元并购' : 'Successfully Completed $500M M&A',
    },
  ]

  const values = [
    {
      title: getTranslation(language, 'about.values.value1'),
      icon: FaGlobe,
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: getTranslation(language, 'about.values.value2'),
      icon: FaCheckCircle,
      color: 'from-green-500 to-emerald-500',
    },
    {
      title: getTranslation(language, 'about.values.value3'),
      icon: FaRocket,
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: getTranslation(language, 'about.values.value4'),
      icon: FaBriefcase,
      color: 'from-indigo-500 to-blue-500',
    },
  ]

  const [bannerRef, bannerVisible] = useScrollAnimation(0.2)
  const [introRef, introVisible] = useScrollAnimation(0.2)
  const [servicesRef, servicesVisible] = useScrollAnimation(0.1)
  const [processRef, processVisible] = useScrollAnimation(0.1)
  const [casesRef, casesVisible] = useScrollAnimation(0.1)
  const [aboutRef, aboutVisible] = useScrollAnimation(0.1)
  const [contactRef, contactVisible] = useScrollAnimation(0.1)
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
      {/* Banner Section with Full Background Image */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${cbdBuildings})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
            transform: `translateY(${parallaxOffset * 0.5}px)`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80"></div>
        </div>

        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden z-10">
          <div 
            className="absolute top-20 left-10 w-72 h-72 bg-white opacity-5 rounded-full blur-3xl"
            style={{ transform: `translateY(${parallaxOffset * 0.5}px)` }}
          />
          <div 
            className="absolute bottom-20 right-10 w-96 h-96 bg-white opacity-5 rounded-full blur-3xl"
            style={{ transform: `translateY(${-parallaxOffset * 0.5}px)` }}
          />
        </div>

        <div 
          ref={parallaxRef}
          className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32"
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
              className="text-5xl md:text-8xl font-extrabold mb-8 text-white drop-shadow-2xl leading-tight"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-primary-200 to-white">
                {getTranslation(language, 'home.bannerTitle')}
              </span>
            </motion.h1>
            <motion.p 
              variants={itemVariants}
              className="text-2xl md:text-4xl text-white/95 mb-16 drop-shadow-lg font-light tracking-wide"
            >
              {getTranslation(language, 'home.bannerSubtitle')}
            </motion.p>
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              <Link to="/services">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white text-primary-700 rounded-xl font-semibold text-lg shadow-2xl hover:shadow-3xl transition-all hover:bg-primary-50"
                >
                  {language === 'zh' ? '探索服务' : 'Explore Services'}
                </motion.button>
              </Link>
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-primary-600 text-white rounded-xl font-semibold text-lg shadow-2xl hover:shadow-3xl transition-all hover:bg-primary-700 border-2 border-white/20"
                >
                  {language === 'zh' ? '联系我们' : 'Contact Us'}
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
          </div>
        </motion.div>
      </section>

      {/* Introduction Section - Enhanced Design */}
      <section className="py-24 bg-gradient-to-b from-white via-gray-50/50 to-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary-100/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-100/30 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
        
        <motion.div
          ref={introRef}
          initial="hidden"
          animate={introVisible ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <motion.h2 
              variants={itemVariants}
              className="text-5xl md:text-6xl font-bold mb-8"
            >
              <span className="gradient-text">
                {getTranslation(language, 'home.introTitle')}
              </span>
            </motion.h2>
            <motion.div 
              variants={itemVariants}
              className="max-w-5xl mx-auto"
            >
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary-400 via-primary-600 to-primary-400 rounded-3xl blur opacity-25"></div>
                <div className="relative glass-dark rounded-3xl p-10 md:p-16 shadow-2xl border border-white/20">
                  <p className="text-xl md:text-2xl text-gray-800 leading-relaxed font-light">
                    {getTranslation(language, 'home.introText')}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Services Preview Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50/20 via-transparent to-primary-50/20"></div>
        <motion.div
          ref={servicesRef}
          initial="hidden"
          animate={servicesVisible ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        >
          <div className="flex items-center justify-between mb-16">
            <motion.h2 
              variants={itemVariants}
              className="text-5xl md:text-6xl font-bold"
            >
              <span className="gradient-text">
                {getTranslation(language, 'home.servicesTitle')}
              </span>
            </motion.h2>
            <Link to="/services">
              <motion.div
                whileHover={{ x: 5 }}
                className="hidden md:flex items-center gap-2 text-primary-600 font-semibold text-lg"
              >
                {language === 'zh' ? '查看全部' : 'View All'}
                <FaArrowRight />
              </motion.div>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -15, scale: 1.03 }}
                  className="group relative"
                >
                  <div className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover-glow border border-gray-100 h-full">
                    <div className="relative h-56 overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-700"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-25 group-hover:opacity-35 transition-opacity duration-500`}></div>
                      <div className={`absolute top-6 right-6 w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center shadow-2xl group-hover:rotate-12 transition-transform duration-500`}>
                        <IconComponent className="text-white text-2xl" />
                      </div>
                    </div>
                    <div className="p-8">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-6 line-clamp-3 leading-relaxed">
                        {service.description}
                      </p>
                      <Link
                        to="/services"
                        className="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold text-sm group-hover:gap-3 transition-all"
                      >
                        {language === 'zh' ? '了解更多' : 'Learn More'}
                        <FaArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </section>

      {/* Process Section - Enhanced */}
      <section className="py-24 bg-gradient-to-b from-gray-50 via-white to-gray-50 relative">
        <motion.div
          ref={processRef}
          initial="hidden"
          animate={processVisible ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-5xl md:text-6xl font-bold text-center mb-20"
          >
            <span className="gradient-text">
              {getTranslation(language, 'home.processTitle')}
            </span>
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">
            {processSteps.map((step, index) => {
              const IconComponent = step.icon
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.15, y: -10 }}
                  className="text-center relative group"
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.8 }}
                    className={`${step.color} w-28 h-28 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-2xl hover:shadow-3xl transition-all`}
                  >
                    <IconComponent className="text-white text-4xl" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                    {getTranslation(language, `home.${step.key}`)}
                  </h3>
                  {index < processSteps.length - 1 && (
                    <div className="hidden md:flex absolute top-14 left-full w-full items-center">
                      <div className="flex-grow border-t-2 border-dashed border-primary-400"></div>
                      <motion.div
                        animate={{ x: [0, 8, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="px-3 text-primary-500 text-3xl font-bold"
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

      {/* Case Studies Preview Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50/30 via-transparent to-primary-50/30"></div>
        <motion.div
          ref={casesRef}
          initial="hidden"
          animate={casesVisible ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        >
          <div className="flex items-center justify-between mb-16">
            <motion.h2 
              variants={itemVariants}
              className="text-5xl md:text-6xl font-bold"
            >
              <span className="gradient-text">
                {getTranslation(language, 'caseStudies.title')}
              </span>
            </motion.h2>
            <Link to="/case-studies">
              <motion.div
                whileHover={{ x: 5 }}
                className="hidden md:flex items-center gap-2 text-primary-600 font-semibold text-lg"
              >
                {language === 'zh' ? '查看全部' : 'View All'}
                <FaArrowRight />
              </motion.div>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {caseStudies.map((caseStudy, index) => {
              const IconComponent = caseStudy.icon
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -10 }}
                  className="group bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all hover-glow"
                >
                  <div className="md:flex">
                    <div className="md:w-2/5 relative overflow-hidden">
                      <img
                        src={caseStudy.image}
                        alt={caseStudy.title}
                        className="w-full h-64 md:h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-br ${caseStudy.color} opacity-30`}></div>
                      <div className={`absolute top-6 right-6 w-16 h-16 rounded-xl bg-gradient-to-br ${caseStudy.color} flex items-center justify-center shadow-2xl`}>
                        <IconComponent className="text-white text-2xl" />
                      </div>
                    </div>
                    <div className="md:w-3/5 p-8 md:p-10">
                      <span className="px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-4 inline-block">
                        {caseStudy.industry}
                      </span>
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors">
                        {caseStudy.title}
                      </h3>
                      <p className="text-gray-600 mb-6 line-clamp-3 leading-relaxed">
                        {caseStudy.description}
                      </p>
                      <div className="border-l-4 border-primary-600 pl-4 py-2 bg-primary-50 rounded-r-lg mb-6">
                        <p className="text-primary-700 font-bold">
                          {language === 'zh' ? '成果：' : 'Result: '}
                          <span className="text-gray-800 font-normal">
                            {caseStudy.result}
                          </span>
                        </p>
                      </div>
                      <Link
                        to="/case-studies"
                        className="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold"
                      >
                        {language === 'zh' ? '查看详情' : 'View Details'}
                        <FaArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </section>

      {/* About Preview Section */}
      <section className="py-24 bg-gradient-to-b from-white via-gray-50 to-white relative">
        <motion.div
          ref={aboutRef}
          initial="hidden"
          animate={aboutVisible ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="flex items-center justify-between mb-16">
            <motion.h2 
              variants={itemVariants}
              className="text-5xl md:text-6xl font-bold"
            >
              <span className="gradient-text">
                {getTranslation(language, 'about.title')}
              </span>
            </motion.h2>
            <Link to="/about">
              <motion.div
                whileHover={{ x: 5 }}
                className="hidden md:flex items-center gap-2 text-primary-600 font-semibold text-lg"
              >
                {language === 'zh' ? '了解更多' : 'Learn More'}
                <FaArrowRight />
              </motion.div>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {values.map((value, index) => {
              const IconComponent = value.icon
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -10, scale: 1.05 }}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all hover-glow text-center"
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${value.color} flex items-center justify-center mx-auto mb-6 shadow-xl`}
                  >
                    <IconComponent className="text-white text-3xl" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {value.title}
                  </h3>
                </motion.div>
              )
            })}
          </div>
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-br from-primary-600 to-primary-800 rounded-3xl p-12 text-white text-center shadow-2xl"
          >
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              {getTranslation(language, 'about.mission.title')}
            </h3>
            <p className="text-xl text-white/90 max-w-4xl mx-auto leading-relaxed">
              {getTranslation(language, 'about.mission.text')}
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Contact Preview Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50/50 via-transparent to-primary-50/50"></div>
        <motion.div
          ref={contactRef}
          initial="hidden"
          animate={contactVisible ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">
                {getTranslation(language, 'contact.title')}
              </span>
            </h2>
            <p className="text-xl text-gray-600 mb-12">
              {getTranslation(language, 'contact.subtitle')}
            </p>
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="bg-white rounded-3xl p-12 shadow-2xl border border-gray-100"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-8">
              <div className="text-center">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-700 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl"
                >
                  <FaEnvelope className="text-white text-3xl" />
                </motion.div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {getTranslation(language, 'contact.email')}
                </h3>
                <a
                  href="mailto:contact@novabridge.com"
                  className="text-primary-600 hover:text-primary-700 text-lg font-semibold"
                >
                  contact@novabridge.com
                </a>
              </div>
              <div className="text-center">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-700 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl"
                >
                  <FaUsers className="text-white text-3xl" />
                </motion.div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {getTranslation(language, 'contact.wechat')}
                </h3>
                <p className="text-gray-600">
                  {language === 'zh' ? '扫描二维码联系我们' : 'Scan QR Code to Contact'}
                </p>
              </div>
            </div>
            <div className="text-center">
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-4 bg-primary-600 text-white rounded-xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all hover:bg-primary-700"
                >
                  {language === 'zh' ? '查看完整联系方式' : 'View Full Contact Info'}
                  <FaArrowRight className="inline-block ml-2" />
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  )
}

export default Home
