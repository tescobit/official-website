import { services } from '@/constants';
import ServicesCard from './services/services-card';

const ServicesSection = () => {
  return (
    <section className='py-20 ' id='services'>
      <div className='text-center w-full flex flex-col items-center justify-center mb-16'>
        <span className='inline-block px-4 py-1.5 rounded-full bg-blue-100 text-blue-600 text-sm font-semibold mb-4'>
          Our Services
        </span>
        <h1 className='text-4xl font-bold text-gray-800 mb-4 leading-tight'>
          Comprehensive IT Solutions <br />
          <span className='text-blue-400'>Tailored to Your Needs</span>
        </h1>

        <p className='text-xl text-gray-600 max-w-4xl'>
          From concept to deployment, we provide end-to-end technology services
          that drive business growth and digital transformation.
        </p>
      </div>

      <div className='container mx-auto px-4 lg:px-8'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {services.map((service) => (
            <ServicesCard service={service} key={service.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
