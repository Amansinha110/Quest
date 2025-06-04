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
      id: "block1",
      x: 20,
      y: 50,
      type: "block",
      color: "bg-blue-500",
      active: true,
    },
    {
      id: "block2",
      x: 40,
      y: 30,
      type: "block",
      color: "bg-green-500",
      active: true,
    },
    {
      id: "enemy1",
      x: 70,
      y: 60,
      type: "enemy",
      color: "bg-red-500",
      active: true,
    },
    {
      id: "projectile1",
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
      id: "rewind",
      name: "Rewind",
      icon: RotateCcw,
      color: "from-blue-500 to-cyan-500",
      description: "Reverse object positions by 3 seconds",
      cooldown: 3,
    },
    {
      id: "pause",
      name: "Pause",
      icon: Pause,
      color: "from-purple-500 to-indigo-500",
      description: "Freeze all objects except yourself",
      cooldown: 2,
    },
    {
      id: "accelerate",
      name: "Accelerate",
      icon: FastForward,
      color: "from-orange-500 to-red-500",
      description: "Speed up time for all objects",
      cooldown: 4,
    },
    {
      id: "echo",
      name: "Echo",
      icon: Zap,
      color: "from-green-500 to-teal-500",
      description: "Create temporal copies of objects",
      cooldown: 5,
    },
  ];

  const challenges = [
    { name: "Dodge the Projectile", points: 100 },
    { name: "Move Block to Safety", points: 200 },
    { name: "Defeat Enemy", points: 300 },
    { name: "Perfect Timing", points: 500 },
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
              newX += 2;
              if (newX > 100) newX = 0;
              break;
            case "enemy":
              newY += Math.sin(Date.now() / 1000) * 0.5;
              newX -= 0.5;
              if (newX < 0) newX = 100;
              break;
            case "block":
              // Blocks can be manipulated by player
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
      case "rewind":
        if (timeHistory.length > 3) {
          setGameObjects(timeHistory[timeHistory.length - 3]);
        }
        break;

      case "pause":
        setIsPlaying(false);
        setTimeout(() => setIsPlaying(true), 2000);
        break;

      case "accelerate":
        // Simulate acceleration by updating positions more rapidly
        setGameObjects((prev) =>
          prev.map((obj) => ({
            ...obj,
            x: obj.type === "projectile" ? Math.min(obj.x + 10, 100) : obj.x,
            y: obj.type === "enemy" ? Math.max(obj.y - 5, 0) : obj.y,
          })),
        );
        break;

      case "echo":
        // Create temporal echoes
        setGameObjects((prev) => [
          ...prev,
          ...prev
            .filter((obj) => obj.type === "block")
            .map((obj) => ({
              ...obj,
              id: obj.id + "_echo",
              color: obj.color + " opacity-50",
              x: obj.x + 5,
              y: obj.y + 5,
            })),
        ]);
        break;
    }

    // Reset ability after animation
    setTimeout(() => setCurrentAbility(null), 1000);
  };

  const resetDemo = () => {
    setGameObjects([
      {
        id: "block1",
        x: 20,
        y: 50,
        type: "block",
        color: "bg-blue-500",
        active: true,
      },
      {
        id: "block2",
        x: 40,
        y: 30,
        type: "block",
        color: "bg-green-500",
        active: true,
      },
      {
        id: "enemy1",
        x: 70,
        y: 60,
        type: "enemy",
        color: "bg-red-500",
        active: true,
      },
      {
        id: "projectile1",
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
      className="min-h-screen bg-gradient-to-b from-black via-green-900/20 to-black py-20 px-4"
    >
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-cyan-500 bg-clip-text text-transparent">
            Interactive Demo
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience the core mechanics of ChronoQuest! Practice your temporal
            abilities in this interactive demonstration. Watch how time
            manipulation affects the game world.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Game Arena */}
          <div className="lg:col-span-2">
            <Card className="bg-black/50 border-green-500/30 overflow-hidden">
              <CardContent className="p-0">
                {/* Score and Status */}
                <div className="bg-gradient-to-r from-green-900/50 to-cyan-900/50 p-4 border-b border-green-500/30">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-6">
                      <div>
                        <span className="text-green-400 text-sm">Score</span>
                        <div className="text-white text-2xl font-bold">
                          {score}
                        </div>
                      </div>
                      <div>
                        <span className="text-cyan-400 text-sm">Combo</span>
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
                        <Badge className="bg-green-500 text-white pulse-glow">
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
                        className="absolute border-l border-green-500/20"
                        style={{ left: `${i * 10}%`, height: "100%" }}
                      />
                    ))}
                    {[...Array(10)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute border-t border-green-500/20"
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
                          {obj.type === "block" && "📦"}
                          {obj.type === "enemy" && "👾"}
                          {obj.type === "projectile" && "⚡"}
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
                <div className="p-4 bg-black/30 border-t border-green-500/30">
                  <div className="flex items-center justify-center space-x-4">
                    <Button
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="bg-green-500 hover:bg-green-600 text-white"
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
            <Card className="bg-black/50 border-cyan-500/30">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                  <Clock className="w-5 h-5 mr-2 text-cyan-400" />
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
            <Card className="bg-black/50 border-yellow-500/30">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-white mb-4">
                  Demo Challenges
                </h3>
                <div className="space-y-2">
                  {challenges.map((challenge, index) => (
                    <div
                      key={challenge.name}
                      className="flex items-center justify-between p-2 bg-yellow-500/10 rounded"
                    >
                      <span className="text-gray-300 text-sm">
                        {challenge.name}
                      </span>
                      <Badge
                        variant="outline"
                        className="text-yellow-400 border-yellow-400"
                      >
                        {challenge.points}pts
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Tips */}
            <Card className="bg-black/50 border-blue-500/30">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-white mb-4">Pro Tips</h3>
                <div className="space-y-3 text-sm text-gray-300">
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                    <span>
                      Use Rewind to undo mistakes and reset object positions
                    </span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0" />
                    <span>Pause time to plan your next move strategically</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0" />
                    <span>Combine abilities for powerful temporal effects</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0" />
                    <span>Build combos by chaining abilities together</span>
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
          className="mt-16 text-center bg-gradient-to-r from-green-500/10 to-cyan-500/10 rounded-lg p-8 border border-green-500/20"
        >
          <h3 className="text-3xl font-bold text-white mb-4">
            Full Game Features
          </h3>
          <p className="text-gray-300 mb-6 max-w-3xl mx-auto">
            This demonstration showcases just a small fraction of ChronoQuest's
            temporal mechanics. The full game features complex puzzles, epic
            boss battles, and a rich story where every choice affects the
            timeline.
          </p>
          <div className="grid md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {[
              "50+ Unique Puzzles",
              "Epic Boss Battles",
              "Multiple Endings",
              "6 Time Powers",
            ].map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-green-500/20 rounded-lg p-3 text-green-300 font-semibold"
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
