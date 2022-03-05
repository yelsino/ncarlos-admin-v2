// @ts-nocheck
// imports
importScripts('src/service/sw-utils.js');

const STATIC_CACHE = 'static-v1';
const DYNAMIC_CACHE = 'dynamic-v1';
const INMUTABLE_CACHE = 'inmutable-v1';

const APP_SHELL = [
  '/',
  'index.html',
  'src/favicon.svg',
  'src/assets/img/logo.png',
  'src/assets/img/mandarina.png',
  'src/assets/img/nuevo_producto.png',
  'src/assets/img/nuevo_producto2.png',
  'src/assets/img/perfil.jpg',
  'src/assets/img/icons/brocoli.png',
  'src/assets/img/icons/leche.png',
  'src/assets/img/icons/manzana.png',
  'src/service/sw-utils.js',
];

const APP_SHELL_INMUTABLE = [
  'https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800&display=swap',
  // 'https://fonts.gstatic.com',
  // 'https://fonts.googleapis.com',
];


self.addEventListener('install', e => {
  const cacheStatic = caches.open(STATIC_CACHE).then(cache => cache.addAll(APP_SHELL));
  const cacheInmutable = caches.open(INMUTABLE_CACHE).then(cache => cache.addAll(APP_SHELL_INMUTABLE));


  e.waitUntil(Promise.all([cacheStatic, cacheInmutable]));
});

self.addEventListener('activate', e => {
  const respuesta = caches.keys().then(keys => {
    keys.forEach(key => {

      if (key !== STATIC_CACHE && key.includes('static')) {
        return caches.delete(key);
      }
    })
  });

  e.waitUntil(respuesta);
});

self.addEventListener('fetch', e => {

  const respuesta = caches.match(e.request).then(res => {
    if (res) {
      return res;
    } else {
      return fetch(e.request).then(newRes => {
        return actualizaCacheDinamico(DYNAMIC_CACHE, e.request, newRes);
      })
    }

  });



  e.respondWith(respuesta);
})