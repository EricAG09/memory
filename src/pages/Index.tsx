import { useState } from "react";
import { motion } from "framer-motion";
import { Heart, ChevronDown } from "lucide-react";
import heroImage from "@/assets/love.png";
import { defaultMemories, Memory } from "@/data/memories";
import FloatingHearts from "@/components/FloatingHearts";
import DaysCounter from "@/components/DaysCounter";
import MemoryCard from "@/components/MemoryCard";
import MemoryDetail from "@/components/MemoryDetail";
import Timeline from "@/components/Timeline";
import SecretMessage from "@/components/SecretMessage";
import AddMemoryForm from "@/components/AddMemoryForm";

const Index = () => {
  const [memories, setMemories] = useState<Memory[]>(() => {
    const saved = localStorage.getItem("romantic-memories");
    return saved ? JSON.parse(saved) : defaultMemories;
  });
  const [selectedMemory, setSelectedMemory] = useState<Memory | null>(null);

  const addMemory = (memory: Memory) => {
    const updated = [...memories, memory];
    setMemories(updated);
    localStorage.setItem("romantic-memories", JSON.stringify(updated));
  };

  const scrollToGallery = () => {
    document.getElementById("gallery")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background relative">
      <FloatingHearts />

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Nosso amor"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
        </div>

        <div className="relative z-10 text-center px-4 space-y-8 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Heart className="w-10 h-10 text-primary fill-primary mx-auto mb-4 animate-pulse-soft" />
            <h1 className="text-4xl md:text-6xl font-display font-bold text-foreground leading-tight">
              Nossa{" "}
              <span className="text-gradient-romantic">História de Amor</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg md:text-xl text-muted-foreground font-display italic"
          >
            "Cada momento com você é uma melodia que meu coração nunca esquece."
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex justify-center"
          >
            <DaysCounter />
          </motion.div>

          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            onClick={scrollToGallery}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-full font-body font-semibold text-sm hover:opacity-90 transition-opacity glow-primary"
          >
            Explorar nossas memórias
            <ChevronDown className="w-4 h-4" />
          </motion.button>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gradient-romantic mb-3">
              Nossas Memórias
            </h2>
            <p className="text-muted-foreground font-body">
              Cada foto, uma música. Cada música, uma lembrança.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {memories.map((memory, i) => (
              <MemoryCard
                key={memory.id}
                memory={memory}
                index={i}
                onClick={() => setSelectedMemory(memory)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Playlist Section */}
      <section className="py-16 px-4">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="bg-card border border-border rounded-2xl p-6 space-y-4"
          >
            <h3 className="text-2xl font-display font-bold text-center text-gradient-romantic">
              🎵 Playlist da Nossa História
            </h3>
            <div className="space-y-2">
              {memories.map((m, i) => (
                <a
                  key={m.id}
                  href={m.spotify_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-3 rounded-lg hover:bg-secondary/50 transition-colors group"
                >
                  <span className="text-sm text-muted-foreground w-6 text-right font-body">
                    {i + 1}
                  </span>
                  <img
                    src={m.photo}
                    alt={m.title}
                    className="w-10 h-10 rounded object-cover"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-foreground font-body truncate">
                      {m.song_name}
                    </p>
                    <p className="text-xs text-muted-foreground truncate">
                      {m.artist}
                    </p>
                  </div>
                  <span className="text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity">
                    ▶️
                  </span>
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <Timeline />
      <SecretMessage />

      <MemoryDetail
        memory={selectedMemory}
        onClose={() => setSelectedMemory(null)}
      />
      <AddMemoryForm onAdd={addMemory} />

      {/* Footer */}
      <footer className="py-8 text-center text-sm text-muted-foreground border-t border-border">
        <p className="font-display italic">
          Feito com 💕 para a pessoa mais especial do mundo
        </p>
      </footer>
    </div>
  );
};

export default Index;
