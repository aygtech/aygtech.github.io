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
    "revision": "828b2f1364bd110ef272bd475414b9ac"
  },
  {
    "url": "assets/css/0.styles.8e0d51a5.css",
    "revision": "8b369afa03203ae584a70a53308d27ff"
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
    "url": "assets/js/10.5ac78f33.js",
    "revision": "58daebb672e8e13c5722e83333620956"
  },
  {
    "url": "assets/js/11.7aacbdb6.js",
    "revision": "1cfcb6679112a9d648334a85b8d0bff8"
  },
  {
    "url": "assets/js/12.7caa3341.js",
    "revision": "a1d948edf213c055c9a350c6128955d0"
  },
  {
    "url": "assets/js/13.f547a654.js",
    "revision": "1ea02ebbe38bf028bede3252452aeaeb"
  },
  {
    "url": "assets/js/14.947c0733.js",
    "revision": "cefaf79cea7716fb4c0c815fe9cf123b"
  },
  {
    "url": "assets/js/15.95ed6a79.js",
    "revision": "ba68792037e8275533c943d6fc69cd0b"
  },
  {
    "url": "assets/js/16.ebe47925.js",
    "revision": "516e82ef6ae9b835eb2515e357d5aa3e"
  },
  {
    "url": "assets/js/17.074aff8c.js",
    "revision": "3dc334060f8b985dda5d436d738a3e4f"
  },
  {
    "url": "assets/js/18.e9a4672e.js",
    "revision": "9aef12701809f5f436a54437f0bc9183"
  },
  {
    "url": "assets/js/2.24b6dab2.js",
    "revision": "afcb65b83ac9c69af2d1f494ee43416a"
  },
  {
    "url": "assets/js/3.ebd77580.js",
    "revision": "ef79bf6e6159d271dec37d3288aed9d6"
  },
  {
    "url": "assets/js/4.559b8bae.js",
    "revision": "c26c747222a57037d140aee4e781e5a1"
  },
  {
    "url": "assets/js/5.fc8f002d.js",
    "revision": "833165a87aeffefe52643edac99b076f"
  },
  {
    "url": "assets/js/6.8d0742c6.js",
    "revision": "d956e78730ea663f7e6f2666af47946d"
  },
  {
    "url": "assets/js/7.a77ad424.js",
    "revision": "e160f128ac8923fa4a624ff4f6b95bb9"
  },
  {
    "url": "assets/js/8.7f1037b5.js",
    "revision": "2af8a47bbb6e87a7e11f587a8ee634f3"
  },
  {
    "url": "assets/js/9.d6a5ab9c.js",
    "revision": "43dc75d07290b02a1cb4b801a609f04f"
  },
  {
    "url": "assets/js/app.069e4b74.js",
    "revision": "8387aefbe4e31962e1094ee4fc9308fe"
  },
  {
    "url": "camera.png",
    "revision": "3ead9b35903b562541ed4ab1f41abfb2"
  },
  {
    "url": "config/index.html",
    "revision": "6327f7c82b1f66d3da2d1412757f0da6"
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
    "revision": "fa3ec1f5379a3c97d2b3058845948a15"
  },
  {
    "url": "done.png",
    "revision": "9180e4bfa05d56a58f0f314c4b743049"
  },
  {
    "url": "guide/change-log.html",
    "revision": "cdd7b6a74dc379528065e25b466d5425"
  },
  {
    "url": "guide/component.html",
    "revision": "aa74c3ba41f9688eae0137e62468447c"
  },
  {
    "url": "guide/debug.html",
    "revision": "b125bddfe608ecddf7cc06dc06618ef2"
  },
  {
    "url": "guide/eslint.html",
    "revision": "245e3519e4e8fc8cf4770a387141a0b0"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "89cf865730c4a6d0fe3a0aaa609f6b43"
  },
  {
    "url": "guide/index.html",
    "revision": "efc90ed0aec20ca456280c20f0ef95e5"
  },
  {
    "url": "guide/lottie.html",
    "revision": "3f3ece3e2d814631c5d828c4d83a727a"
  },
  {
    "url": "guide/module.html",
    "revision": "210d1d6a0f256e81feed4e0ef8b577a0"
  },
  {
    "url": "guide/native-android.html",
    "revision": "ecb3eb2611dbf561eb4483f5a1aa41bf"
  },
  {
    "url": "guide/native-ios.html",
    "revision": "7e8e0784572b575c30f0d6ff0a41b69a"
  },
  {
    "url": "guide/project.html",
    "revision": "00abdc7dc437831bf1c17a4a2b690cbd"
  },
  {
    "url": "guide/who-s-using.html",
    "revision": "35aab17d2bea3acd575d8b7e705fce21"
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
    "revision": "0fc6e8b8f2b06b83c01f0be764b8ab89"
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
