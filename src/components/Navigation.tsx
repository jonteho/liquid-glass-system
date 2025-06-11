import React from 'react';
import { motion } from 'framer-motion';
import { Menu, Search, Settings } from 'lucide-react';

interface NavigationProps {
  onOpenModal: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ onOpenModal }) => {
  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ 
        type: "spring", 
        stiffness: 100, 
        damping: 20,
        duration: 0.8 
      }}
      className="fixed top-0 left-0 right-0 z-50 p-4"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div 
          whileHover={{ 
            scale: 1.02,
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)"
          }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="relative backdrop-blur-xl bg-black/20 border border-white/10 rounded-2xl shadow-lg shadow-black/20"
        >
          <div className="relative flex items-center justify-between px-6 py-4">
            <div className="flex items-center space-x-4">
              <motion.div 
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center shadow-lg"
              >
                <div className="w-4 h-4 bg-white/90 rounded-sm" />
              </motion.div>
              <span className="text-white font-semibold text-lg">LiquidGlass</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              {['Home', 'About', 'Features', 'Contact'].map((item, index) => (
                <motion.a 
                  key={item}
                  href="#" 
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.5 }}
                  whileHover={{ 
                    scale: 1.05,
                    color: "#ffffff"
                  }}
                  className="text-gray-300 font-medium"
                >
                  {item}
                </motion.a>
              ))}
            </div>
            
            <div className="flex items-center space-x-3">
              <motion.button 
                whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.1)" }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="p-2 rounded-xl group"
              >
                <Search className="w-5 h-5 text-gray-400 group-hover:text-white" />
              </motion.button>
              <motion.button 
                onClick={onOpenModal}
                whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.1)" }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="p-2 rounded-xl group"
              >
                <Settings className="w-5 h-5 text-gray-400 group-hover:text-white" />
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.1)" }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="md:hidden p-2 rounded-xl group"
              >
                <Menu className="w-5 h-5 text-gray-400 group-hover:text-white" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navigation;