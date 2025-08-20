import { useState } from 'react';
import { FloatingHearts } from '@/components/FloatingHearts';
import { RomanticButton } from '@/components/RomanticButton';
import { LoveLetter } from '@/components/LoveLetter';
import romanticBg from '@/assets/romantic-background.jpg';

const Index = () => {
  const [showLetter, setShowLetter] = useState(false);

  const handleRevealLetter = () => {
    setShowLetter(true);
  };

  const handleCloseLetter = () => {
    setShowLetter(false);
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${romanticBg})` }}
      />
      <div className="absolute inset-0 bg-romantic-gradient opacity-80" />
      
      {/* Floating Hearts */}
      <FloatingHearts />
      
      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center text-center px-4">
        <div className="max-w-4xl mx-auto">
          {!showLetter ? (
            <div className="animate-fade-in">
              <h1 className="font-romantic text-6xl md:text-8xl text-foreground mb-6 drop-shadow-lg">
                For Someone Special
              </h1>
              <p className="font-elegant text-xl md:text-2xl text-foreground/80 mb-12 max-w-2xl mx-auto leading-relaxed">
                Sometimes the heart speaks in ways that words alone cannot express. 
                Click below to reveal a message written just for you.
              </p>
              
              <RomanticButton 
                onClick={handleRevealLetter}
                className="transform hover:scale-105 transition-all duration-romantic"
              >
                💜 Reveal My Heart 💜
              </RomanticButton>
              
              <div className="mt-8 flex flex-col items-center gap-4">
                <div className="flex items-center gap-2 text-foreground/60 font-elegant text-sm">
                  <span>✨</span>
                  <span>Made with love and care</span>
                  <span>✨</span>
                </div>
              </div>
            </div>
          ) : (
            <div className="animate-fade-in">
              <div className="romantic-glow bg-card/10 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-border/20">
                <h2 className="font-romantic text-4xl md:text-6xl text-accent mb-8">
                  The Letter Has Been Revealed
                </h2>
                <p className="font-elegant text-lg text-foreground/80 mb-8">
                  Your heartfelt message is now being written with love...
                </p>
                <RomanticButton 
                  variant="secondary"
                  onClick={handleCloseLetter}
                  className="mx-auto"
                >
                  Return to Beginning
                </RomanticButton>
              </div>
            </div>
          )}
        </div>
      </div>
      
      {/* Love Letter Modal */}
      {showLetter && <LoveLetter onClose={handleCloseLetter} />}
    </div>
  );
};

export default Index;