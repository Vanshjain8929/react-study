import React from 'react';

const Card = ({ photo, isFavorite, onToggleFavorite, onQuickView }) => {
  return (
    <div className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-lg transition hover:-translate-y-1 hover:border-violet-300/40">
      <div className="relative h-56 overflow-hidden">
        <img
          src={photo.download_url}
          alt={photo.author}
          className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
        />
        <button
          onClick={() => onToggleFavorite(photo.id)}
          className={`absolute right-3 top-3 rounded-full px-2.5 py-1 text-sm font-bold transition ${
            isFavorite ? 'bg-rose-400 text-black' : 'bg-black/50 text-white hover:bg-black/70'
          }`}
          aria-label="toggle favorite"
        >
          {isFavorite ? '♥' : '♡'}
        </button>
      </div>

      <div className="space-y-3 p-4">
        <h2 className="truncate text-lg font-semibold text-white">{photo.author}</h2>

        <div className="flex gap-2">
          <button
            onClick={() => onQuickView(photo)}
            className="flex-1 rounded-lg bg-violet-400 px-3 py-2 text-sm font-semibold text-black transition hover:bg-violet-300"
          >
            Quick View
          </button>
          <a
            href={photo.url}
            target="_blank"
            rel="noreferrer"
            className="flex-1 rounded-lg bg-white/10 px-3 py-2 text-center text-sm font-semibold transition hover:bg-white/20"
          >
            Source
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
