import { useLanguage } from '../contexts/LanguageContext'
import { getTranslation } from '../i18n'

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
    },
    {
      title: getTranslation(language, 'caseStudies.case2.title'),
      description: getTranslation(language, 'caseStudies.case2.description'),
      image: 'placeholder',
      industry: language === 'zh' ? '制造业' : 'Manufacturing',
      region: language === 'zh' ? '欧洲' : 'Europe',
      result: language === 'zh' ? '成功完成5亿美元并购' : 'Successfully Completed $500M M&A',
    },
    {
      title: getTranslation(language, 'caseStudies.case3.title'),
      description: getTranslation(language, 'caseStudies.case3.description'),
      image: 'placeholder',
      industry: language === 'zh' ? '电子商务' : 'E-commerce',
      region: language === 'zh' ? '欧洲' : 'Europe',
      result: language === 'zh' ? '用户增长200%，建立50+合作伙伴' : '200% User Growth, 50+ Partnerships',
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
            {getTranslation(language, 'caseStudies.title')}
          </h1>
          <p className="text-xl text-center text-primary-100 max-w-3xl mx-auto">
            {getTranslation(language, 'caseStudies.subtitle')}
          </p>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {cases.map((caseStudy, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <div className="w-full h-64 md:h-full bg-gray-200 flex items-center justify-center">
                      <span className="text-gray-500">
                        {language === 'zh' ? '案例图片占位符' : 'Case Study Image Placeholder'}
                      </span>
                    </div>
                  </div>
                  <div className="md:w-2/3 p-8">
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
                        {caseStudy.industry}
                      </span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                        {caseStudy.region}
                      </span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                      {caseStudy.title}
                    </h2>
                    <p className="text-lg text-gray-600 mb-6">
                      {caseStudy.description}
                    </p>
                    <div className="border-l-4 border-primary-600 pl-4">
                      <p className="text-primary-700 font-semibold">
                        {language === 'zh' ? '成果：' : 'Result: '}
                        <span className="text-gray-700 font-normal">
                          {caseStudy.result}
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Success Metrics */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            {language === 'zh' ? '我们的成就' : 'Our Achievements'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-primary-600 mb-2">50+</div>
              <p className="text-lg text-gray-600">
                {language === 'zh' ? '成功项目' : 'Successful Projects'}
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-primary-600 mb-2">30+</div>
              <p className="text-lg text-gray-600">
                {language === 'zh' ? '国家覆盖' : 'Countries Covered'}
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-primary-600 mb-2">95%</div>
              <p className="text-lg text-gray-600">
                {language === 'zh' ? '客户满意度' : 'Client Satisfaction'}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default CaseStudies

