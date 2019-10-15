/*
 * @Author: NiKai
 * @Date:   2018-12-04 12:24:49
 * @Last Modified by:   NiKai
 * @Last Modified time: 2018-12-04 12:24:53
 */

'use strict';

/* ===========================================================
 * docsify sw.js
 * ===========================================================
 * Copyright 2016 @huxpro
 * Licensed under Apache 2.0
 * Register service worker.
 * ========================================================== */

const RUNTIME = 'docs-v1.0.0'
const HOSTNAME_WHITELIST = [
    self.location.hostname,
    'fonts.gstatic.com',
    'fonts.googleapis.com',
    'unpkg.com',
    'api.github.com'
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

self.addEventListener('install', function() {
    self.skipWaiting();
});

self.addEventListener('activate', event => {
    event.waitUntil(self.clients.claim())
});

/**
 *  @Functional Fetch
 *  请求拦截
 *  void respondWith(Promise<Response> r)
 */
self.addEventListener('fetch', event => {
    if (HOSTNAME_WHITELIST.indexOf(new URL(event.request.url).hostname) > -1) {
        const cached = caches.match(event.request);
        const fixedUrl = getFixedUrl(event.request);
        const fetched = fetch(fixedUrl, { cache: 'no-store' });
        const fetchedCopy = fetched.then(resp => resp.clone());

        // 获取较快的读取方式
        event.respondWith(
            Promise.race([fetched.catch(_ => cached), cached])
            .then(resp => resp || fetched)
            .catch(_ => {})
        )

        // 更新缓存
        event.waitUntil(
            Promise.all([fetchedCopy, caches.open(RUNTIME)])
            .then(([response, cache]) => response.ok && cache.put(event.request, response))
            .catch(_ => {})
        )
    }
});