export default function SearchBar({ value, onChange }) {
  return (
    <div className="relative w-full">
      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
        🔍
      </span>

      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Buscar personajes..."
        className="w-full rounded-xl border border-gray-700 bg-gray-900
        py-3 pl-11 pr-4 text-white outline-none transition
        focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20"
      />
    </div>
  )
}
