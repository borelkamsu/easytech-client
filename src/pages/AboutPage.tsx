import AboutUs from '@/components/AboutUs';
import CallToAction from '@/components/CallToAction';
import Newsletter from '@/components/Newsletter';
import { Helmet } from 'react-helmet';

const AboutPage = () => {
  return (
    <>
      <Helmet>
        <title>About Us | EasyTech</title>
        <meta name="description" content="Learn about EasyTech, our mission, values and team. We make technology accessible and understandable for everyone." />
      </Helmet>
      <section className="pt-28 pb-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">About EasyTech</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Our journey, mission, and the values that drive us to make technology accessible for everyone.</p>
          </div>
        </div>
      </section>
      
      <AboutUs />
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Story</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">How we started and where we're headed</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-50 p-8 rounded-xl shadow-md">
              <p className="text-gray-600 mb-6">EasyTech was founded on May 6, 2025, by five web architecture students from Institut F2I: Borel Kamsu, Brice Fandio, Elhadj Oumar, Jordan Bell, and Jules Gregoire. Our founders recognized a significant gap in the market: while large enterprises had access to comprehensive IT support, individuals and small businesses were often left struggling with technical challenges without affordable, reliable assistance.</p>
              
              <p className="text-gray-600 mb-6">Our founding team shared a common frustration: seeing everyday people and small business owners struggle with technology that should be making their lives easier, not more complicated. Too often, they encountered friends and family who had either received poor technical advice or had paid exorbitant fees for simple solutions.</p>
              
              <p className="text-gray-600 mb-6">This inspired a simple but powerful mission: to democratize access to quality IT support and make technology truly accessible to everyone. We built EasyTech on the principle that technical expertise should be delivered with clarity, honesty, and at a fair price.</p>
              
              <p className="text-gray-600">Today, we've grown from a small team of four to a network of certified technicians serving clients across the country. Despite our growth, we remain committed to our founding values: simplicity in communication, reliability in our service, affordability in our pricing, and a focus on empowering our clients through education and support.</p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Notre Équipe</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">Les co-fondateurs d'EasyTech</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="p-6 text-center">
                <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary text-2xl font-bold">BK</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-1">Borel Kamsu</h3>
                <p className="text-primary mb-3">Co-fondateur</p>
                <p className="text-gray-600 mb-4">Étudiant en architecture web à l'Institut F2I, Borel contribue à la croissance d'EasyTech avec sa vision innovante et son leadership.</p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="p-6 text-center">
                <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary text-2xl font-bold">BF</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-1">Brice Fandio</h3>
                <p className="text-primary mb-3">Co-fondateur</p>
                <p className="text-gray-600 mb-4">Étudiant en architecture web à l'Institut F2I, Brice apporte son expertise technique et sa passion pour l'innovation à l'équipe EasyTech.</p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="p-6 text-center">
                <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary text-2xl font-bold">EO</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-1">Elhadj Oumar</h3>
                <p className="text-primary mb-3">Co-fondateur</p>
                <p className="text-gray-600 mb-4">Étudiant en architecture web à l'Institut F2I, Elhadj contribue à la vision d'EasyTech avec son approche centrée sur l'expérience client.</p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="p-6 text-center">
                <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary text-2xl font-bold">JB</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-1">Jordan Bell</h3>
                <p className="text-primary mb-3">Co-fondateur</p>
                <p className="text-gray-600 mb-4">Étudiant en architecture web à l'Institut F2I, Jordan met son talent et sa créativité au service de l'équipe EasyTech pour développer des solutions innovantes.</p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="p-6 text-center">
                <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary text-2xl font-bold">JG</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-1">Jules Gregoire</h3>
                <p className="text-primary mb-3">Co-fondateur</p>
                <p className="text-gray-600 mb-4">Étudiant en architecture web à l'Institut F2I, Jules apporte son expertise et sa vision stratégique pour aider EasyTech à atteindre ses objectifs.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <CallToAction />
      <Newsletter />
    </>
  );
};

export default AboutPage;
