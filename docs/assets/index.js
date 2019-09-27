/*
 * @version: 1.0.0
 * @Date: 2019-09-26 14:51:10
 * @LastEditTime: 2019-09-27 15:35:50
 */

'use strict';
// 缓存
if (typeof navigator.serviceWorker !== 'undefined') {
    navigator.serviceWorker.register('sw.js')
}
// 配置
window.$docsify = {
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
    tabs: {
        persist: true,
        sync: true,
        theme: 'classic',
        tabComments: true,
        tabHeadings: true
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

// 自动获取最新提交信息
window.onload = function() {
    let commitMsg = document.querySelector('#commitMsg');
    fetch('https://api.github.com/repos/nkHub/docs/branches/master').then(res => res.json()).then(res => {
        let msg = res.commit.commit.message;
        let date = formateDate(new Date(res.commit.commit.committer.date).getTime());
        commitMsg.innerHTML = date + '  ' + msg;
    }).catch(e => {});
}

// 时间格式化
function formateDate(timestamp = Date.now(), formate = 'y-M-d h:m:s') {
    let date = new Date(timestamp);
    if (date == "Invalid Date") throw '时间戳错误';
    let o = {
        "y+": date.getFullYear(), //年
        "M+": date.getMonth() + 1, //月
        "d+": date.getDate(), //日
        "h+": date.getHours(), //小时
        "m+": date.getMinutes(), //分
        "s+": date.getSeconds(), //秒
    };
    for (let key in o) {
        if (new RegExp("(" + key + ")").test(formate)) {
            formate = formate.replace(RegExp.$1, (key == 'y+') ? (o[key]) : (("00" + o[key]).substr(("" + o[key]).length)));
        }
    }
    return formate;
}