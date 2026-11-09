import { Mail, Clock } from 'lucide-react';
import ContactForm from './forms/contact-form';

// Official WhatsApp Vector Icon
const WhatsAppIcon = ({ size = 24 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox='0 0 24 24'
    fill='currentColor'
    className='shrink-0'
  >
    <path d='M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z' />
  </svg>
);

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
            {/* Redirects to email client */}
            <ContactCard
              icon={Mail}
              title='Email Us'
              content='hello@tescobit.com'
              href='mailto:hello@tescobit.com'
            />
            {/* Replaces Phone with WhatsApp & redirects to WhatsApp */}
            <ContactCard
              icon={WhatsAppIcon}
              title='WhatsApp'
              content='+94 70 145 6950'
              href='https://wa.me/94701456950'
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
  href?: string;
}

const ContactCard = ({
  icon: Icon,
  title,
  content,
  href,
}: ContactCardProps) => {
  const Component = href ? 'a' : 'div';
  return (
    <Component
      {...(href
        ? {
            href,
            target: href.startsWith('http') ? '_blank' : undefined,
            rel: href.startsWith('http') ? 'noopener noreferrer' : undefined,
          }
        : {})}
      className='flex items-start gap-4 p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-all duration-300 group cursor-pointer'
    >
      <div className='bg-blue-600 p-3 rounded-xl text-white shadow-lg shadow-blue-900/20 shrink-0 group-hover:scale-105 transition-transform'>
        <Icon size={24} />
      </div>
      <div>
        <h4 className='text-white font-semibold text-lg mb-1 group-hover:text-blue-300 transition-colors'>
          {title}
        </h4>
        <p className='text-gray-300 text-sm leading-relaxed'>{content}</p>
      </div>
    </Component>
  );
};

export default ContactSection;
