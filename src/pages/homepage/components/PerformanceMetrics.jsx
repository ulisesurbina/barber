import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const PerformanceMetrics = () => {
  const [counters, setCounters] = useState({
    transformations: 0,
    retention: 0,
    experience: 0,
    satisfaction: 0
  });

  const finalValues = {
    transformations: 500,
    retention: 98,
    experience: 15,
    satisfaction: 4.9
  };

  const metrics = [
    {
      key: 'transformations',
      label: 'Monthly Transformations',
      value: counters?.transformations,
      suffix: '+',
      icon: 'Scissors',
      color: 'text-accent',
      bgColor: 'bg-accent/10',
      description: 'Clients transformed every month'
    },
    {
      key: 'retention',
      label: 'Client Retention Rate',
      value: counters?.retention,
      suffix: '%',
      icon: 'TrendingUp',
      color: 'text-success',
      bgColor: 'bg-success/10',
      description: 'Clients who return regularly'
    },
    {
      key: 'experience',
      label: 'Years of Experience',
      value: counters?.experience,
      suffix: '+',
      icon: 'Award',
      color: 'text-secondary',
      bgColor: 'bg-secondary/10',
      description: 'Combined team expertise'
    },
    {
      key: 'satisfaction',
      label: 'Average Rating',
      value: counters?.satisfaction,
      suffix: '/5',
      icon: 'Star',
      color: 'text-warning',
      bgColor: 'bg-warning/10',
      description: 'Client satisfaction score'
    }
  ];

  useEffect(() => {
    const animateCounters = () => {
      const duration = 2000; // 2 seconds
      const steps = 60; // 60 steps for smooth animation
      const stepDuration = duration / steps;

      let currentStep = 0;

      const interval = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);

        setCounters({
          transformations: Math.floor(finalValues?.transformations * easeOutQuart),
          retention: Math.floor(finalValues?.retention * easeOutQuart),
          experience: Math.floor(finalValues?.experience * easeOutQuart),
          satisfaction: parseFloat((finalValues?.satisfaction * easeOutQuart)?.toFixed(1))
        });

        if (currentStep >= steps) {
          clearInterval(interval);
          setCounters(finalValues);
        }
      }, stepDuration);

      return () => clearInterval(interval);
    };

    // Start animation when component is in view
    const timer = setTimeout(animateCounters, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-20 bg-primary text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 border border-white/20 rounded-full"></div>
        <div className="absolute top-32 right-20 w-24 h-24 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-20 left-32 w-40 h-40 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-32 right-10 w-28 h-28 border border-white/20 rounded-full"></div>
      </div>
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6">
            <Icon name="BarChart3" size={20} className="text-accent mr-2" />
            <span className="text-accent font-body font-medium">Performance Excellence</span>
          </div>
          
          <h2 className="font-headline text-4xl md:text-6xl font-bold mb-6">
            Proven <span className="text-gradient-gold">Results</span>
          </h2>
          
          <p className="font-body text-xl text-gray-200 max-w-3xl mx-auto">
            Numbers that speak to our commitment to excellence. Every metric reflects our dedication 
            to delivering exceptional experiences and building lasting relationships with our clients.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics?.map((metric, index) => (
            <motion.div
              key={metric?.key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="relative mb-6">
                {/* Icon Background */}
                <div className={`w-20 h-20 ${metric?.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon name={metric?.icon} size={32} className={metric?.color} />
                </div>
                
                {/* Animated Ring */}
                <div className="absolute inset-0 w-20 h-20 mx-auto">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 80 80">
                    <circle
                      cx="40"
                      cy="40"
                      r="36"
                      stroke="rgba(255,255,255,0.1)"
                      strokeWidth="2"
                      fill="none"
                    />
                    <motion.circle
                      cx="40"
                      cy="40"
                      r="36"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      className={metric?.color}
                      initial={{ strokeDasharray: "0 226" }}
                      whileInView={{ strokeDasharray: "170 226" }}
                      transition={{ duration: 2, delay: index * 0.2 }}
                      viewport={{ once: true }}
                    />
                  </svg>
                </div>
              </div>

              {/* Counter */}
              <div className="mb-4">
                <div className="text-4xl md:text-5xl font-bold font-headline mb-2">
                  <span className={metric?.color}>
                    {metric?.key === 'satisfaction' 
                      ? metric?.value?.toFixed(1) 
                      : metric?.value?.toLocaleString()
                    }
                  </span>
                  <span className="text-2xl text-gray-300">{metric?.suffix}</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {metric?.label}
                </h3>
                <p className="text-sm text-gray-300 font-body">
                  {metric?.description}
                </p>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
                <motion.div
                  className={`h-full ${metric?.color?.replace('text-', 'bg-')}`}
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  transition={{ duration: 2, delay: index * 0.2 }}
                  viewport={{ once: true }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 pt-16 border-t border-white/20"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-2xl font-bold text-accent mb-1">3</div>
              <div className="text-sm text-gray-300">Master Barbers</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-accent mb-1">2019</div>
              <div className="text-sm text-gray-300">Established</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-accent mb-1">7</div>
              <div className="text-sm text-gray-300">Days a Week</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-accent mb-1">100%</div>
              <div className="text-sm text-gray-300">Satisfaction Guarantee</div>
            </div>
          </div>
        </motion.div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <blockquote className="font-headline text-2xl md:text-3xl font-medium text-gray-200 max-w-4xl mx-auto leading-relaxed">
            "Excellence isn't just our goal—it's our standard. Every cut, every shave, 
            every client interaction reflects our commitment to the craft."
          </blockquote>
          <div className="mt-6 flex items-center justify-center space-x-3">
            <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
              <Icon name="Quote" size={20} color="white" />
            </div>
            <div className="text-left">
              <div className="font-semibold text-white">Marcus Rodriguez</div>
              <div className="text-sm text-gray-300">Master Barber & Owner</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PerformanceMetrics;