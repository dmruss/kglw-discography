import { useEffect, useState } from 'react';
import { Timer as TimerIcon } from 'lucide-react';

interface TimerProps {
  lastReleaseDate: string;
}

export function Timer({ lastReleaseDate }: TimerProps) {
  const [timeAgo, setTimeAgo] = useState<string>('');

  useEffect(() => {
    const calculateTimeAgo = () => {
      const now = new Date();
      const release = new Date(lastReleaseDate);
      const diff = now.getTime() - release.getTime();

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeAgo(`${days}d ${hours}h ${minutes}m ${seconds}s`);
    };

    calculateTimeAgo();
    const interval = setInterval(calculateTimeAgo, 1000);
    return () => clearInterval(interval);
  }, [lastReleaseDate]);

  return (
    <div className="inline-flex flex-col items-center space-border bg-black/50 p-6">
      <TimerIcon className="text-[#00ff00] mb-2" />
      <div className="text-center">
        <p className="text-xs text-[#00ff00] mb-2">TIME SINCE LAST RELEASE:</p>
        <p className="text-xl text-[#00ff00] space-text">{timeAgo}</p>
      </div>
    </div>
  );
}