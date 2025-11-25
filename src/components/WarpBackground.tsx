// WarpBackground.tsx
import React, { useEffect, useRef } from "react";

interface WarpProps {
  speed: number; // 0 = stopped, 50 = fast
  active: boolean;
}

const WarpBackground: React.FC<WarpProps> = ({ speed, active }) => {
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

      // 1. Clear the canvas so the CSS Background shows through
      ctx.clearRect(0, 0, width, height);

      // 2. Set the "Green" Primary Color for stars/lines
      // Using a teal/green shade (#0d9488) to contrast against the light background
      const starColor = "#00e4dd"; 
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
        const size = Math.max(0.5, (1 - star.z / width) * 4);
        
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
           ctx.arc(x2d, y2d, size, 0, Math.PI * 2);
           ctx.fill();
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [speed, active]);

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