export default function Background() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* Base */}
      <div className="absolute inset-0 bg-[#050505]" />

      {/* Cyan glow - top left */}
      <div
        className="
          absolute
          left-[-100px]
          top-[-100px]
          h-[500px]
          w-[500px]
          rounded-full
          bg-cyan-500/20
          blur-[140px]
        "
      />

      {/* Purple glow - bottom right */}
      <div
        className="
          absolute
          bottom-[-150px]
          right-[-100px]
          h-[600px]
          w-[600px]
          rounded-full
          bg-purple-500/25
          blur-[150px]
        "
      />

      {/* Blue glow - center */}
      <div
        className="
          absolute
          left-1/2
          top-1/2
          h-[500px]
          w-[500px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-blue-500/10
          blur-[160px]
        "
      />

      {/* Grid */}
      <div
        className="
          absolute
          inset-0
          opacity-100
          bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)]
          bg-[size:50px_50px]
        "
      />
    </div>
  );
}