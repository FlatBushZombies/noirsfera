"use client"; // Required for Next.js App Router
import { useEffect, useRef } from 'react';
import anime from 'animejs';

export default function DrawableText() {
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    if (!pathRef.current) return;

    // Get the total length of the path for animation
    const length = pathRef.current.getTotalLength();

    // Set initial styles (invisible stroke)
    pathRef.current.style.strokeDasharray = `${length} ${length}`;
    pathRef.current.style.strokeDashoffset = `${length}`;

    // Anime.js animation
    anime({
      targets: pathRef.current,
      strokeDashoffset: [length, 0],
      duration: 2000,
      easing: 'easeInOutSine',
      delay: 500,
    });
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <svg
        width="600"
        height="200"
        viewBox="0 0 600 200"
        className="w-full max-w-2xl"
      >
        <path
          ref={pathRef}
          d="M50 120 Q100 80 150 120 T250 120 T350 120 T450 120" 
          // Replace with your actual SVG path for "Noir Sfera"
          // (Use a tool like https://yqnn.github.io/svg-path-editor/)
          fill="none"
          stroke="#ffffff"
          strokeWidth="2"
        />
      </svg>
    </div>
  );
}