import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Waves, Zap, Skull, Crown, Heart, Star } from "lucide-react";

const StorylineSection = () => {
  const [selectedChapter, setSelectedChapter] = useState<number>(0);

  const storyChapters = [
    {
      title: "The Great Submersion",
      icon: Waves,
      description: "Climate catastrophe forces humanity beneath the waves.",
      content:
        "In the year 2087, rising seas and climate disasters have made the surface world uninhabitable. You are Alex Chen, a marine engineer who witnessed the final evacuation of the last surface city. As the water levels rise beyond all projections, scattered groups of survivors must quickly adapt to life beneath the ocean. With limited supplies and hostile waters, every decision determines who lives and who becomes another casualty of the depths.",
      themes: ["Survival", "Adaptation", "Loss"],
    },
    {
      title: "Relics of the Surface",
      icon: Star,
      description: "Discover remnants of lost civilizations.",
      content:
        "As you explore the flooded ruins of once-great cities, you uncover evidence of humanity's former glory and folly. Submerged libraries, underwater museums, and drowned metropolises hold technological secrets and historical warnings. Among these ruins, you find messages from other survivor groups and discover that some communities have thrived in underwater havens, developing new technologies and ways of life.",
      themes: ["Discovery", "History", "Hope"],
    },
    {
      title: "The Deep Predators",
      icon: Skull,
      description: "Face creatures adapted to the new world order.",
      content:
        "The ocean depths hide more than ruins—they're home to creatures that have evolved rapidly in the changed ecosystem. Mutated sea life, bio-engineered predators from failed experiments, and ancient deep-sea monsters now roam the waters. These creatures see humanity as invaders in their domain, and they've learned to hunt in packs, using the underwater terrain to their advantage.",
      themes: ["Danger", "Evolution", "Territory"],
    },
    {
      title: "The Depth Colonies",
      icon: Heart,
      description: "Find community among fellow survivors.",
      content:
        "In the deepest trenches, you discover thriving underwater colonies built by survivors who've mastered aquatic life. Led by visionaries like Marina Santos, a former oceanographer, and Captain Rex Torres, an ex-military submarine commander, these communities have developed sustainable underwater agriculture, advanced diving technology, and defensive systems against deep-sea threats.",
      themes: ["Community", "Innovation", "Cooperation"],
    },
    {
      title: "The Rogue Faction",
      icon: Crown,
      description: "Confront those who exploit the chaos for power.",
      content:
        "Not all survivors choose cooperation. The Abyssal Syndicate, led by the ruthless corporate survivor Viktor Kane, has claimed the richest underwater territories and enslaves other survivor groups. Using pre-flood corporate resources and military technology, they've established an underwater empire built on exploitation and control, hoarding resources while others struggle to survive.",
      themes: ["Tyranny", "Resistance", "Justice"],
    },
    {
      title: "Reclaiming the Depths",
      icon: Zap,
      description: "Unite the survivors to build a new world.",
      content:
        "Armed with alliance treaties from multiple colonies and advanced underwater technology, you lead a coalition to overthrow the Syndicate and establish a new underwater civilization. The final confrontation takes place in the flooded ruins of New York, where Kane has built his fortress in the crown of the Statue of Liberty. Your choices throughout the journey determine whether humanity builds a sustainable underwater society or repeats the mistakes that led to the surface world's destruction.",
      themes: ["Unity", "Redemption", "New Beginning"],
    },
  ];

  const characters = [
    {
      name: "Alex Chen",
      role: "The Surface Survivor",
      description: "A marine engineer and the player character",
      image: "🔧",
    },
    {
      name: "Marina Santos",
      role: "Colony Leader",
      description: "Former oceanographer who founded the Coral Gardens colony",
      image: "🌊",
    },
    {
      name: "Captain Rex Torres",
      role: "Military Commander",
      description:
        "Ex-submarine captain who leads the Trench Fortress defense force",
      image: "⚓",
    },
    {
      name: "Dr. Naia Patel",
      role: "Bio-Engineer",
      description:
        "Scientist developing sustainable underwater food production",
      image: "🧬",
    },
    {
      name: "Viktor Kane",
      role: "The Syndicate Lord",
      description:
        "Ruthless corporate survivor controlling underwater territories",
      image: "👑",
    },
    {
      name: "The Leviathan",
      role: "Ancient Deep Guardian",
      description: "Massive creature that has awakened to reclaim the depths",
      image: "🐙",
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-b from-black via-purple-900/20 to-black py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            Tales from the Abyss
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Journey through humanity's darkest hour as the surface world drowns.
            Uncover the secrets of underwater survival and fight to build a new
            civilization beneath the waves.
          </p>
        </motion.div>

        {/* Chapter Timeline */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-white mb-8 text-center">
            Story Chapters
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {storyChapters.map((chapter, index) => {
              const Icon = chapter.icon;
              const isSelected = selectedChapter === index;

              return (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`cursor-pointer transition-all duration-300 ${
                    isSelected ? "transform scale-105" : ""
                  }`}
                  onClick={() => setSelectedChapter(index)}
                >
                  <Card
                    className={`bg-black/50 border-2 transition-all duration-300 ${
                      isSelected
                        ? "border-purple-500 shadow-lg shadow-purple-500/20"
                        : "border-gray-700 hover:border-purple-500/50"
                    }`}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-3 mb-2">
                        <div
                          className={`w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center ${
                            isSelected ? "pulse-glow" : ""
                          }`}
                        >
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h4 className="text-white font-semibold">
                            {chapter.title}
                          </h4>
                          <div className="flex space-x-1 mt-1">
                            {chapter.themes.map((theme, themeIndex) => (
                              <span
                                key={themeIndex}
                                className="text-xs bg-purple-500/20 text-purple-300 px-2 py-1 rounded"
                              >
                                {theme}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-400 text-sm">
                        {chapter.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          {/* Selected Chapter Details */}
          <motion.div
            key={selectedChapter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 rounded-lg p-8 border border-purple-500/30"
          >
            <div className="flex items-center space-x-4 mb-6">
              {React.createElement(storyChapters[selectedChapter].icon, {
                className: "w-8 h-8 text-purple-400",
              })}
              <h3 className="text-3xl font-bold text-white">
                {storyChapters[selectedChapter].title}
              </h3>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed">
              {storyChapters[selectedChapter].content}
            </p>
          </motion.div>
        </motion.div>

        {/* Characters */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-white mb-8 text-center">
            Key Characters
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {characters.map((character, index) => (
              <motion.div
                key={character.name}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-black/30 backdrop-blur-sm rounded-lg p-6 border border-purple-500/20"
              >
                <div className="text-center mb-4">
                  <div className="text-4xl mb-2">{character.image}</div>
                  <h4 className="text-xl font-bold text-white">
                    {character.name}
                  </h4>
                  <p className="text-purple-400 font-semibold">
                    {character.role}
                  </p>
                </div>
                <p className="text-gray-400 text-center">
                  {character.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Story Themes */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-lg p-8 border border-purple-500/20"
        >
          <h3 className="text-3xl font-bold text-white mb-4">Core Themes</h3>
          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {["Adaptation", "Community", "Resilience", "Renewal"].map(
              (theme, index) => (
                <motion.div
                  key={theme}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-purple-500/20 rounded-lg p-4"
                >
                  <h4 className="text-lg font-semibold text-purple-300">
                    {theme}
                  </h4>
                </motion.div>
              ),
            )}
          </div>
          <p className="text-gray-300 mt-6 max-w-2xl mx-auto">
            Depth Survivor explores themes of environmental consequence, human
            adaptability, and the power of community while delivering an
            emotionally engaging story about rebuilding civilization in the face
            of overwhelming odds.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default StorylineSection;
