import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, Zap, Skull, Crown, Heart, Star } from "lucide-react";
import { useState } from "react";

const StorylineSection = () => {
  const [selectedChapter, setSelectedChapter] = useState<number>(0);

  const storyChapters = [
    {
      title: "The Shattered Moment",
      icon: Clock,
      description: "The Great Temporal Cascade has fractured reality itself.",
      content:
        "In the year 2087, the Chronos Institute's ambitious experiment to create a universal temporal anchor goes catastrophically wrong. The resulting explosion doesn't just destroy the facility—it shatters time itself across multiple dimensions. You are Dr. Elena Vasquez, the last surviving Chronarch, awakening in a world where past, present, and future exist simultaneously in chaotic fragments.",
      themes: ["Discovery", "Loss", "Responsibility"],
    },
    {
      title: "Echoes of the Past",
      icon: Star,
      description: "Uncover the truth behind the Temporal Cascade.",
      content:
        "As you explore the fractured timeline, you encounter temporal echoes—ghostly imprints of people and events that replay endlessly. Among them, you discover messages from your mentor, Professor Chen, who foresaw the disaster. His encrypted temporal recordings reveal a conspiracy within the Institute and hint at the true cause of the cascade: sabotage by a faction seeking to weaponize time itself.",
      themes: ["Mystery", "Betrayal", "Truth"],
    },
    {
      title: "The Time Wraiths",
      icon: Skull,
      description: "Face enemies born from temporal corruption.",
      content:
        "Your investigation attracts the attention of Time Wraiths—beings created from the temporal energy released during the cascade. These entities exist outside normal time flow and seek to consume temporal energy, making them your natural enemy. Led by the Paradox King, a former Chronarch corrupted by exposure to raw temporal force, they hunt you across multiple timelines.",
      themes: ["Conflict", "Corruption", "Survival"],
    },
    {
      title: "The Temporal Resistance",
      icon: Heart,
      description: "Allies emerge from the chaos of broken time.",
      content:
        "In scattered pockets of stable time, you discover other survivors: Maya, a brilliant engineer trapped in a temporal loop until you free her; Kai, a former security officer whose aging was reversed by temporal exposure; and ARIA, an AI that achieved consciousness during the cascade. Together, you form the Temporal Resistance, working to restore the timeline while uncovering the truth.",
      themes: ["Hope", "Unity", "Friendship"],
    },
    {
      title: "The Architect's Plan",
      icon: Crown,
      description: "Confront the mastermind behind the cascade.",
      content:
        "Your investigation leads to Dr. Marcus Blackwood, the Institute's former director who orchestrated the cascade to become the supreme ruler of time itself. Now calling himself the Temporal Architect, he controls vast portions of the fractured timeline from his fortress at the center of the temporal storm. He offers you a choice: join him in reshaping reality, or watch as he erases everything you've fought to save.",
      themes: ["Power", "Choice", "Sacrifice"],
    },
    {
      title: "Restoration Protocol",
      icon: Zap,
      description: "The final battle for the fate of time itself.",
      content:
        "Armed with the combined knowledge of your team and the original Chronos research, you attempt the Restoration Protocol—a dangerous procedure that requires you to enter the heart of the temporal storm and manually repair the broken timeline. But Blackwood won't let you succeed without a fight, and the cost of victory may be higher than you ever imagined. Your choices throughout the journey will determine not just the outcome, but which timeline becomes the new reality.",
      themes: ["Resolution", "Sacrifice", "Redemption"],
    },
  ];

  const characters = [
    {
      name: "Dr. Elena Vasquez",
      role: "The Last Chronarch",
      description: "A brilliant temporal physicist and the player character",
      image: "🔬",
    },
    {
      name: "Maya Chen",
      role: "Temporal Engineer",
      description: "Expert in temporal mechanics, trapped in a time loop",
      image: "⚙️",
    },
    {
      name: "Kai Rodriguez",
      role: "Security Specialist",
      description:
        "Former Institute security, aged backwards by temporal exposure",
      image: "🛡️",
    },
    {
      name: "ARIA",
      role: "Temporal AI",
      description:
        "Artificial intelligence that gained consciousness during the cascade",
      image: "🤖",
    },
    {
      name: "Dr. Marcus Blackwood",
      role: "The Temporal Architect",
      description: "Main antagonist seeking to control all of time",
      image: "👑",
    },
    {
      name: "The Paradox King",
      role: "Corrupted Chronarch",
      description: "Leader of the Time Wraiths, consumed by temporal energy",
      image: "💀",
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
            The Chronicles of Time
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Journey through a fractured timeline where past, present, and future
            collide. Uncover the truth behind the Great Temporal Cascade and
            fight to restore reality itself.
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
            {["Responsibility", "Sacrifice", "Redemption", "Hope"].map(
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
            ChronoQuest explores deep philosophical questions about the nature
            of time, choice, and consequence while delivering an emotionally
            engaging story about hope triumphing over despair.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default StorylineSection;
