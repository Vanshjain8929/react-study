import React, { useEffect, useMemo, useState } from 'react';
import axios from 'axios';
import Card from './components/Card';

const FAVORITES_KEY = 'gallery-favorites';

const App = () => {
  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [favorites, setFavorites] = useState(() => {
    const storedFavorites = localStorage.getItem(FAVORITES_KEY);
    return storedFavorites ? JSON.parse(storedFavorites) : {};
  });
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  useEffect(() => {
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      setError('');
      try {
        const response = await axios.get(`https://picsum.photos/v2/list?page=${page}&limit=10`);
        setPhotos(response.data);
      } catch {
        setError('Could not load photos. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, [page]);

  const filteredPhotos = useMemo(() => {
    const normalizedSearch = searchTerm.toLowerCase().trim();
    return photos.filter((photo) => {
      const matchesSearch = photo.author.toLowerCase().includes(normalizedSearch);
      const matchesFavoriteFilter = showFavoritesOnly ? Boolean(favorites[photo.id]) : true;
      return matchesSearch && matchesFavoriteFilter;
    });
  }, [photos, searchTerm, favorites, showFavoritesOnly]);

  const favoriteCount = useMemo(
    () => Object.values(favorites).filter(Boolean).length,
    [favorites]
  );

  const toggleFavorite = (id) => {
    setFavorites((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-gray-900 to-slate-800 px-4 py-6 text-white sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-6 rounded-3xl border border-white/10 bg-white/5 p-5 shadow-xl backdrop-blur-sm sm:p-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Visual Vault</h1>
              <p className="mt-1 text-sm text-slate-300">
                Discover high-quality shots and save your favorites.
              </p>
            </div>
            <div className="text-sm text-slate-300">
              <p>
                Page <span className="font-semibold text-white">{page}</span>
              </p>
              <p>
                Favorites <span className="font-semibold text-emerald-300">{favoriteCount}</span>
              </p>
            </div>
          </div>

          <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center">
            <input
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by author..."
              className="w-full rounded-xl border border-white/15 bg-black/30 px-4 py-2 text-sm outline-none transition focus:border-violet-400"
            />
            <button
              onClick={() => setShowFavoritesOnly((prev) => !prev)}
              className={`rounded-xl px-4 py-2 text-sm font-semibold transition ${
                showFavoritesOnly
                  ? 'bg-emerald-400 text-black hover:bg-emerald-300'
                  : 'bg-white/10 hover:bg-white/20'
              }`}
            >
              {showFavoritesOnly ? 'Showing Favorites' : 'Show Favorites'}
            </button>
          </div>
        </div>

        {loading && (
          <p className="py-16 text-center text-sm text-slate-300">Loading beautiful images...</p>
        )}

        {!loading && error && (
          <div className="rounded-xl border border-red-400/30 bg-red-500/10 p-4 text-center text-red-200">
            {error}
          </div>
        )}

        {!loading && !error && filteredPhotos.length === 0 && (
          <div className="rounded-xl border border-white/10 bg-white/5 p-8 text-center text-slate-300">
            No photos matched your filters.
          </div>
        )}

        {!loading && !error && filteredPhotos.length > 0 && (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredPhotos.map((photo) => (
              <Card
                key={photo.id}
                photo={photo}
                isFavorite={Boolean(favorites[photo.id])}
                onToggleFavorite={toggleFavorite}
                onQuickView={setSelectedPhoto}
              />
            ))}
          </div>
        )}

        <div className="mt-8 flex items-center justify-center gap-4">
          <button
            disabled={page === 1}
            onClick={() => {
              if (page > 1) {
                setPage((prev) => prev - 1);
              }
            }}
            className="rounded-xl bg-white/10 px-5 py-2 text-sm font-semibold transition hover:bg-white/20 disabled:cursor-not-allowed disabled:opacity-45"
          >
            Prev
          </button>
          <button
            onClick={() => setPage((prev) => prev + 1)}
            className="rounded-xl bg-violet-400 px-5 py-2 text-sm font-semibold text-black transition hover:bg-violet-300"
          >
            Next
          </button>
        </div>
      </div>

      {selectedPhoto && (
        <div
          role="button"
          tabIndex={0}
          onClick={() => setSelectedPhoto(null)}
          onKeyDown={(e) => {
            if (e.key === 'Escape' || e.key === 'Enter') {
              setSelectedPhoto(null);
            }
          }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-4xl overflow-hidden rounded-2xl border border-white/10 bg-slate-900"
          >
            <img
              src={selectedPhoto.download_url}
              alt={selectedPhoto.author}
              className="h-[70vh] w-full object-cover"
            />
            <div className="flex items-center justify-between p-4">
              <h3 className="text-lg font-semibold">{selectedPhoto.author}</h3>
              <a
                href={selectedPhoto.url}
                target="_blank"
                rel="noreferrer"
                className="rounded-lg bg-white/10 px-3 py-1 text-sm transition hover:bg-white/20"
              >
                Open Source
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
