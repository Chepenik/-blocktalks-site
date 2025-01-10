"use client";

import Link from "next/link";
import Image from "next/image";

interface Episode {
  blockNumber: number;
  episodeNumber: number;
  topic: string;
  hashrate: string;
  sponsor: string;
}

export default function Home() {
  const episodes: Episode[] = [
    {
      blockNumber: 876183,
      episodeNumber: 1,
      topic: "Bitcoin",
      hashrate: "723 Eh/s",
      sponsor: "Zaps",
    },
    {
      blockNumber: 876488,
      episodeNumber: 2,
      topic: "Health",
      hashrate: "711 Eh/s",
      sponsor: "Zaps",
    },
    {
      blockNumber: 876629,
      episodeNumber: 3,
      topic: "NOSTR 101",
      hashrate: "822 Eh/s",
      sponsor: "Primal.net",
    },
    {
      blockNumber: 877065,
      episodeNumber: 4,
      topic: "UTXO explained to 7 y/o",
      hashrate: "767 Eh/s",
      sponsor: "obiwansatoshi.com",
    },
    {
      blockNumber: 877350,
      episodeNumber: 5,
      topic: "Health_80/20 Rule",
      hashrate: "684 Eh/s",
      sponsor: "www.RunningApollo.com",
    },
    {
      blockNumber: 877525,
      episodeNumber: 6,
      topic: "Money 101",
      hashrate: "942 Eh/s",
      sponsor: "www.Finney21.com",
    },
    {
      blockNumber: 877654,
      episodeNumber: 7,
      topic: "Keys 101",
      hashrate: "775 Eh/s",
      sponsor: "www.Finney21.com",
    },
    {
      blockNumber: 877840,
      episodeNumber: 8,
      topic: "Health_Unnatural Inputs",
      hashrate: "870 Eh/s",
      sponsor: "Zaps",
    },
    {
      blockNumber: 877988,
      episodeNumber: 9,
      topic: "Bitcoin Collateral",
      hashrate: "851 Eh/s",
      sponsor: "www.Finney21.com",
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
          Weekly 10-min microdose of Bitcoin knowledge
        </p>
      </header>

      {/* MAIN CONTENT */}
      <main className="p-4 flex-1">
        <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {episodes.map((episode) => (
            <div
              key={episode.episodeNumber}
              className="relative block group text-center"
            >
              {/* Block Number Above */}
              <div className="mb-2 text-orange-400 text-md font-semibold">
                Block {episode.blockNumber}
              </div>

              <Link href={`/episode/${episode.episodeNumber}`} className="block">
                <div
                  className="aspect-square rounded-lg transform-gpu transition-transform
                             group-hover:-translate-y-1 group-hover:shadow-lg
                             bg-gradient-to-b from-orange-600 to-purple-700
                             p-2 border border-gray-700 flex flex-col justify-between"
                >
                  {/* Episode Number */}
                  <div className="text-center">
                    <span className="bg-[#3e3e3e]/20 text-[#aeaeae] text-[12px] font-bold px-2 py-1 rounded">
                      #{episode.episodeNumber.toString().padStart(3, "0")}
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="text-sm font-bold text-white mt-2">
                    {episode.topic}
                  </h2>

                  {/* Data Section */}
                  <div className="text-[10px] text-gray-300 space-y-1 mt-2">
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
