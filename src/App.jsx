import { useEffect, useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import SearchBar from "./components/SearchBar/SearchBar"
import Filters from "./components/Filters/Filters"
import CharacterList from "./components/CharacterList/CharacterList"
import Pagination from "./components/Pagination/Pagination"
import CharacterProfile from "./components/CharacterProfile/CharacterProfile"

export default function App() {
  const [search, setSearch] = useState("")
  const [status, setStatus] = useState("")
  const [species, setSpecies] = useState("")
  const [page, setPage] = useState(1)

  const [characters, setCharacters] = useState([])
  const [totalPages, setTotalPages] = useState(1)
  const [totalCount, setTotalCount] = useState(0)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    //AbortController: cancelar solicitudes anteriores
    const controller = new AbortController()

    //Aquí declaramos una función asíncrona para obtener los personajes.
    async function fetchCharacters() {
      setLoading(true)
      setError(false)

      //construir los parámetros
      //Esto crea un objeto que sirve para construir parámetros de URL correctamente.
      //Por ejemplo, si page vale 2, el resultado inicial será: page=2
      const params = new URLSearchParams({
        //URLSearchParams trabaja con valores de texto. Convertimos el número de página a una cadena, String(page)
        page: String(page),
      })

      //params.set(): Este método agrega un parámetro o reemplaza su valor si ya existe.
      if (search.trim()) params.set("name", search.trim())
      if (status) params.set("status", status)
      if (species) params.set("species", species)

      try {
        const response = await fetch(
          `https://rickandmortyapi.com/api/character/?${params}`,
          { signal: controller.signal },
        )
        //signal: controller.signal conecta la petición con el AbortController, permitiendo cancelarla.

        if (!response.ok) {
          if (response.status === 404) {
            setCharacters([])
            setTotalPages(1)
            setTotalCount(0)
            return
          }

          throw new Error("Error al consultar la API")
        }

        const data = await response.json()

        setCharacters(data.results)
        setTotalPages(data.info.pages)
        setTotalCount(data.info.count)
      } catch (err) {
        if (err.name !== "AbortError") {
          setError(true)
        }
      } finally {
        //El bloque finally se ejecuta al terminar el try o el catch, independientemente de si la solicitud tuvo éxito o falló.
        if (!controller.signal.aborted) {
          setLoading(false)
        }
      }
    }

    fetchCharacters()

    //Esta función es la limpieza del efecto
    return () => controller.abort()
  }, [search, status, species, page])

  function updateFilter(setter, value) {
    setter(value)
    setPage(1)
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div className="min-h-screen bg-gray-950 text-white">
              <header className="border-b border-gray-800 bg-gray-900">
                <div className="mx-auto max-w-7xl px-6 py-6">
                  <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                    <span className="text-emerald-400">Character</span> Explorer
                  </h1>

                  <p className="mt-2 text-gray-400">
                    Explora el universo de Rick and Morty
                  </p>
                </div>
              </header>

              <main className="mx-auto max-w-7xl px-6 py-8">
                <section className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-[2fr_1fr]">
                  <SearchBar
                    value={search}
                    onChange={(value) => updateFilter(setSearch, value)}
                  />

                  <Filters
                    status={status}
                    setStatus={(value) => updateFilter(setStatus, value)}
                    species={species}
                    setSpecies={(value) => updateFilter(setSpecies, value)}
                  />
                </section>

                <div className="mb-5 flex flex-wrap items-center justify-between gap-2">
                  <h2 className="text-xl font-bold">Personajes</h2>
                  <p className="text-sm text-gray-400">
                    {totalCount} resultados
                  </p>
                </div>

                {error ? (
                  <p className="py-12 text-center text-red-400">
                    Ocurrió un error. Comprueba tu conexión e inténtalo de
                    nuevo.
                  </p>
                ) : (
                  <CharacterList characters={characters} loading={loading} />
                )}

                {!error && !loading && characters.length > 0 && (
                  <Pagination
                    page={page}
                    totalPages={totalPages}
                    onPageChange={setPage}
                    disabled={loading}
                  />
                )}
              </main>

              <footer className="border-t border-gray-800 py-6 text-center text-sm text-gray-500">
                Amairani Romero
              </footer>
            </div>
          }
        />

        <Route path="/character/:id" element={<CharacterProfile />} />
      </Routes>
    </BrowserRouter>
  )
}
