import { projects } from '@/constants';
import { useState } from 'react';

const categories = [
  'All Projects',
  'Web Development',
  'Mobile App',
  'Cloud Solutions',
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('All Projects');

  const filteredProjects =
    activeCategory === 'All Projects'
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section id='portfolio' className='py-20 '>
      <div className='container mx-auto px-4 lg:px-8'>
        <div className='text-center mb-12'>
          <span className='inline-block px-4 py-1.5 rounded-full bg-blue-100 text-blue-600 text-sm font-semibold mb-4'>
            Our Work
          </span>
          <h2 className='text-4xl font-bold text-gray-900 mb-4'>
            Portfolio Showcase
          </h2>
          <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
            Explore our successful projects and see how we've helped businesses
            transform digitally.
          </p>
        </div>

        <div className='flex flex-wrap justify-center gap-4 mb-12'>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-200'
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className='bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group'
            >
              <div className='relative h-64 overflow-hidden'>
                <img
                  src={project.image}
                  alt={project.title}
                  className='w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500'
                />
                <div className='absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300' />
              </div>

              <div className='p-6'>
                <div className='flex justify-between items-center mb-4'>
                  <span className='text-xs font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full'>
                    {project.category}
                  </span>
                  <span className='text-sm text-gray-400 font-medium'>
                    {project.year}
                  </span>
                </div>

                <h3 className='text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors'>
                  {project.title}
                </h3>

                <p className='text-gray-600 text-sm leading-relaxed mb-6'>
                  {project.description}
                </p>

                <div className='flex flex-wrap gap-2 pt-4 border-t border-gray-100'>
                  {project.stack.map((tech, index) => (
                    <span
                      key={index}
                      className='px-2.5 py-1 text-xs font-medium text-gray-600 bg-gray-100 rounded-md border border-gray-200'
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
