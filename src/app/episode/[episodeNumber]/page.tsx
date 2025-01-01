import { notFound } from "next/navigation";
import Link from "next/link";

// Define the structure of an episode
interface Episode {
  episodeNumber: number;
  topic: string;
  sponsor: string;
  embedCode: string; // The audio player iframe
}

// Updated data with sponsors matching the Home page and embed codes relocated here
const episodesData: Episode[] = [
  {
    episodeNumber: 1,
    topic: "Bitcoin",
    sponsor: "Zaps",
    embedCode: `<iframe src="https://player.rss.com/bitcoinstoa/1815407" title="Block Talk_001_Bitcoin" width="100%" height="154px" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen scrolling="no" class="no-border"></iframe>`,
  },
  {
    episodeNumber: 2,
    topic: "Health",
    sponsor: "Zaps",
    embedCode: `<iframe src="https://player.rss.com/bitcoinstoa/1816968" title="Block Talk_002_Health" width="100%" height="154px" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen scrolling="no" class="no-border"></iframe>`,
  },
  {
    episodeNumber: 3,
    topic: "NOSTR 101",
    sponsor: "Primal.net",
    embedCode: `<iframe src="https://player.rss.com/bitcoinstoa/1817878" title="Block Talk_003_NOSTR 101" width="100%" height="154px" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen scrolling="no" class="no-border"></iframe>`,
  },
  {
    episodeNumber: 4,
    topic: "UTXO explained to 7 y/o",
    sponsor: "obiwansatoshi.com",
    embedCode: `<iframe src="https://player.rss.com/bitcoinstoa/1820713" title="Block Talk_004_UTXO 7y/o" width="100%" height="154px" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen scrolling="no" class="no-border"></iframe>`,
  },
  {
    episodeNumber: 5,
    topic: "Health_80/20 Rule",
    sponsor: "www.RunningApollo.com",
    embedCode: `<iframe src="https://player.rss.com/bitcoinstoa/1823638" title="Block Talk_005_Health_80/20 rule" width="100%" height="154px" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen scrolling="no"><a href="https://rss.com/podcasts/bitcoinstoa/1823638">Block Talk_005_Health_80/20 rule</a></iframe>`,
  },
];

// In Next.js 13+, route params can be sync or async depending on the version
export default async function EpisodePage({
  params,
}: {
  params: Promise<{ episodeNumber: string }>;
}) {
  const { episodeNumber } = await params;
  const epNum = parseInt(episodeNumber, 10);

  // Find the episode
  const episode = episodesData.find((ep) => ep.episodeNumber === epNum);

  if (!episode || isNaN(epNum)) {
    notFound();
  }

  return (
    <div className="p-4 min-h-screen bg-gray-900 text-white font-pressStart flex flex-col items-center">
      {/* Header */}
      <h1 className="text-xl mb-4 font-bold">Episode {episode.episodeNumber}</h1>
      <p className="text-gray-200 mb-6 text-center">
        {episode.topic} — Sponsored by <strong>{episode.sponsor}</strong>.
      </p>

      {/* Embed Player or Placeholder */}
      <div
        className="relative w-full max-w-4xl border-4 rounded-lg
                   border-gradient-to-r from-purple-500 to-blue-500 
                   bg-gray-800 flex items-center justify-center p-4"
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
