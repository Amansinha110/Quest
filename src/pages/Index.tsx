import { useState } from "react";
import GameNavigation from "@/components/GameNavigation";
import GameHero from "@/components/GameHero";
import GameMechanics from "@/components/GameMechanics";
import StorylineSection from "@/components/StorylineSection";
import WorldGallery from "@/components/WorldGallery";
import EnemyShowcase from "@/components/EnemyShowcase";
import InteractiveDemo from "@/components/InteractiveDemo";

const Index = () => {
  const [currentSection, setCurrentSection] = useState("hero");

  const handleSectionChange = (sectionId: string) => {
    setCurrentSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <GameNavigation
        currentSection={currentSection}
        onSectionChange={handleSectionChange}
      />

      {/* Hero Section */}
      <section id="hero">
        <GameHero onNavigate={handleSectionChange} />
      </section>

      {/* Game Mechanics */}
      <section id="mechanics">
        <GameMechanics />
      </section>

      {/* Storyline */}
      <section id="story">
        <StorylineSection />
      </section>

      {/* World Gallery */}
      <section id="world">
        <WorldGallery />
      </section>

      {/* Enemies */}
      <section id="enemies">
        <EnemyShowcase />
      </section>

      {/* Interactive Demo */}
      <section id="demo">
        <InteractiveDemo />
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Master Time?
            </h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              ChronoQuest represents a new evolution in puzzle-adventure gaming,
              where your mastery of temporal mechanics determines the fate of
              reality itself. Join the journey through fractured time and
              discover what it truly means to control the flow of existence.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-8">
            <div>
              <h4 className="text-lg font-semibold text-cyan-400 mb-2">
                Game Features
              </h4>
              <ul className="text-gray-400 text-sm space-y-1">
                <li>6 Unique Time Powers</li>
                <li>50+ Mind-Bending Puzzles</li>
                <li>Epic Boss Battles</li>
                <li>Multiple Story Endings</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-purple-400 mb-2">
                Story Elements
              </h4>
              <ul className="text-gray-400 text-sm space-y-1">
                <li>Deep Character Development</li>
                <li>Emotional Narrative</li>
                <li>Philosophical Themes</li>
                <li>Choice-Driven Plot</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-green-400 mb-2">
                Visual Design
              </h4>
              <ul className="text-gray-400 text-sm space-y-1">
                <li>Stunning Temporal Effects</li>
                <li>Dynamic Environments</li>
                <li>Particle Systems</li>
                <li>Immersive Audio</li>
              </ul>
            </div>
          </div>

          <div className="text-gray-500 text-sm">
            <p>
              © 2024 ChronoQuest - A Revolutionary Time Manipulation Adventure
            </p>
            <p className="mt-2">
              This is a conceptual video game design showcasing innovative
              temporal mechanics and storytelling.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
