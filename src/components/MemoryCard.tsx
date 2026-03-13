import { motion } from "framer-motion";
import { Music, Calendar } from "lucide-react";
import { Memory } from "@/data/memories";

interface MemoryCardProps {
  memory: Memory;
  index: number;
  onClick: () => void;
}

const MemoryCard = ({ memory, index, onClick }: MemoryCardProps) => {
  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString("pt-BR", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ scale: 1.03, y: -5 }}
      className="cursor-pointer group"
      onClick={onClick}
    >
      <div className="bg-card rounded-lg overflow-hidden border border-border hover:border-primary/40 transition-all duration-300 hover:glow-primary">
        <div className="aspect-square relative overflow-hidden">
          <img
            src={memory.photo}
            alt={memory.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <div className="flex items-center gap-2 text-primary mb-1">
              <Music className="w-3 h-3" />
              <span className="text-xs font-body font-medium truncate">
                {memory.song_name} • {memory.artist}
              </span>
            </div>
          </div>
        </div>
        <div className="p-4 space-y-2">
          <h3 className="font-display font-semibold text-foreground truncate">
            {memory.title}
          </h3>
          <p className="text-sm text-muted-foreground italic font-body line-clamp-2">
            "{memory.romantic_phrase}"
          </p>
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <Calendar className="w-3 h-3" />
            <span>{formatDate(memory.date)}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default MemoryCard;
