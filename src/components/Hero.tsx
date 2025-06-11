import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Zap, Shield } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="pt-32 pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              type: "spring", 
              stiffness: 100, 
              damping: 20,
              delay: 0.2 
            }}
            className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent mb-6"
          >
            <span className="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
              Liquid Glass
            </span>
            <br />
            <motion.span 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, type: "spring", stiffness: 150 }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            >
              Design System
            </motion.span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, type: "spring", stiffness: 100 }}
            className="text-xl text-gray-300 max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            Experience the future of interface design with our revolutionary liquid glass components. 
            Translucent, fluid, and beautifully crafted for the modern web.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, type: "spring", stiffness: 100 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <motion.button 
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(59, 130, 246, 0.4)"
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="group relative backdrop-blur-xl bg-gradient-to-r from-blue-500/80 to-purple-600/80 border border-white/20 rounded-2xl px-8 py-4 text-white font-semibold shadow-lg shadow-blue-500/25"
            >
              <span className="relative flex items-center justify-center">
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </span>
            </motion.button>
            
            <motion.button 
              whileHover={{ 
                scale: 1.05,
                backgroundColor: "rgba(255,255,255,0.1)"
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="group relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl px-8 py-4 text-white font-semibold"
            >
              <span className="relative">View Components</span>
            </motion.button>
          </motion.div>
        </div>
        
        {/* Glass Cards Grid */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto"
        >
          {[
            {
              icon: <Sparkles className="w-8 h-8" />,
              title: "Translucent Beauty",
              description: "Experience depth and clarity with our advanced glass morphism effects",
              gradient: "from-blue-500/30 to-cyan-500/30",
              delay: 0
            },
            {
              icon: <Zap className="w-8 h-8" />,
              title: "Fluid Animations",
              description: "Smooth, spring-like transitions that bring interfaces to life",
              gradient: "from-purple-500/30 to-pink-500/30",
              delay: 0.2
            },
            {
              icon: <Shield className="w-8 h-8" />,
              title: "Production Ready",
              description: "Optimized components built for performance and accessibility",
              gradient: "from-emerald-500/30 to-teal-500/30",
              delay: 0.4
            }
          ].map((card, index) => (
            <GlassCard key={index} {...card} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

interface GlassCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  gradient: string;
  delay: number;
}

const GlassCard: React.FC<GlassCardProps> = ({ icon, title, description, gradient, delay }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50, rotateX: 45 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ 
        delay: delay + 1.4,
        type: "spring", 
        stiffness: 100, 
        damping: 20 
      }}
      whileHover={{ 
        scale: 1.05,
        y: -10,
        rotateY: 5,
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
      }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="group relative backdrop-blur-xl bg-black/20 border border-white/10 rounded-3xl p-8"
      style={{ perspective: "1000px" }}
    >
      {/* Background gradient */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
        className={`absolute inset-0 bg-gradient-to-br ${gradient} rounded-3xl`} 
      />
      
      {/* Content */}
      <div className="relative">
        <motion.div 
          whileHover={{ 
            scale: 1.1,
            color: "#1d4ed8"
          }}
          transition={{ duration: 0.2 }}
          className="text-blue-600 mb-4"
        >
          {icon}
        </motion.div>
        <motion.h3 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: delay + 1.6 }}
          className="text-xl font-bold text-white mb-3"
        >
          {title}
        </motion.h3>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: delay + 1.8 }}
          className="text-gray-300 leading-relaxed"
        >
          {description}
        </motion.p>
      </div>
      
    </motion.div>
  );
};

export default Hero;