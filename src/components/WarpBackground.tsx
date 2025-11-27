import React, { useEffect, useRef } from "react";

interface WarpProps {
  speed: number; // 0 = stopped, 50 = fast
  active: boolean;
  starColor?: string; // Added optional color prop
}

const WarpBackground: React.FC<WarpProps> = ({ 
  speed, 
  active, 
  starColor = "#007b78" // Default to your Teal Theme Color
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Function to handle resizing
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    // Initial sizing
    handleResize();
    window.addEventListener("resize", handleResize);

    // Star properties
    const stars: { x: number; y: number; z: number }[] = [];
    const numStars = 500;
    
    // Initialize stars
    const initStars = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const centerX = width / 2;
      const centerY = height / 2;
      
      stars.length = 0; // Clear array
      for (let i = 0; i < numStars; i++) {
        stars.push({
          x: Math.random() * width - centerX,
          y: Math.random() * height - centerY,
          z: Math.random() * width,
        });
      }
    };
    
    initStars();

    let animationFrameId: number;

    const render = () => {
      const width = canvas.width;
      const height = canvas.height;
      const centerX = width / 2;
      const centerY = height / 2;

      // 1. Clear the canvas
      ctx.clearRect(0, 0, width, height);

      // 2. Set the Color (Uses the prop or the default Teal)
      ctx.fillStyle = starColor;
      ctx.strokeStyle = starColor;

      stars.forEach((star) => {
        // Move star closer (decrease Z)
        star.z -= speed;

        // Reset star if it passes the camera or goes off screen
        if (star.z <= 0) {
          star.x = Math.random() * width - centerX;
          star.y = Math.random() * height - centerY;
          star.z = width;
        }

        // Project 3D coordinates to 2D screen
        const scale = 200 / star.z; // Perspective projection
        const x2d = centerX + star.x * scale;
        const y2d = centerY + star.y * scale;

        // Draw the star (larger as it gets closer)
        const size = Math.max(0.5, (1 - star.z / width) * 3);
        
        // Draw linear streaks if speed is high (Warp effect)
        if (speed > 10) {
           ctx.beginPath();
           ctx.lineWidth = size;
           ctx.moveTo(x2d, y2d);
           // Create a tail extending towards center
           ctx.lineTo(
             centerX + star.x * (200 / (star.z + speed * 2)), 
             centerY + star.y * (200 / (star.z + speed * 2))
           );
           ctx.stroke();
        } else {
           ctx.beginPath();
           // Reduced opacity for stars further away to blend nicely
           ctx.globalAlpha = Math.min(1, (1 - star.z / width)); 
           ctx.arc(x2d, y2d, size, 0, Math.PI * 2);
           ctx.fill();
           ctx.globalAlpha = 1.0; // Reset
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [speed, active, starColor]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 z-0 pointer-events-none transition-opacity duration-1000 ${
        active ? "opacity-100" : "opacity-0"
      }`}
    />
  );
};

export default WarpBackground;