if(!self.define){let e,s={};const a=(a,i)=>(a=new URL(a+".js",i).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,n)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let t={};const o=e=>a(e,c),r={module:{uri:c},exports:t,require:o};s[c]=Promise.all(i.map((e=>r[e]||o(e)))).then((e=>(n(...e),t)))}}define(["./workbox-5afaf374"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/JkGz79om3MytyI3ebfyCw/_buildManifest.js",revision:"1123a41034c22c9ba3abb6c97853122f"},{url:"/_next/static/JkGz79om3MytyI3ebfyCw/_middlewareManifest.js",revision:"fb2823d66b3e778e04a3f681d0d2fb19"},{url:"/_next/static/JkGz79om3MytyI3ebfyCw/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/596-530c918eb182f8db.js",revision:"530c918eb182f8db"},{url:"/_next/static/chunks/655-7fec1691d714e8dc.js",revision:"7fec1691d714e8dc"},{url:"/_next/static/chunks/framework-5f4595e5518b5600.js",revision:"5f4595e5518b5600"},{url:"/_next/static/chunks/main-d4cc6c97c4f7d653.js",revision:"d4cc6c97c4f7d653"},{url:"/_next/static/chunks/pages/%5BpathCategory%5D-875462c75f2bcc0e.js",revision:"875462c75f2bcc0e"},{url:"/_next/static/chunks/pages/%5BpathCategory%5D/%5BdesctiptionProduct%5D-8a2e296dd41c47d3.js",revision:"8a2e296dd41c47d3"},{url:"/_next/static/chunks/pages/_app-a0290b55eb8a3c7c.js",revision:"a0290b55eb8a3c7c"},{url:"/_next/static/chunks/pages/_error-1995526792b513b2.js",revision:"1995526792b513b2"},{url:"/_next/static/chunks/pages/index-6cdfe14f0f99e8b8.js",revision:"6cdfe14f0f99e8b8"},{url:"/_next/static/chunks/pages/pedido-82a3a4a5f0cbb106.js",revision:"82a3a4a5f0cbb106"},{url:"/_next/static/chunks/pages/pedido2-94dcdcf1628bf190.js",revision:"94dcdcf1628bf190"},{url:"/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"99442aec5788bccac9b2f0ead2afdd6b"},{url:"/_next/static/chunks/webpack-5752944655d749a0.js",revision:"5752944655d749a0"},{url:"/_next/static/css/7d51332982f38e3a.css",revision:"7d51332982f38e3a"},{url:"/_next/static/media/OpenSans-VariableFont.43945fe9.ttf",revision:"43945fe9"},{url:"/assets/appIcon/iconAppDonRemolo.svg",revision:"a38aca450efc30fc2eaa026b7c06d348"},{url:"/assets/appIcon/maskable_icon.png",revision:"1a0103a974bbba033dff5ae9edc51e4b"},{url:"/assets/appIcon/maskable_icon_x128.png",revision:"f5ed870e4270a11205501706e0fb13cc"},{url:"/assets/appIcon/maskable_icon_x192.png",revision:"f6060f57763c5602325828811a8e222e"},{url:"/assets/appIcon/maskable_icon_x384.png",revision:"2ccf691edd570b7095dbaf83f36ad806"},{url:"/assets/appIcon/maskable_icon_x48.png",revision:"6f5f7dad5589f5ba52ffcdc91956ca68"},{url:"/assets/appIcon/maskable_icon_x512.png",revision:"9e80bb3dfcefe7fed1886a20cc99b0bc"},{url:"/assets/appIcon/maskable_icon_x72.png",revision:"25cbe2aaf365a8c80fc828e1f1154d63"},{url:"/assets/appIcon/maskable_icon_x96.png",revision:"ed5fd09a7a927f19b4b4138541fb0ca4"},{url:"/assets/fonts/OpenSans-VariableFont.ttf",revision:"fad3454a861bdaf75e6abfc2c9de46c5"},{url:"/assets/img/Background_Desktop_PNG.png",revision:"fd3324c83e0de00c2a5436faee95715a"},{url:"/assets/img/Background_mobile_PNG.png",revision:"95db7449ffd511b3f7b1db7cd1a0a779"},{url:"/assets/img/Logo_DonRemolo.svg",revision:"8481f0bb47f8d1fa6ee0dbf6ae24c8db"},{url:"/assets/img/Logo_DonRemolo_png.png",revision:"a40620858d9c7bb2cffb32f47960da7e"},{url:"/assets/img/bebidas/bebidasAguaGas.png",revision:"04189e52b43448eb4541122a9405f36e"},{url:"/assets/img/bebidas/bebidasAguaMineral.png",revision:"33b105dde1925ed898944bcc245ace67"},{url:"/assets/img/bebidas/bebidasAguaSaborizada.png",revision:"046ff33124e88ef73a35cc127ab427de"},{url:"/assets/img/bebidas/bebidasCerveza.png",revision:"f1bfe791f98dbe1a9e4637f2a6e5fbd0"},{url:"/assets/img/bebidas/bebidasCocaCola.png",revision:"4ad591288ddfd03777d8241c65c37772"},{url:"/assets/img/categoriaBebidas.png",revision:"af102175d58b253c67bd74d0e7cee40a"},{url:"/assets/img/categoriaEmpanadas.png",revision:"9fc98ad710822bbbbbb467a9cc1a03b7"},{url:"/assets/img/categoriaPizzas.png",revision:"3b6bfb232db8171796f6b0835ff6a854"},{url:"/assets/img/categoriaPostres.png",revision:"4f30abdd9cb985eb6c013737fdce0492"},{url:"/assets/img/empanadas/ampanadaCarne.png",revision:"acb685c158111c352d5f6d4394c8b82f"},{url:"/assets/img/empanadas/empanadaJamonQueso.png",revision:"9c36f125328154f86a665a51f64afe6f"},{url:"/assets/img/empanadas/empanadaPollo.png",revision:"818f06e4ab57c287575d7e4bf299f77a"},{url:"/assets/img/empanadas/empanadaQuesoCebolla.png",revision:"c378750beb918d4ddd7d8cfe926d768a"},{url:"/assets/img/empanadas/empanadaVerdura.png",revision:"f39a8c252f3cc24b19c2b77efa32e1e6"},{url:"/assets/img/iconNav/iconBebida.svg",revision:"d86413028722e644cd812aadf4affce2"},{url:"/assets/img/iconNav/iconEmpanada.svg",revision:"775a506e4112bc9f70df523806686514"},{url:"/assets/img/iconNav/iconHelado.svg",revision:"3742847826d57af6461fe278c9f5961d"},{url:"/assets/img/iconNav/iconPizza.svg",revision:"c552b73541ff8247594098ab75e195ec"},{url:"/assets/img/iconNav/letterLogo.svg",revision:"68e00fe90a969f600683617df9f5388c"},{url:"/assets/img/iconNav/moustacheLogo.svg",revision:"aa2e959dd6c8ae6ac3e181db86af5c7b"},{url:"/assets/img/iconNav/returnArrow.svg",revision:"fb2468d50b9c5d4f42ad53048bd3c2b8"},{url:"/assets/img/icons/iconTrash.svg",revision:"15d50ea6536479b0475f25f78d0b9dc2"},{url:"/assets/img/icons/shoppingCart.svg",revision:"5081c6a7d6a16f8032f616c06fc862a1"},{url:"/assets/img/pizzas/calabreza.png",revision:"ae994d6ccf8bd04a78d94e7d2d6b489b"},{url:"/assets/img/pizzas/especial.png",revision:"1379dbe34bde367a5180c30a671588a0"},{url:"/assets/img/pizzas/fugazza.png",revision:"586f695fa4509cde19e5b050049569ab"},{url:"/assets/img/pizzas/mozzarella.png",revision:"f64f407436d3edb7a9c458173758ff50"},{url:"/assets/img/pizzas/napolitana.png",revision:"9930f6f950043dad6b48c571d0abd17d"},{url:"/assets/img/postres/ensaladaFrutas.png",revision:"3d68d908501f4f30eb1dffe1cec3d025"},{url:"/assets/img/postres/flan.png",revision:"23c7c1fcf89a6b3ed0bfec05b12352fa"},{url:"/assets/img/postres/helado.png",revision:"2cdc756e10221d238ace3428b00a6c89"},{url:"/assets/img/postres/lemon.png",revision:"edb6d1a09619ba7ef3cb6163e21a3a71"},{url:"/assets/img/postres/pudinPan.png",revision:"3d17d372023c6138b7e5f2ce40157982"},{url:"/assets/img/slogan.svg",revision:"dc782d08cab5e7b96dfd89b43f3a197e"},{url:"/favicon.ico",revision:"be8d0c359ebc3cae2abcefe4782bea03"},{url:"/manifest.json",revision:"1df18e25c9abe87c8a5d0bf68a3af87d"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:i})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
