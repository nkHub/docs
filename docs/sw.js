/*
 * @Author: NiKai
 * @Date:   2018-12-04 12:24:49
 * @Last Modified by:   NiKai
 * @Last Modified time: 2018-12-04 12:24:53
 */

'use strict';

const RUNTIME = 'docs-v1.0.4'

// 缓存的域名
const HOSTNAME = [
    self.location.hostname,
    'fonts.gstatic.com',
    'fonts.googleapis.com',
    'unpkg.com'
]

const getFixedUrl = (req) => {
    let now = Date.now()
    let url = new URL(req.url)
    url.protocol = self.location.protocol;
    if (url.hostname === self.location.hostname) {
        url.search += (url.search ? '&' : '?') + 'cache-bust=' + now
    }
    return url.href
}

self.addEventListener('install', function () {
    console.log('sw安装, 当前版本: ' + RUNTIME)
    // 清除旧的版本
    caches.keys().then(function (cacheList) {
        return Promise.all(
            cacheList.map(function (cacheName) {
                if (cacheName !== RUNTIME) {
                    return caches.delete(cacheName);
                }
            })
        );
    })
    self.skipWaiting();
});

self.addEventListener('activate', event => {
    console.log('sw激活')
    event.waitUntil(self.clients.claim())
});

/**
 *  @Functional Fetch
 *  请求拦截
 *  void respondWith(Promise<Response> r)
 */
self.addEventListener('fetch', event => {
    if (HOSTNAME.indexOf(new URL(event.request.url).hostname) > -1) {
        const cached = caches.match(event.request);
        const fixedUrl = getFixedUrl(event.request);
        const fetched = fetch(fixedUrl, { cache: 'no-store' });
        const fetchedCopy = fetched.then(resp => resp.clone());

        // 获取较快的读取方式
        event.respondWith(
            Promise.race([fetched.catch(_ => cached), cached])
                .then(resp => resp || fetched)
                .catch(_ => { })
        )

        // 更新缓存
        event.waitUntil(
            Promise.all([fetchedCopy, caches.open(RUNTIME)])
                .then(([response, cache]) => response.ok && cache.put(event.request, response))
                .catch(_ => { })
        )
    }
});