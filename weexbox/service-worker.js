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
    "revision": "f78aa379c8c3ccc85308bf8341c27390"
  },
  {
    "url": "assets/css/0.styles.8224d0be.css",
    "revision": "00ca26d197de0f9bbcebb642daf3cbf8"
  },
  {
    "url": "assets/img/debug2.d7c24ebe.png",
    "revision": "d7c24ebe037a428758101df3c2fa7163"
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
    "url": "assets/js/10.4668bae2.js",
    "revision": "f1ed3d38bf2f5546c0e8e529dd0c30b8"
  },
  {
    "url": "assets/js/11.2e516f59.js",
    "revision": "6b29d7289a4577114e10788ff8c0531c"
  },
  {
    "url": "assets/js/12.0fc8ef43.js",
    "revision": "abdb130db271d5a3519ce3cb7b4d4a36"
  },
  {
    "url": "assets/js/13.2896c9a0.js",
    "revision": "85b4aa773ccebee88a9eab644059f639"
  },
  {
    "url": "assets/js/14.2c47cd87.js",
    "revision": "9338588e6932269210d7c846976e7392"
  },
  {
    "url": "assets/js/15.49dd3bd5.js",
    "revision": "6f90b0e244a4750a6a67d98cf0a8092c"
  },
  {
    "url": "assets/js/16.d569bbe0.js",
    "revision": "3bbf6f28bb5bf7af4363f74742a291c9"
  },
  {
    "url": "assets/js/17.161f7c1e.js",
    "revision": "48a9491ea67eb731d397ad54fc4ccf8a"
  },
  {
    "url": "assets/js/18.9adb62bf.js",
    "revision": "ad3d11ac13cb97f0df243730926ab86c"
  },
  {
    "url": "assets/js/19.45f22de8.js",
    "revision": "0035b7cee70ff77fe4c3e9b7d364226a"
  },
  {
    "url": "assets/js/2.80e3e019.js",
    "revision": "dd8488c246f11781af7f6fab68f3dbe5"
  },
  {
    "url": "assets/js/3.89a656e1.js",
    "revision": "511f0082e50c0ec71a86b998c655c9e4"
  },
  {
    "url": "assets/js/4.e2fa81c4.js",
    "revision": "e733d41848e708ce7763c3babe3c9f00"
  },
  {
    "url": "assets/js/5.a09cbfb1.js",
    "revision": "6f473f054ad3a74218ba9f5ba02b20f1"
  },
  {
    "url": "assets/js/6.4fba5387.js",
    "revision": "29798ccc5a3c2c6fd72541be0407485b"
  },
  {
    "url": "assets/js/7.9ee8921d.js",
    "revision": "05cf6f551939e092767345b9a8c931b0"
  },
  {
    "url": "assets/js/8.f1eac932.js",
    "revision": "d7eb660e2ef2d61409078cf293eb5f2a"
  },
  {
    "url": "assets/js/9.beae9333.js",
    "revision": "0e5230b0c9d0cc179896ca292175e0f3"
  },
  {
    "url": "assets/js/app.98df15a5.js",
    "revision": "d5e1f80d8b55bea2df1555d19436b84e"
  },
  {
    "url": "camera.png",
    "revision": "3ead9b35903b562541ed4ab1f41abfb2"
  },
  {
    "url": "config/index.html",
    "revision": "84065d844093f9b5aa853fd6e159d037"
  },
  {
    "url": "debug1.png",
    "revision": "04b9976587fa44f414d853e359a3e6ef"
  },
  {
    "url": "debug2.png",
    "revision": "d7c24ebe037a428758101df3c2fa7163"
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
    "revision": "3cd1643d0c08e48dad986e8d5cef508e"
  },
  {
    "url": "done.png",
    "revision": "9180e4bfa05d56a58f0f314c4b743049"
  },
  {
    "url": "guide/assets.html",
    "revision": "70d82ee58c612eba29934a042e7db189"
  },
  {
    "url": "guide/change-log.html",
    "revision": "73f35023edb961b183344775f031a174"
  },
  {
    "url": "guide/component.html",
    "revision": "eda995d99805687f31edfeb508ce5aba"
  },
  {
    "url": "guide/debug.html",
    "revision": "79a16b84f89cfd72acfde9a642433a46"
  },
  {
    "url": "guide/eslint.html",
    "revision": "cc99206a1b398cd0375e86cbb9b2d720"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "a0c46903a1ae0d374cb63ab7d1bca87b"
  },
  {
    "url": "guide/index.html",
    "revision": "bd05eeb83bbb628b839ce88b571e32f1"
  },
  {
    "url": "guide/lottie.html",
    "revision": "d06d06765d0aff0c69e0ef77e0b71d73"
  },
  {
    "url": "guide/module.html",
    "revision": "1ff48a2c2a8a826fcd5fab53af30bd05"
  },
  {
    "url": "guide/native-android.html",
    "revision": "addfa97f13a52c1c864886642417d51e"
  },
  {
    "url": "guide/native-ios.html",
    "revision": "68c9ddd882ca054b183930e9aedee8b0"
  },
  {
    "url": "guide/project.html",
    "revision": "2bb61606199cd759bee93a4c6182229e"
  },
  {
    "url": "guide/who-s-using.html",
    "revision": "363d6ff3babe1853d8b00a99766a7e77"
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
    "url": "image/modal/actionSheet.png",
    "revision": "e2a0dbb0bdad7837d25ad345d8dd4cdf"
  },
  {
    "url": "image/modal/alert.png",
    "revision": "9f2c601a551c87b37501e2a2723151e0"
  },
  {
    "url": "image/modal/confirm.png",
    "revision": "5723a2353a85aa4e3ba312bc2b97702f"
  },
  {
    "url": "image/modal/prompt.png",
    "revision": "1c31212b2214c9a6f780111afa030b04"
  },
  {
    "url": "image/modal/showLoading.png",
    "revision": "28cc23f269828a978448ba110b785439"
  },
  {
    "url": "image/modal/showToast.png",
    "revision": "3a426d37f98d8a09f72332c9f52085a2"
  },
  {
    "url": "index.html",
    "revision": "bf9e8d8e7d361dc8e074b41431b9d625"
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
    "revision": "534548720548c4ddcb634d05a271f06e"
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
