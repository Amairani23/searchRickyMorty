export default function Filters({ status, setStatus, species, setSpecies }) {
  const selectClass =
    "w-full rounded-xl border border-gray-700 bg-gray-900 " +
    "px-4 py-3 text-white outline-none focus:border-emerald-400"

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        className={selectClass}
        aria-label="Filtrar por estado"
      >
        <option value="">Todos los estados</option>
        <option value="Alive">Vivo</option>
        <option value="Dead">Muerto</option>
        <option value="unknown">Desconocido</option>
      </select>

      <select
        value={species}
        onChange={(e) => setSpecies(e.target.value)}
        className={selectClass}
        aria-label="Filtrar por especie"
      >
        <option value="">Todas las especies</option>
        <option value="Human">Humano</option>
        <option value="Alien">Alienígena</option>
        <option value="Robot">Robot</option>
      </select>
    </div>
  )
}
