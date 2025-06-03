const CACHE_NAME = 'hunsuchung-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  'http://advicebug.winterholic.net/icons/icon-192x192.png',
  'http://advicebug.winterholic.net/icons/icon-512x512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
}); 
