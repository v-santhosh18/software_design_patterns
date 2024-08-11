import React from 'react';
import { useNavigate } from 'react-router-dom';

const features = [
  {
    title: 'Easy to Use',
    description: 'User-friendly interface that makes scheduling a breeze.',
    icon: '🖥️',
  },
  {
    title: 'Flexible Scheduling',
    description: 'Adapt schedules to fit your unique needs and preferences.',
    icon: '📅',
  },
  {
    title: 'Real-time Updates',
    description: 'Instant updates to keep your schedule accurate and current.',
    icon: '🔄',
  },
];

const Home = () => {
  const navigate = useNavigate();

  const handleGetStartedClick = () => {
    navigate('/register');
  };

  return (
    <div>
      {/* Hero Section */}
      <div className="bg-blue-700 text-white dark:bg-blue-900 dark:text-gray-200 text-center py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl font-bold mb-4">Simplify Your Scheduling</h1>
          <p className="text-lg mb-8">Automated timetable generator that takes the hassle out of planning.</p>
          <button
            className="bg-white text-blue-700 dark:bg-gray-800 dark:text-white font-bold py-3 px-6 rounded-lg shadow-md hover:bg-gray-100 dark:hover:bg-gray-700 transition duration-300"
            onClick={handleGetStartedClick}
          >
            Get Started
          </button>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 px-4 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-12 text-gray-900 dark:text-gray-100">Features That Make a Difference</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
                <div className="text-6xl mb-4">{feature.icon}</div>
                <h3 className="text-3xl font-semibold mb-2 text-gray-900 dark:text-gray-200">{feature.title}</h3>
                <p className="text-gray-700 dark:text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call To Action Section */}
      <div className="bg-blue-700 text-white dark:bg-blue-900 dark:text-gray-200 text-center py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold mb-6">Start Your Journey Today</h2>
          <p className="text-lg mb-8">Join us now and experience seamless scheduling like never before.</p>
          <button
            className="bg-white text-blue-700 dark:bg-gray-800 dark:text-white font-bold py-3 px-6 rounded-lg shadow-md hover:bg-gray-100 dark:hover:bg-gray-700 transition duration-300"
            onClick={handleGetStartedClick}
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
