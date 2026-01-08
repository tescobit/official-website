import { leadershipTeam } from '@/constants';

const LeadershipSection = () => {
  return (
    <section className='py-20 bg-white'>
      <div className='container mx-auto px-4 lg:px-8'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl font-bold text-gray-900 mb-4'>
            Meet Our Leadership
          </h2>
          <p className='text-lg text-gray-600'>
            Experienced leaders driving innovation and excellence
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {leadershipTeam.map((member, index) => (
            <div
              key={index}
              className='bg-white p-8 rounded-2xl border border-gray-100 shadow-sm flex flex-col items-center text-center transition-transform hover:-translate-y-1 hover:shadow-md'
            >
              <div className='h-24 w-24 bg-blue-600 rounded-full flex items-center justify-center mb-6'>
                <img
                  src={member.img}
                  alt={member.name}
                  className='h-24 w-24 rounded-full object-cover'
                />
              </div>

              <h3 className='text-xl font-bold text-gray-900 mb-2'>
                {member.name}
              </h3>
              <p className='text-blue-600 font-medium mb-6'>{member.role}</p>

              <span className='px-4 py-2 bg-gray-100 text-gray-600 text-sm font-medium rounded-full'>
                {member.expertise}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;
