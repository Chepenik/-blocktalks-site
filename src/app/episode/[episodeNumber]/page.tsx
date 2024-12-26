import { notFound } from "next/navigation";
import Link from "next/link";

interface Episode {
  episodeNumber: number;
  title: string;
  sponsor: string;
  videoUrl: string;
}

const episodesData: Episode[] = [
  {
    episodeNumber: 1,
    title: "Bitcoin Basics",
    sponsor: "Finney21",
    videoUrl: "https://www.youtube.com/embed/me1NejsVwNI?si=KWEb4LlQLNpT788A",
  },
  {
    episodeNumber: 2,
    title: "Coming Soon",
    sponsor: "TBD",
    videoUrl: "",
  },
  {
    episodeNumber: 3,
    title: "Coming Soon",
    sponsor: "TBD",
    videoUrl: "",
  },
  {
    episodeNumber: 4,
    title: "Coming Soon",
    sponsor: "TBD",
    videoUrl: "",
  },
];

export default async function EpisodePage({
  params,
}: {
  // `params` must be typed as a Promise in Next.js 15 for dynamic routes
  params: Promise<{ episodeNumber: string }>;
}) {
  // Await the async `params`
  const { episodeNumber } = await params;

  // Convert to integer
  const epNum = parseInt(episodeNumber, 10);
  // Find the episode data
  const episode = episodesData.find((ep) => ep.episodeNumber === epNum);

  if (!episode || isNaN(epNum)) {
    notFound();
  }

  return (
    <div className="p-4 min-h-screen bg-gray-900 text-white font-mono flex flex-col items-center">
      <h1 className="text-3xl mb-4 font-bold">Episode {episode.episodeNumber}</h1>
      <p className="text-gray-200 mb-6 text-center">
        {episode.title}. Sponsored by <strong>{episode.sponsor}</strong>.
      </p>
      <div
        className="relative w-full max-w-4xl h-[50vh] border-4 rounded-lg
        border-gradient-to-r from-purple-500 to-blue-500 bg-gray-800"
      >
        {episode.videoUrl ? (
          <iframe
            className="w-full h-full rounded-md"
            src={episode.videoUrl}
            title={`Episode ${episode.episodeNumber}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        ) : (
          <p className="text-sm text-gray-300 p-4">Video coming soon!</p>
        )}
      </div>

      {/* "Back to Home" Button */}
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
