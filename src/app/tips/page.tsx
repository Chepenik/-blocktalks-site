"use client";

import Link from "next/link";
import Image from "next/image";

export default function Tips() {
  return (
    <div className="min-h-screen bg-gray-900 text-white font-pressStart flex flex-col items-center justify-center">
      {/* HEADER */}
      <header className="border-b border-gray-800 p-4 w-full flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image
            src="/blocktalks.png"
            alt="Block Talks Logo"
            width={40}
            height={40}
          />
          <h1 className="text-xl tracking-tight font-bold">Block Talks Tips</h1>
        </div>
        <p className="text-xs text-gray-400">
          Support this value-for-value podcast
        </p>
      </header>

      {/* MAIN CONTENT */}
      <main className="p-8 flex flex-col items-center">
        <Image
          src="https://i.nostr.build/S3gJO8cAHJL1oxd0.png"
          alt="QR Code"
          width={300}
          height={300}
          className="rounded-lg shadow-lg border border-gray-700 mb-6"
        />
        <p className="text-lg text-gray-200 text-center mb-6">
          Use the QR code above or zap me at:
        </p>
        <p className="text-yellow-400 text-xl font-bold text-center mb-8">
          tealpuma10@primal.net
        </p>
        <Link
          href="/"
          className="inline-block bg-purple-500 hover:bg-purple-600 px-6 py-3 
                     rounded-md text-white font-semibold transition-colors"
        >
          Back to Home
        </Link>
      </main>

      {/* FOOTER */}
      <footer className="p-4 border-t border-gray-800 text-center w-full">
        <p className="text-xs text-gray-400">
          Thank you for your support! You make this podcast possible.
        </p>
      </footer>
    </div>
  );
}
