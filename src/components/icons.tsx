import { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = "h-5 w-5";

export function CodeIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className={base} {...props}>
      <path d="M8 6 2 12l6 6M16 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function FrontendIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className={base} {...props}>
      <rect x="3" y="4" width="18" height="14" rx="2" />
      <path d="M8 21h8M12 18v3" strokeLinecap="round" />
    </svg>
  );
}

export function BackendIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className={base} {...props}>
      <rect x="3" y="4" width="18" height="6" rx="1.5" />
      <rect x="3" y="14" width="18" height="6" rx="1.5" />
      <path d="M7 7h.01M7 17h.01" strokeLinecap="round" />
    </svg>
  );
}

export function DatabaseIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className={base} {...props}>
      <ellipse cx="12" cy="5" rx="8" ry="3" />
      <path d="M4 5v14c0 1.66 3.58 3 8 3s8-1.34 8-3V5M4 12c0 1.66 3.58 3 8 3s8-1.34 8-3" strokeLinecap="round" />
    </svg>
  );
}

export function ToolsIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className={base} {...props}>
      <path
        d="M14.7 6.3a4 4 0 0 1-5.66 5.66L4 17l3 3 5.04-5.04a4 4 0 0 1 5.66-5.66L21 6l-3-3-3.3 3.3Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function TrophyIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className={base} {...props}>
      <path d="M8 4h8v4a4 4 0 0 1-8 0V4Z" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8 4H4v2a4 4 0 0 0 4 3.46M16 4h4v2a4 4 0 0 1-4 3.46M9 20h6M12 15v5" strokeLinecap="round" />
    </svg>
  );
}

export function SchoolIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className={base} {...props}>
      <path d="M12 4 2 9l10 5 10-5-10-5ZM6 11v5c0 1.1 2.7 2 6 2s6-.9 6-2v-5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function DropletIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className={base} {...props}>
      <path d="M12 3s7 7.58 7 12a7 7 0 1 1-14 0c0-4.42 7-12 7-12Z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ScaleIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className={base} {...props}>
      <path d="M12 3v18M5 7l-3 6a3 3 0 0 0 6 0l-3-6ZM19 7l-3 6a3 3 0 0 0 6 0l-3-6ZM5 7h14M8 21h8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ToothIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className={base} {...props}>
      <path
        d="M12 3c-3 0-5 2-5 5 0 3 1 4 1.5 7.5.2 1.5 1 3.5 2.2 3.5S12 17 12 15c0 2 1.1 4 2.3 4s2-2 2.2-3.5C17 12 18 11 18 8c0-3-2-5-6-5Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
