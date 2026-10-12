export default function Pagination({
  page,
  totalPages,
  onPageChange,
  disabled,
}) {
  const buttonClass =
    "rounded-xl px-5 py-3 font-semibold transition disabled:cursor-not-allowed disabled:opacity-40"

  return (
    <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
      <button
        disabled={disabled || page <= 1}
        onClick={() => onPageChange(page - 1)}
        className={`${buttonClass} bg-gray-800 text-white hover:bg-gray-700`}
      >
        ← Anterior
      </button>

      <span className="text-sm text-gray-400">
        Página {page} de {totalPages}
      </span>

      <button
        disabled={disabled || page >= totalPages}
        onClick={() => onPageChange(page + 1)}
        className={`${buttonClass} bg-emerald-400 text-gray-950 hover:bg-emerald-300`}
      >
        Siguiente →
      </button>
    </div>
  )
}
