/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "658dbb3360791c89883d0c0bbb6d9a0b"
  },
  {
    "url": "assets/css/0.styles.159835fe.css",
    "revision": "59d575c9879b1aaa4a29c9e930df2426"
  },
  {
    "url": "assets/img/debug1.35fccfe4.png",
    "revision": "35fccfe4ab797b8ffe407c40ae3eb4e8"
  },
  {
    "url": "assets/img/debug2.042bf797.png",
    "revision": "042bf79707589fca59eef912a65641f0"
  },
  {
    "url": "assets/img/debug4.f4aad4d4.png",
    "revision": "f4aad4d4aa3a62e952a48a7cf4c74074"
  },
  {
    "url": "assets/img/debug5.ca1a85a6.png",
    "revision": "ca1a85a63941f1cd359968cac384c18c"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.7bc75524.js",
    "revision": "0172c79d68ce9134c548a27ccb333350"
  },
  {
    "url": "assets/js/11.d83df0fb.js",
    "revision": "6fd3b4352f268e03b60a23afc9b8ba25"
  },
  {
    "url": "assets/js/12.3d75f332.js",
    "revision": "7fee2d1bbeb8f9403ce429e3e2f80d2c"
  },
  {
    "url": "assets/js/13.d5754214.js",
    "revision": "6df717438d9e3be2e5f577fd2950934d"
  },
  {
    "url": "assets/js/14.efe9d1fd.js",
    "revision": "b6fe4760e39590c5cd0083eea77c4622"
  },
  {
    "url": "assets/js/15.643e020a.js",
    "revision": "f43178f232f2cf06406cbcc40cd7576f"
  },
  {
    "url": "assets/js/16.78a9d3ea.js",
    "revision": "e05a2ff388abbb41429b18f48cf99baf"
  },
  {
    "url": "assets/js/2.79907540.js",
    "revision": "f6668df5583d15e0e6d66979a72d1c9b"
  },
  {
    "url": "assets/js/3.05edb05d.js",
    "revision": "dc431be7a86999d372cb49d5ffe4242f"
  },
  {
    "url": "assets/js/4.71f832d4.js",
    "revision": "6bdfc2098bcbbab6109d69b99f01b211"
  },
  {
    "url": "assets/js/5.86d10582.js",
    "revision": "48a5b5b5d295921615ffac52a7ef0986"
  },
  {
    "url": "assets/js/6.c0055a1f.js",
    "revision": "d8413bf8bb9e1fcf180a3f57112f986c"
  },
  {
    "url": "assets/js/7.4935580a.js",
    "revision": "5dd7c91da035dcb3956e36cf9f6e91de"
  },
  {
    "url": "assets/js/8.d271ed27.js",
    "revision": "3284017f0f77a2e6d925b440b7044c68"
  },
  {
    "url": "assets/js/9.15e3c44c.js",
    "revision": "04e02d05eb3c8ba193c4aa57b535bcf2"
  },
  {
    "url": "assets/js/app.d6a02b5c.js",
    "revision": "d562cae0160273339e9fca7bf3cd4b5e"
  },
  {
    "url": "camera.png",
    "revision": "3ead9b35903b562541ed4ab1f41abfb2"
  },
  {
    "url": "config/index.html",
    "revision": "52f92b45059e03891d3c72cdc056e2c9"
  },
  {
    "url": "debug1.png",
    "revision": "35fccfe4ab797b8ffe407c40ae3eb4e8"
  },
  {
    "url": "debug2.png",
    "revision": "042bf79707589fca59eef912a65641f0"
  },
  {
    "url": "debug3.png",
    "revision": "f77773272edb88c73c218a227944d54b"
  },
  {
    "url": "debug4.png",
    "revision": "f4aad4d4aa3a62e952a48a7cf4c74074"
  },
  {
    "url": "debug5.png",
    "revision": "ca1a85a63941f1cd359968cac384c18c"
  },
  {
    "url": "default-theme-config/index.html",
    "revision": "66ae119395d159d0a5d5d3a9c9656750"
  },
  {
    "url": "done.png",
    "revision": "9180e4bfa05d56a58f0f314c4b743049"
  },
  {
    "url": "guide/assets.html",
    "revision": "aa9a932e62678f14052b1b0070b545b0"
  },
  {
    "url": "guide/change-log.html",
    "revision": "a481fb7ad72ee89cf1432461436d6daa"
  },
  {
    "url": "guide/debug.html",
    "revision": "3bb6eabb2d754af5a7ce5af264709df6"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "1e1d87329f2c52eb7c0f523c4df818c1"
  },
  {
    "url": "guide/index.html",
    "revision": "194117834ef2b2a7ace29ed93da57b86"
  },
  {
    "url": "guide/module.html",
    "revision": "13e679694d583f471fb89b549f91adad"
  },
  {
    "url": "guide/native-android.html",
    "revision": "a3eabf646e28008d246421ec05977ddf"
  },
  {
    "url": "guide/native-ios.html",
    "revision": "fed28f0a61a2622abcba5e8593f26d3c"
  },
  {
    "url": "guide/project.html",
    "revision": "3d8e967210b6a688623c9d921a038f7a"
  },
  {
    "url": "guide/who-s-using.html",
    "revision": "5647b3d79dd7517215c0ec71ebf14a83"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "f130a0b70e386170cf6f011c0ca8c4f4"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "0ff1bc4d14e5c9abcacba7c600d97814"
  },
  {
    "url": "icons/apple-touch-icon-120x120.png",
    "revision": "936d6e411cabd71f0e627011c3f18fe2"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "1a034e64d80905128113e5272a5ab95e"
  },
  {
    "url": "icons/apple-touch-icon-180x180.png",
    "revision": "c43cd371a49ee4ca17ab3a60e72bdd51"
  },
  {
    "url": "icons/apple-touch-icon-60x60.png",
    "revision": "9a2b5c0f19de617685b7b5b42464e7db"
  },
  {
    "url": "icons/apple-touch-icon-76x76.png",
    "revision": "af28d69d59284dd202aa55e57227b11b"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "66830ea6be8e7e94fb55df9f7b778f2e"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "4bb1a55479d61843b89a2fdafa7849b3"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "98b614336d9a12cb3f7bedb001da6fca"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "b89032a4a5a1879f30ba05a13947f26f"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "058a3335d15a3eb84e7ae3707ba09620"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "f22d501a35a87d9f21701cb031f6ea17"
  },
  {
    "url": "index.html",
    "revision": "489f2b3cd3bff17ef9ba121f6c15ac0b"
  },
  {
    "url": "line-numbers-desktop.png",
    "revision": "7c8ccab7c4953ac2fb9e4bc93ecd25ac"
  },
  {
    "url": "line-numbers-mobile.gif",
    "revision": "580b860f45436c9a15a9f3bd036edd97"
  },
  {
    "url": "logo.png",
    "revision": "6b7fc72eee2bce0e11b0829f07a9d2c9"
  },
  {
    "url": "refesh.png",
    "revision": "66db8f9957c08745a864258b19db4e77"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
