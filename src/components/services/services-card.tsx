import { ArrowRight, CheckCircle2 } from 'lucide-react';

interface ServicesCardProps {
  service: {
    id: number;
    icon: React.ComponentType<{ size: number }>;
    title: string;
    description: string;
    features: string[];
  };
}

const ServicesCard = ({ service }: ServicesCardProps) => {
  return (
    <div
      key={service.id}
      className='bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100 flex flex-col'
    >
      <div className='h-14 w-14 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-500 mb-6'>
        <service.icon size={28} />
      </div>
      <h3 className='text-2xl font-bold text-gray-800 mb-4'>{service.title}</h3>
      <p className='text-gray-600 mb-6 leading-relaxed'>
        {service.description}
      </p>

      <ul className='flex flex-col gap-3 mb-8 grow'>
        {service.features.map((feature, idx) => (
          <li key={idx} className='flex items-center gap-3 text-gray-700'>
            <CheckCircle2 size={20} className='text-blue-500' />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <div>
        <a
          href='#'
          className='inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors'
        >
          Learn More <ArrowRight size={20} />
        </a>
      </div>
    </div>
  );
};

export default ServicesCard;
