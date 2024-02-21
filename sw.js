self.addEventListener("install", (e) => {
  e.waitUntil(
    (async () => {
      const cache = await caches.open('pwa-icon');
      await cache.addAll(['/pwa-icon/index.html']);
    })()
  );
});
