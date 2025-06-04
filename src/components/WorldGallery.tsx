import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Mountain, Building2, Zap, TreePine, Waves } from "lucide-react";
import { useState } from "react";

const WorldGallery = () => {
  const [selectedLocation, setSelectedLocation] = useState<number>(0);

  const locations = [
    {
      name: "The Temporal Nexus",
      icon: Clock,
      category: "Central Hub",
      timeState: "Fractured",
      description: "The epicenter of the Great Temporal Cascade",
      fullDescription:
        "Once the Chronos Institute's main facility, the Temporal Nexus now exists in a state of perpetual temporal flux. Fragments of different time periods overlap and intersect, creating impossible geometries where medieval stone towers grow from futuristic metal foundations. Temporal storms rage continuously here, and reality itself bends and warps. This is where the final confrontation with the Temporal Architect takes place.",
      features: [
        "Time Storm Center",
        "Institute Ruins",
        "Temporal Anomalies",
        "Reality Fractures",
      ],
      colors: "from-cyan-500 to-blue-600",
    },
    {
      name: "Crystal Gardens",
      icon: TreePine,
      category: "Natural Wonder",
      timeState: "Accelerated Growth",
      description: "A botanical paradise where time moves at incredible speed",
      fullDescription:
        "In these enchanted gardens, temporal energy has accelerated plant growth beyond imagination. Ancient trees grow to massive sizes in minutes, flowers bloom and wither in beautiful time-lapse sequences, and exotic temporal flora exists nowhere else in the world. The Crystal Gardens serve as a safe haven where you can practice your time manipulation abilities and discover temporal crystals that enhance your powers.",
      features: [
        "Temporal Flora",
        "Crystal Formations",
        "Time Pools",
        "Sanctuary Zones",
      ],
      colors: "from-green-500 to-emerald-600",
    },
    {
      name: "Clockwork Citadel",
      icon: Building2,
      category: "Ancient Fortress",
      timeState: "Mechanical Time",
      description: "A massive fortress powered by temporal machinery",
      fullDescription:
        "Built by an ancient civilization that mastered temporal engineering, the Clockwork Citadel is a marvel of brass gears, crystal conduits, and temporal mechanisms. Every wall pulses with chronological energy, and the entire structure exists in perfect temporal synchronization. Solve intricate timing puzzles to navigate its halls and uncover the secrets of the original Chronarchs who built this wonder.",
      features: [
        "Gear Mechanisms",
        "Temporal Puzzles",
        "Ancient Archives",
        "Clock Towers",
      ],
      colors: "from-amber-500 to-orange-600",
    },
    {
      name: "Void Wastelands",
      icon: Mountain,
      category: "Corrupted Zone",
      timeState: "Temporal Vacuum",
      description: "Barren lands where time itself has been drained away",
      fullDescription:
        "These desolate expanses represent areas where temporal energy has been completely stripped away, creating zones of absolute temporal void. Nothing ages, grows, or changes here—it exists in perfect stasis. The landscape is haunting and beautiful, with crystallized moments frozen forever. Time Wraiths gather here in large numbers, making it one of the most dangerous regions in the fractured world.",
      features: [
        "Temporal Void",
        "Wraith Spawns",
        "Crystal Formations",
        "Frozen Moments",
      ],
      colors: "from-gray-500 to-slate-600",
    },
    {
      name: "Echo Lake",
      icon: Waves,
      category: "Temporal Phenomenon",
      timeState: "Reflection Loops",
      description: "A mystical lake that shows visions of past and future",
      fullDescription:
        "This otherworldly lake's surface doesn't reflect the present, but instead shows temporal echoes of events that happened or will happen at this location. The water itself is infused with temporal energy, creating ripples that flow both forward and backward through time. Dive beneath the surface to experience memories and prophecies, but beware—spending too long in the Echo Lake can trap you in its temporal currents.",
      features: [
        "Temporal Visions",
        "Memory Pools",
        "Future Glimpses",
        "Time Currents",
      ],
      colors: "from-blue-500 to-indigo-600",
    },
    {
      name: "The Paradox Arena",
      icon: Zap,
      category: "Combat Zone",
      timeState: "Combat Accelerated",
      description:
        "A gladiatorial arena where time moves differently for each combatant",
      fullDescription:
        "This supernatural colosseum was created by the Temporal Architect as a testing ground for temporal warriors. The arena floor is divided into zones with different time flows—some move in slow motion, others accelerate rapidly, and some even reverse time. Master the art of temporal combat here, where your timing abilities are pushed to their absolute limits in battles against Time Wraiths and corrupted Chronarchs.",
      features: [
        "Variable Time Zones",
        "Combat Challenges",
        "Temporal Weapons",
        "Arena Mechanics",
      ],
      colors: "from-red-500 to-pink-600",
    },
  ];

  const visualStyles = [
    {
      name: "Temporal Particle Effects",
      description: "Floating energy motes that phase in and out of time",
    },
    {
      name: "Reality Distortion",
      description: "Visual warping effects showing time bending space",
    },
    {
      name: "Chromatic Aberration",
      description: "Color separation effects during temporal shifts",
    },
    {
      name: "Temporal Echoes",
      description: "Ghostly afterimages of past/future states",
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
            Fractured Realms
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore breathtaking environments where time itself has been
            shattered. Each location offers unique temporal phenomena,
            challenging puzzles, and stunning visual experiences.
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
              Visual Technology
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
              Each location in ChronoQuest is carefully crafted to reflect its
              unique temporal properties:
            </p>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-start space-x-2">
                <span className="text-cyan-400 mt-1">•</span>
                <span>Dynamic lighting that responds to temporal energy</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-cyan-400 mt-1">•</span>
                <span>
                  Procedural temporal effects that change based on player
                  actions
                </span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-cyan-400 mt-1">•</span>
                <span>
                  Interactive environments that react to time manipulation
                </span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-cyan-400 mt-1">•</span>
                <span>
                  Seamless transitions between different temporal states
                </span>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WorldGallery;
