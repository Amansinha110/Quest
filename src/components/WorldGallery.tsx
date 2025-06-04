import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Anchor,
  Mountain,
  Building2,
  Zap,
  TreePine,
  Waves,
} from "lucide-react";

const WorldGallery = () => {
  const [selectedLocation, setSelectedLocation] = useState<number>(0);

  const locations = [
    {
      name: "The Drowned Metropolis",
      icon: Building2,
      category: "Ruined City",
      timeState: "Submerged",
      description: "The flooded remains of humanity's greatest city",
      fullDescription:
        "Once New Manhattan, this massive underwater metropolis stretches for miles beneath the waves. Skyscrapers serve as vertical reefs, their windows now home to bioluminescent sea life. The subway tunnels have become underwater highways, and Central Park is now a kelp forest. Hidden within the ruins are valuable pre-flood technologies, survivor caches, and the secrets of how the surface world fell.",
      features: [
        "Skyscraper Ruins",
        "Tech Caches",
        "Tunnel Networks",
        "Cultural Artifacts",
      ],
      colors: "from-cyan-500 to-blue-600",
    },
    {
      name: "Coral Gardens Colony",
      icon: TreePine,
      category: "Living Settlement",
      timeState: "Thriving Ecosystem",
      description: "A bioengineered coral city that grows and adapts",
      fullDescription:
        "Built within and from massive coral formations, this colony represents humanity's successful adaptation to aquatic life. The coral structures provide natural air pockets, water filtration, and defensive barriers. Bioluminescent organisms provide lighting, while carefully cultivated sea plants offer sustainable food sources. This living city demonstrates how humanity can work with ocean ecosystems rather than against them.",
      features: [
        "Living Architecture",
        "Bio-luminescent Lighting",
        "Sustainable Agriculture",
        "Natural Defenses",
      ],
      colors: "from-green-500 to-emerald-600",
    },
    {
      name: "The Abyssal Fortress",
      icon: Anchor,
      category: "Syndicate Stronghold",
      timeState: "Militarized",
      description: "Viktor Kane's underwater empire headquarters",
      fullDescription:
        "Built from salvaged naval vessels and pre-flood corporate towers, this fortress represents the dark side of underwater survival. Massive submarine docks, weapons manufacturing facilities, and slave quarters show how some have chosen domination over cooperation. The fortress sits in the deepest trenches, using the crushing pressure as a natural defense while exploiting geothermal vents for unlimited energy.",
      features: [
        "Military Installations",
        "Submarine Docks",
        "Weapons Manufacturing",
        "Geothermal Power",
      ],
      colors: "from-amber-500 to-orange-600",
    },
    {
      name: "The Twilight Zone",
      icon: Mountain,
      category: "Pressure Depths",
      timeState: "Extreme Environment",
      description: "The crushing depths where only the brave venture",
      fullDescription:
        "Below 1000 meters, the ocean becomes an alien world of crushing pressure and perpetual darkness. Strange bioluminescent creatures patrol these depths, and the pressure can crush unprepared explorers instantly. However, these depths also hide the richest resource deposits, ancient ruins from pre-flood deep sea research stations, and the lair of the legendary Leviathan—an ancient creature awakened by humanity's intrusion into its domain.",
      features: [
        "Extreme Pressure",
        "Bioluminescent Life",
        "Rich Deposits",
        "Ancient Secrets",
      ],
      colors: "from-gray-500 to-slate-600",
    },
    {
      name: "Thermal Vents",
      icon: Waves,
      category: "Geothermal Zone",
      timeState: "Active Energy",
      description: "Underwater volcanoes that power deep sea colonies",
      fullDescription:
        "These underwater geysers create warm oases in the cold depths, supporting unique ecosystems and providing unlimited energy for those brave enough to harness them. The mineral-rich waters support exotic life forms and deposit valuable rare earth elements. However, the vents are unstable and dangerous—their eruptions can destroy entire colonies, but their energy is essential for powering large underwater settlements.",
      features: [
        "Unlimited Energy",
        "Rare Minerals",
        "Unique Ecosystems",
        "Volcanic Activity",
      ],
      colors: "from-blue-500 to-indigo-600",
    },
    {
      name: "The Hunting Grounds",
      icon: Zap,
      category: "Danger Zone",
      timeState: "Predator Territory",
      description:
        "A region where mutated sea creatures have established dominance",
      fullDescription:
        "This region has become the domain of evolved and mutated sea predators that see humans as invaders. Pack-hunting bio-engineered sharks, giant cephalopods with advanced intelligence, and massive schools of aggressive fish patrol these waters. The area was once a marine research facility that experimented with genetic modification—their creations now rule the seas, turning this region into a deadly proving ground for survivor combat skills.",
      features: [
        "Apex Predators",
        "Pack Hunting",
        "Mutation Zones",
        "Research Ruins",
      ],
      colors: "from-red-500 to-pink-600",
    },
  ];

  const visualStyles = [
    {
      name: "Underwater Particle Effects",
      description: "Floating debris, plankton, and bubbles create depth",
    },
    {
      name: "Light Caustics",
      description: "Dynamic light patterns dancing through the water",
    },
    {
      name: "Pressure Distortion",
      description: "Visual effects showing crushing depth pressure",
    },
    {
      name: "Bioluminescence",
      description: "Living light sources from underwater creatures",
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-b from-black via-indigo-900/20 to-black py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-cyan-500 bg-clip-text text-transparent">
            Sunken Worlds
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore breathtaking underwater environments where humanity
            struggles to survive. Each location offers unique challenges,
            resources, and opportunities for building thriving underwater
            communities.
          </p>
        </motion.div>

        {/* Location Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {locations.map((location, index) => {
            const Icon = location.icon;
            const isSelected = selectedLocation === index;

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
                onClick={() => setSelectedLocation(index)}
              >
                <Card
                  className={`bg-black/50 border-2 transition-all duration-300 overflow-hidden ${
                    isSelected
                      ? "border-indigo-500 shadow-lg shadow-indigo-500/20"
                      : "border-gray-700 hover:border-indigo-500/50"
                  }`}
                >
                  <CardContent className="p-0">
                    {/* Visual Preview */}
                    <div
                      className={`h-32 bg-gradient-to-br ${location.colors} relative overflow-hidden`}
                    >
                      <div className="absolute inset-0 particle-effect" />
                      <div className="absolute bottom-4 left-4 flex items-center space-x-2">
                        <div className="w-8 h-8 bg-black/50 rounded-full flex items-center justify-center backdrop-blur-sm">
                          <Icon className="w-4 h-4 text-white" />
                        </div>
                        <Badge
                          variant="secondary"
                          className="bg-black/50 text-white"
                        >
                          {location.timeState}
                        </Badge>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-white font-semibold">
                          {location.name}
                        </h4>
                        <Badge
                          variant="outline"
                          className="text-indigo-400 border-indigo-400"
                        >
                          {location.category}
                        </Badge>
                      </div>
                      <p className="text-gray-400 text-sm">
                        {location.description}
                      </p>

                      {/* Features */}
                      <div className="flex flex-wrap gap-1 mt-3">
                        {location.features
                          .slice(0, 2)
                          .map((feature, featureIndex) => (
                            <span
                              key={featureIndex}
                              className="text-xs bg-indigo-500/20 text-indigo-300 px-2 py-1 rounded"
                            >
                              {feature}
                            </span>
                          ))}
                        {location.features.length > 2 && (
                          <span className="text-xs text-gray-500">
                            +{location.features.length - 2} more
                          </span>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Selected Location Details */}
        <motion.div
          key={selectedLocation}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-r from-indigo-900/30 to-cyan-900/30 rounded-lg p-8 border border-indigo-500/30 mb-16"
        >
          <div className="flex items-center space-x-4 mb-6">
            {React.createElement(locations[selectedLocation].icon, {
              className: "w-8 h-8 text-indigo-400",
            })}
            <div>
              <h3 className="text-3xl font-bold text-white">
                {locations[selectedLocation].name}
              </h3>
              <p className="text-indigo-400">
                {locations[selectedLocation].category} •{" "}
                {locations[selectedLocation].timeState}
              </p>
            </div>
          </div>

          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            {locations[selectedLocation].fullDescription}
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="text-white font-semibold mb-3">
                Location Features
              </h4>
              <div className="space-y-2">
                {locations[selectedLocation].features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-indigo-400 rounded-full" />
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-3">Visual Effects</h4>
              <div className="space-y-2">
                {visualStyles.slice(0, 2).map((style, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full" />
                    <div>
                      <span className="text-gray-300 text-sm">
                        {style.name}
                      </span>
                      <p className="text-gray-500 text-xs">
                        {style.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Visual Technology */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-8"
        >
          <div className="bg-black/30 backdrop-blur-sm rounded-lg p-6 border border-indigo-500/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Underwater Technology
            </h3>
            <div className="space-y-4">
              {visualStyles.map((style, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-start space-x-3"
                >
                  <div className="w-3 h-3 bg-gradient-to-r from-indigo-400 to-cyan-400 rounded-full mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-indigo-300 font-semibold">
                      {style.name}
                    </h4>
                    <p className="text-gray-400 text-sm">{style.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="bg-black/30 backdrop-blur-sm rounded-lg p-6 border border-cyan-500/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Environmental Design
            </h3>
            <p className="text-gray-300 mb-4">
              Each location in Depth Survivor is carefully crafted to reflect
              its unique underwater characteristics and survival challenges:
            </p>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-start space-x-2">
                <span className="text-cyan-400 mt-1">•</span>
                <span>
                  Dynamic water physics and realistic pressure effects
                </span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-cyan-400 mt-1">•</span>
                <span>
                  Procedural creature behavior that adapts to player presence
                </span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-cyan-400 mt-1">•</span>
                <span>
                  Interactive environments that support base building and
                  crafting
                </span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-cyan-400 mt-1">•</span>
                <span>Weather systems that affect visibility and movement</span>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WorldGallery;
