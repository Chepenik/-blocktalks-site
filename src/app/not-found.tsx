import Link from "next/link";

export default function Custom404() {
  return (
    <div className="min-h-screen bg-gray-900 text-white font-mono flex flex-col items-center justify-center">
      <h1 className="text-6xl font-bold mb-4 text-purple-500">404</h1>
      <p className="text-xl mb-8 text-gray-300">
        You got <span className="text-cyan-300">forked</span> off the network for mining a bad block.
      </p>
      <p className="text-lg text-gray-400 mb-12">
        No worries, click below to get back in consensus.
      </p>
      <Link
        href="/"
        className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold text-lg rounded-lg shadow-lg
        hover:scale-105 transform transition-transform"
      >
        Back to Main Page
      </Link>
      <div className="mt-8 text-gray-500">
        <p>
          Or maybe the mempool dropped your transaction? Either way, let&apos;s get you
          back on the chain.
        </p>
      </div>
    </div>
  );
}
