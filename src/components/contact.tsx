import { Mail, Phone, Clock } from 'lucide-react';

import ContactForm from './forms/contact-form';

const ContactSection = () => {
  return (
    <section
      className='relative py-20 bg-linear-to-br from-[#0b102e] via-[#1b2d4e] to-[#0b102e] overflow-hidden'
      id='contact'
    >
      <div className='absolute top-0 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl -z-10'></div>
      <div className='absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl -z-10'></div>

      <div className='container mx-auto px-4 lg:px-8 relative z-10'>
        <div className='text-center mb-16 space-y-4'>
          <span className='inline-block px-4 py-1.5 rounded-full bg-blue-600/30 border border-blue-500/30 text-blue-300 text-sm font-semibold mb-2'>
            Get in Touch
          </span>
          <h2 className='text-4xl md:text-5xl font-bold text-white leading-tight'>
            Let's Build Something <br />
            <span className='text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-pink-400'>
              Amazing Together
            </span>
          </h2>
          <p className='text-gray-300 text-lg max-w-2xl mx-auto'>
            Have a project in mind? We'd love to hear about it. Get in touch and
            let's discuss how we can help bring your vision to life.
          </p>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12'>
          <div className='lg:col-span-2 bg-white rounded-3xl p-6 md:p-8 lg:p-10 shadow-2xl'>
            <h3 className='text-2xl font-bold text-gray-900 mb-2'>
              Send us a Message
            </h3>
            <p className='text-gray-500 mb-8'>
              Fill out the form below and we'll get back to you within 24 hours
            </p>

            <ContactForm />
          </div>

          <div className='flex flex-col gap-6'>
            <ContactCard
              icon={Mail}
              title='Email Us'
              content='hello@tescobit.com'
            />
            <ContactCard
              icon={Phone}
              title='Call Us'
              content='+94 70 145 6950'
            />
            <ContactCard
              icon={Clock}
              title='Business Hours'
              content='Mon - Fri: 9:00 AM - 6:00 PM'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

interface ContactCardProps {
  icon: React.ComponentType<{ size: number }>;
  title: string;
  content: string;
}

const ContactCard = ({ icon: Icon, title, content }: ContactCardProps) => (
  <div className='flex items-start gap-4 p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-colors'>
    <div className='bg-blue-600 p-3 rounded-xl text-white shadow-lg shadow-blue-900/20 shrink-0'>
      <Icon size={24} />
    </div>
    <div>
      <h4 className='text-white font-semibold text-lg mb-1'>{title}</h4>
      <p className='text-gray-300 text-sm leading-relaxed'>{content}</p>
    </div>
  </div>
);

export default ContactSection;
