import { notFound } from "next/navigation";
import Link from "next/link";

interface Episode {
  episodeNumber: number;
  title: string;
  sponsor: string;
  embedCode: string; // Embed code for the audio player
}

const episodesData: Episode[] = [
  {
    episodeNumber: 1,
    title: "Bitcoin Basics",
    sponsor: "Finney21",
    embedCode: `<iframe src="https://player.rss.com/bitcoinstoa/1815407" title="Block Talk_001_Bitcoin" width="100%" height="154px" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen scrolling="no" class="no-border"></iframe>`,
  },
  {
    episodeNumber: 2,
    title: "Health and Bitcoin",
    sponsor: "TBD",
    embedCode: `<iframe src="https://player.rss.com/bitcoinstoa/1816968" title="Block Talk_002_Health" width="100%" height="154px" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen scrolling="no" class="no-border"></iframe>`,
  },
  {
    episodeNumber: 3,
    title: "Coming Soon",
    sponsor: "TBD",
    embedCode: "",
  },
  {
    episodeNumber: 4,
    title: "Coming Soon",
    sponsor: "TBD",
    embedCode: "",
  },
];

export default function EpisodePage({
  params,
}: {
  params: { episodeNumber: string };
}) {
  const epNum = parseInt(params.episodeNumber, 10);

  const episode = episodesData.find((ep) => ep.episodeNumber === epNum);

  if (!episode || isNaN(epNum)) {
    notFound();
  }

  return (
    <div className="p-4 min-h-screen bg-gray-900 text-white font-pressStart flex flex-col items-center">
      <h1 className="text-xl mb-4 font-bold">Episode {episode.episodeNumber}</h1>
      <p className="text-gray-200 mb-6 text-center">
        {episode.title}. Sponsored by <strong>{episode.sponsor}</strong>.
      </p>

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
