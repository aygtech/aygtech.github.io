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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "a56e03d137e55d4dfbf1c218c9851930"
  },
  {
    "url": "assets/css/0.styles.c133f32e.css",
    "revision": "db0b54022ac1b998282e22ebaab683c1"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.b304a0c7.js",
    "revision": "beb98712a204c364105ae32c14a989cf"
  },
  {
    "url": "assets/js/11.6c3fda95.js",
    "revision": "7e4e86af514329c85bb3ac882d25bea6"
  },
  {
    "url": "assets/js/12.ff03d9b1.js",
    "revision": "74b6afaadb420abacaa02e1159d6133b"
  },
  {
    "url": "assets/js/13.22e2b48f.js",
    "revision": "0b8a10ed5b225e2ad99529e2b51658c0"
  },
  {
    "url": "assets/js/14.4ddaeb76.js",
    "revision": "7c4fc178978e39aa84ba855be2938d6c"
  },
  {
    "url": "assets/js/15.b22ec1e1.js",
    "revision": "9ecb61bd8c8462e8499bb28ec61bc1a3"
  },
  {
    "url": "assets/js/2.cc7d0820.js",
    "revision": "448bde37a675e0a3f318e4e777661bef"
  },
  {
    "url": "assets/js/3.8d16e7ad.js",
    "revision": "bf9282d63f783133b7253ca33adfa9a3"
  },
  {
    "url": "assets/js/4.1e32de50.js",
    "revision": "2551c84433ee0f8655d6825469ba6951"
  },
  {
    "url": "assets/js/5.5522fdee.js",
    "revision": "c51fee961e4384efc8e72f978a3939b3"
  },
  {
    "url": "assets/js/6.5e438f35.js",
    "revision": "d8107e4139b977739caea4ec32d1390b"
  },
  {
    "url": "assets/js/7.93685385.js",
    "revision": "cf81adf4482ad11b5d5c8a1abfecda5a"
  },
  {
    "url": "assets/js/8.732d8731.js",
    "revision": "42f80d9a46d0870997c1f719fd4af5c8"
  },
  {
    "url": "assets/js/9.c533b068.js",
    "revision": "96a815105a38e15534a35d48eae5e7fe"
  },
  {
    "url": "assets/js/app.3affe1e6.js",
    "revision": "b3e6a394388ca4be7d0508a03a6730a3"
  },
  {
    "url": "assets/js/vendors~docsearch.092c8dec.js",
    "revision": "bd8f591efec4a22e6ef9d9441482d382"
  },
  {
    "url": "config/index.html",
    "revision": "b2e9ff403642d377b9f4b86074876bf5"
  },
  {
    "url": "default-theme-config/index.html",
    "revision": "141da6091ceeedae2bb874cc0b771f98"
  },
  {
    "url": "guide/assets.html",
    "revision": "eba23c102e8dcdd0a5f8cfaa54f8de68"
  },
  {
    "url": "guide/basic-config.html",
    "revision": "a01a3b359086aa88ed9353f1351501a8"
  },
  {
    "url": "guide/custom-themes.html",
    "revision": "85c06929b75b95bb44d710bbbfbce0d8"
  },
  {
    "url": "guide/deploy.html",
    "revision": "979e9595c558da63f00fa7748e5181ed"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "46eb090414e7f33c4d6a69921eec2808"
  },
  {
    "url": "guide/i18n.html",
    "revision": "7f911e57aff15f791e374e18410a77d8"
  },
  {
    "url": "guide/index.html",
    "revision": "76ec07259a70209c2dab385563f63f05"
  },
  {
    "url": "guide/module.html",
    "revision": "fa05705fa657a917c0e98d4320a07be9"
  },
  {
    "url": "guide/using-vue.html",
    "revision": "ed603f2185ce9d61324a5752947f7ec8"
  },
  {
    "url": "hero.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
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
    "revision": "1b57a423541e0b104d983d322fde278c"
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
    "revision": "cf23526f451784ff137f161b8fe18d5a"
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
