export function Logo({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M22 10 L34 17 L34 31 L22 38 L10 31 L10 17 Z"
        stroke="currentColor"
        strokeWidth="2.4"
        opacity="0.75"
      />
      <path
        d="M30 26 L42 33 L42 47 L30 54 L18 47 L18 33 Z"
        stroke="currentColor"
        strokeWidth="2.4"
      />
    </svg>
  );
}
