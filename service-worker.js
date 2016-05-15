
var staticCacheName = 'vms-static-v6';

self.addEventListener('install', function (event) {
    console.log("install a fetch !");
    event.waitUntil(
      caches.open(staticCacheName).then(function (cache) {
          return cache.addAll([
               '/',
              '/index.html',
              '/indexController.js',
              '/service-worker.js',
              'assets/img/logo_blueridge.jpg',
              '/assets/css/bootstrap.css',
              '/assets/css/font-awesome.css',
              'assets/js/morris/morris-0.4.3.min.css',
              'assets/css/custom.css',
              'assets/js/jquery-1.10.2.js',
              'scripts/JS/jquery-ui.js',
              'scripts/JS/webcam.js',
              'scripts/JS/photo.js',

          ]);
      })
    );
});

self.addEventListener('activate', function (event) {
    event.waitUntil(
      caches.keys().then(function (cacheNames) {
          return Promise.all(
            cacheNames.filter(function (cacheName) {
                return cacheName.startsWith('vms-static-') &&
                       cacheName != staticCacheName;
            }).map(function (cacheName) {
                return caches.delete(cacheName);
            })
          );
      })
    );
});


self.addEventListener('fetch', function (event) {
    event.respondWith(
      caches.match(event.request)
        .then(function (response) {
            // Cache hit - return response
            if (response) {
                return response;
            }

            return fetch(event.request);

            //    .then(function (networkResponse) {
            //    if (networkResponse.status < 400) {
            //        cache.put(requestUrl, networkResponse.clone());
            //    }
            //    return networkResponse;
            //}).catch(function (error) {
            //    return caches.match('/index.html');
            //});
        }
      )
    );
});
self.addEventListener('message', function (event) {
    //alert(event.data);
})

