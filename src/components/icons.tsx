import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

/* Brand mark — a scanner frame cradling a sprout (root → growth) */
export function RootMark({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden {...props}>
      <g {...base}>
        <path d="M6 11V8a2 2 0 0 1 2-2h3" />
        <path d="M26 11V8a2 2 0 0 0-2-2h-3" />
        <path d="M6 21v3a2 2 0 0 0 2 2h3" />
        <path d="M26 21v3a2 2 0 0 1-2 2h-3" />
        <path d="M16 23v-7" />
        <path d="M16 16c0-2.2-1.8-4-4-4 0 2.2 1.8 4 4 4Z" />
        <path d="M16 17c0-2.6 2.1-4.7 4.7-4.7C20.7 14.9 18.6 17 16 17Z" />
      </g>
    </svg>
  );
}

/* Scanner — viewfinder corners with a sweeping line */
export function ScanIcon({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden {...props}>
      <g {...base}>
        <path d="M10 17v-3a4 4 0 0 1 4-4h3" />
        <path d="M38 17v-3a4 4 0 0 0-4-4h-3" />
        <path d="M10 31v3a4 4 0 0 0 4 4h3" />
        <path d="M38 31v3a4 4 0 0 1-4 4h-3" />
        <path d="M14 24h20" strokeWidth={2} opacity={0.55} />
        <circle cx="24" cy="24" r="3.2" />
      </g>
    </svg>
  );
}

/* Anxiety — a worried face */
export function WorriedFace({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden {...props}>
      <g {...base}>
        <circle cx="24" cy="24" r="16" />
        <path d="M17 20.5c.7-1 1.7-1.6 2.8-1.6" />
        <path d="M28.2 18.9c1.1 0 2.1.6 2.8 1.6" />
        <path d="M18 32c1.6-2 3.7-3 6-3s4.4 1 6 3" />
        <circle cx="19.4" cy="24.2" r="0.6" fill="currentColor" stroke="none" />
        <circle cx="28.6" cy="24.2" r="0.6" fill="currentColor" stroke="none" />
      </g>
    </svg>
  );
}

/* Endless searching — magnifier crossed with a clock */
export function SearchClock({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden {...props}>
      <g {...base}>
        <circle cx="21" cy="21" r="12" />
        <path d="M30 30l8 8" />
        <path d="M21 15.5V21l3.5 2.3" />
      </g>
    </svg>
  );
}

/* Distrust — a label with a question mark */
export function LabelDoubt({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden {...props}>
      <g {...base}>
        <path d="M8 16a3 3 0 0 1 3-3h13l16 11-13 9L11 33a3 3 0 0 1-3-3Z" />
        <circle cx="14.5" cy="20.5" r="1.4" />
        <path d="M27 19.5c0-1.7 1.4-3 3.1-3 1.6 0 3 1.1 3 2.7 0 2.3-3 2.4-3 4.6" />
        <circle cx="30" cy="29" r="0.7" fill="currentColor" stroke="none" />
      </g>
    </svg>
  );
}

/* Calm trust — a serene face with a check */
export function SereneCheck({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden {...props}>
      <g {...base}>
        <circle cx="22" cy="22" r="15" />
        <path d="M16 20.5h3.5" />
        <path d="M24.5 20.5H28" />
        <path d="M17.5 27c1.3 1.6 3 2.5 4.5 2.5s3.2-.9 4.5-2.5" />
        <path d="M33 33.5l3 3 5.5-6" />
      </g>
    </svg>
  );
}

/* Verified recipes — a bowl with a check */
export function BowlCheck({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden {...props}>
      <g {...base}>
        <path d="M9 22h26a13 13 0 0 1-13 13h0A13 13 0 0 1 9 22Z" />
        <path d="M22 22V12" />
        <path d="M22 12c0-2 1.5-3.5 3.5-3.5" />
        <path d="M28 35.5l3 3 5.5-6.5" />
      </g>
    </svg>
  );
}

/* Insights — a simple trend chart */
export function TrendIcon({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden {...props}>
      <g {...base}>
        <path d="M10 10v26a2 2 0 0 0 2 2h26" />
        <path d="M15 31l7-8 5 4 9-12" />
        <path d="M36 15h-4.5M36 15v4.5" />
      </g>
    </svg>
  );
}

export function Check({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden {...props}>
      <path
        {...base}
        strokeWidth={2.25}
        d="M5 12.5l4.5 4.5L19 7"
      />
    </svg>
  );
}

export function ArrowDown({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden {...props}>
      <path {...base} d="M12 5v14M6 13l6 6 6-6" />
    </svg>
  );
}

export function ArrowRight({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden {...props}>
      <path {...base} d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function MailIcon({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden {...props}>
      <g {...base}>
        <rect x="3" y="5" width="18" height="14" rx="2.5" />
        <path d="M4 7l8 6 8-6" />
      </g>
    </svg>
  );
}

export function PhoneIcon({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden {...props}>
      <path
        {...base}
        d="M6 3h3l2 5-2.5 1.5a12 12 0 0 0 5 5L21 15v3a2 2 0 0 1-2 2A16 16 0 0 1 4 5a2 2 0 0 1 2-2Z"
      />
    </svg>
  );
}

export function WhatsAppIcon({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden {...props}>
      <g {...base}>
        <path d="M4 20l1.4-4A8 8 0 1 1 9 18.6L4 20Z" />
        <path d="M9 9.5c0 3 2.5 5.5 5.5 5.5.6 0 1.2-.6 1.2-1.2l-2-1-1 1c-1.2-.5-2-1.3-2.5-2.5l1-1-1-2c-.6 0-1.2.6-1.2 1.2Z" />
      </g>
    </svg>
  );
}

export function PinIcon({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden {...props}>
      <g {...base}>
        <path d="M12 21s7-6.3 7-11a7 7 0 0 0-14 0c0 4.7 7 11 7 11Z" />
        <circle cx="12" cy="10" r="2.5" />
      </g>
    </svg>
  );
}
