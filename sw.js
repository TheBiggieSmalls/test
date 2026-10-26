self.addEventListener('fetch', (event) => {
  // Simpele doorvoer voor offline gebruik
  event.respondWith(fetch(event.request).catch(() => caches.match(event.request)));
});