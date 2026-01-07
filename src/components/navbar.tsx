import { useState } from 'react';
import { navbarItems } from '@/constants';
import { Link } from 'react-router';
import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';
import { handleLinkClick } from '@/lib/utils';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className='relative bg-white shadow-sm z-50'>
      <div className='container page-container'>
        <div className='flex justify-between items-center py-4'>
          <div>
            <img src='./images/logo.png' alt='Logo' className='md:w-50 w-40' />
          </div>

          <ul className='hidden md:flex gap-8 items-center'>
            {navbarItems.map((item) => (
              <li
                key={item.id}
                className='hover:text-blue-600 transition-colors'
              >
                <Link
                  to={item.link}
                  onClick={(e) =>
                    handleLinkClick(e, item.link.replace('#', ''), setIsOpen)
                  }
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className='hidden md:block'>
            <Button
              onClick={(e) =>
                handleLinkClick(e, '#contact'.replace('#', ''), setIsOpen)
              }
            >
              Get Started
            </Button>
          </div>

          <button
            className='md:hidden p-2 text-gray-600'
            onClick={() => setIsOpen(!isOpen)}
            aria-label='Toggle menu'
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className='absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-lg md:hidden flex flex-col items-center py-8 gap-6 z-50'>
          <ul className='flex flex-col gap-6 items-center text-lg w-full'>
            {navbarItems.map((item) => (
              <li key={item.id} className='w-full text-center'>
                <Link
                  to={item.link}
                  className='block w-full py-2 hover:bg-gray-50'
                  onClick={(e) =>
                    handleLinkClick(e, item.link.replace('#', ''), setIsOpen)
                  }
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          <div>
            <Button
              onClick={(e) =>
                handleLinkClick(e, '#contact'.replace('#', ''), setIsOpen)
              }
            >
              Get Started
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
