const CACHE_NAME = "temp-app-v1";

const urlsToCache = [
  "/",
  "/modular.html",
  "/styles.css",
  "/scriptModular.js",
  "/manifest.json"
];

// INSTALA CACHE
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

// OFFLINE
self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});