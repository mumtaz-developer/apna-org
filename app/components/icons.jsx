// ./app/components/icons.jsx
import React from "react";

// 1. The Arrow Icon (Handles the 'diagonal' prop for "Join APNA ->")
export function Arrow({ diagonal }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      style={{
        width: "1em",
        height: "1em",
        display: "inline-block",
        verticalAlign: "middle",
        marginLeft: "4px",
        // If diagonal is true, it rotates 45 degrees pointing top-right
        transform: diagonal ? "rotate(-45deg)" : "none",
        transition: "transform 0.2s ease",
      }}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
      />
    </svg>
  );
}

// 2. The Mark Icon (Your APNA Logo Brand)
export function Mark() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      style={{
        width: "32px",
        height: "32px",
        display: "inline-block",
      }}
    >
      {/* Universal Community/Network Icon Path */}
      <path d="M12 2a5 5 0 1 0 0 10 5 5 0 0 0 0-10ZM2 21a10 10 0 0 1 20 0H2Z" />
    </svg>
  );
}