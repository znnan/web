import { motion } from 'framer-motion'
import { useLanguage } from '../contexts/LanguageContext'
import { getTranslation } from '../i18n'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { 
  FaLaptopCode,
  FaIndustry,
  FaShoppingCart,
  FaChartLine,
  FaMapMarkerAlt,
  FaCheckCircle
} from 'react-icons/fa'

const CaseStudies = () => {
  const { language } = useLanguage()

  const cases = [
    {
      title: getTranslation(language, 'caseStudies.case1.title'),
      description: getTranslation(language, 'caseStudies.case1.description'),
      image: 'placeholder',
      industry: language === 'zh' ? '科技行业' : 'Technology',
      region: language === 'zh' ? '东南亚' : 'Southeast Asia',
      result: language === 'zh' ? '18个月内收入增长300%' : '300% Revenue Growth in 18 Months',
      icon: FaLaptopCode,
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: getTranslation(language, 'caseStudies.case2.title'),
      description: getTranslation(language, 'caseStudies.case2.description'),
      image: 'placeholder',
      industry: language === 'zh' ? '制造业' : 'Manufacturing',
      region: language === 'zh' ? '欧洲' : 'Europe',
      result: language === 'zh' ? '成功完成5亿美元并购' : 'Successfully Completed $500M M&A',
      icon: FaIndustry,
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: getTranslation(language, 'caseStudies.case3.title'),
      description: getTranslation(language, 'caseStudies.case3.description'),
      image: 'placeholder',
      industry: language === 'zh' ? '电子商务' : 'E-commerce',
      region: language === 'zh' ? '欧洲' : 'Europe',
      result: language === 'zh' ? '用户增长200%，建立50+合作伙伴' : '200% User Growth, 50+ Partnerships',
      icon: FaShoppingCart,
      color: 'from-green-500 to-emerald-500',
    },
  ]

  const achievements = [
    { number: '50+', label: language === 'zh' ? '成功项目' : 'Successful Projects', icon: FaCheckCircle },
    { number: '30+', label: language === 'zh' ? '国家覆盖' : 'Countries Covered', icon: FaMapMarkerAlt },
    { number: '95%', label: language === 'zh' ? '客户满意度' : 'Client Satisfaction', icon: FaChartLine },
  ]

  const [headerRef, headerVisible] = useScrollAnimation(0.2)
  const [casesRef, casesVisible] = useScrollAnimation(0.1)
  const [achievementsRef, achievementsVisible] = useScrollAnimation(0.2)

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
            {getTranslation(language, 'caseStudies.title')}
          </motion.h1>
          <motion.p variants={itemVariants} className="text-xl md:text-2xl text-center text-primary-100 max-w-3xl mx-auto">
            {getTranslation(language, 'caseStudies.subtitle')}
          </motion.p>
        </motion.div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 relative">
        <motion.div
          ref={casesRef}
          initial="hidden"
          animate={casesVisible ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="space-y-16">
            {cases.map((caseStudy, index) => {
              const IconComponent = caseStudy.icon
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all hover-glow"
                >
                  <div className="md:flex">
                    <div className="md:w-1/3 relative overflow-hidden">
                      <div className="w-full h-64 md:h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center relative">
                        <div className={`absolute inset-0 bg-gradient-to-br ${caseStudy.color} opacity-20`}></div>
                        <motion.div
                          whileHover={{ scale: 1.2, rotate: 10 }}
                          className={`w-32 h-32 rounded-2xl bg-gradient-to-br ${caseStudy.color} flex items-center justify-center shadow-2xl relative z-10`}
                        >
                          <IconComponent className="text-white text-5xl" />
                        </motion.div>
                      </div>
                    </div>
                    <div className="md:w-2/3 p-8 md:p-12">
                      <div className="flex flex-wrap gap-3 mb-6">
                        <span className="px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium shadow-md">
                          {caseStudy.industry}
                        </span>
                        <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium shadow-md">
                          {caseStudy.region}
                        </span>
                      </div>
                      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                        {caseStudy.title}
                      </h2>
                      <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                        {caseStudy.description}
                      </p>
                      <div className="border-l-4 border-primary-600 pl-6 py-2 bg-primary-50 rounded-r-lg">
                        <p className="text-primary-700 font-semibold text-lg">
                          {language === 'zh' ? '成果：' : 'Result: '}
                          <span className="text-gray-800 font-normal">
                            {caseStudy.result}
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </section>

      {/* Additional Success Metrics */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50 relative">
        <motion.div
          ref={achievementsRef}
          initial="hidden"
          animate={achievementsVisible ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="gradient-text">
              {language === 'zh' ? '我们的成就' : 'Our Achievements'}
            </span>
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -10, scale: 1.05 }}
                  className="text-center bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all hover-glow"
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-700 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg"
                  >
                    <IconComponent className="text-white text-3xl" />
                  </motion.div>
                  <div className="text-5xl md:text-6xl font-bold text-primary-600 mb-3">
                    {achievement.number}
                  </div>
                  <p className="text-lg text-gray-600 font-medium">
                    {achievement.label}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </section>
    </div>
  )
}

export default CaseStudies
