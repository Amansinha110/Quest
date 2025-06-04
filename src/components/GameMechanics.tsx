import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Clock,
  RotateCcw,
  Pause,
  FastForward,
  Zap,
  Shield,
} from "lucide-react";
import { useState } from "react";

const GameMechanics = () => {
  const [activeAbility, setActiveAbility] = useState<string | null>(null);

  const abilities = [
    {
      id: "rewind",
      name: "Temporal Rewind",
      icon: RotateCcw,
      color: "from-blue-500 to-cyan-500",
      description:
        "Reverse time by up to 10 seconds to undo mistakes or reset enemy positions",
      details:
        "Perfect for puzzle solving and combat recovery. Watch as objects, enemies, and environmental changes flow backward in time.",
      usage: "Hold to charge, release to rewind",
    },
    {
      id: "pause",
      name: "Chronos Pause",
      icon: Pause,
      color: "from-purple-500 to-indigo-500",
      description:
        "Freeze time completely while you remain mobile and plan your next move",
      details:
        "Stop projectiles mid-air, walk through laser grids, and analyze complex situations while the world stands still.",
      usage: "Tap to freeze, limited duration",
    },
    {
      id: "accelerate",
      name: "Time Acceleration",
      icon: FastForward,
      color: "from-orange-500 to-red-500",
      description:
        "Speed up time to make slow processes happen instantly or move at superhuman speed",
      details:
        "Accelerate plant growth, speed up machinery, or become a blur to enemies. The world moves in slow motion around you.",
      usage: "Channel energy to accelerate",
    },
    {
      id: "echo",
      name: "Temporal Echo",
      icon: Zap,
      color: "from-green-500 to-teal-500",
      description:
        "Create time-shifted copies of yourself that repeat your past actions",
      details:
        "Record a sequence of actions, then replay them while performing new ones. Essential for multi-person puzzles.",
      usage: "Record and replay sequences",
    },
    {
      id: "shield",
      name: "Chrono Shield",
      icon: Shield,
      color: "from-yellow-500 to-amber-500",
      description:
        "Create a temporal barrier that deflects attacks back through time",
      details:
        "Redirect enemy attacks to hit them in the past, or create temporal loops that trap projectiles.",
      usage: "Defensive temporal manipulation",
    },
    {
      id: "vision",
      name: "Time Sight",
      icon: Clock,
      color: "from-pink-500 to-purple-500",
      description:
        "See temporal echoes of past and future events in the environment",
      details:
        "Reveal hidden paths, predict enemy movements, and understand the temporal history of objects and locations.",
      usage: "Passive ability with active focus",
    },
  ];

  const mechanicsFeatures = [
    {
      title: "Puzzle Integration",
      description:
        "Every time power is designed to solve specific puzzle types",
      points: [
        "Multi-temporal sequences",
        "Causality loops",
        "Synchronized timing challenges",
      ],
    },
    {
      title: "Combat Synergy",
      description:
        "Combine abilities for devastating temporal combat techniques",
      points: [
        "Rewind + Echo combos",
        "Pause + Acceleration chains",
        "Predictive Time Sight strikes",
      ],
    },
    {
      title: "Environmental Interaction",
      description: "Time affects everything in the world differently",
      points: [
        "Temporal-sensitive materials",
        "Age-based transformations",
        "Time-locked mechanisms",
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
            Time Manipulation Abilities
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Master six unique temporal powers, each with distinct mechanics and
            strategic applications. Combine abilities to create powerful
            synergies and solve increasingly complex challenges.
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
            Ready to Experience Time Manipulation?
          </h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Try our interactive demonstration to feel the power of controlling
            time. Practice the core mechanics and discover how they combine to
            create endless possibilities.
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
