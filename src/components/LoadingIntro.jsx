import { useEffect, useState } from 'react';
import gsap from 'gsap';

const LoadingIntro = ({ onComplete }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        setTimeout(() => {
          setVisible(false);
          onComplete?.();
        }, 500);
      },
    });

    // Logo scale and glow animation
    tl.fromTo(
      '.intro-logo',
      { scale: 0.5, opacity: 0, rotation: -10 },
      { scale: 1, opacity: 1, rotation: 0, duration: 1.2, ease: 'elastic.out(1, 0.6)' },
      0
    )
    // Logo glow pulse
    .to('.intro-logo', {
      filter: 'brightness(1.08)',
      duration: 0.8,
      yoyo: true,
      repeat: 1,
    }, 0.5)
    // Name slide in
    .fromTo(
      '.intro-name',
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
      0.8
    )
    // Tagline fade in
    .fromTo(
      '.intro-tagline',
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: 'power2.out' },
      1.2
    )
    // Loading bar fill
    .fromTo(
      '.intro-progress',
      { width: '0%' },
      { width: '100%', duration: 1.5, ease: 'power2.inOut' },
      1
    )
    // Fade out entire intro
    .to('.intro-container', {
      opacity: 0,
      duration: 0.8,
      ease: 'power2.in',
    }, 2.2);

    return () => tl.kill();
  }, [onComplete]);

  if (!visible) return null;

  return (
    <div className="intro-container fixed inset-0 z-[10000] bg-[#050507] flex flex-col items-center justify-center">
      {/* Animated background mesh */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '0.5s' }} />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.3'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Logo */}
        <div className="intro-logo relative mb-8">
          <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-primary via-primary-hover to-amber-400 flex items-center justify-center shadow-elevation">
            <span className="text-4xl md:text-5xl font-bold text-black">B</span>
          </div>
          {/* Rotating ring */}
          <div className="absolute inset-0 rounded-full border-2 border-primary/30 animate-spin" style={{ animationDuration: '3s' }} />
          <div className="absolute -inset-4 rounded-full border border-primary/20 animate-spin" style={{ animationDuration: '5s', animationDirection: 'reverse' }} />
        </div>

        {/* Name */}
        <h1 className="intro-name text-3xl md:text-5xl font-bold text-white mb-2 tracking-tight">
          Bedru <span className="text-primary">Mekiyu</span>
        </h1>

        {/* Tagline */}
        <p className="intro-tagline text-white-50 text-sm md:text-base mb-8">
          Software Engineer • Building Digital Excellence
        </p>

        {/* Progress bar */}
        <div className="w-48 md:w-64 h-1 bg-white/10 rounded-full overflow-hidden">
          <div className="intro-progress h-full bg-gradient-to-r from-primary via-amber-400 to-primary rounded-full shadow-elevation" />
        </div>

        {/* Loading text */}
        <p className="intro-tagline text-white-50/60 text-xs mt-4 animate-pulse">
          Loading experience...
        </p>
      </div>

      {/* Skip button */}
      <button
        onClick={() => {
          gsap.to('.intro-container', {
            opacity: 0,
            duration: 0.5,
            ease: 'power2.in',
            onComplete: () => {
              setVisible(false);
              onComplete?.();
            },
          });
        }}
        className="absolute bottom-12 text-white-50/60 hover:text-white text-sm transition-colors duration-300 flex items-center gap-2 group"
      >
        Skip Intro
        <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </button>
    </div>
  );
};

export default LoadingIntro;
