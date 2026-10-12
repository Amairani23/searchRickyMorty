import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

export default function CharacterProfile() {
  const { id } = useParams()
  const navigate = useNavigate()

  const [character, setCharacter] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    const controller = new AbortController()

    async function fetchCharacter() {
      setLoading(true)
      setError(false)
      setCharacter(null)

      try {
        const response = await fetch(
          `https://rickandmortyapi.com/api/character/${id}`,
          { signal: controller.signal },
        )

        if (!response.ok) {
          throw new Error("Personaje no encontrado")
        }

        const data = await response.json()
        setCharacter(data)
      } catch (err) {
        if (err.name !== "AbortError") {
          setError(true)
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false)
        }
      }
    }

    fetchCharacter()

    return () => controller.abort()
  }, [id])

  if (loading) {
    return (
      <p className="min-h-screen bg-gray-950 p-10 text-center text-white">
        Cargando personaje...
      </p>
    )
  }

  if (error || !character) {
    return (
      <main className="min-h-screen bg-gray-950 p-10 text-center text-white">
        <p className="mb-4">No se pudo encontrar el personaje.</p>
        <button
          onClick={() => navigate("/")}
          className="rounded-lg bg-emerald-400 px-5 py-3 font-semibold text-gray-950"
        >
          Volver al inicio
        </button>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-gray-950 px-6 py-10 text-white">
      <div className="mx-auto max-w-4xl">
        <button
          onClick={() => navigate(-1)}
          className="mb-8 rounded-lg bg-gray-800 px-4 py-2 hover:bg-gray-700"
        >
          ← Volver
        </button>

        <section className="grid overflow-hidden rounded-2xl border border-gray-800 bg-gray-900 md:grid-cols-2">
          <img
            src={character.image}
            alt={character.name}
            className="h-full min-h-72 w-full object-cover"
          />

          <div className="space-y-5 p-6 sm:p-8">
            <h1 className="text-3xl font-bold text-emerald-400">
              {character.name}
            </h1>

            <p>
              <span className="text-gray-400">Estado:</span> {character.status}
            </p>

            <p>
              <span className="text-gray-400">Especie:</span>{" "}
              {character.species}
            </p>

            <p>
              <span className="text-gray-400">Tipo:</span>{" "}
              {character.type || "Ninguno"}
            </p>

            <p>
              <span className="text-gray-400">Género:</span> {character.gender}
            </p>

            <p>
              <span className="text-gray-400">Origen:</span>{" "}
              {character.origin.name}
            </p>

            <p>
              <span className="text-gray-400">Ubicación:</span>{" "}
              {character.location.name}
            </p>
          </div>
        </section>
      </div>
    </main>
  )
}
