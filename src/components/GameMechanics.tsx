import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Clock, Hammer, Shield, Fish, Zap, Droplets } from "lucide-react";
import { useState } from "react";

const GameMechanics = () => {
  const [activeAbility, setActiveAbility] = useState<string | null>(null);

  const abilities = [
    {
      id: "oxygen",
      name: "Oxygen Management",
      icon: Droplets,
      color: "from-blue-500 to-cyan-500",
      description:
        "Monitor and conserve your air supply while exploring underwater environments",
      details:
        "Manage multiple oxygen sources including tanks, air pockets, and crafted breathing apparatus. Different activities consume oxygen at varying rates.",
      usage: "Passive monitoring, active conservation",
    },
    {
      id: "crafting",
      name: "Advanced Crafting",
      icon: Hammer,
      color: "from-purple-500 to-indigo-500",
      description:
        "Create essential tools, weapons, and shelter components from scavenged materials",
      details:
        "Combine resources to craft diving gear, underwater weapons, building materials, and survival tools. Advanced blueprints unlock complex constructions.",
      usage: "Access crafting interface",
    },
    {
      id: "exploration",
      name: "Deep Sea Exploration",
      icon: Fish,
      color: "from-orange-500 to-red-500",
      description:
        "Navigate treacherous underwater terrain and discover hidden locations",
      details:
        "Use sonar mapping, underwater vehicles, and specialized diving equipment to explore the ocean depths safely and efficiently.",
      usage: "Navigate using equipment",
    },
    {
      id: "construction",
      name: "Shelter Building",
      icon: Shield,
      color: "from-green-500 to-teal-500",
      description: "Construct underwater habitats and defensive structures",
      details:
        "Build pressurized shelters, defensive barriers, and automated systems. Structures provide safety, storage, and advanced crafting capabilities.",
      usage: "Place and upgrade structures",
    },
    {
      id: "weather",
      name: "Weather Systems",
      icon: Zap,
      color: "from-yellow-500 to-amber-500",
      description:
        "Adapt to dynamic underwater weather patterns and ocean currents",
      details:
        "Monitor underwater storms, thermal vents, toxic algae blooms, and shifting currents that affect visibility, movement, and safety.",
      usage: "Environmental awareness",
    },
    {
      id: "scanning",
      name: "Resource Scanning",
      icon: Clock,
      color: "from-pink-500 to-purple-500",
      description:
        "Identify valuable resources and analyze environmental threats",
      details:
        "Use advanced scanning technology to locate rare materials, identify creature behavior patterns, and assess structural integrity of ruins.",
      usage: "Scan objects and environment",
    },
  ];

  const mechanicsFeatures = [
    {
      title: "Resource Management",
      description: "Every resource is precious in the underwater world",
      points: [
        "Oxygen conservation strategies",
        "Material scavenging priorities",
        "Energy efficient crafting",
      ],
    },
    {
      title: "Environmental Hazards",
      description: "Adapt to the ever-changing dangers of the deep ocean",
      points: [
        "Pressure zone navigation",
        "Creature behavior patterns",
        "Weather system responses",
      ],
    },
    {
      title: "Base Building",
      description: "Construct and expand your underwater civilization",
      points: [
        "Modular shelter systems",
        "Automated resource gathering",
        "Defensive fortifications",
      ],
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-900 to-black py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Underwater Survival Systems
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Master six essential survival mechanics, each crucial for thriving
            in the depths. Combine systems strategically to overcome
            environmental challenges and build thriving underwater colonies.
          </p>
        </motion.div>

        {/* Abilities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {abilities.map((ability, index) => {
            const Icon = ability.icon;
            const isActive = activeAbility === ability.id;

            return (
              <motion.div
                key={ability.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="relative"
              >
                <Card
                  className={`bg-black/50 border-gray-700 hover:border-cyan-500/50 transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "border-cyan-500 shadow-lg shadow-cyan-500/20"
                      : ""
                  }`}
                  onClick={() => setActiveAbility(isActive ? null : ability.id)}
                >
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div
                        className={`w-12 h-12 rounded-full bg-gradient-to-r ${ability.color} flex items-center justify-center glow-effect`}
                      >
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-white">
                          {ability.name}
                        </CardTitle>
                        <CardDescription className="text-gray-400 text-sm">
                          {ability.usage}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 mb-4">{ability.description}</p>

                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{
                        opacity: isActive ? 1 : 0,
                        height: isActive ? "auto" : 0,
                      }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="border-t border-gray-600 pt-4 mt-4">
                        <p className="text-gray-400 text-sm">
                          {ability.details}
                        </p>
                      </div>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Mechanics Features */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          {mechanicsFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-lg p-6 border border-gray-700"
            >
              <h3 className="text-2xl font-bold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-300 mb-4">{feature.description}</p>
              <ul className="space-y-2">
                {feature.points.map((point, pointIndex) => (
                  <li
                    key={pointIndex}
                    className="text-cyan-400 flex items-center"
                  >
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3" />
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Interactive Demo Tease */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-lg p-8 border border-cyan-500/20"
        >
          <h3 className="text-3xl font-bold text-white mb-4">
            Ready to Dive Into Survival?
          </h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Experience our interactive demonstration to understand the core
            survival mechanics. Practice resource management, crafting, and
            exploration in a safe environment.
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-semibold px-8 py-4"
            onClick={() =>
              document
                .getElementById("demo")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            <Zap className="w-5 h-5 mr-2" />
            Try Interactive Demo
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default GameMechanics;
