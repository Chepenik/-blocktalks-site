import { notFound } from "next/navigation";
import Link from "next/link";

// Define the structure of an episode
interface Episode {
  blockNumber: number;
  episodeNumber: number;
  topic: string;
  hashrate: string;
  sponsor: string;
  nostr?: string;
  embedCode?: string; // Add embedCode to the interface
}

// Updated episode data with embed codes for Episodes 1 and 2
const episodesData: Episode[] = [
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

export default function EpisodePage({
  params,
}: {
  params: { episodeNumber: string };
}) {
  const episodeNumber = parseInt(params.episodeNumber, 10);

  const episode = episodesData.find((ep) => ep.episodeNumber === episodeNumber);

  if (!episode || isNaN(episodeNumber)) {
    notFound();
  }

  return (
    <div className="p-4 min-h-screen bg-gray-900 text-white font-pressStart flex flex-col items-center">
      {/* Header */}
      <h1 className="text-xl mb-4 font-bold">Episode {episode.episodeNumber}</h1>
      <p className="text-gray-200 mb-6 text-center">
        {episode.topic}. Sponsored by <strong>{episode.sponsor}</strong>.
      </p>

      {/* Embed Player or Placeholder */}
      <div
        className="relative w-full max-w-4xl border-4 rounded-lg
        border-gradient-to-r from-purple-500 to-blue-500 bg-gray-800 flex items-center justify-center p-4"
      >
        {episode.embedCode ? (
          <div
            className="w-full"
            dangerouslySetInnerHTML={{ __html: episode.embedCode }}
          />
        ) : (
          <p className="text-sm text-gray-300 p-4">Episode coming soon!</p>
        )}
      </div>

      {/* Back to Home Button */}
      <Link
        href="/"
        className="inline-block mt-6 bg-purple-500 hover:bg-purple-600 px-6 py-2 
                   rounded-md text-white font-semibold transition-colors"
      >
        Back to Home
      </Link>
    </div>
  );
}