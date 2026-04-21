export default function Grain() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-[200]"
      style={{ opacity: 0.035, mixBlendMode: 'overlay' as const }}
    >
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <filter id="grain-filter">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.80"
            numOctaves="4"
            stitchTiles="stitch"
          />
        </filter>
        <rect width="100%" height="100%" filter="url(#grain-filter)" />
      </svg>
    </div>
  )
}
