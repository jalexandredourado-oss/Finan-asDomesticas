const CACHE_NAME = 'finance-app-cache-v1';

const FILES = [
  "./",
  "./index.html",
  "./manifest.json"
];
// Evento de Instalação: Salva os arquivos essenciais no cache
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(FILES))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
