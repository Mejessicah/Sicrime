import React from 'react';

export default function Map() {
  return (
    <section className="bg-black py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Interactive Crime Mapping
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Visualize crime patterns and hotspots across your jurisdiction in real-time.
          </p>
        </div>
        <div className="aspect-video rounded-lg overflow-hidden bg-gray-800 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-orange-500/20" />
          <img
            src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80"
            alt="City Map"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-white text-xl">Interactive Map Preview</p>
          </div>
        </div>
      </div>
    </section>
  );
}