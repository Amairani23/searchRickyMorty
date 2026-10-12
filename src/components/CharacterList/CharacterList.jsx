import CharacterCard from "../CharacterCard/CharacterCard"

export default function CharacterList({ characters, loading }) {
  if (loading) {
    return (
      <p className="py-12 text-center text-gray-400">Cargando personajes...</p>
    )
  }

  if (!characters.length) {
    return (
      <p className="py-12 text-center text-gray-400">
        No se encontraron personajes.
      </p>
    )
  }

  return (
    <div
      className="grid grid-cols-1 gap-6 sm:grid-cols-2
      lg:grid-cols-3 xl:grid-cols-4"
    >
      {characters.map((character) => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </div>
  )
}
