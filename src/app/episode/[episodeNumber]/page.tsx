// src/app/episode/[episodeNumber]/page.tsx
import { notFound, useSearchParams } from "next/navigation"

export default function EpisodePage({
  params,
}: {
  params: { episodeNumber: string }
}) {
  // If needed, parse the episode number:
  const epNum = parseInt(params.episodeNumber, 10)
  if (isNaN(epNum)) {
    notFound()
  }

  // Later, you might fetch real data by `epNum`
  return (
    <div className="p-4">
      <h1 className="text-3xl mb-4 font-bold">Episode {epNum}</h1>
      <p className="text-gray-200 mb-6">
        This is a 10-minute micro-podcast about Bitcoin concepts, sponsored by{" "}
        <strong>Finney21</strong>.
      </p>
      {/* Include an audio player, show notes, etc. */}
      <div className="mt-4 border border-gray-700 p-4 bg-gray-800 rounded">
        <p>Audio Player would go here!</p>
      </div>
    </div>
  )
}
