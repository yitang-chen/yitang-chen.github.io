'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "7721c82769c75c39b1ebc1c7e23c9daa",
"version.json": "eb1ac89d167db41ba93c11021e83e04e",
"index.html": "3e5cc6a9ff09a591ecdfcdd4fb4ea27e",
"/": "3e5cc6a9ff09a591ecdfcdd4fb4ea27e",
"main.dart.js": "2b6588edfdb743f923bbd755deb968a2",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "303451b06e8eb1fa31b4c3f5d07cfe29",
".git/ORIG_HEAD": "5131192568f437ac706bf67984664b13",
".git/config": "d481a0bfd66031886bb4c7fbc7ca86b0",
".git/objects/95/27e95bcd27e7b37ff3e7bc0e3875dd81367158": "d9c618dca44365e3a8a423dba392ddce",
".git/objects/66/19f4931f0f97fec8df2a68a6f566506253d184": "71356d9833784d53ea14ce2743a7afa4",
".git/objects/3e/d0ddd7136a48520910e7e4bf665362facd60d4": "c8322669a78b5f07c75b1decdc05718d",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/9b/d3accc7e6a1485f4b1ddfbeeaae04e67e121d8": "784f8e1966649133f308f05f2d98214f",
".git/objects/32/8014d445e56f3ea9cb70706a8e9fa11622dac5": "330f88a51127282abff16f3bf4635d5c",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/5a/e75076bb17b38065782126c6af9f2434b1c615": "c48f2367559f8a9a3f1360772cd338b6",
".git/objects/02/063780a0096a35c8c6b9fdbd1fcc23d1eaaf8c": "701d7cf310a61f0c66cbb08085c85219",
".git/objects/b2/52a1f48c49806b04d8507c614e6f530e145f8e": "51cc2a56d4a13afcc00d5f3252d1bb4c",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d7/95d7fceb6b6db3e1719116297e147d2d8e3293": "1ac553f54ff143489a9dc80615287f88",
".git/objects/bd/13cd1d69f8c16f3ab841fd8f11793ce1fa400f": "8cd494aeb0ce1cf5a2f4047e2dde25e7",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/ca95d1ed4696236d3dc534b72c9ef4074ca522": "c42dd860bfde1ec7d84c1d79ca083e3e",
".git/objects/ee/0e319c5539dbb17d9167d3b7194b5e1a963b42": "b8904b0dc33f998f23b01fa587059178",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/de2123bc57627b0e1a934d3bbe1e6d95acbe39": "01ddfbd937b4a0bed45fa096a690d0e1",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/fe/14e6206b7a61cb5985d2d93390df5e5b94f5f5": "948761eef4f250ab5113ecf05a30eb61",
".git/objects/c8/08fb85f7e1f0bf2055866aed144791a1409207": "92cdd8b3553e66b1f3185e40eb77684e",
".git/objects/c1/7349f8dc539f947f35d32c8aa86c9a6a64a66d": "c264e6f6c76259b74dc755c5864e5cea",
".git/objects/4e/c86b138f329a342a46eb34ebe5856925f18d01": "7915a61800f04a698cfc20d11e228b7f",
".git/objects/27/82cfa0192fdf9c1c10b104568bcad747f269df": "1ca8e33969c83e49ffa2a97565a92192",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/7c/c4960c0dd28a95bef9b282a2c334d5e0c6b181": "af03f1967b43a7a09d8fecd53ec3735d",
".git/objects/42/5ee999a6da43e1cc9ddd21aae8455705af9ace": "dd56acd2c210b036a0c93e23eaf9e960",
".git/objects/89/456bbe9936ae27b8b26aa8d36ab0757afd31f1": "0d8c62c1714b00789abc0168560ab0c1",
".git/objects/73/c63bcf89a317ff882ba74ecb132b01c374a66f": "6ae390f0843274091d1e2838d9399c51",
".git/objects/1a/d7683b343914430a62157ebf451b9b2aa95cac": "94fdc36a022769ae6a8c6c98e87b3452",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/8a/2f11e4c6c7631e07530252ec586cdf41c05e4c": "a6bf72bf86d2b85d165b25dbf9e1d626",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/7e/2484502146f92d2e6fe89272cf2ed3dbc12514": "05e8c9582022642d3eb2610d8dbf2e75",
".git/objects/81/976d8b91799edc587a4b75159472b5fdebbe1d": "11f6cb406db835292a9b59f7501f9de0",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9f/928bc3f9c07c3fd7cd1e02462f4cd5e80f3c87": "f74d50b759d844f6eab3ad666863f9dd",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/53/18a6956a86af56edbf5d2c8fdd654bcc943e88": "a686c83ba0910f09872b90fd86a98a8f",
".git/objects/53/3d2508cc1abb665366c7c8368963561d8c24e0": "4592c949830452e9c2bb87f305940304",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/dc/11fdb45a686de35a7f8c24f3ac5f134761b8a9": "761c08dfe3c67fe7f31a98f6e2be3c9c",
".git/objects/d5/3609a55aca6f142c86a5abd11880cfbf29d4d2": "6faa1268b304551a49413106abce34b8",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/de/aa6d541c061900dfcad6a78b1b62ab803e0103": "5ebe2033ffb1daedc4bec2d8730d20f8",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/6a5236065a6c0fb7193cb2bb2f538b2d7b4788": "4227e5e94459652d40710ef438055fe5",
".git/objects/f0/14419cc3e81cddf1e7a7b08b14df0f421f5a75": "5c9ae38b37b65f7e19e099df93b32e09",
".git/objects/f7/d7b087cac82dccaa279ecd79516278c25bec61": "612018c6a2a3786360cddcf3014b997c",
".git/objects/fa/1e65de412fa1f7366b95f66ec9339bec3ba243": "58111fda0191a6e1076ab04cb64aa911",
".git/objects/fa/9c9b0f943388d696a891c8f5db0a7dab100d94": "43450f1633b1296a40eacf0ca63e803a",
".git/objects/fa/d4735524db8c27cb08ee8d4eac0a44de9ffa7b": "1917cba0b9020950ae7400d2f74f2a5d",
".git/objects/ff/a599fe1a3581348bdee866bb4af3f1dba61733": "899b7731306737f2538eda56560234c2",
".git/objects/c5/4902f2b04fdd7a1a818337e44232b34db1a956": "6523320a0d264b44258e91f8c16c26b1",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/cb/6b7a6137f8e01d986294349a6bc2fadc6d1849": "9df7d09456db8013ef6b3c4b23309f7a",
".git/objects/f8/84bc37605deea392df39b0f8856c08975b9df8": "79d004016ee508a7a73709b750d40d81",
".git/objects/e0/7ac7b837115a3d31ed52874a73bd277791e6bf": "74ebcb23eb10724ed101c9ff99cfa39f",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/83/49db26e24a438de6105443b172a1ecc94fc7b2": "f6e2cab9b63675a12aff4aa1d93df1ef",
".git/objects/70/a234a3df0f8c93b4c4742536b997bf04980585": "d95736cd43d2676a49e58b0ee61c1fb9",
".git/objects/70/a3b3cfcb1bbcce1fa85a38a9332b6e6e371706": "43de2665fcf2b07e67725a1224a61a86",
".git/objects/84/cc11b5fd3685dcb05e252d4ac37a4d187b453d": "2e0de3dbed58681b8014760155b75524",
".git/objects/1d/09886e31d65208ead5e1cb17abd1e04e6ec892": "3ce6aa2d9e264317762c8a38c7fe1d40",
".git/objects/47/66b6872adf0145627ceb410179d9799cee5c52": "67df8d2d41664094ca636bb1bdb92ebb",
".git/objects/13/fc0a1fcebdcb74a84f3a32a7d57223d1aa8956": "0194cdfeadaf6d1219adab21440e5e92",
".git/objects/14/bd408ee89739f093e11ffb9061033d221b6fdd": "a295725ceb6315956bb5011de4766bbe",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "23b8f514ccbf668e1ee85b03ddd21f7e",
".git/logs/refs/heads/main": "23b8f514ccbf668e1ee85b03ddd21f7e",
".git/logs/refs/remotes/origin/main": "bf2fd6d968e0299e6f94dcdb2677eda1",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "5131192568f437ac706bf67984664b13",
".git/refs/remotes/origin/main": "5131192568f437ac706bf67984664b13",
".git/index": "81f9489a69ce175148272e3dadd0cb82",
".git/COMMIT_EDITMSG": "656848d8e8d865afe55c8e4ce7d7345c",
".git/FETCH_HEAD": "5a7846586f6dc8170eb755f8da2965b3",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/NOTICES": "23b73dd46707263c7f5e517905b6c73b",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "69a99f98c8b1fb8111c5fb961769fcd8",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "693635b5258fe5f1cda720cf224f158c",
"assets/fonts/MaterialIcons-Regular.otf": "c0ad29d56cfe3890223c02da3c6e0448",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
