const CACHE_NAME = 'seerah-app-v1';
const ASSETS = [
    '/',
    '/index.html',
    '/journey.html',
    '/js/app.js',
    '/js/templates.js',
    '/js/theme.js',
    '/data/seerah.json',
    '/manifest.json',
    'https://cdn.tailwindcss.com',
    'https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700&family=Inter:wght@300;400;600&family=Merriweather:ital,wght@0,300;0,400;0,700;1,300&display=swap'
];

// Install Event
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log('Caching assets');
                return cache.addAll(ASSETS);
            })
    );
});

// Activate Event
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((keys) => {
            return Promise.all(
                keys.filter((key) => key !== CACHE_NAME)
                    .map((key) => caches.delete(key))
            );
        })
    );
});

// Fetch Event
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then((cachedResponse) => {
                // Return cached response if found, otherwise fetch from network
                return cachedResponse || fetch(event.request).then((response) => {
                    // Cache new requests dynamically (optional, but good for data)
                    return caches.open(CACHE_NAME).then((cache) => {
                        cache.put(event.request, response.clone());
                        return response;
                    });
                });
            })
    );
});
