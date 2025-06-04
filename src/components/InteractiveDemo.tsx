import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Play,
  RotateCcw,
  Pause,
  FastForward,
  Zap,
  RefreshCw,
  Clock,
} from "lucide-react";
import { useState, useEffect } from "react";

interface DemoObject {
  id: string;
  x: number;
  y: number;
  type: "block" | "enemy" | "projectile";
  color: string;
  active: boolean;
}

const InteractiveDemo = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentAbility, setCurrentAbility] = useState<string | null>(null);
  const [gameObjects, setGameObjects] = useState<DemoObject[]>([
    {
      id: "resource1",
      x: 20,
      y: 50,
      type: "block",
      color: "bg-blue-500",
      active: true,
    },
    {
      id: "resource2",
      x: 40,
      y: 30,
      type: "block",
      color: "bg-green-500",
      active: true,
    },
    {
      id: "shark1",
      x: 70,
      y: 60,
      type: "enemy",
      color: "bg-red-500",
      active: true,
    },
    {
      id: "bubble1",
      x: 10,
      y: 40,
      type: "projectile",
      color: "bg-yellow-500",
      active: true,
    },
  ]);
  const [timeHistory, setTimeHistory] = useState<DemoObject[][]>([]);
  const [score, setScore] = useState(0);
  const [combo, setCombo] = useState(0);

  const abilities = [
    {
      id: "scan",
      name: "Scan",
      icon: RotateCcw,
      color: "from-blue-500 to-cyan-500",
      description: "Scan for resources and threats nearby",
      cooldown: 3,
    },
    {
      id: "craft",
      name: "Craft",
      icon: Pause,
      color: "from-purple-500 to-indigo-500",
      description: "Combine resources to create useful items",
      cooldown: 2,
    },
    {
      id: "boost",
      name: "Oxygen Boost",
      icon: FastForward,
      color: "from-orange-500 to-red-500",
      description: "Temporarily increase oxygen efficiency",
      cooldown: 4,
    },
    {
      id: "distract",
      name: "Distract",
      icon: Zap,
      color: "from-green-500 to-teal-500",
      description: "Create noise to distract hostile creatures",
      cooldown: 5,
    },
  ];

  const challenges = [
    { name: "Collect Resources", points: 100 },
    { name: "Avoid Sea Creatures", points: 200 },
    { name: "Manage Oxygen", points: 300 },
    { name: "Survival Master", points: 500 },
  ];

  // Simulate object movement
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setGameObjects((prev) => {
        const newState = prev.map((obj) => {
          if (!obj.active) return obj;

          let newX = obj.x;
          let newY = obj.y;

          switch (obj.type) {
            case "projectile":
              // Bubbles float upward
              newY -= 1;
              if (newY < 0) newY = 100;
              break;
            case "enemy":
              // Sharks patrol in patterns
              newY += Math.sin(Date.now() / 1000) * 0.5;
              newX -= 0.8;
              if (newX < 0) newX = 100;
              break;
            case "block":
              // Resources can drift slightly
              newY += Math.sin(Date.now() / 2000) * 0.2;
              break;
          }

          return { ...obj, x: newX, y: newY };
        });

        // Store history for rewind
        setTimeHistory((prev) => [...prev.slice(-10), prev]);
        return newState;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [isPlaying]);

  const executeAbility = (abilityId: string) => {
    setCurrentAbility(abilityId);
    setCombo((prev) => prev + 1);
    setScore((prev) => prev + 50 * combo);

    switch (abilityId) {
      case "scan":
        // Highlight all resources and threats
        setGameObjects((prev) =>
          prev.map((obj) => ({
            ...obj,
            color:
              obj.type === "block"
                ? "bg-green-500 pulse-glow"
                : obj.type === "enemy"
                  ? "bg-red-500 pulse-glow"
                  : obj.color,
          })),
        );
        setTimeout(() => {
          setGameObjects((prev) =>
            prev.map((obj) => ({
              ...obj,
              color:
                obj.type === "block"
                  ? "bg-blue-500"
                  : obj.type === "enemy"
                    ? "bg-red-500"
                    : obj.type === "projectile"
                      ? "bg-yellow-500"
                      : obj.color,
            })),
          );
        }, 2000);
        break;

      case "craft":
        // Combine nearby resources
        setGameObjects((prev) => {
          const resources = prev.filter((obj) => obj.type === "block");
          if (resources.length >= 2) {
            return [
              ...prev.filter(
                (obj) => obj.type !== "block" || obj.id !== resources[0].id,
              ),
              {
                ...resources[0],
                color: "bg-purple-500",
                id: "crafted_item",
              },
            ];
          }
          return prev;
        });
        break;

      case "boost":
        // Simulate oxygen efficiency boost
        setGameObjects((prev) =>
          prev.map((obj) => ({
            ...obj,
            x: obj.type === "projectile" ? Math.min(obj.x + 5, 100) : obj.x,
            y: obj.type === "enemy" ? Math.max(obj.y + 10, 0) : obj.y,
          })),
        );
        break;

      case "distract":
        // Push enemies away
        setGameObjects((prev) =>
          prev.map((obj) => ({
            ...obj,
            x: obj.type === "enemy" ? Math.min(obj.x + 15, 100) : obj.x,
            y: obj.type === "enemy" ? Math.min(obj.y + 10, 100) : obj.y,
          })),
        );
        break;
    }

    // Reset ability after animation
    setTimeout(() => setCurrentAbility(null), 1000);
  };

  const resetDemo = () => {
    setGameObjects([
      {
        id: "resource1",
        x: 20,
        y: 50,
        type: "block",
        color: "bg-blue-500",
        active: true,
      },
      {
        id: "resource2",
        x: 40,
        y: 30,
        type: "block",
        color: "bg-green-500",
        active: true,
      },
      {
        id: "shark1",
        x: 70,
        y: 60,
        type: "enemy",
        color: "bg-red-500",
        active: true,
      },
      {
        id: "bubble1",
        x: 10,
        y: 40,
        type: "projectile",
        color: "bg-yellow-500",
        active: true,
      },
    ]);
    setTimeHistory([]);
    setScore(0);
    setCombo(0);
    setIsPlaying(false);
    setCurrentAbility(null);
  };

  return (
    <section
      id="demo"
      className="min-h-screen bg-gradient-to-b from-black via-red-900/20 to-black py-20 px-4"
    >
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-red-400 to-pink-500 bg-clip-text text-transparent">
            Interactive Demo
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience the core mechanics of Depth Survivor! Practice underwater
            survival in this interactive demonstration. Learn oxygen management,
            resource gathering, and creature avoidance.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Game Arena */}
          <div className="lg:col-span-2">
            <Card className="bg-black/50 border-red-500/30 overflow-hidden">
              <CardContent className="p-0">
                {/* Score and Status */}
                <div className="bg-gradient-to-r from-red-900/50 to-pink-900/50 p-4 border-b border-red-500/30">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-6">
                      <div>
                        <span className="text-red-400 text-sm">Score</span>
                        <div className="text-white text-2xl font-bold">
                          {score}
                        </div>
                      </div>
                      <div>
                        <span className="text-pink-400 text-sm">Combo</span>
                        <div className="text-white text-2xl font-bold">
                          x{combo}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge variant={isPlaying ? "default" : "secondary"}>
                        {isPlaying ? "Time Flowing" : "Time Paused"}
                      </Badge>
                      {currentAbility && (
                        <Badge className="bg-red-500 text-white pulse-glow">
                          {abilities.find((a) => a.id === currentAbility)?.name}{" "}
                          Active
                        </Badge>
                      )}
                    </div>
                  </div>
                </div>

                {/* Game Field */}
                <div className="relative h-96 bg-gradient-to-br from-gray-900 to-black overflow-hidden">
                  {/* Grid Background */}
                  <div className="absolute inset-0 opacity-20">
                    {[...Array(10)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute border-l border-red-500/20"
                        style={{ left: `${i * 10}%`, height: "100%" }}
                      />
                    ))}
                    {[...Array(10)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute border-t border-red-500/20"
                        style={{ top: `${i * 10}%`, width: "100%" }}
                      />
                    ))}
                  </div>

                  {/* Game Objects */}
                  <AnimatePresence>
                    {gameObjects.map((obj) => (
                      <motion.div
                        key={obj.id}
                        className={`absolute w-6 h-6 rounded ${obj.color} ${
                          currentAbility ? "time-distortion" : ""
                        }`}
                        style={{
                          left: `${obj.x}%`,
                          top: `${obj.y}%`,
                        }}
                        animate={{
                          scale:
                            currentAbility === "accelerate" ? [1, 1.2, 1] : 1,
                          opacity: currentAbility === "pause" ? 0.5 : 1,
                        }}
                        transition={{ duration: 0.5 }}
                        whileHover={{ scale: 1.1 }}
                      >
                        {/* Object Type Indicator */}
                        <div className="absolute -top-6 left-0 text-xs text-white opacity-75">
                          {obj.type === "block" && "🔧"}
                          {obj.type === "enemy" && "🦈"}
                          {obj.type === "projectile" && "🫧"}
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>

                  {/* Temporal Effect Overlay */}
                  {currentAbility && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 0.3 }}
                      exit={{ opacity: 0 }}
                      className={`absolute inset-0 ${
                        currentAbility === "rewind"
                          ? "bg-blue-500"
                          : currentAbility === "pause"
                            ? "bg-purple-500"
                            : currentAbility === "accelerate"
                              ? "bg-orange-500"
                              : "bg-green-500"
                      } mix-blend-overlay`}
                    />
                  )}
                </div>

                {/* Controls */}
                <div className="p-4 bg-black/30 border-t border-red-500/30">
                  <div className="flex items-center justify-center space-x-4">
                    <Button
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="bg-red-500 hover:bg-red-600 text-white"
                    >
                      {isPlaying ? (
                        <Pause className="w-4 h-4 mr-2" />
                      ) : (
                        <Play className="w-4 h-4 mr-2" />
                      )}
                      {isPlaying ? "Pause" : "Play"}
                    </Button>

                    <Button
                      onClick={resetDemo}
                      variant="outline"
                      className="border-gray-500 text-gray-300 hover:bg-gray-500/10"
                    >
                      <RefreshCw className="w-4 h-4 mr-2" />
                      Reset
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Abilities Panel */}
          <div className="space-y-6">
            <Card className="bg-black/50 border-red-500/30">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                  <Clock className="w-5 h-5 mr-2 text-red-400" />
                  Temporal Abilities
                </h3>

                <div className="space-y-3">
                  {abilities.map((ability) => {
                    const Icon = ability.icon;
                    const isActive = currentAbility === ability.id;

                    return (
                      <motion.div
                        key={ability.id}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Button
                          onClick={() => executeAbility(ability.id)}
                          disabled={isActive}
                          className={`w-full justify-start bg-gradient-to-r ${ability.color} hover:scale-105 transition-all duration-300 ${
                            isActive ? "pulse-glow" : ""
                          }`}
                        >
                          <Icon className="w-4 h-4 mr-3" />
                          <div className="text-left">
                            <div className="font-semibold">{ability.name}</div>
                            <div className="text-xs opacity-90">
                              {ability.description}
                            </div>
                          </div>
                        </Button>
                      </motion.div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Challenges */}
            <Card className="bg-black/50 border-pink-500/30">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-white mb-4">
                  Demo Challenges
                </h3>
                <div className="space-y-2">
                  {challenges.map((challenge, index) => (
                    <div
                      key={challenge.name}
                      className="flex items-center justify-between p-2 bg-pink-500/10 rounded"
                    >
                      <span className="text-gray-300 text-sm">
                        {challenge.name}
                      </span>
                      <Badge
                        variant="outline"
                        className="text-pink-400 border-pink-400"
                      >
                        {challenge.points}pts
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Tips */}
            <Card className="bg-black/50 border-rose-500/30">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-white mb-4">Pro Tips</h3>
                <div className="space-y-3 text-sm text-gray-300">
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0" />
                    <span>
                      Use Scan to locate valuable resources and identify threats
                    </span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-pink-400 rounded-full mt-2 flex-shrink-0" />
                    <span>
                      Craft items by combining resources strategically
                    </span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-rose-400 rounded-full mt-2 flex-shrink-0" />
                    <span>Manage oxygen carefully - it's your lifeline</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-red-300 rounded-full mt-2 flex-shrink-0" />
                    <span>
                      Avoid or distract dangerous creatures to survive
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Demo Information */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-16 text-center bg-gradient-to-r from-red-500/10 to-pink-500/10 rounded-lg p-8 border border-red-500/20"
        >
          <h3 className="text-3xl font-bold text-white mb-4">
            Full Game Features
          </h3>
          <p className="text-gray-300 mb-6 max-w-3xl mx-auto">
            This demonstration showcases just a small fraction of Depth
            Survivor's survival mechanics. The full game features complex base
            building, diverse underwater environments, and a rich story about
            rebuilding civilization.
          </p>
          <div className="grid md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {[
              "Base Building",
              "Deep Sea Exploration",
              "Colony Management",
              "Creature Encounters",
            ].map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-red-500/20 rounded-lg p-3 text-red-300 font-semibold"
              >
                {feature}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default InteractiveDemo;
