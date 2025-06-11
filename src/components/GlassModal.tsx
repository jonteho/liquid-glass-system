import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Settings, Palette, Layers, Zap } from 'lucide-react';

interface GlassModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const GlassModal: React.FC<GlassModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
      >
        {/* Backdrop */}
        <motion.div 
          initial={{ backdropFilter: "blur(0px)", backgroundColor: "rgba(0,0,0,0)" }}
          animate={{ backdropFilter: "blur(20px)", backgroundColor: "rgba(0,0,0,0.6)" }}
          exit={{ backdropFilter: "blur(0px)", backgroundColor: "rgba(0,0,0,0)" }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0"
          onClick={onClose}
        />
        
        {/* Modal */}
        <motion.div 
          initial={{ scale: 0.8, opacity: 0, y: 50, rotateX: 45 }}
          animate={{ scale: 1, opacity: 1, y: 0, rotateX: 0 }}
          exit={{ scale: 0.8, opacity: 0, y: 50, rotateX: 45 }}
          transition={{ 
            type: "spring", 
            stiffness: 300, 
            damping: 30,
            duration: 0.5 
          }}
          className="relative w-full max-w-2xl max-h-[90vh] overflow-hidden"
          style={{ perspective: "1000px" }}
        >
          <motion.div 
            className="backdrop-blur-2xl bg-black/40 border border-white/20 rounded-3xl shadow-2xl shadow-black/50"
          >
            {/* Header */}
            <div className="relative flex items-center justify-between p-6 border-b border-white/10">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="flex items-center space-x-3"
              >
                <motion.div 
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  className="p-2 backdrop-blur-xl bg-blue-500/20 border border-blue-200/30 rounded-xl"
                >
                  <Settings className="w-5 h-5 text-blue-600" />
                </motion.div>
                <h2 className="text-xl font-bold text-white">Glass Components</h2>
              </motion.div>
              <motion.button 
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, type: "spring", stiffness: 300 }}
                onClick={onClose}
                whileHover={{ 
                  scale: 1.1,
                  backgroundColor: "rgba(255,255,255,0.1)",
                }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.2 }}
                className="p-2 rounded-xl group"
              >
                <X className="w-5 h-5 text-gray-400 group-hover:text-white" />
              </motion.button>
            </div>
            
            {/* Content */}
            <div className="relative p-6 max-h-96 overflow-y-auto">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="space-y-6"
              >
                <div>
                 <h3 className="text-lg font-semibold text-white mb-3">Component Library</h3>
                 <p className="text-gray-300 mb-4">
                    Explore the complete collection of liquid glass components designed for modern applications.
                  </p>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  {[
                    {
                      icon: <Palette className="w-5 h-5" />,
                      title: "Color System",
                      description: "Dynamic glass colors"
                    },
                    {
                      icon: <Layers className="w-5 h-5" />,
                      title: "Layer Effects",
                      description: "Depth and hierarchy"
                    },
                    {
                      icon: <Zap className="w-5 h-5" />,
                      title: "Animations",
                      description: "Fluid transitions"
                    },
                    {
                      icon: <Settings className="w-5 h-5" />,
                      title: "Customization",
                      description: "Flexible theming"
                    }
                  ].map((item, index) => (
                    <ComponentItem key={index} {...item} delay={index * 0.1} />
                  ))}
                </div>
                
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 }}
                 className="backdrop-blur-xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-white/20 rounded-2xl p-4"
                >
                  <div className="relative">
                   <h4 className="font-semibold text-white mb-2">Pro Tip</h4>
                   <p className="text-sm text-gray-300">
                      Layer multiple glass elements to create depth and visual interest in your interfaces.
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            </div>
            
            {/* Footer */}
            <div className="relative flex items-center justify-end space-x-3 p-6 border-t border-white/10">
              <motion.button 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                onClick={onClose}
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: "rgba(255,255,255,0.1)"
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="px-4 py-2 backdrop-blur-xl bg-black/20 border border-white/20 rounded-xl text-gray-300"
              >
                Close
              </motion.button>
              <motion.button 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: "rgba(59, 130, 246, 0.9)",
                  boxShadow: "0 10px 25px rgba(59, 130, 246, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="px-4 py-2 backdrop-blur-xl bg-blue-500/80 border border-blue-200/30 rounded-xl text-white"
              >
                Learn More
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

interface ComponentItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const ComponentItem: React.FC<ComponentItemProps> = ({ icon, title, description, delay }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.8, rotateY: 45 }}
      animate={{ opacity: 1, scale: 1, rotateY: 0 }}
      transition={{ 
        delay: delay + 0.5,
        type: "spring", 
        stiffness: 300, 
        damping: 30 
      }}
      whileHover={{ 
        scale: 1.05,
        backgroundColor: "rgba(255,255,255,0.1)",
        rotateY: 5,
        y: -5
      }}
      whileTap={{ scale: 0.95 }}
      className="backdrop-blur-xl bg-black/20 border border-white/10 rounded-xl p-4 cursor-pointer group"
    >
      <div className="relative">
        <motion.div 
          whileHover={{ 
            scale: 1.2,
            color: "#1d4ed8"
          }}
          transition={{ duration: 0.2 }}
          className="text-blue-600 mb-2"
        >
          {icon}
        </motion.div>
        <h5 className="font-medium text-white mb-1">{title}</h5>
        <p className="text-xs text-gray-300">{description}</p>
      </div>
    </motion.div>
  );
};

export default GlassModal;