// ── Reusable UI primitives for Bogo Buddy ──────────────────────────────────

export function BackHeader({ title, onBack, subtitle }) {
  return (
    <div className="mb-4">
      <div className="flex items-center gap-3 mb-1">
        <button
          onClick={onBack}
          className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-base border-none cursor-pointer flex-shrink-0 active:bg-gray-200"
        >
          ←
        </button>
        <h2 className="text-xl font-black text-forest-800 m-0">{title}</h2>
      </div>
      {subtitle && <p className="text-xs text-gray-400 ml-12">{subtitle}</p>}
    </div>
  )
}

export function Label({ children }) {
  return (
    <label className="block font-mono text-xs tracking-widest text-gray-400 uppercase mb-1.5 mt-3">
      {children}
    </label>
  )
}

export function Input({ ...props }) {
  return (
    <input
      className="w-full px-3.5 py-3 rounded-xl border border-gray-200 bg-white text-gray-800 text-base outline-none focus:border-forest-800 transition-colors"
      {...props}
    />
  )
}

export function Select({ children, ...props }) {
  return (
    <select
      className="w-full px-3.5 py-3 rounded-xl border border-gray-200 bg-white text-gray-800 text-base outline-none focus:border-forest-800 appearance-none"
      {...props}
    >
      {children}
    </select>
  )
}

export function Button({ children, variant = 'green', className = '', disabled, ...props }) {
  const variants = {
    green: 'bg-forest-800 text-white active:bg-forest-900',
    lime:  'bg-lime text-black active:opacity-80',
    ghost: 'bg-gray-100 text-gray-600 active:bg-gray-200',
    grey:  'bg-gray-200 text-gray-400 cursor-not-allowed',
  }
  return (
    <button
      disabled={disabled}
      className={`w-full py-3.5 rounded-2xl border-none font-serif font-black text-base cursor-pointer mt-3 transition-all ${variants[variant]} ${disabled ? variants.grey : ''} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

export function Card({ children, className = '', ...props }) {
  return (
    <div
      className={`bg-white rounded-2xl p-4 mb-3 shadow-sm border border-gray-100 ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}

export function Chip({ children, selected, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`inline-block px-4 py-2 rounded-full border-2 font-serif text-sm font-semibold cursor-pointer mr-2 mb-2 transition-all
        ${selected
          ? 'bg-forest-800 text-white border-forest-800'
          : 'bg-white text-gray-700 border-gray-200 active:bg-gray-50'
        }`}
    >
      {children}
    </button>
  )
}

export function StepBar({ current, total }) {
  return (
    <div className="flex gap-1.5 mb-6">
      {Array.from({ length: total }).map((_, i) => (
        <div
          key={i}
          className={`h-1 flex-1 rounded-full transition-all duration-300 ${i < current ? 'bg-forest-800' : 'bg-gray-200'}`}
        />
      ))}
    </div>
  )
}

export function MonoLabel({ children, className = '' }) {
  return (
    <p className={`font-mono text-xs tracking-widest text-gray-400 uppercase m-0 ${className}`}>
      {children}
    </p>
  )
}

export function Badge({ status }) {
  return status === 'scheduled'
    ? <span className="text-xs font-mono font-bold px-2 py-1 rounded-full bg-forest-800 text-white">SCHEDULED</span>
    : <span className="text-xs font-mono font-bold px-2 py-1 rounded-full bg-amber-50 text-amber-700 border border-amber-300">OPEN</span>
}
