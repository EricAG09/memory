import { useEffect, useState } from "react";
import { coupleStartDate } from "@/data/memories";

const DaysCounter = () => {
  const [days, setDays] = useState(0);

  useEffect(() => {
    const calc = () => {
      const now = new Date();
      const diff = Math.floor(
        (now.getTime() - coupleStartDate.getTime()) / (1000 * 60 * 60 * 24)
      );
      setDays(diff);
    };
    calc();
    const interval = setInterval(calc, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center gap-3 bg-secondary/50 backdrop-blur-sm rounded-full px-6 py-3 border border-border">
      <span className="text-2xl">💕</span>
      <div className="text-center">
        <span className="text-2xl font-display font-bold text-gradient-romantic">
          {days}
        </span>
        <span className="text-sm text-muted-foreground ml-2">dias juntos</span>
      </div>
    </div>
  );
};

export default DaysCounter;
