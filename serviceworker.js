// Seraf: the homepage is no longer the Squoosh app shell. The previous service
// worker cached "/" (cache-first), so this version clears those caches, stops
// intercepting requests and reloads open tabs once so visitors see the new site.
self.addEventListener('install', function () { self.skipWaiting(); });
self.addEventListener('activate', function (event) {
  event.waitUntil((async function () {
    var keys = await caches.keys();
    await Promise.all(keys.map(function (k) { return caches.delete(k); }));
    await self.clients.claim();
    var wins = await self.clients.matchAll({ type: 'window' });
    wins.forEach(function (c) { try { c.navigate(c.url); } catch (e) {} });
  })());
});
self.addEventListener('message', function () {});
