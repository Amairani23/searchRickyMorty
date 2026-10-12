import { useNavigate } from "react-router-dom"

const statusStyles = {
  Alive: "bg-emerald-400",
  Dead: "bg-red-400",
  unknown: "bg-gray-400",
}

const statusLabels = {
  Alive: "Vivo",
  Dead: "Muerto",
  unknown: "Desconocido",
}

export default function CharacterCard({ character }) {
  const { id, name, image, status, species, type } = character
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/character/${id}`)
  }

  return (
    <article
      className="group overflow-hidden rounded-2xl border
      border-gray-800 bg-gray-900 transition duration-300
      hover:-translate-y-1 hover:border-emerald-400
      hover:shadow-xl hover:shadow-emerald-950/20"
    >
      <div className="overflow-hidden">
        <img
          src={image}
          alt={name}
          loading="lazy"
          className="h-64 w-full object-cover transition duration-500
          group-hover:scale-105"
        />
      </div>

      <div className="p-5">
        <h2 className="mb-3 truncate text-xl font-bold text-white">{name}</h2>

        <p className="mb-3 flex items-center gap-2 text-sm text-gray-300">
          <span
            className={`h-2.5 w-2.5 rounded-full ${
              statusStyles[status] ?? "bg-gray-400"
            }`}
          />
          {statusLabels[status] ?? status}
        </p>

        <div className="space-y-2 text-sm text-gray-400">
          <p>
            <span className="text-gray-200">Especie:</span> {species}
          </p>

          <p>
            <span className="text-gray-200">Tipo:</span> {type || "Ninguno"}
          </p>
        </div>

        <button
          type="button"
          onClick={handleClick}
          className="mt-5 w-full rounded-xl bg-emerald-400 px-4 py-3
          font-semibold text-gray-950 transition
          hover:bg-emerald-300 active:scale-95"
        >
          Ver detalles
        </button>
      </div>
    </article>
  )
}
