/**
 * RohapediaLogo — SVG recreation of the ROHAPEDIA brand mark.
 *
 * Composition:
 *   • Outer circle with pale-sky gradient background + subtle radial lines
 *   • Ethiopian highland mountains (terracotta/burgundy) filling the lower half
 *   • Bold white "R" lettermark centered
 *   • Gold crown sitting on top of the circle
 *
 * Props:
 *   size      — controls both width and height (default 120)
 *   showText  — whether to render "ROHAPEDIA" wordmark below (default true)
 *   textColor — color of the wordmark text (default #ffffff)
 */

interface RohapediaLogoProps {
  size?: number
  showText?: boolean
  textColor?: string
  className?: string
}

export default function RohapediaLogo({
  size = 120,
  showText = true,
  textColor = '#ffffff',
  className,
}: RohapediaLogoProps) {
  const totalHeight = showText ? size * 1.42 : size
  // All coordinates are drawn on a 100×100 viewBox for the emblem
  // The wordmark sits below in its own group

  return (
    <svg
      width={size}
      height={totalHeight}
      viewBox={`0 0 100 ${showText ? 142 : 100}`}
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="ROHAPEDIA logo"
      className={className}
    >
      <defs>
        {/* Sky gradient — pale blue to warm blush */}
        <radialGradient id="rp-sky" cx="50%" cy="35%" r="65%">
          <stop offset="0%"   stopColor="#d6e8f0" />
          <stop offset="60%"  stopColor="#c4d8e8" />
          <stop offset="100%" stopColor="#b8c8d8" />
        </radialGradient>

        {/* Crown base gold gradient */}
        <linearGradient id="rp-crown-body" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%"   stopColor="#f0d060" />
          <stop offset="45%"  stopColor="#c9a030" />
          <stop offset="100%" stopColor="#a07820" />
        </linearGradient>

        {/* Crown highlight */}
        <linearGradient id="rp-crown-hi" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%"   stopColor="#fae88a" />
          <stop offset="100%" stopColor="#d4a030" />
        </linearGradient>

        {/* Mountain dark fill */}
        <linearGradient id="rp-mtn" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%"   stopColor="#7a2a22" />
          <stop offset="100%" stopColor="#4a1810" />
        </linearGradient>

        {/* Mountain mid tone */}
        <linearGradient id="rp-mtn2" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%"   stopColor="#8c3428" />
          <stop offset="100%" stopColor="#5a2016" />
        </linearGradient>

        {/* Clip to circle */}
        <clipPath id="rp-circle-clip">
          <circle cx="50" cy="54" r="38" />
        </clipPath>
      </defs>

      {/* ── CIRCLE BACKGROUND ── */}
      <circle cx="50" cy="54" r="38" fill="url(#rp-sky)" />

      {/* Subtle radial engraving lines (thin arcs) */}
      {[...Array(10)].map((_, i) => (
        <circle
          key={i}
          cx="50" cy="54"
          r={8 + i * 3.2}
          fill="none"
          stroke="rgba(100,140,170,0.15)"
          strokeWidth="0.4"
          clipPath="url(#rp-circle-clip)"
        />
      ))}

      {/* ── MOUNTAINS (clipped inside circle) ── */}
      <g clipPath="url(#rp-circle-clip)">
        {/* Far background peaks — lighter */}
        <path
          d="M12 76 L28 52 L38 62 L50 46 L62 60 L72 50 L88 72 L88 92 L12 92 Z"
          fill="#9a4030"
          opacity="0.5"
        />
        {/* Mid mountains — main range */}
        <path
          d="M8 80 L22 58 L32 68 L44 50 L56 64 L66 54 L78 66 L88 56 L92 80 L92 96 L8 96 Z"
          fill="url(#rp-mtn2)"
        />
        {/* Foreground mountains — darkest */}
        <path
          d="M4 92 L18 68 L28 76 L40 60 L50 72 L60 60 L72 74 L84 64 L96 86 L96 100 L4 100 Z"
          fill="url(#rp-mtn)"
        />
        {/* Snow/highlight on peaks */}
        <path
          d="M40 60 L44 66 L50 60 L56 66 L60 60 L57 58 L53 63 L50 57 L47 63 L43 58 Z"
          fill="rgba(220,210,200,0.45)"
        />
        <path
          d="M18 68 L21 72 L25 67 L22 65 Z"
          fill="rgba(220,210,200,0.35)"
        />
        <path
          d="M72 74 L75 78 L79 72 L76 70 Z"
          fill="rgba(220,210,200,0.35)"
        />
      </g>

      {/* ── CIRCLE BORDER ── */}
      <circle cx="50" cy="54" r="38" fill="none" stroke="#d0d8e0" strokeWidth="1.5" />
      {/* Inner thin border ring */}
      <circle cx="50" cy="54" r="36.5" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="0.5" />

      {/* ── "R" LETTERMARK ── */}
      {/* Drop shadow effect — dark offset copy */}
      <text
        x="50.8"
        y="73.8"
        textAnchor="middle"
        fontFamily="'Playfair Display', Georgia, serif"
        fontSize="42"
        fontWeight="700"
        fill="rgba(0,0,0,0.25)"
        clipPath="url(#rp-circle-clip)"
      >
        R
      </text>
      {/* White lettermark */}
      <text
        x="50"
        y="73"
        textAnchor="middle"
        fontFamily="'Playfair Display', Georgia, serif"
        fontSize="42"
        fontWeight="700"
        fill="#ffffff"
        clipPath="url(#rp-circle-clip)"
      >
        R
      </text>

      {/* ── CROWN ── */}
      {/*
        Crown sits on top of the circle, partially overlapping the edge.
        Drawn in a ~40×26 unit region centered at x=50, top ~y=16 to y=38
      */}

      {/* Crown base band */}
      <path
        d="M31 36 Q50 33 69 36 L67 42 Q50 39.5 33 42 Z"
        fill="url(#rp-crown-body)"
        stroke="#a07020"
        strokeWidth="0.4"
      />
      {/* Red band accent on base */}
      <path
        d="M33 38.5 Q50 36.5 67 38.5 L67 40 Q50 38 33 40 Z"
        fill="#cc2020"
        opacity="0.85"
      />

      {/* Crown body — main shape with 5 points */}
      {/*
        Points: left outer, left inner, center, right inner, right outer
        Base connects to the band.
      */}
      <path
        d="
          M31 37
          L33 26
          L38 33
          L44 18
          L50 28
          L56 18
          L62 33
          L67 26
          L69 37
          Q50 34 31 37 Z
        "
        fill="url(#rp-crown-body)"
        stroke="#a07020"
        strokeWidth="0.5"
        strokeLinejoin="round"
      />

      {/* Crown highlight sheen */}
      <path
        d="
          M33 36
          L34.5 27
          L39 34
          L45 20
          L50 29
          L55 20
          L61 34
          L65.5 27
          L67 36
          Q50 33.5 33 36 Z
        "
        fill="url(#rp-crown-hi)"
        opacity="0.35"
      />

      {/* Crown orbs — 5 spheres at each point tip */}
      {/* Left outer */}
      <circle cx="33" cy="25.5" r="2.2" fill="#f0d060" stroke="#b08020" strokeWidth="0.4" />
      <circle cx="32.4" cy="24.8" r="0.8" fill="#fef0a0" opacity="0.8" />

      {/* Left inner */}
      <circle cx="38.2" cy="32.5" r="2.0" fill="#e8c840" stroke="#a07020" strokeWidth="0.4" />
      <circle cx="37.6" cy="31.8" r="0.7" fill="#fef0a0" opacity="0.8" />

      {/* Center (tallest) */}
      <circle cx="50" cy="17.5" r="2.4" fill="#f4d858" stroke="#b08020" strokeWidth="0.4" />
      <circle cx="49.2" cy="16.7" r="0.9" fill="#fef8c0" opacity="0.85" />

      {/* Right inner */}
      <circle cx="61.8" cy="32.5" r="2.0" fill="#e8c840" stroke="#a07020" strokeWidth="0.4" />
      <circle cx="61.2" cy="31.8" r="0.7" fill="#fef0a0" opacity="0.8" />

      {/* Right outer */}
      <circle cx="67" cy="25.5" r="2.2" fill="#f0d060" stroke="#b08020" strokeWidth="0.4" />
      <circle cx="66.4" cy="24.8" r="0.8" fill="#fef0a0" opacity="0.8" />

      {/* ── WORDMARK (optional) ── */}
      {showText && (
        <text
          x="50"
          y="130"
          textAnchor="middle"
          fontFamily="'Playfair Display', Georgia, serif"
          fontSize="13.5"
          fontWeight="700"
          letterSpacing="2.5"
          fill={textColor}
        >
          ROHAPEDIA
        </text>
      )}
    </svg>
  )
}
