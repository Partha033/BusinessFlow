const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Animated gradient mesh */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-primary-soft/30 to-secondary-soft/30 animate-gradient-shift" />
      
      {/* Floating orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float-slow" />
      <div className="absolute top-40 right-20 w-96 h-96 bg-secondary/15 rounded-full blur-3xl animate-float-delayed" />
      <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-accent/15 rounded-full blur-3xl animate-float-slow-reverse" />
      
      {/* Geometric shapes */}
      <div className="absolute top-1/3 right-10 w-64 h-64 border border-primary/10 rounded-full animate-spin-slow" />
      <div className="absolute bottom-1/4 left-20 w-48 h-48 border border-secondary/10 rotate-45 animate-pulse-slow" />
    </div>
  );
};

export default AnimatedBackground;
