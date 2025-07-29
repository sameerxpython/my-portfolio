
import { Code, Coffee, Heart } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Crafting Digital Solutions with Passion
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              I'm a dedicated Full Stack Developer with a love for creating seamless web experiences. 
              Based in the beautiful city of Jaipur, I've been on an exciting journey of turning 
              complex problems into simple, elegant solutions.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, contributing to open-source 
              projects, or enjoying a good cup of coffee while brainstorming the next big idea. I believe 
              in writing clean, maintainable code and creating applications that users genuinely love to use.
            </p>
            <p className="text-gray-600 leading-relaxed">
              My goal is to bridge the gap between design and functionality, ensuring every project 
              I work on delivers both exceptional user experience and robust performance.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-white/20">
              <div className="flex items-center mb-4">
                <Code className="text-blue-600 mr-3" size={24} />
                <h4 className="text-lg font-semibold text-gray-900">Clean Code Advocate</h4>
              </div>
              <p className="text-gray-600">
                I believe in writing code that's not just functional, but also readable, 
                maintainable, and scalable for future development.
              </p>
            </div>

            <div className="bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-white/20">
              <div className="flex items-center mb-4">
                <Coffee className="text-blue-600 mr-3" size={24} />
                <h4 className="text-lg font-semibold text-gray-900">Continuous Learner</h4>
              </div>
              <p className="text-gray-600">
                Technology evolves rapidly, and I'm always excited to learn new frameworks, 
                tools, and best practices to stay at the forefront of development.
              </p>
            </div>

            <div className="bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-white/20">
              <div className="flex items-center mb-4">
                <Heart className="text-blue-600 mr-3" size={24} />
                <h4 className="text-lg font-semibold text-gray-900">User-Focused</h4>
              </div>
              <p className="text-gray-600">
                Every line of code I write is with the end user in mind, ensuring 
                applications are intuitive, accessible, and delightful to use.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;