import { motion } from 'framer-motion';
import Button from '../ui/Button';

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-br from-primary-900 to-primary-950 text-white overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-[10%] -right-[10%] w-[40%] h-[40%] bg-secondary-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-[10%] -left-[10%] w-[30%] h-[30%] bg-accent-500/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 py-16 md:py-24 lg:py-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="block">
                <span className="text-secondary-400">Al-Muhammadin</span>
              </span>
              Import & Export
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-lg">
              Your trusted partner for global trade solutions in the UAE. 
              We specialize in efficient import and export services with 
              guaranteed reliability and quality.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="secondary"
                size="lg"
                to="/services"
              >
                Our Services
              </Button>
              <Button
                variant="outline"
                size="lg"
                to="/request-quote"
                className="bg-white/10 text-white border-white/30 hover:bg-white/20"
              >
                Request a Quote
              </Button>
            </div>
            
            {/* Trade certificates */}
            <div className="mt-12">
              <p className="text-sm text-gray-400 mb-4">Certified & Trusted</p>
              <div className="flex flex-wrap gap-6 items-center">
                {['UAE Trade License', 'ISO 9001', 'Customs Authorized', 'WTO Member'].map((cert, index) => (
                  <div 
                    key={index} 
                    className="bg-white/10 px-4 py-2 rounded-md text-sm font-medium"
                  >
                    {cert}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/3693581/pexels-photo-3693581.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Global Trade and Shipping" 
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-10 -left-10 bg-white rounded-lg shadow-xl p-4 max-w-xs">
                <div className="flex items-center mb-2">
                  <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                  <span className="text-primary-900 font-medium">Active Shipments</span>
                </div>
                <div className="text-3xl font-bold text-primary-900">250+</div>
                <div className="text-sm text-gray-500">Delivering worldwide</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;