import { motion, AnimatePresence } from "framer-motion";
import { X, Music, Calendar, ExternalLink, Heart } from "lucide-react";
import { Memory } from "@/data/memories";

interface MemoryDetailProps {
  memory: Memory | null;
  onClose: () => void;
}

const MemoryDetail = ({ memory, onClose }: MemoryDetailProps) => {
  if (!memory) return null;

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString("pt-BR", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-md"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: "spring", damping: 25 }}
          className="bg-card border border-border rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="relative">
            <img
              src={memory.photo}
              alt={memory.title}
              className="w-full aspect-video object-cover rounded-t-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent rounded-t-2xl" />
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full bg-background/50 backdrop-blur-sm border border-border hover:bg-background/80 transition-colors"
            >
              <X className="w-5 h-5 text-foreground" />
            </button>
          </div>

          <div className="p-6 -mt-8 relative space-y-6">
            <div className="flex items-center gap-2">
              <Heart className="w-5 h-5 text-primary fill-primary" />
              <span className="text-sm text-muted-foreground flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" />
                {formatDate(memory.date)}
              </span>
            </div>

            <h2 className="text-3xl font-display font-bold text-foreground">
              {memory.title}
            </h2>

            <blockquote className="text-lg italic text-primary font-display border-l-2 border-primary pl-4">
              "{memory.romantic_phrase}"
            </blockquote>

            <p className="text-muted-foreground font-body leading-relaxed">
              {memory.description}
            </p>

            <div className="flex items-center gap-4 p-4 bg-secondary/50 rounded-xl border border-border">
              <div className="w-12 h-12 rounded-lg bg-gradient-romantic flex items-center justify-center">
                <Music className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1">
                <p className="font-semibold text-foreground font-body">{memory.song_name}</p>
                <p className="text-sm text-muted-foreground">{memory.artist}</p>
              </div>
              <a
                href={memory.spotify_link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
              >
                <span>▶️</span>
                Ouvir
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default MemoryDetail;
