import { useLanguage } from '../contexts/LanguageContext'
import { getTranslation } from '../i18n'

const Contact = () => {
  const { language } = useLanguage()

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
            {getTranslation(language, 'contact.title')}
          </h1>
          <p className="text-xl text-center text-primary-100 max-w-3xl mx-auto">
            {getTranslation(language, 'contact.subtitle')}
          </p>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Email Section */}
              <div className="text-center md:text-left">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto md:mx-0 mb-4">
                    <svg
                      className="w-8 h-8 text-primary-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    {getTranslation(language, 'contact.email')}
                  </h2>
                  <a
                    href="mailto:contact@novabridge.com"
                    className="text-primary-600 hover:text-primary-700 text-lg font-medium"
                  >
                    contact@novabridge.com
                  </a>
                </div>
              </div>

              {/* WeChat Section */}
              <div className="text-center md:text-left">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto md:mx-0 mb-4">
                    <svg
                      className="w-8 h-8 text-primary-600"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 01.213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 00.167-.054l1.903-1.114a.864.864 0 01.717-.098 11.83 11.83 0 003.077.416c.276 0 .543-.027.811-.05-.857-2.578.157-4.972 1.932-6.446 1.703-1.415 3.882-1.98 5.853-1.838-.576-3.583-4.196-6.348-8.488-6.348zM5.785 5.991c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 01-1.162 1.178A1.17 1.17 0 014.623 7.17c0-.651.52-1.18 1.162-1.18zm5.813 0c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 01-1.162 1.178 1.17 1.17 0 01-1.162-1.178c0-.651.52-1.18 1.162-1.18zm5.34 2.832c-1.693-.123-3.743.41-5.363 1.735-1.486 1.234-2.543 3.17-1.786 5.576.078.25.173.494.283.73.678 1.459 1.968 2.636 3.455 3.297a.744.744 0 01.056.027c.2.085.413.16.632.226.168.05.34.094.513.135.25.06.502.11.756.15.133.02.266.036.4.05.18.02.36.034.542.04.106.004.21.006.314.006 4.591 0 8.313-2.95 8.313-6.591-.001-3.348-3.334-6.06-7.536-6.701zm-2.708 2.706c.46 0 .833.378.833.844a.84.84 0 01-.833.844.84.84 0 01-.833-.844.84.84 0 01.833-.844zm4.164 0c.46 0 .833.378.833.844a.84.84 0 01-.833.844.84.84 0 01-.833-.844.84.84 0 01.833-.844z" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    {getTranslation(language, 'contact.wechat')}
                  </h2>
                  <div className="w-48 h-48 bg-gray-200 rounded-lg mx-auto md:mx-0 flex items-center justify-center border-2 border-dashed border-gray-300">
                    <div className="text-center p-4">
                      <span className="text-gray-500 text-sm block mb-2">
                        {language === 'zh' ? '微信二维码' : 'WeChat QR Code'}
                      </span>
                      <span className="text-gray-400 text-xs">
                        {language === 'zh' ? '200x200' : '200x200'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="text-center">
                <p className="text-gray-600 mb-4">
                  {language === 'zh'
                    ? '我们通常在24小时内回复所有咨询。'
                    : 'We typically respond to all inquiries within 24 hours.'}
                </p>
                <p className="text-gray-600">
                  {language === 'zh'
                    ? '如需紧急咨询，请通过邮件联系我们，我们会在第一时间回复。'
                    : 'For urgent inquiries, please contact us via email and we will respond as soon as possible.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Location Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            {language === 'zh' ? '办公地址' : 'Office Location'}
          </h2>
          <div className="bg-gray-100 rounded-lg p-8 text-center">
            <p className="text-lg text-gray-700 mb-4">
              {language === 'zh' ? '中国北京' : 'Beijing, China'}
            </p>
            <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center">
              <span className="text-gray-500">
                {language === 'zh' ? '地图占位符' : 'Map Placeholder'}
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact

