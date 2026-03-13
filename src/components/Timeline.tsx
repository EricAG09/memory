import { motion } from "framer-motion";
import { timelineEvents } from "@/data/memories";

const Timeline = () => {
  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString("pt-BR", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  return (
    <section className="py-20 px-4">
      <div className="max-w-2xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-display font-bold text-center text-gradient-romantic mb-16"
        >
          Nossa História
        </motion.h2>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary/20" />

          <div className="space-y-12">
            {timelineEvents.map((event, i) => (
              <motion.div
                key={event.date}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="flex gap-6 items-start"
              >
                <div className="relative z-10 w-12 h-12 rounded-full bg-card border-2 border-primary flex items-center justify-center text-xl shrink-0 glow-primary">
                  {event.icon}
                </div>
                <div className="pt-2">
                  <h3 className="font-display font-semibold text-lg text-foreground">
                    {event.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    {formatDate(event.date)}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
