// Lofify Service Worker - Offline Caching & PWA Support
const CACHE_NAME = 'lofify-pwa-v1';

const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/manifest.json',
  '/config.js',
  '/assets/images/logo.svg',
  '/assets/images/icon-192.png',
  '/assets/images/icon-512.png',
  '/assets/images/icon-maskable-192.png',
  '/assets/images/icon-maskable-512.png',
  '/assets/images/apple-touch-icon.png'
];

// Install Event - Precache app shell
self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(STATIC_ASSETS).catch((err) => {
        console.warn('[SW] Some assets could not be precached:', err);
      });
    })
  );
});

// Activate Event - Clean old caches & claim clients
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch Event
self.addEventListener('fetch', (event) => {
  const req = event.request;
  const url = new URL(req.url);

  // Skip non-GET requests, Chrome extensions, or API/stream requests
  if (req.method !== 'GET') return;
  if (!url.protocol.startsWith('http')) return;
  
  // Skip caching for external streaming media (Archive.org, Cloudflare audio, YouTube)
  if (url.pathname.endsWith('.mp3') || url.hostname.includes('archive.org') || url.hostname.includes('youtube.com') || url.hostname.includes('supabase.co')) {
    return;
  }

  // Navigation requests: Network first with Cache fallback
  if (req.mode === 'navigate') {
    event.respondWith(
      fetch(req)
        .then((networkRes) => {
          if (networkRes && networkRes.status === 200) {
            const clone = networkRes.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(req, clone));
          }
          return networkRes;
        })
        .catch(() => caches.match(req).then((cached) => cached || caches.match('/index.html')))
    );
    return;
  }

  // Static assets (CSS, JS, images, fonts): Stale-While-Revalidate
  event.respondWith(
    caches.match(req).then((cachedRes) => {
      const fetchPromise = fetch(req).then((networkRes) => {
        if (networkRes && networkRes.status === 200) {
          const clone = networkRes.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(req, clone));
        }
        return networkRes;
      }).catch(() => {/* Offline fallback */});

      return cachedRes || fetchPromise;
    })
  );
});
