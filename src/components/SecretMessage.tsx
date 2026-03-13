import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Lock, Heart } from "lucide-react";

const SecretMessage = () => {
  const [revealed, setRevealed] = useState(false);

  return (
    <section className="py-20 px-4">
      <div className="max-w-lg mx-auto text-center">
        {!revealed ? (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setRevealed(true)}
            className="group flex flex-col items-center gap-4 mx-auto px-8 py-6 bg-card border border-border rounded-2xl hover:border-primary/40 transition-all hover:glow-primary"
          >
            <div className="w-16 h-16 rounded-full bg-gradient-romantic flex items-center justify-center">
              <Lock className="w-7 h-7 text-primary group-hover:hidden" />
              <Heart className="w-7 h-7 text-primary hidden group-hover:block fill-primary" />
            </div>
            <span className="font-display text-lg text-foreground">
              Mensagem Secreta
            </span>
            <span className="text-sm text-muted-foreground">
              Clique para revelar...
            </span>
          </motion.button>
        ) : (
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", damping: 15 }}
              className="relative p-8 bg-card border border-primary/30 rounded-2xl glow-primary"
            >
              {/* Floating hearts inside */}
              {[...Array(8)].map((_, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 0 }}
                  animate={{
                    opacity: [0, 1, 0],
                    y: -100,
                    x: (Math.random() - 0.5) * 100,
                  }}
                  transition={{
                    duration: 2,
                    delay: i * 0.2,
                    repeat: Infinity,
                    repeatDelay: 3,
                  }}
                  className="absolute text-xl"
                  style={{
                    left: `${20 + Math.random() * 60}%`,
                    bottom: "20%",
                  }}
                >
                  💖
                </motion.span>
              ))}

              <Heart className="w-10 h-10 text-primary fill-primary mx-auto mb-6 animate-pulse-soft" />
              <p className="text-xl md:text-2xl font-display italic text-foreground leading-relaxed">
                "Desde que você entrou na minha vida, tudo ficou mais bonito."
              </p>
              <p className="mt-6 text-sm text-muted-foreground">
                — Com todo meu amor, para sempre 💕
              </p>
            </motion.div>
          </AnimatePresence>
        )}
      </div>
    </section>
  );
};

export default SecretMessage;
