import { useEffect, useState } from 'react';

interface Heart {
  id: number;
  left: number;
  delay: number;
  size: number;
}

export const FloatingHearts = () => {
  const [hearts, setHearts] = useState<Heart[]>([]);

  useEffect(() => {
    const createHearts = () => {
      const newHearts: Heart[] = [];
      for (let i = 0; i < 15; i++) {
        newHearts.push({
          id: i,
          left: Math.random() * 100,
          delay: Math.random() * 6,
          size: 0.8 + Math.random() * 0.4,
        });
      }
      setHearts(newHearts);
    };

    createHearts();
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="heart absolute animate-pulse"
          style={{
            left: `${heart.left}%`,
            bottom: '-20px',
            animationDelay: `${heart.delay}s`,
            fontSize: `${heart.size}rem`,
          }}
        >
          💜
        </div>
      ))}
    </div>
  );
};