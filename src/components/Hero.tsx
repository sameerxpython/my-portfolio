
import { MapPin, Mail, Phone } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-24 pb-16 min-h-screen flex items-center">
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Image Section */}
          <div className="lg:w-1/3">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden border-8 border-white shadow-2xl mx-auto backdrop-blur-sm bg-white/20">
                <img
                  src="/sammy.jpg"
                  alt="Sameer Singh"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-blue-600 text-white px-4 py-2 rounded-full font-semibold shadow-lg">
                Full Stack Developer
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="lg:w-2/3 text-center lg:text-left">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Hi, I'm <span className="text-blue-600">Sameer Singh</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              A passionate Full Stack Developer based in Jaipur, creating digital experiences 
              that combine beautiful design with powerful functionality. I love turning ideas 
              into reality through clean, efficient code.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <div className="flex items-center justify-center lg:justify-start gap-2 text-gray-600">
                <MapPin size={20} className="text-blue-600" />
                <span>Jaipur, India</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-2 text-gray-600">
                <Mail size={20} className="text-blue-600" />
                <span>sameersingh1449@gmail.com</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-2 text-gray-600">
                <Phone size={20} className="text-blue-600" />
                <span>6378549102</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg backdrop-blur-sm"
              >
                Get In Touch
              </button>
              <button
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors backdrop-blur-sm"
              >
                View My Work
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;