import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skull, Zap, Shield, Clock, Crown, Eye } from "lucide-react";

const EnemyShowcase = () => {
  const [selectedEnemy, setSelectedEnemy] = useState<number>(0);

  const enemies = [
    {
      name: "Bio-Shark",
      type: "Mutated Predator",
      threat: "Medium",
      icon: Skull,
      color: "from-red-500 to-orange-500",
      description: "Genetically enhanced sharks with pack hunting behavior",
      fullDescription:
        "Bio-Sharks are the result of pre-flood genetic experiments that escaped during the great submersion. These apex predators hunt in coordinated packs, using echolocation to track prey through murky waters. Their enhanced intelligence allows them to set traps and ambush tactics. They're armored with bio-engineered scales that deflect most conventional weapons, requiring specialized underwater armaments or environmental tactics to defeat.",
      abilities: [
        "Pack Coordination",
        "Enhanced Echolocation",
        "Armored Scales",
      ],
      weaknesses: [
        "Sonic Disruptors",
        "Electrical Weapons",
        "Territory Boundaries",
      ],
      tactics:
        "Use sonar jammers to disrupt their echolocation, then engage with electrical harpoons. Retreat to shallow waters where their size becomes a disadvantage.",
      variants: ["Scout Shark", "Alpha Shark", "Mega Shark"],
    },
    {
      name: "Syndicate Diver",
      type: "Human Antagonist",
      threat: "High",
      icon: Shield,
      color: "from-blue-500 to-purple-500",
      description: "Elite underwater soldiers serving the Abyssal Syndicate",
      fullDescription:
        "These heavily equipped divers work for Viktor Kane's underwater empire, raiding other survivor colonies for resources and slaves. They wear advanced power armor with integrated life support, propulsion systems, and heavy weaponry. Their training focuses on underwater combat and they use military-grade submarines and submersibles. They're disciplined, well-equipped, and ruthless in pursuing Syndicate objectives.",
      abilities: [
        "Advanced Equipment",
        "Military Training",
        "Submarine Support",
      ],
      weaknesses: [
        "Equipment Dependency",
        "Limited Air Supply",
        "Moral Conflicts",
      ],
      tactics:
        "Target their equipment systems to disable their advantages. Use environmental hazards and superior knowledge of local waters to outmaneuver their technology.",
      variants: ["Scout Diver", "Heavy Assault", "Sub Commander"],
    },
    {
      name: "Kraken Spawn",
      type: "Ancient Sea Monster",
      threat: "High",
      icon: Eye,
      color: "from-green-500 to-teal-500",
      description: "Offspring of awakened deep-sea leviathans",
      fullDescription:
        "The flooding of the surface world has awakened ancient creatures from the deepest trenches. Kraken Spawn are massive cephalopods with supernatural intelligence and psychic abilities. They can camouflage perfectly with their environment, crush submarines with their tentacles, and use bio-electric attacks to disable electronics. They view humans as invaders and seek to reclaim the ocean depths for their kind.",
      abilities: [
        "Perfect Camouflage",
        "Psychic Abilities",
        "Bio-electric Attacks",
      ],
      weaknesses: ["Bright Lights", "Sonic Weapons", "Territorial Limits"],
      tactics:
        "Use high-intensity lights to reveal their position, then attack with sonic weapons to disorient them. Avoid their territorial waters when possible.",
      variants: ["Juvenile", "Adult", "Elder Spawn"],
    },
    {
      name: "Plague Jellyfish",
      type: "Toxic Swarm",
      threat: "Very High",
      icon: Zap,
      color: "from-yellow-500 to-red-500",
      description: "Toxic jellyfish that hunt in massive swarms",
      fullDescription:
        "These mutated jellyfish were created by pollution and toxic waste from the flooded cities. They travel in vast swarms that can stretch for miles, their bodies pulsing with deadly toxins. Contact with their tentacles causes immediate paralysis and slow death. They're attracted to artificial lights and electrical signals, making them a constant threat to any powered equipment or settlements.",
      abilities: ["Toxic Paralysis", "Swarm Behavior", "Electrical Attraction"],
      weaknesses: [
        "Chemical Neutralizers",
        "Freezing Temperatures",
        "Coordinated Dispersal",
      ],
      tactics:
        "Use chemical dispersal agents to break up swarms. Create temperature barriers with heating/cooling systems. Coordinate with other survivors for mass dispersal efforts.",
      variants: ["Scout Swarm", "Dense Cloud", "Mega Swarm"],
    },
    {
      name: "Viktor Kane",
      type: "Syndicate Overlord",
      threat: "Boss",
      icon: Crown,
      color: "from-purple-500 to-pink-500",
      description: "Ruthless leader of the Abyssal Syndicate",
      fullDescription:
        "Viktor Kane is a pre-flood corporate executive who has built an underwater empire through exploitation and violence. Operating from his fortress in the drowned Statue of Liberty, he controls vast territories and enslaves survivor communities. His personal power armor is equipped with the most advanced pre-flood technology, making him nearly invincible in direct combat. He must be defeated through strategy, alliances, and exploiting his overconfidence.",
      abilities: [
        "Advanced Power Armor",
        "Corporate Resources",
        "Military Command",
      ],
      weaknesses: ["Overconfidence", "Resource Dependency", "Betrayal"],
      tactics:
        "Unite survivor colonies against him, sabotage his supply lines, and use his corporate mindset against him. The final battle requires combined assault from multiple allied factions.",
      variants: ["Suited Form", "Power Armor", "Desperate Last Stand"],
    },
    {
      name: "The Leviathan",
      type: "Ancient Guardian",
      threat: "Final Boss",
      icon: Skull,
      color: "from-black to-gray-500",
      description: "The ancient ruler of the ocean depths",
      fullDescription:
        "The Leviathan is an primordial creature that has slumbered in the deepest trenches for millennia. Humanity's intrusion into its domain has awakened it, and it sees all surface dwellers as a contamination to be cleansed. Larger than any whale, with intelligence beyond human comprehension and control over all sea life, it represents the ocean's final judgment on humanity's fitness to survive in the depths.",
      abilities: ["Control Sea Life", "Immense Size", "Ancient Wisdom"],
      weaknesses: ["Ancient Pacts", "Environmental Balance", "Respect"],
      tactics:
        "This is not a battle to win through violence, but through proving humanity's worth to coexist with the ocean. Show environmental stewardship, unite all survivor factions, and demonstrate that humans can live in harmony with the sea.",
      variants: ["Awakening", "Judgment", "Final Test"],
    },
  ];

  const combatMechanics = [
    {
      title: "Underwater Combat System",
      description:
        "Three-dimensional combat where positioning and environment matter most",
      features: [
        "3D movement mechanics",
        "Equipment management",
        "Environmental tactics",
      ],
    },
    {
      title: "Creature Behavior",
      description:
        "Every creature has unique weaknesses and behavior patterns to learn",
      features: [
        "Territorial boundaries",
        "Pack dynamics",
        "Attraction/repulsion factors",
      ],
    },
    {
      title: "Survival Focus",
      description:
        "Combat emphasizes survival and resource conservation over aggression",
      features: [
        "Stealth and avoidance",
        "Environmental solutions",
        "Alliance building",
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
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-red-400 to-pink-500 bg-clip-text text-transparent">
            Denizens of the Deep
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Face diverse sea creatures and hostile factions that rule the
            underwater world. Each threat requires different survival strategies
            and mastery of underwater combat to overcome.
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
          className="bg-gradient-to-r from-red-900/30 to-pink-900/30 rounded-lg p-8 border border-red-500/30 mb-16"
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
                <Shield className="w-4 h-4 mr-2 text-pink-400" />
                Weaknesses
              </h4>
              <div className="space-y-2">
                {enemies[selectedEnemy].weaknesses.map((weakness, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-pink-400 rounded-full" />
                    <span className="text-gray-300 text-sm">{weakness}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-3 flex items-center">
                <Clock className="w-4 h-4 mr-2 text-rose-400" />
                Variants
              </h4>
              <div className="space-y-2">
                {enemies[selectedEnemy].variants.map((variant, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-rose-400 rounded-full" />
                    <span className="text-gray-300 text-sm">{variant}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-black/30 rounded-lg p-4 border border-pink-500/20">
            <h4 className="text-pink-400 font-semibold mb-2">Combat Tactics</h4>
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
