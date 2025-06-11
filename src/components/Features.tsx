import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Palette, Smartphone, Monitor, Tablet, Code } from 'lucide-react';

const Features: React.FC = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          className="text-center mb-16"
        >
          <motion.h2 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring", stiffness: 150 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Advanced Glass Components
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            A comprehensive collection of liquid glass elements designed for modern applications
          </motion.p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="grid lg:grid-cols-2 gap-8 mb-16"
        >
          <FeatureShowcase />
          <ResponsivePreview />
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, type: "spring", stiffness: 100 }}
          className="grid md:grid-cols-3 gap-6"
        >
          {[
            {
              icon: <Layers className="w-6 h-6" />,
              title: "Layered Depth",
              description: "Multi-level glass effects with perfect depth perception",
              delay: 0
            },
            {
              icon: <Palette className="w-6 h-6" />,
              title: "Dynamic Colors",
              description: "Contextual color systems that adapt to content",
              delay: 0.1
            },
            {
              icon: <Code className="w-6 h-6" />,
              title: "Clean Code",
              description: "Optimized CSS with minimal performance impact",
              delay: 0.2
            }
          ].map((card, index) => (
            <FeatureCard key={index} {...card} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const FeatureShowcase: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className="relative"
    >
      <motion.div 
        whileHover={{ 
          scale: 1.02,
          rotateY: 5,
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.2)"
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="relative backdrop-blur-2xl bg-gradient-to-br from-black/40 to-black/20 border border-white/20 rounded-3xl p-8 shadow-2xl shadow-black/30"
      >
        <div className="relative">
          <h3 className="text-2xl font-bold text-white mb-4">Interactive Elements</h3>
          <p className="text-gray-300 mb-6">Experience the fluidity of liquid glass interactions</p>
          
          <div className="space-y-4">
            {[
              { name: "Glass Button", color: "blue" },
              { name: "Glass Card", color: "purple" },
              { name: "Glass Input", color: "emerald" }
            ].map((item, index) => (
              <motion.div 
                key={item.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.5 }}
                whileHover={{ 
                  scale: 1.02,
                  backgroundColor: "rgba(255,255,255,0.1)",
                  x: 5
                }}
                whileTap={{ scale: 0.98 }}
                className="backdrop-blur-xl bg-black/20 border border-white/20 rounded-xl p-4 cursor-pointer group"
              >
                <div className="flex items-center justify-between">
                  <span className="text-white font-medium">{item.name}</span>
                  <motion.div 
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                    className={`w-4 h-4 bg-${item.color}-500 rounded-full`} 
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const ResponsivePreview: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.2 }}
      whileHover={{ 
        scale: 1.02,
        rotateY: -5,
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.2)"
      }}
      className="relative backdrop-blur-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-white/20 rounded-3xl p-8 shadow-2xl shadow-black/30"
    >
      <div className="relative">
        <h3 className="text-2xl font-bold text-white mb-4">Responsive Design</h3>
        <p className="text-gray-300 mb-6">Perfect glass effects across all device sizes</p>
        
        <div className="flex items-center justify-center space-x-6">
          {[
            { icon: Smartphone, label: "Mobile" },
            { icon: Tablet, label: "Tablet" },
            { icon: Monitor, label: "Desktop" }
          ].map((device, index) => (
            <motion.div 
              key={device.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + 0.7 }}
              whileHover={{ 
                scale: 1.1,
                y: -5
              }}
              whileTap={{ scale: 0.95 }}
              className="text-center group cursor-pointer"
            >
              <motion.div 
                whileHover={{ 
                  backgroundColor: "rgba(255,255,255,0.1)",
                }}
                transition={{ duration: 0.2 }}
                className="backdrop-blur-xl bg-black/20 border border-white/20 rounded-xl p-3 mb-2"
              >
                <device.icon className="w-6 h-6 text-gray-300 mx-auto" />
              </motion.div>
              <span className="text-sm text-gray-300">{device.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, delay }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50, rotateX: 45 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true }}
      transition={{ 
        delay: delay + 1,
        type: "spring", 
        stiffness: 100, 
        damping: 20 
      }}
      whileHover={{ 
        scale: 1.05,
        y: -10,
        backgroundColor: "rgba(255,255,255,0.1)",
        rotateY: 5
      }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="group relative backdrop-blur-xl bg-black/20 border border-white/10 rounded-2xl p-6"
    >
      <div className="relative">
        <motion.div 
          whileHover={{ 
            scale: 1.2,
            color: "#1d4ed8"
          }}
          transition={{ duration: 0.2 }}
          className="text-blue-600 mb-3"
        >
          {icon}
        </motion.div>
        <h4 className="text-lg font-semibold text-white mb-2">{title}</h4>
        <p className="text-gray-300 text-sm">{description}</p>
      </div>
    </motion.div>
  );
};

export default Features;