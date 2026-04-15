import { useEffect, useState } from 'react';
import gsap from 'gsap';

const ScrollProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPosition = window.scrollY;
      const newProgress = (scrollPosition / totalHeight) * 100;
      setProgress(newProgress);

      // Animate the progress bar width
      gsap.to('.progress-fill', {
        width: `${newProgress}%`,
        duration: 0.3,
        ease: 'power2.out',
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 z-[9999] bg-transparent">
      {/* Track */}
      <div className="absolute inset-0 bg-white/5" />

      {/* Animated progress fill */}
      <div
        className="progress-fill h-full bg-gradient-to-r from-primary via-amber-400 to-accent relative"
        style={{ width: `${progress}%` }}
      >
        {/* Glow effect */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-8 h-full bg-gradient-to-l from-white/30 to-transparent" />

        {/* Leading glow dot */}
        <div
          className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-elevation"
          style={{ transform: 'translateX(50%) translateY(-50%)' }}
        />
      </div>

      {/* Percentage indicator (shows on hover) */}
      <div className="absolute top-2 right-4 opacity-0 hover:opacity-100 transition-opacity duration-300 group cursor-default">
        <div className="bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
          <span className="text-xs text-white-50 font-mono">{Math.round(progress)}%</span>
        </div>
      </div>
    </div>
  );
};

export default ScrollProgress;
