import { motion } from 'framer-motion'
import { useLanguage } from '../contexts/LanguageContext'
import { getTranslation } from '../i18n'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { 
  FaEnvelope,
  FaWeixin,
  FaMapMarkerAlt,
  FaClock
} from 'react-icons/fa'

const Contact = () => {
  const { language } = useLanguage()

  const [headerRef, headerVisible] = useScrollAnimation(0.2)
  const [contactRef, contactVisible] = useScrollAnimation(0.2)
  const [locationRef, locationVisible] = useScrollAnimation(0.2)

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
            {getTranslation(language, 'contact.title')}
          </motion.h1>
          <motion.p variants={itemVariants} className="text-xl md:text-2xl text-center text-primary-100 max-w-3xl mx-auto">
            {getTranslation(language, 'contact.subtitle')}
          </motion.p>
        </motion.div>
      </section>

      {/* Contact Information Section */}
      <section className="py-20 relative">
        <motion.div
          ref={contactRef}
          initial="hidden"
          animate={contactVisible ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="glass-dark rounded-2xl p-8 md:p-12 shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Email Section */}
              <motion.div
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="text-center md:text-left"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-700 rounded-full flex items-center justify-center mx-auto md:mx-0 mb-6 shadow-lg"
                >
                  <FaEnvelope className="text-white text-3xl" />
                </motion.div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {getTranslation(language, 'contact.email')}
                </h2>
                <a
                  href="mailto:contact@novabridge.com"
                  className="text-primary-600 hover:text-primary-700 text-lg font-medium inline-flex items-center gap-2 transition-colors"
                >
                  contact@novabridge.com
                </a>
              </motion.div>

              {/* WeChat Section */}
              <motion.div
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="text-center md:text-left"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-700 rounded-full flex items-center justify-center mx-auto md:mx-0 mb-6 shadow-lg"
                >
                  <FaWeixin className="text-white text-3xl" />
                </motion.div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  {getTranslation(language, 'contact.wechat')}
                </h2>
                <div className="w-48 h-48 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl mx-auto md:mx-0 flex items-center justify-center border-2 border-dashed border-gray-300 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="text-center p-4">
                    <FaWeixin className="text-gray-400 text-6xl mx-auto mb-2" />
                    <span className="text-gray-500 text-sm block">
                      {language === 'zh' ? '微信二维码' : 'WeChat QR Code'}
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Additional Info */}
            <motion.div
              variants={itemVariants}
              className="mt-12 pt-8 border-t border-gray-300"
            >
              <div className="text-center space-y-4">
                <div className="flex items-center justify-center gap-2 text-gray-600">
                  <FaClock className="text-primary-600" />
                  <p>
                    {language === 'zh'
                      ? '我们通常在24小时内回复所有咨询。'
                      : 'We typically respond to all inquiries within 24 hours.'}
                  </p>
                </div>
                <p className="text-gray-600">
                  {language === 'zh'
                    ? '如需紧急咨询，请通过邮件联系我们，我们会在第一时间回复。'
                    : 'For urgent inquiries, please contact us via email and we will respond as soon as possible.'}
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Office Location Section */}
      <section className="py-20 bg-white relative">
        <motion.div
          ref={locationRef}
          initial="hidden"
          animate={locationVisible ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-center mb-12">
            <span className="gradient-text">
              {language === 'zh' ? '办公地址' : 'Office Location'}
            </span>
          </motion.h2>
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-8 text-center shadow-xl hover:shadow-2xl transition-all"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <FaMapMarkerAlt className="text-primary-600 text-2xl" />
              <p className="text-xl text-gray-700 font-semibold">
                {language === 'zh' ? '中国北京' : 'Beijing, China'}
              </p>
            </div>
            <div className="w-full h-64 bg-gradient-to-br from-primary-100 to-primary-200 rounded-xl flex items-center justify-center border-2 border-dashed border-primary-300">
              <div className="text-center">
                <FaMapMarkerAlt className="text-primary-400 text-5xl mx-auto mb-3" />
                <span className="text-gray-500 font-medium text-sm">
                  {language === 'zh' 
                    ? '需要：北京CBD办公楼或地图图片 (Beijing CBD office building or map image)' 
                    : 'Need: Beijing CBD office building or map image'}
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  )
}

export default Contact
