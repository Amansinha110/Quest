import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skull, Zap, Shield, Clock, Crown, Eye } from "lucide-react";

const EnemyShowcase = () => {
  const [selectedEnemy, setSelectedEnemy] = useState<number>(0);

  const enemies = [
    {
      name: "Time Wraith",
      type: "Temporal Predator",
      threat: "Medium",
      icon: Skull,
      color: "from-red-500 to-orange-500",
      description: "Corrupted beings that feed on temporal energy",
      fullDescription:
        "Time Wraiths are the most common enemies you'll encounter—once-human beings who were caught in temporal storms and transformed into energy-hungry predators. They exist partially outside normal time flow, allowing them to phase in and out of reality. Their touch drains temporal energy, weakening your abilities. They're vulnerable to concentrated bursts of chronological force and can be temporarily banished using Temporal Rewind.",
      abilities: ["Phase Shifting", "Energy Drain", "Temporal Immunity"],
      weaknesses: [
        "Concentrated Time Bursts",
        "Temporal Anchors",
        "Light-based Attacks",
      ],
      tactics:
        "Use Chronos Pause to freeze them mid-phase, then attack with temporal energy blasts. Group them together with Time Acceleration before unleashing area attacks.",
      variants: ["Lesser Wraith", "Greater Wraith", "Wraith Lord"],
    },
    {
      name: "Paradox Soldier",
      type: "Timeline Guardian",
      threat: "High",
      icon: Shield,
      color: "from-blue-500 to-purple-500",
      description: "Elite warriors from an alternate timeline",
      fullDescription:
        "These heavily armored soldiers come from a timeline where the Temporal Architect succeeded in his conquest. They wear advanced chronium armor that makes them highly resistant to temporal manipulation. Their weapons fire bullets that exist in multiple timelines simultaneously, making them extremely difficult to dodge. They're disciplined, tactical, and work in coordinated groups to overwhelm opponents.",
      abilities: [
        "Timeline Resistance",
        "Multi-temporal Weapons",
        "Tactical Coordination",
      ],
      weaknesses: [
        "Temporal Echo Confusion",
        "Chrono Shield Overload",
        "Environmental Hazards",
      ],
      tactics:
        "Create Temporal Echoes to confuse their targeting systems. Use environmental time effects to your advantage and exploit gaps in their temporal armor.",
      variants: ["Scout", "Heavy", "Commander"],
    },
    {
      name: "Chronophage",
      type: "Temporal Beast",
      threat: "High",
      icon: Eye,
      color: "from-green-500 to-teal-500",
      description: "Ancient creatures that devour time itself",
      fullDescription:
        "Chronophages are massive, alien creatures that existed before linear time was established. They view the current timeline as an aberration and seek to return reality to its primordial state of temporal chaos. They can literally eat time, aging objects and beings rapidly or stealing years from their lifespan. Their presence creates temporal dead zones where your abilities become unpredictable.",
      abilities: [
        "Time Consumption",
        "Age Manipulation",
        "Temporal Dead Zones",
      ],
      weaknesses: [
        "Temporal Stability Fields",
        "Pure Chronium",
        "Coordinated Time Attacks",
      ],
      tactics:
        "Maintain distance and use ranged temporal attacks. Create Temporal Echoes to distract them while setting up powerful combination abilities.",
      variants: ["Hatchling", "Adult", "Ancient"],
    },
    {
      name: "Echo Assassin",
      type: "Temporal Infiltrator",
      threat: "Very High",
      icon: Zap,
      color: "from-yellow-500 to-red-500",
      description: "Shadows from erased timelines seeking revenge",
      fullDescription:
        "Echo Assassins are the remnants of people who were erased from the timeline during temporal experiments. They exist as living temporal paradoxes, neither fully real nor completely gone. They can step between timeline echoes, appearing and disappearing at will. Their attacks ignore conventional defenses and can damage you across multiple temporal states simultaneously.",
      abilities: [
        "Timeline Stepping",
        "Paradox Strikes",
        "Temporal Invisibility",
      ],
      weaknesses: [
        "Temporal Anchoring",
        "Reality Stabilization",
        "Direct Chronium Contact",
      ],
      tactics:
        "Use Time Sight to track their movements across timelines. Temporal Anchors can force them into a single timeline where they become vulnerable.",
      variants: ["Shade", "Phantom", "Revenant"],
    },
    {
      name: "The Paradox King",
      type: "Corrupted Chronarch",
      threat: "Boss",
      icon: Crown,
      color: "from-purple-500 to-pink-500",
      description: "Former Chronarch consumed by temporal power",
      fullDescription:
        "Once Dr. Sarah Chen, the Institute's most promising Chronarch, the Paradox King was transformed when she tried to contain the initial temporal cascade. Now existing in a state of constant temporal flux, she leads the Time Wraiths with a twisted sense of justice. She believes that by consuming all temporal energy, she can reset reality to before the cascade occurred. Her mastery of time rivals your own, making her incredibly dangerous.",
      abilities: [
        "Master Time Control",
        "Wraith Command",
        "Temporal Corruption",
      ],
      weaknesses: ["Emotional Appeals", "Temporal Overload", "Pure Intent"],
      tactics:
        "This is a battle of temporal mastery. Counter her abilities with your own, use the environment to your advantage, and remember her human past to break through the corruption.",
      variants: ["First Form", "Corrupted Form", "Final Form"],
    },
    {
      name: "Temporal Architect",
      type: "Master Antagonist",
      threat: "Final Boss",
      icon: Clock,
      color: "from-black to-gray-500",
      description: "The orchestrator of the temporal cascade",
      fullDescription:
        "Dr. Marcus Blackwood has transcended normal existence, becoming a being of pure temporal energy contained within a sophisticated mechanical form. He controls vast portions of the fractured timeline from his fortress and can rewrite reality around him. His goal is to become the sole master of time, reshaping all existence according to his vision. He possesses every temporal ability you have, but amplified to godlike levels.",
      abilities: [
        "Reality Manipulation",
        "Timeline Control",
        "Temporal Omnipresence",
      ],
      weaknesses: ["Overconfidence", "Temporal Paradoxes", "Combined Assault"],
      tactics:
        "This final confrontation requires mastery of all your abilities and the help of your allies. Use the Restoration Protocol while your team distracts him, and exploit his emotional attachment to his original timeline.",
      variants: ["Human Form", "Temporal Form", "Pure Energy"],
    },
  ];

  const combatMechanics = [
    {
      title: "Temporal Combat System",
      description:
        "Time-based combat where timing and strategy matter more than reflexes",
      features: [
        "Turn-based temporal phases",
        "Ability combinations",
        "Environmental interactions",
      ],
    },
    {
      title: "Weakness Exploitation",
      description:
        "Every enemy has temporal vulnerabilities to discover and exploit",
      features: [
        "Elemental weaknesses",
        "Timing windows",
        "Behavioral patterns",
      ],
    },
    {
      title: "Dynamic Difficulty",
      description:
        "Combat adapts to your playstyle and mastery of temporal abilities",
      features: [
        "Skill-based scaling",
        "Tactical challenges",
        "Puzzle integration",
      ],
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-b from-black via-red-900/20 to-black py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-red-400 to-orange-500 bg-clip-text text-transparent">
            Enemies of Time
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Face diverse adversaries born from temporal chaos. Each enemy type
            requires different strategies and mastery of your temporal abilities
            to defeat.
          </p>
        </motion.div>

        {/* Enemy Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {enemies.map((enemy, index) => {
            const Icon = enemy.icon;
            const isSelected = selectedEnemy === index;

            return (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`cursor-pointer transition-all duration-300 ${
                  isSelected ? "transform scale-105" : ""
                }`}
                onClick={() => setSelectedEnemy(index)}
              >
                <Card
                  className={`bg-black/50 border-2 transition-all duration-300 overflow-hidden ${
                    isSelected
                      ? "border-red-500 shadow-lg shadow-red-500/20"
                      : "border-gray-700 hover:border-red-500/50"
                  }`}
                >
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div
                          className={`w-10 h-10 rounded-full bg-gradient-to-r ${enemy.color} flex items-center justify-center ${
                            isSelected ? "pulse-glow" : ""
                          }`}
                        >
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <CardTitle className="text-white text-lg">
                            {enemy.name}
                          </CardTitle>
                          <p className="text-gray-400 text-sm">{enemy.type}</p>
                        </div>
                      </div>
                      <Badge
                        variant={
                          enemy.threat === "Boss" ||
                          enemy.threat === "Final Boss"
                            ? "destructive"
                            : "secondary"
                        }
                        className={
                          enemy.threat === "Very High"
                            ? "bg-orange-500/20 text-orange-300"
                            : enemy.threat === "High"
                              ? "bg-red-500/20 text-red-300"
                              : enemy.threat === "Medium"
                                ? "bg-yellow-500/20 text-yellow-300"
                                : ""
                        }
                      >
                        {enemy.threat}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-400 text-sm mb-3">
                      {enemy.description}
                    </p>

                    {/* Abilities Preview */}
                    <div className="space-y-1">
                      {enemy.abilities
                        .slice(0, 2)
                        .map((ability, abilityIndex) => (
                          <div
                            key={abilityIndex}
                            className="flex items-center space-x-2"
                          >
                            <div className="w-2 h-2 bg-red-400 rounded-full" />
                            <span className="text-xs text-red-300">
                              {ability}
                            </span>
                          </div>
                        ))}
                      {enemy.abilities.length > 2 && (
                        <span className="text-xs text-gray-500">
                          +{enemy.abilities.length - 2} more abilities
                        </span>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Selected Enemy Details */}
        <motion.div
          key={selectedEnemy}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-r from-red-900/30 to-orange-900/30 rounded-lg p-8 border border-red-500/30 mb-16"
        >
          <div className="flex items-center space-x-4 mb-6">
            {React.createElement(enemies[selectedEnemy].icon, {
              className: "w-8 h-8 text-red-400",
            })}
            <div>
              <h3 className="text-3xl font-bold text-white">
                {enemies[selectedEnemy].name}
              </h3>
              <p className="text-red-400">
                {enemies[selectedEnemy].type} • {enemies[selectedEnemy].threat}{" "}
                Threat
              </p>
            </div>
          </div>

          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            {enemies[selectedEnemy].fullDescription}
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div>
              <h4 className="text-white font-semibold mb-3 flex items-center">
                <Zap className="w-4 h-4 mr-2 text-red-400" />
                Abilities
              </h4>
              <div className="space-y-2">
                {enemies[selectedEnemy].abilities.map((ability, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-red-400 rounded-full" />
                    <span className="text-gray-300 text-sm">{ability}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-3 flex items-center">
                <Shield className="w-4 h-4 mr-2 text-green-400" />
                Weaknesses
              </h4>
              <div className="space-y-2">
                {enemies[selectedEnemy].weaknesses.map((weakness, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full" />
                    <span className="text-gray-300 text-sm">{weakness}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-3 flex items-center">
                <Clock className="w-4 h-4 mr-2 text-blue-400" />
                Variants
              </h4>
              <div className="space-y-2">
                {enemies[selectedEnemy].variants.map((variant, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full" />
                    <span className="text-gray-300 text-sm">{variant}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-black/30 rounded-lg p-4 border border-orange-500/20">
            <h4 className="text-orange-400 font-semibold mb-2">
              Combat Tactics
            </h4>
            <p className="text-gray-300 text-sm">
              {enemies[selectedEnemy].tactics}
            </p>
          </div>
        </motion.div>

        {/* Combat System Overview */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-3 gap-6"
        >
          {combatMechanics.map((mechanic, index) => (
            <motion.div
              key={mechanic.title}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-black/30 backdrop-blur-sm rounded-lg p-6 border border-red-500/20"
            >
              <h3 className="text-xl font-bold text-white mb-3">
                {mechanic.title}
              </h3>
              <p className="text-gray-300 mb-4">{mechanic.description}</p>
              <ul className="space-y-2">
                {mechanic.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="text-red-400 flex items-center"
                  >
                    <div className="w-2 h-2 bg-red-400 rounded-full mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default EnemyShowcase;
