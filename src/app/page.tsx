import Link from "next/link"

interface Episode {
  blockNumber: number
  episodeNumber: number
  title: string
  metrics: string
  author: string
}

export default function Home() {
  const episodes: Episode[] = [
    {
      blockNumber: 875489,
      episodeNumber: 1024,
      title: "Difficulty Adjustment",
      metrics: "788.69 Eh/s",
      author: "Finney21",
    },
    {
      blockNumber: 875346,
      episodeNumber: 1089,
      title: "Feet",
      metrics: "802.43 Eh/s",
      author: "RunningApollo.xyz",
    },
    {
      blockNumber: 875226,
      episodeNumber: 1066,
      title: "Byzantine General's Problem",
      metrics: "744.43 Eh/s",
      author: "Finney21",
    },
    {
      blockNumber: 875226,
      episodeNumber: 962,
      title: "Self Custody 101",
      metrics: "884.43 Eh/s",
      author: "Finney21",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-900 text-white font-mono flex flex-col">
      {/* HEADER */}
      <header className="border-b border-gray-800 p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#4DFFF3]/20 rounded flex items-center justify-center">
            <span className="text-[#4DFFF3] font-bold text-xl">₿</span>
          </div>
          <h1 className="text-2xl tracking-tight font-bold">
            Block Talks: Bitcoin &amp; Health
          </h1>
        </div>
        <p className="text-sm text-gray-400">
          Weekly 10-min microdose of Bitcoin knowledge
        </p>
      </header>

      {/* MAIN CONTENT */}
      <main className="p-4 flex-1">
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
          {episodes.map((episode) => (
            <Link
              key={episode.episodeNumber}
              href={`/episode/${episode.episodeNumber}`}
              className="relative block group"
            >
              {/* Block Container */}
              <div
                className="rounded-lg transform-gpu transition-transform
                           group-hover:-translate-y-1 group-hover:shadow-xl
                           bg-gradient-to-b from-orange-600 to-purple-600
                           aspect-square flex flex-col justify-between p-4"
              >
                {/* Block Number (Above the Block) */}
                <div className="text-center text-cyan-300 text-sm font-semibold">
                  Block #{episode.blockNumber}
                </div>

                {/* Big Episode Number */}
                <div className="text-center text-4xl font-bold text-white">
                  {episode.episodeNumber}
                </div>

                {/* Title & Metrics */}
                <div className="text-center text-sm text-gray-100">
                  <p className="font-semibold">{episode.title}</p>
                  <p className="text-xs">{episode.metrics}</p>
                </div>

                {/* Sponsor/Author (Below the Block) */}
                <div className="text-center text-gray-300 text-xs mt-2">
                  Sponsored by: {episode.author}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>

      {/* Footer with Nostr Link */}
      <footer className="p-4 border-t border-gray-800 text-center">
        <a
          href="https://nostr.link" // Replace with your actual Nostr link
          target="_blank"
          rel="noopener noreferrer"
          className="text-cyan-400 hover:underline"
        >
          Connect with us on Nostr
        </a>
      </footer>
    </div>
  )
}
