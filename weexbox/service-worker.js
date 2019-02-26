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
    "revision": "220e9f6f6420082b2bdfb13fba4a4edf"
  },
  {
    "url": "assets/css/0.styles.159835fe.css",
    "revision": "59d575c9879b1aaa4a29c9e930df2426"
  },
  {
    "url": "assets/img/bug1.af5f40d1.png",
    "revision": "af5f40d122e23d5d33ab47ba0ce497e7"
  },
  {
    "url": "assets/img/bug2.e18293bb.png",
    "revision": "e18293bbcaa7019c822869dbd7dc0125"
  },
  {
    "url": "assets/img/bug3.03a91a4d.png",
    "revision": "03a91a4dbc17d006bc8699ff19596357"
  },
  {
    "url": "assets/img/bug4.577e17c5.png",
    "revision": "577e17c5dc41b72029bf8517cddd7608"
  },
  {
    "url": "assets/img/bug6.cc0d905f.png",
    "revision": "cc0d905f342dd62ef319923f4b32e818"
  },
  {
    "url": "assets/img/bug7.bebb76e4.png",
    "revision": "bebb76e48437bfe444e3ea8b4762979b"
  },
  {
    "url": "assets/img/bug8.411cd975.png",
    "revision": "411cd975a279a75a5cfc322de779b391"
  },
  {
    "url": "assets/img/bug9.df3c2d88.png",
    "revision": "df3c2d880ab82e3cbbaf50e58296a289"
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
    "url": "assets/js/10.236b4ab2.js",
    "revision": "fd2e3ce2e0c03c6cf80bac95f3d89201"
  },
  {
    "url": "assets/js/11.b5685d16.js",
    "revision": "e1a27ed37f8ff76868da7b8b2e4c7194"
  },
  {
    "url": "assets/js/12.2a83ea3a.js",
    "revision": "55e5860129f4245a5ed6e507c271e3c8"
  },
  {
    "url": "assets/js/13.3183fa0a.js",
    "revision": "3ac482a0efe250c8ded2975719871008"
  },
  {
    "url": "assets/js/14.6bf90c6b.js",
    "revision": "1e65fd2c2b853ec5521830e20f5a1083"
  },
  {
    "url": "assets/js/15.cde72eb8.js",
    "revision": "becac62f2f8d3d41397649cd79177ab1"
  },
  {
    "url": "assets/js/16.78f30074.js",
    "revision": "3201d0ee5d1242f5fbadcc7e48817bcb"
  },
  {
    "url": "assets/js/17.8c0c5840.js",
    "revision": "31affb34a89ea4f3359f1784795129cf"
  },
  {
    "url": "assets/js/18.331a18f4.js",
    "revision": "be8a86b847ab3b232e71303e615c60ed"
  },
  {
    "url": "assets/js/19.27384ac0.js",
    "revision": "79afe1a69c84fd2c21981695f00030da"
  },
  {
    "url": "assets/js/2.f43dfc23.js",
    "revision": "9bfb6fc07a7bb3239f22415c2c661372"
  },
  {
    "url": "assets/js/20.10ea26b1.js",
    "revision": "8a3a7acf8f3f0a96f54588e633c7d7e5"
  },
  {
    "url": "assets/js/3.eb7bbf53.js",
    "revision": "939ab69466f39e86bd22f988a0b9c342"
  },
  {
    "url": "assets/js/4.09323794.js",
    "revision": "98c94493d23eb30d83256d9ae1ad859a"
  },
  {
    "url": "assets/js/5.dd675c8e.js",
    "revision": "5f3f70b4aadf541b837cc8c91a6796ba"
  },
  {
    "url": "assets/js/6.1b0d307f.js",
    "revision": "6fe171c319c6406539e6543d31a90b06"
  },
  {
    "url": "assets/js/7.d012d4a3.js",
    "revision": "2da85f24c0c21ae567af6d297668d36b"
  },
  {
    "url": "assets/js/8.108c836a.js",
    "revision": "73413f8427eea549ca4b53380e1020b0"
  },
  {
    "url": "assets/js/9.d194a823.js",
    "revision": "554b241f886a93b29baeab0c1d53e662"
  },
  {
    "url": "assets/js/app.57470e2a.js",
    "revision": "98bd5a06190bdf1e028f824774f9d84a"
  },
  {
    "url": "camera.png",
    "revision": "3ead9b35903b562541ed4ab1f41abfb2"
  },
  {
    "url": "config/index.html",
    "revision": "d0a55d751cde2c84ec88978a2839cc72"
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
    "revision": "5d2000bf4b70209031d3b1b9acaf2941"
  },
  {
    "url": "done.png",
    "revision": "9180e4bfa05d56a58f0f314c4b743049"
  },
  {
    "url": "guide/assets.html",
    "revision": "a5704548280f91ba9da041ca6865ba81"
  },
  {
    "url": "guide/change-log.html",
    "revision": "2e65d3ef6e0a81160d0c98a58d184cd0"
  },
  {
    "url": "guide/component.html",
    "revision": "e231f93414af2951bcae93fb5454152a"
  },
  {
    "url": "guide/debug.html",
    "revision": "37674c5c5ee81f7f7ed0b00083209c69"
  },
  {
    "url": "guide/eslint.html",
    "revision": "6d8dce26be604acd0ebf2b6216fbdfad"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "bad6661b894eac62fb60706eff75ab85"
  },
  {
    "url": "guide/hello-world.html",
    "revision": "a5435370e646b04e35379abdc39e9765"
  },
  {
    "url": "guide/index.html",
    "revision": "8fd7bc89426c10498861dcb578bdb93b"
  },
  {
    "url": "guide/lottie.html",
    "revision": "1e9e2c13ecd5493f2fe0c79b9f3ff560"
  },
  {
    "url": "guide/module.html",
    "revision": "889555338e203905cab4a9b6e4ced3e1"
  },
  {
    "url": "guide/native-android.html",
    "revision": "cc67c595ae918045a04567beebda969e"
  },
  {
    "url": "guide/native-ios.html",
    "revision": "aeb539eafe51c2887bfcc824d94f0c0a"
  },
  {
    "url": "guide/project.html",
    "revision": "2b3fdface67e9529995c56548b399691"
  },
  {
    "url": "guide/who-s-using.html",
    "revision": "bc0d9e6474ac022967431007fd178248"
  },
  {
    "url": "helloworld.png",
    "revision": "d4baca8a7d78a0cdd58aaf10af7c1fd9"
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
    "url": "image/debugger/bug1.png",
    "revision": "af5f40d122e23d5d33ab47ba0ce497e7"
  },
  {
    "url": "image/debugger/bug2.png",
    "revision": "e18293bbcaa7019c822869dbd7dc0125"
  },
  {
    "url": "image/debugger/bug3.png",
    "revision": "03a91a4dbc17d006bc8699ff19596357"
  },
  {
    "url": "image/debugger/bug4.png",
    "revision": "577e17c5dc41b72029bf8517cddd7608"
  },
  {
    "url": "image/debugger/bug5.png",
    "revision": "eede40abe9f4cce9894479e2bf462fe2"
  },
  {
    "url": "image/debugger/bug6.png",
    "revision": "cc0d905f342dd62ef319923f4b32e818"
  },
  {
    "url": "image/debugger/bug7.png",
    "revision": "bebb76e48437bfe444e3ea8b4762979b"
  },
  {
    "url": "image/debugger/bug8.png",
    "revision": "411cd975a279a75a5cfc322de779b391"
  },
  {
    "url": "image/debugger/bug9.png",
    "revision": "df3c2d880ab82e3cbbaf50e58296a289"
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
    "revision": "850f0f7ef581d9a4110f91202f60ad4c"
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
