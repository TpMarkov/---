import React from "react";

interface LiloviLogoProps {
  className?: string;
  color?: string;
  iconOnly?: boolean;
}

export default function LiloviLogo({ className = "h-11 w-auto", color = "#E85B5B", iconOnly = false }: LiloviLogoProps) {
  if (iconOnly) {
    return (
      <svg
        viewBox="0 0 100 105"
        className={className}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g fill={color}>
          <path d="M 12.8,12 C 10,12.5 7,16 6.5,21 C 5.5,30 11,46 11,54 C 11,58.5 7,61 5.5,64 L 3,68 C 2.5,69 3,70 4.5,70 L 22.5,70 L 19,92 C 18.5,94.5 19,95 20.5,95 L 24.5,95 C 25.8,95 26.5,94 26.8,92 L 29.5,70 L 76,70 C 77.2,70 78,71 78.5,72.5 L 83,92 C 83.5,94 84,95 85.5,95 L 89.5,95 C 91,95 91.5,94 91.2,92 L 85.5,67 C 84,61 81,55 78.5,52.5 C 76.5,50.5 67,50.5 60,50.5 L 34,50.5 L 37.5,39 C 38.5,36 40.5,26.5 41.5,23.5 C 42.5,20.5 38.5,11.5 22.5,11.5 C 18.5,11.5 14.5,11.7 12.8,12 Z" />
          <path d="M 24.5,85 L 81,85 C 81.5,85 82,84.5 81.5,84 L 81,83 C 80.8,82.5 80.2,82 79.2,82 L 25,82 C 24,82 23.5,82.5 23.5,83.5 L 23.5,84.5 C 23.5,85 24,85 24.5,85 Z" />
        </g>
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 320 90"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Lilovi Chair Icon */}
      <g fill={color}>
        <path d="M 12.8,12 C 10,12.5 7,16 6.5,21 C 5.5,30 11,46 11,54 C 11,58.5 7,61 5.5,64 L 3,68 C 2.5,69 3,70 4.5,70 L 22.5,70 L 19,92 C 18.5,94.5 19,95 20.5,95 L 24.5,95 C 25.8,95 26.5,94 26.8,92 L 29.5,70 L 76,70 C 77.2,70 78,71 78.5,72.5 L 83,92 C 83.5,94 84,95 85.5,95 L 89.5,95 C 91,95 91.5,94 91.2,92 L 85.5,67 C 84,61 81,55 78.5,52.5 C 76.5,50.5 67,50.5 60,50.5 L 34,50.5 L 37.5,39 C 38.5,36 40.5,26.5 41.5,23.5 C 42.5,20.5 38.5,11.5 22.5,11.5 C 18.5,11.5 14.5,11.7 12.8,12 Z" />
        {/* Horizontal bar connecting legs */}
        <path d="M 24.5,85 L 81,85 C 81.5,85 82,84.5 81.5,84 L 81,83 C 80.8,82.5 80.2,82 79.2,82 L 25,82 C 24,82 23.5,82.5 23.5,83.5 L 23.5,84.5 C 23.5,85 24,85 24.5,85 Z" />
      </g>

      {/* "Lilovi" Brand Name */}
      <text
        x="105"
        y="53"
        fill={color}
        fontFamily="'Poppins', 'Jura', sans-serif"
        fontSize="46"
        fontWeight="800"
        letterSpacing="-1.5px"
      >
        Lilovi
      </text>

      {/* "WOODEN ELEGANCE" Tagline */}
      <text
        x="107"
        y="72"
        fill={color}
        fontFamily="'Jura', 'Poppins', sans-serif"
        fontSize="11.5"
        fontWeight="700"
        letterSpacing="4px"
      >
        WOODEN ELEGANCE
      </text>
    </svg>
  );
}
