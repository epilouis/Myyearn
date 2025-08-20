import { useState, useRef, useEffect } from 'react';
import { TypewriterText } from './TypewriterText';

interface LoveLetterProps {
  onClose?: () => void;
}

export const LoveLetter = ({ onClose }: LoveLetterProps) => {
  const [showLetter, setShowLetter] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const loveLetterText = `My Dearest Love,

From the moment our paths crossed, my world transformed into something magical. You are the melody that plays in my heart, the sunrise that brightens my darkest days, and the dream I never want to wake up from.

Every laugh we share, every gentle touch, every stolen glance across a crowded room – these moments have woven themselves into the very fabric of my soul. You have shown me what it means to love completely, to trust deeply, and to hope endlessly.

In your eyes, I see our future filled with adventures yet to come, quiet mornings wrapped in each other's arms, and a love that grows stronger with each passing day. You are my heart, my home, my forever.

With all my love,
Forever Yours 💜`;

  useEffect(() => {
    const timer = setTimeout(() => setShowLetter(true), 500);
    
    // Start music when component mounts
    if (audioRef.current) {
      audioRef.current.volume = 0.3;
      audioRef.current.loop = true;
      audioRef.current.play().catch(console.log);
    }
    
    // Cleanup function to stop music when component unmounts
    return () => {
      clearTimeout(timer);
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    };
  }, []);

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-40 animate-fade-in">
      <audio
        ref={audioRef}
        src="data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmIYDz2N0vLZfTIFLYPR8+mQOwkZbcPz82c4Bwsp"
      />
      <div className="love-letter max-w-2xl w-full max-h-[80vh] overflow-y-auto rounded-2xl p-8 m-4">
        <div className="text-center mb-8">
          <h2 className="font-romantic text-3xl text-accent mb-2">
            A Letter From The Heart
          </h2>
          <div className="w-24 h-0.5 bg-accent/50 mx-auto"></div>
        </div>
        
        {showLetter && (
          <div className="font-romantic text-lg leading-relaxed text-foreground/90 whitespace-pre-line">
            <TypewriterText
              text={loveLetterText}
              speed={30}
              className="block"
            />
          </div>
        )}
        
        {onClose && (
          <div className="text-center mt-8">
            <button
              onClick={onClose}
              className="text-accent hover:text-accent/80 font-elegant text-sm underline transition-colors"
            >
              Close Letter
            </button>
          </div>
        )}
      </div>
    </div>
  );
};