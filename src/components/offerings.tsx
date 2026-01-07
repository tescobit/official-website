import { Globe, Database, ShieldCheck, BrainCircuit, Zap } from 'lucide-react';
import { Button } from './ui/button';
import { handleLinkClick } from '@/lib/utils';

const industries = [
  {
    icon: Globe,
    title: 'E-Commerce',
    description: 'Scalable online stores with seamless checkout experiences.',
    tags: ['Shopify', 'WooCommerce', 'Custom Solutions'],
  },
  {
    icon: Database,
    title: 'Healthcare',
    description: 'HIPAA-compliant healthcare management systems.',
    tags: ['EMR/EHR', 'Telemedicine', 'Patient Portals'],
  },
  {
    icon: ShieldCheck,
    title: 'Finance',
    description: 'Secure fintech solutions with regulatory compliance.',
    tags: ['Payment Gateways', 'Banking Apps', 'Blockchain'],
  },
  {
    icon: BrainCircuit,
    title: 'Education',
    description: 'Interactive learning platforms and LMS solutions.',
    tags: ['LMS', 'Video Streaming', 'Assessment Tools'],
  },
];

const Offerings = () => {
  return (
    <section className='py-20 bg-gray-50'>
      <div className='container mx-auto px-4 lg:px-8'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl font-bold text-gray-900 mb-4'>
            Industries We Serve
          </h2>
          <p className='text-xl text-gray-600'>
            Specialized solutions for diverse sectors
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16'>
          {industries.map((industry, index) => (
            <div
              key={index}
              className='bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:border-purple-200 transition-colors h-full flex flex-col'
            >
              <div className='text-blue-600 mb-6'>
                <industry.icon size={40} strokeWidth={1.5} />
              </div>

              <h3 className='text-xl font-bold text-gray-900 mb-3'>
                {industry.title}
              </h3>
              <p className='text-gray-600 mb-6 text-sm grow'>
                {industry.description}
              </p>

              <div className='flex flex-wrap gap-2'>
                {industry.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className='bg-gray-100 text-gray-600 px-3 py-1 rounded-lg text-xs font-semibold'
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className='flex justify-center'>
          <Button
            className='bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 rounded-xl text-lg flex items-center gap-2 shadow-lg shadow-blue-200'
            onClick={(e) => handleLinkClick(e, '#contact'.replace('#', ''))}
          >
            <Zap size={20} /> Start Your Project Today
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Offerings;
