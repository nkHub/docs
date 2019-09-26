/*
 * @version: 1.0.0
 * @Date: 2019-09-26 14:51:10
 * @LastEditTime: 2019-09-26 20:01:14
 */

'use strict';
// 缓存
if (typeof navigator.serviceWorker !== 'undefined') {
    navigator.serviceWorker.register('sw.js')
}
// 配置
window.onload = function() {
    mermaid.initialize({ startOnLoad: false });
}


window.$docsify = {
    formatUpdated: '{YYYY}-{MM}-{DD} {HH}:{mm}:{ss}',
    el: '#main',
    homepage: '/home.md',
    name: '个人文档',
    nameLink: '#/home',
    repo: 'https://github.com/nkHub',
    loadNavbar: true,
    coverpage: true,
    onlyCover: true,
    coverpage: 'cover.md',
    loadSidebar: true,
    maxLevel: 3,
    auto2top: true,
    notFoundPage: true,
    notFoundPage: '404.md',
    search: 'auto',
    search: {
        maxAge: 86400000,
        path: 'auto',
        placeholder: '搜索',
        noData: '找不到结果!',
        depth: 6
    },
    markdown: {
        smartypants: true,
        renderer: {
            code: function(code, lang) {
                if (lang === "mermaid") {
                    return (
                        '<div class="mermaid">' + mermaid.render(lang, code) + "</div>"
                    );
                }
                return this.origin.code.apply(this, arguments);
            }
        }
    },
    copyCode: {
        buttonText: '复制到粘贴板',
        errorText: '错误',
        successText: '复制成功'
    },
    pagination: {
        previousText: '上一章节',
        nextText: '下一章节',
        crossChapter: true
    }
}