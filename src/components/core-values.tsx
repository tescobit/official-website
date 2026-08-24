import { Rocket, Heart, CheckCircle, Lightbulb } from 'lucide-react';

const coreValues = [
  {
    icon: Rocket,
    title: 'Innovation First',
    description:
      'We stay ahead of technology trends to deliver cutting-edge solutions that give you a competitive advantage.',
  },
  {
    icon: Heart,
    title: 'Client-Centric',
    description:
      'Your success is our success. We build lasting partnerships through dedication, transparency, and exceptional service.',
  },
  {
    icon: CheckCircle,
    title: 'Quality Assured',
    description:
      'Rigorous testing and quality control processes ensure every solution we deliver exceeds industry standards.',
  },
  {
    icon: Lightbulb,
    title: 'Agile & Adaptive',
    description:
      'Our agile methodology allows us to adapt quickly to changes and deliver solutions that meet evolving needs.',
  },
];

const CoreValues = () => {
  return (
    <section className='py-20 bg-gray-50' id='about'>
      <div className='container mx-auto px-4 lg:px-8'>
        <div className='text-center mb-16'>
          <span className='inline-block px-4 py-1.5 rounded-full bg-blue-100 text-blue-600 text-sm font-semibold mb-4'>
            About us
          </span>
          <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
            Our Core Values
          </h2>
          <p className='text-lg text-gray-500'>
            The principles that guide everything we do
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {coreValues.map((value, index) => (
            <div key={index} className='flex flex-col items-center text-center'>
              <div className='h-16 w-16 bg-blue-600 rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg shadow-blue-200'>
                <value.icon size={32} strokeWidth={2} />
              </div>

              <h3 className='text-xl font-bold text-gray-900 mb-3'>
                {value.title}
              </h3>
              <p className='text-gray-500 leading-relaxed text-sm lg:text-base'>
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
