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
  {
    episodeNumber: 6,
    topic: "Money 101",
    sponsor: "www.Finney21.com",
    embedCode: `<iframe src="https://player.rss.com/bitcoinstoa/1824953" title="Block Talk_006_Money 101" width="100%" height="154px" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen scrolling="no"><a href="https://rss.com/podcasts/bitcoinstoa/1824953">Block Talk_006_Money 101</a></iframe>`,
  },
  {
    episodeNumber: 7,
    topic: "Keys 101",
    sponsor: "www.Finney21.com",
    embedCode: `<iframe src="https://player.rss.com/bitcoinstoa/1826267" title="Block Talk_007_Keys 101" width="100%" height="154px" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen scrolling="no"><a href="https://rss.com/podcasts/bitcoinstoa/1826267">Block Talk_007_Keys 101</a></iframe>`,
  },
  {
    episodeNumber: 8,
    topic: "Health_Unnatural Inputs",
    sponsor: "Zaps",
    embedCode: `<iframe src="https://player.rss.com/bitcoinstoa/1827727" title="Block Talk_008_Health_Unnatural Inputs" width="100%" height="154px" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen scrolling="no"><a href="https://rss.com/podcasts/bitcoinstoa/1827727">Block Talk_008_Health_Unnatural Inputs</a></iframe>`,
  },
  {
    episodeNumber: 9,
    topic: "Bitcoin_Collateral",
    sponsor: "www.Finney21.com",
    embedCode: `<iframe src="https://player.rss.com/bitcoinstoa/1828753" title="Block Talk_009_Bitcoin_Collateral" width="100%" height="154px" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen scrolling="no"><a href="https://rss.com/podcasts/bitcoinstoa/1828753">Block Talk_009_Bitcoin_Collateral</a></iframe>`,
  },
  {
    episodeNumber: 10,
    topic: "Bitcoin L1 vs. L2",
    sponsor: "www.Finney21.com",
    embedCode: `<iframe src="https://player.rss.com/bitcoinstoa/1843922" title="Block Talk_010_Bitcoin_L1 vs. L2" width="100%" height="154px" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen scrolling="no"><a href="https://rss.com/podcasts/bitcoinstoa/1843922">Block Talk_010_Bitcoin_L1 vs. L2</a></iframe>`,
  },
];

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

      {/* ⚡️zap this block */}
      <Link
        href="/tips"
        className="mt-4 flex items-center text-yellow-400 hover:underline text-sm justify-center"
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
        ⚡️zap this block
      </Link>

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