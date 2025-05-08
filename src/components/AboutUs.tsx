import { Check } from 'lucide-react';

const AboutUs = () => {
  const coreValues = [
    {
      title: "Simplicity",
      description: "We explain technology in plain language anyone can understand."
    },
    {
      title: "Reliability",
      description: "We deliver on our promises and are there when you need us."
    },
    {
      title: "Affordability",
      description: "Quality tech support shouldn't break the bank."
    },
    {
      title: "Empowerment",
      description: "We don't just fix problems; we educate and empower."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2 order-2 lg:order-1">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">À Propos d'EasyTech</h2>
            <p className="text-lg text-gray-600 mb-6">Fondée le 6 mai 2025, EasyTech a été créée par un groupe d'étudiants en architecture web de l'Institut F2I : Borel Kamsu, Brice Fandio, Elhadj Oumar, Jordan Bell et Jules Gregoire. Notre mission a commencé avec une idée simple : la technologie doit être accessible à tous, pas seulement aux experts.</p>
            <p className="text-lg text-gray-600 mb-6">Notre mission est de combler le fossé entre les personnes et la technologie en fournissant un support technique sans jargon et une éducation qui donne les moyens à nos clients.</p>
            <p className="text-lg text-gray-600 mb-6">Nous croyons qu'avec le bon soutien, chacun peut exploiter la puissance de la technologie pour améliorer sa vie et son entreprise.</p>
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Nos Valeurs Fondamentales</h3>
              <div className="space-y-3">
                {coreValues.map((value, index) => (
                  <div key={index} className="flex items-start">
                    <Check className="h-6 w-6 text-primary mt-0.5 mr-3 flex-shrink-0" />
                    <p className="text-gray-600">
                      <span className="font-medium text-gray-800">{value.title}:</span> {value.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 order-1 lg:order-2">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&h=780" 
              alt="EasyTech team" 
              className="rounded-xl shadow-xl w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
