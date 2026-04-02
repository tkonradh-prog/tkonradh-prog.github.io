self.addEventListener('install', event => {
    self.skipWaiting();
});

self.addEventListener('activate', event => {
    event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => {
    // Basic fetch listener required by Chrome for PWA installability,
    // we bypass strict caching to prevent crash errors
});
