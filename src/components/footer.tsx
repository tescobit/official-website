import { navbarItems, services } from '@/constants';
import { handleLinkClick } from '@/lib/utils';
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  ArrowRight,
} from 'lucide-react';
import type { ComponentType, ReactNode } from 'react';
import { Link } from 'react-router';

const Footer = () => {
  return (
    <footer className='bg-[#0b102e] text-white pt-20 pb-10 border-t border-gray-800'>
      <div className='container mx-auto px-4 lg:px-8'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16'>
          <div className='space-y-6'>
            <div>
              <img
                src='/images/logo-white.svg'
                alt='Tescobit Logo'
                width='200'
                height='40'
                className='w-36 md:w-44 mb-6'
              />
            </div>
            <p className='text-gray-400 leading-relaxed text-sm'>
              Transforming businesses through innovative IT solutions and
              cutting-edge technology. Your trusted partner in digital
              transformation.
            </p>
            <div className='flex gap-4'>
              <SocialIcon
                icon={Linkedin}
                label='linkedin'
                link='https://www.linkedin.com/company/tescobit/'
              />
              <SocialIcon
                icon={Facebook}
                label='facebook'
                link='https://www.facebook.com/profile.php?id=61573863961119'
              />
              <SocialIcon
                icon={Instagram}
                label='instagram'
                link='https://www.instagram.com/tescobit/'
              />
            </div>
          </div>

          <div>
            <h3 className='text-lg font-bold mb-6'>Services</h3>
            <ul className='space-y-4 text-gray-400 text-sm'>
              {services.map((item) => (
                <FooterLink key={item.id}>{item.title}</FooterLink>
              ))}
            </ul>
          </div>

          <div>
            <h3 className='text-lg font-bold mb-6'>Quick Links</h3>
            <ul className='space-y-4 text-gray-400 text-sm'>
              {navbarItems.map((item) => (
                <FooterLink key={item.id} link={item.link}>
                  {item.name}
                </FooterLink>
              ))}
            </ul>
          </div>

          <div>
            <h3 className='text-lg font-bold mb-6'>Get in Touch</h3>
            <ul className='space-y-4 mb-8'>
              <li className='flex gap-3 text-gray-400 text-sm items-center'>
                <a
                  href='https://wa.me/94701456950'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='hover:text-white transition-colors flex items-center gap-3'
                >
                  <Phone size={18} className='text-blue-500 shrink-0' />
                  <span>+94 70 145 6950 (WhatsApp)</span>
                </a>
              </li>
              <li className='flex gap-3 text-gray-400 text-sm items-center'>
                <a
                  href='mailto:hello@tescobit.com'
                  className='hover:text-white transition-colors flex items-center gap-3'
                >
                  <Mail size={18} className='text-blue-500 shrink-0' />
                  <span>hello@tescobit.com</span>
                </a>
              </li>
            </ul>

            <h4 className='text-sm font-semibold mb-4'>Newsletter</h4>
            <div className='flex bg-gray-800/50 rounded-lg p-1 border border-gray-700 focus-within:border-blue-500 transition-colors'>
              <input
                type='email'
                placeholder='Your email'
                className='bg-transparent w-full px-4 py-2 text-sm text-white outline-none placeholder-gray-500'
              />
              <button
                aria-label='Subscribe to newsletter'
                className='bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-md transition-colors'
              >
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>

        <div className='border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4'>
          <p className='text-gray-400 text-sm'>
            © {new Date().getFullYear()} Tescobit. All rights reserved.
          </p>
          <div className='flex gap-8 text-sm text-gray-500'>
            <Link to='#' className='hover:text-blue-400 transition-colors'>
              Privacy Policy
            </Link>
            <Link to='#' className='hover:text-blue-400 transition-colors'>
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialIcon = ({
  icon: Icon,
  link,
  label,
}: {
  icon: ComponentType<{ size?: number; className?: string }>;
  link: string;
  label: string;
}) => (
  <Link
    to={link}
    aria-label={label}
    className='h-8 w-8 rounded-full border border-gray-600 flex items-center justify-center text-gray-400 hover:text-white hover:border-blue-500 hover:bg-blue-500 transition-all'
  >
    <Icon size={16} />
  </Link>
);

const FooterLink = ({
  children,
  link,
}: {
  children: ReactNode;
  link?: string;
}) => (
  <li>
    <Link
      to={link ? link : '#'}
      className='hover:text-blue-400 transition-colors block'
      onClick={(e) => handleLinkClick(e, (link || '').replace('#', ''))}
    >
      {children}
    </Link>
  </li>
);

export default Footer;
