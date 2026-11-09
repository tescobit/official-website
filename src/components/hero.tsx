import { handleLinkClick } from '@/lib/utils';
import { Button } from './ui/button';
import { BrainCircuit, Smile, Zap } from 'lucide-react';

const Hero = () => {
  return (
    <section className='relative h-[85vh] md:h-screen w-full bg-hero bg-cover bg-center overflow-hidden'>
      <div className='absolute inset-0 bg-black/60'></div>

      <FloatingBadge
        icon={BrainCircuit}
        title='AI Integration'
        subtitle='Automated workflows'
        className='top-[20%] left-[10%]'
        delay='0s'
      />

      <FloatingBadge
        icon={Smile}
        title='100% Satisfaction'
        subtitle='Client rated top tier'
        className='bottom-[20%] right-[10%]'
        delay='2s'
      />

      <FloatingBadge
        icon={Zap}
        title='High Performance'
        subtitle='Optimized execution'
        className='bottom-[15%] left-[15%]'
        delay='1s'
      />

      <div className='relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center'>
        <h1 className='text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight max-w-4xl'>
          Delivering Result-Oriented{' '}
          <span className='text-blue-400'>Digital Solutions</span>
        </h1>

        <p className='text-lg md:text-xl text-gray-200 mb-8 max-w-2xl'>
          Empowering businesses with cutting edge technology and seamless
          digital experiences that drive growth.
        </p>

        <div className='flex gap-4'>
          <Button
            size='lg'
            className='bg-blue-600 hover:bg-blue-700'
            onClick={(e) => handleLinkClick(e, '#contact'.replace('#', ''))}
          >
            Get Started
          </Button>
          <Button
            variant='ghost'
            size='lg'
            className='text-white border-white hover:bg-white/20'
            onClick={(e) => handleLinkClick(e, '#portfolio'.replace('#', ''))}
          >
            View Portfolio
          </Button>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

const FloatingBadge = ({
  icon: Icon,
  title,
  subtitle,
  className,
  delay,
}: {
  icon: React.ComponentType<{ size: number }>;
  title: string;
  subtitle: string;
  className: string;
  delay: string;
}) => {
  return (
    <div
      className={`absolute hidden lg:flex items-center gap-4 p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 shadow-2xl animate-float z-20 ${className}`}
      style={{ animationDelay: delay }}
    >
      <div className='h-12 w-12 bg-blue-500 rounded-full flex items-center justify-center text-white shadow-lg shadow-blue-500/30'>
        <Icon size={24} />
      </div>
      <div className='text-left'>
        <h3 className='text-white font-bold text-sm'>{title}</h3>
        <p className='text-gray-300 text-xs'>{subtitle}</p>
      </div>
    </div>
  );
};

export default Hero;
