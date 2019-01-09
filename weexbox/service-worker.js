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
    "revision": "ce180238b28cac8e893b5adaa2af0e3e"
  },
  {
    "url": "assets/css/0.styles.159835fe.css",
    "revision": "59d575c9879b1aaa4a29c9e930df2426"
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
    "url": "assets/js/10.336578bc.js",
    "revision": "3297d17a6e81147e1b1dec522b9b0e85"
  },
  {
    "url": "assets/js/11.a605a346.js",
    "revision": "347e38f1173baccb815625482af5b85b"
  },
  {
    "url": "assets/js/12.39d54a4b.js",
    "revision": "6a4fcb8d387a1ce35eee11973ef1f482"
  },
  {
    "url": "assets/js/13.1076a745.js",
    "revision": "e3991ef32ea925e732826e890937aa4c"
  },
  {
    "url": "assets/js/14.e9335f5f.js",
    "revision": "b069dbb494289504e6144625828d24ac"
  },
  {
    "url": "assets/js/15.0e3d1370.js",
    "revision": "ae4946723a3eef8dba11a37341b575f1"
  },
  {
    "url": "assets/js/16.8aacb74a.js",
    "revision": "34c348b575c6aaa0153e9020f5b80afe"
  },
  {
    "url": "assets/js/17.4820b94a.js",
    "revision": "e9d09aa0c177fe0a532b36a80b58d587"
  },
  {
    "url": "assets/js/2.576291e5.js",
    "revision": "f82e07867e3ea82ff5f7a02a961d3c41"
  },
  {
    "url": "assets/js/3.ebd77580.js",
    "revision": "ef79bf6e6159d271dec37d3288aed9d6"
  },
  {
    "url": "assets/js/4.bcb3d451.js",
    "revision": "3ef541e70b8b7298a40849dc2ae1e20e"
  },
  {
    "url": "assets/js/5.89132655.js",
    "revision": "29207012cda6458104e0172e39b49584"
  },
  {
    "url": "assets/js/6.1702b7ef.js",
    "revision": "b498eeb418e10f5e2abafb75a2b50f58"
  },
  {
    "url": "assets/js/7.485b099e.js",
    "revision": "ce5e93d27da27571332ec7cca876dde5"
  },
  {
    "url": "assets/js/8.28c2c8df.js",
    "revision": "4ef37436302ccb33e29d327c7e1ecd4f"
  },
  {
    "url": "assets/js/9.292a5692.js",
    "revision": "3c75d37f3af3500a03ef1237b92493ce"
  },
  {
    "url": "assets/js/app.bcc2b484.js",
    "revision": "be123b56acb9de407b31325029e7f2f9"
  },
  {
    "url": "camera.png",
    "revision": "3ead9b35903b562541ed4ab1f41abfb2"
  },
  {
    "url": "config/index.html",
    "revision": "7ffa90ebc197b17045e236e022beb1ed"
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
    "revision": "271b42d69d6de78f5e8b01b507372761"
  },
  {
    "url": "done.png",
    "revision": "9180e4bfa05d56a58f0f314c4b743049"
  },
  {
    "url": "guide/assets.html",
    "revision": "8c5b13b66bff34b7b65881534848a266"
  },
  {
    "url": "guide/change-log.html",
    "revision": "50fcbe0d665985e26deca2011d506b31"
  },
  {
    "url": "guide/debug.html",
    "revision": "e53751c3c656949f0e15babb30995986"
  },
  {
    "url": "guide/eslint.html",
    "revision": "087734e83514177f3a5f022ec4fa030d"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "48190c170e8ac292551820aa03f4dad7"
  },
  {
    "url": "guide/index.html",
    "revision": "84a3cdbece9d112c2ba033bad89e95e7"
  },
  {
    "url": "guide/module.html",
    "revision": "9fa85ac6760762b83898d65aee2b6bfd"
  },
  {
    "url": "guide/native-android.html",
    "revision": "256184ccc0f4254c0e0b69b9df73e815"
  },
  {
    "url": "guide/native-ios.html",
    "revision": "1b93c6658c1f3e2243ef0fa28bbcdeca"
  },
  {
    "url": "guide/project.html",
    "revision": "c17a69f87ae7808947ae2d50b54b2f7c"
  },
  {
    "url": "guide/who-s-using.html",
    "revision": "7a952fdb24cded73a1db95ee6d6b9436"
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
    "revision": "6099ea0ec4a243b9f2b18e20e2ef4bb9"
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
