importScripts(
  "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js"
);

if (workbox) {
  // console.log(`Yay! Workbox is loaded 🎉`);
  // Use an explicit cache-first strategy and a dedicated cache for images.
  workbox.routing.registerRoute(
    new RegExp("./"),
    new workbox.strategies.NetworkFirst({
      cacheName: "app",
      plugins: [
        new workbox.expiration.Plugin({
          // Cache only 50 files.
          maxEntries: 50,
          // Cache for a maximum of an hour
          maxAgeSeconds: 1 * 1 * 60 * 60
        })
      ]
    })
  );
  
  workbox.routing.registerRoute(
  /.*fontawesome\.com/,
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: 'font-awesome',
  })
);

} else {
  console.log(`Boo! Workbox didn't load 😬`);
}
