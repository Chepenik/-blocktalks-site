import Link from "next/link";

interface Episode {
  blockNumber: number | string;
  episodeNumber: number;
  title: string;
  hashRate: string;
  moscowTime?: number | string;
  sponsor: string;
  largestZap?: string;
}

export default function Home() {
  const episodes: Episode[] = [
    {
      blockNumber: 876183,
      episodeNumber: 1,
      title: "Bitcoin",
      hashRate: "723 Eh/s",
      moscowTime: 1015,
      sponsor: "Finney21.com",
      largestZap: "Conor Chepenik",
    },
    {
      blockNumber: 876488,
      episodeNumber: 2,
      title: "Health",
      hashRate: "711 Eh/s",
      moscowTime: "1037",
      sponsor: "Finney21.com",
      largestZap: "TBD",
    },
    {
      blockNumber: "TBD",
      episodeNumber: 3,
      title: "TBD",
      hashRate: "TBD",
      moscowTime: "TBD",
      sponsor: "TBD",
      largestZap: "TBD",
    },
    {
      blockNumber: "TBD",
      episodeNumber: 4,
      title: "TBD",
      hashRate: "TBD",
      moscowTime: "TBD",
      sponsor: "TBD",
      largestZap: "TBD",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white font-pressStart flex flex-col">
      {/* HEADER */}
      <header className="border-b border-gray-800 p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#4DFFF3]/20 rounded flex items-center justify-center">
            <span className="text-[#4DFFF3] font-bold text-lg">₿</span>
          </div>
          <h1 className="text-xl tracking-tight font-bold">
            Block Talks: Bitcoin &amp; Health
          </h1>
        </div>
        <p className="text-xs text-gray-400">
          Weekly 10-min microdose of Bitcoin knowledge
        </p>
      </header>

      {/* MAIN CONTENT */}
      <main className="p-4 flex-1">
        <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {episodes.map((episode) => (
            <Link
              key={episode.episodeNumber}
              href={`/episode/${episode.episodeNumber}`}
              className="relative block group"
            >
              <div
                className="aspect-square rounded-lg transform-gpu transition-transform
                           group-hover:-translate-y-1 group-hover:shadow-lg
                           bg-gradient-to-b from-orange-600 to-purple-700
                           p-2 border border-gray-700 flex flex-col justify-between"
              >
                {/* Block Number and Episode Number */}
                <div className="flex justify-between items-center text-[10px]">
                  <span className="text-cyan-300">Block #{episode.blockNumber}</span>
                  <span className="bg-[#4DFFF3]/20 text-[#4DFFF3] text-[10px] font-bold px-2 py-1 rounded">
                    {episode.episodeNumber.toString().padStart(3, "0")}
                  </span>
                </div>

                {/* Title */}
                <h2 className="text-xs font-bold text-white text-center mt-2">
                  {episode.title}
                </h2>

                {/* Data Section */}
                <div className="text-[10px] text-gray-300 space-y-1">
                  <p>
                    <span className="font-semibold text-gray-400">Hash Rate:</span>{" "}
                    {episode.hashRate}
                  </p>
                  <p>
                    <span className="font-semibold text-gray-400">Moscow Time:</span>{" "}
                    {episode.moscowTime}
                  </p>
                  <p>
                    <span className="font-semibold text-gray-400">Sponsor:</span>{" "}
                    {episode.sponsor}
                  </p>
                  {episode.largestZap && (
                    <p>
                      <span className="font-semibold text-gray-400">Largest Zap:</span>{" "}
                      {episode.largestZap}
                    </p>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>

      {/* FOOTER */}
      <footer className="p-4 border-t border-gray-800 text-center">
        <a
          href="https://primal.net/p/npub1qhe6zzhf3djq3jc9dawgr6kyp9fy5dxkssknm93669nqqcj0jm5sn3xuec"
          target="_blank"
          rel="noopener noreferrer"
          className="text-cyan-400 hover:underline text-xs"
        >
          Connect with us on Nostr
        </a>
      </footer>
    </div>
  );
}
