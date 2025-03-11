import { cn } from '@/utils/css-utils';

interface BackgroundPatternProps {
  className?: string;
  color?: string;
}

const BackgroundPattern = ({ className, color = 'text-black' }: BackgroundPatternProps) => {
  return (
    <div 
      className={cn(
        "fixed inset-0 -z-999 w-full h-full", 
        color,
        className
      )}
      style={{
        backgroundImage: 'url("/images/background-pattern.svg")',
        backgroundRepeat: 'repeat',
        backgroundSize: '48px 48px',
      }}
    />
  );
};

export default BackgroundPattern;
