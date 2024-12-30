"use client";

import Link from "next/link";
import Image from "next/image";

interface Episode {
  blockNumber: number;
  episodeNumber: number;
  topic: string;
  hashrate: string;
  sponsor: string;
  nostr?: string;
  embedCode?: string; // Add embedCode to the interface
}

export default function Home() {
  const episodes: Episode[] = [
    {
      blockNumber: 876183,
      episodeNumber: 1,
      topic: "Bitcoin",
      hashrate: "723 Eh/s",
      sponsor: "Zaps",
      nostr: "npub1qhe6zzhf3djq3jc9dawgr6kyp9fy5dxkssknm93669nqqcj0jm5sn3xuec",
      embedCode: `<iframe src="https://player.rss.com/bitcoinstoa/1815407" title="Block Talk_001_Bitcoin" width="100%" height="154px" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen scrolling="no" class="no-border"></iframe>`,
    },
    {
      blockNumber: 876488,
      episodeNumber: 2,
      topic: "Health",
      hashrate: "711 Eh/s",
      sponsor: "Zaps",
      nostr: "npub1qhe6zzhf3djq3jc9dawgr6kyp9fy5dxkssknm93669nqqcj0jm5sn3xuec",
      embedCode: `<iframe src="https://player.rss.com/bitcoinstoa/1816968" title="Block Talk_002_Health" width="100%" height="154px" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen scrolling="no" class="no-border"></iframe>`,
    },
    {
      blockNumber: 876629,
      episodeNumber: 3,
      topic: "NOSTR 101",
      hashrate: "822 Eh/s",
      sponsor: "Primal.net",
      nostr: "npub1qhe6zzhf3djq3jc9dawgr6kyp9fy5dxkssknm93669nqqcj0jm5sn3xuec",
      embedCode: `<iframe src="https://player.rss.com/bitcoinstoa/1817878/" title="Block Talk_003_NOSTR 101" width="100%" height="154px" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen scrolling="no" class="no-border"></iframe>`,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white font-pressStart flex flex-col">
      {/* HEADER */}
      <header className="border-b border-gray-800 p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image
            src="/blocktalks.png"
            alt="Block Talks Logo"
            width={40}
            height={40}
          />
          <h1 className="text-xl tracking-tight font-bold">
            Block Talks: Bitcoin &amp; Health
          </h1>
        </div>
        <p className="text-xs text-gray-400">
          lin
          Weekly 10-min microdose of Bitcoin knowledge
        </p>
      </header>

      {/* MAIN CONTENT */}
      <main className="p-4 flex-1">
        <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {episodes.map((episode) => (
            <div key={episode.episodeNumber} className="relative block group">
              <Link
                href={`/episode/${episode.episodeNumber}`}
                className="block"
              >
                <div
                  className="aspect-square rounded-lg transform-gpu transition-transform
                             group-hover:-translate-y-1 group-hover:shadow-lg
                             bg-gradient-to-b from-orange-600 to-purple-700
                             p-2 border border-gray-700 flex flex-col justify-between"
                >
                  {/* Block Number and Episode Number */}
                  <div className="flex justify-between items-center text-[10px]">
                    <span className="text-cyan-300">
                      Block #{episode.blockNumber}
                    </span>
                    <span className="bg-[#4DFFF3]/20 text-[#4DFFF3] text-[10px] font-bold px-2 py-1 rounded">
                      {episode.episodeNumber.toString().padStart(3, "0")}
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="text-xs font-bold text-white text-center mt-2">
                    {episode.topic}
                  </h2>

                  {/* Data Section */}
                  <div className="text-[10px] text-gray-300 space-y-1">
                    <p>
                      <span className="font-semibold text-gray-400">
                        Hash Rate:
                      </span>{" "}
                      {episode.hashrate}
                    </p>
                    <p>
                      <span className="font-semibold text-gray-400">
                        Sponsor:
                      </span>{" "}
                      {episode.sponsor}
                    </p>
                  </div>
                </div>
              </Link>

              {/* Zap Link */}
              {episode.nostr && (
                <a
                  href={`https://primal.net/p/${episode.nostr}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 flex items-center text-yellow-400 hover:underline text-xs"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4 mr-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                  Zap me
                </a>
              )}
            </div>
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
