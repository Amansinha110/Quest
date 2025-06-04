import { motion, useAnimation } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Play, Clock, Zap, Shield } from "lucide-react";
import { useEffect } from "react";

interface GameHeroProps {
  onNavigate: (section: string) => void;
}

const GameHero = ({ onNavigate }: GameHeroProps) => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      scale: [1, 1.02, 1],
      rotate: [0, 1, -1, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    });
  }, [controls]);

  const features = [
    {
      icon: Clock,
      title: "Oxygen Management",
      description:
        "Carefully manage your air supply while exploring the depths",
    },
    {
      icon: Zap,
      title: "Craft & Build",
      description: "Create weapons, tools, and underwater shelters to survive",
    },
    {
      icon: Shield,
      title: "Deep Ocean",
      description:
        "Explore the mysteries of a post-apocalyptic underwater world",
    },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center hero-gradient relative overflow-hidden">
      {/* Animated Background Particles */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-red-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-4xl mx-auto"
        >
          {/* Main Title */}
          <motion.h1
            className="text-6xl md:text-8xl font-bold mb-6 text-glow"
            animate={controls}
          >
            <span className="bg-gradient-to-r from-red-400 via-pink-500 to-rose-600 bg-clip-text text-transparent">
              Depth Survivor
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-2xl md:text-3xl mb-8 text-gray-300"
          >
            Survive. Explore. Reclaim the Depths.
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-lg md:text-xl mb-12 text-gray-400 max-w-3xl mx-auto leading-relaxed"
          >
            Humanity has been forced beneath the ocean due to catastrophic
            climate events. As one of the last surface dwellers, you must learn
            to survive in the depths. Scavenge for resources, build underwater
            shelters, craft essential equipment, and defend yourself from
            dangerous deep-sea creatures in this immersive survival adventure.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <Button
              size="lg"
              onClick={() => onNavigate("demo")}
              className="bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white font-semibold px-8 py-4 text-lg pulse-glow"
            >
              <Play className="w-5 h-5 mr-2" />
              Experience the Demo
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => onNavigate("story")}
              className="border-red-500 text-red-400 hover:bg-red-500/10 font-semibold px-8 py-4 text-lg"
            >
              Discover the Story
            </Button>
          </motion.div>

          {/* Feature Cards */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto"
          >
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-black/30 backdrop-blur-sm rounded-lg p-6 border border-red-500/20 floating"
                  style={{ animationDelay: `${index * 0.5}s` }}
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400">{feature.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-red-400 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-red-400 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default GameHero;
