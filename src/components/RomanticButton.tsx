import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface RomanticButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: 'reveal' | 'secondary';
}

export const RomanticButton = ({ 
  children, 
  onClick, 
  className,
  variant = 'reveal'
}: RomanticButtonProps) => {
  const variants = {
    reveal: "bg-primary hover:bg-primary/90 text-primary-foreground romantic-glow animate-pulse-romantic font-romantic text-lg px-8 py-4 rounded-full transition-romantic",
    secondary: "bg-secondary/20 hover:bg-secondary/30 text-secondary-foreground border border-secondary/30 backdrop-blur-sm"
  };

  return (
    <Button
      onClick={onClick}
      className={cn(variants[variant], className)}
    >
      {children}
    </Button>
  );
};