import { notFound } from "next/navigation";

interface EpisodePageProps {
  params: Promise<{ episodeNumber: string }>; // Adjust params to be a Promise
}

export default async function EpisodePage({ params }: EpisodePageProps) {
  const resolvedParams = await params; // Await params before using
  const epNum = parseInt(resolvedParams.episodeNumber, 10);

  if (isNaN(epNum)) {
    notFound();
  }

  return (
    <div className="p-4 min-h-screen bg-gray-900 text-white font-mono">
      <h1 className="text-3xl mb-4 font-bold">Episode {epNum}</h1>
      <p className="text-gray-200 mb-6">
        This is a 10-minute micro-podcast about Bitcoin concepts, sponsored by{" "}
        <strong>Finney21</strong>.
      </p>
      <div className="border border-gray-700 p-4 bg-gray-800 rounded">
        <p className="text-sm text-gray-300">Audio Player would go here!</p>
      </div>
    </div>
  );
}
