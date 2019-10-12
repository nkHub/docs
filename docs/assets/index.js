/*
 * @version: 1.0.0
 * @Date: 2019-09-26 14:51:10
 * @LastEditTime: 2019-09-27 16:02:22
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
    },
    plugins: [
        function(hook, vm) {
            // 自动获取最新提交信息
            hook.doneEach(function() {
                if (vm.route.path == '/home') {
                    setTimeout(function() {
                        let commitMsg = document.querySelector('#commitMsg');
                        if (commitMsg) {
                            fetch('https://api.github.com/repos/nkHub/docs/branches/master').then(res => res.json()).then(res => {
                                let msg = res.commit.commit.message;
                                let date = formateDate(new Date(res.commit.commit.committer.date).getTime());
                                commitMsg.innerHTML = date + '  ' + msg;
                            }).catch(e => {});
                        }
                    }, 0);
                }
                if (vm.route.path != '/') {
                    // initParticlesJS();
                }
            });
        }
    ]
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

// 初始化粒子背景
function initParticlesJS() {
    particlesJS('particles-js', {
            "particles": {
                "number": {
                    "value": 70,
                    "density": {
                        "enable": true,
                        "value_area": 1000
                    }
                },
                "color": {
                    "value": "#aaaaaa"
                },
                "shape": {
                    "type": "circle",
                    "stroke": {
                        "width": 0,
                        "color": "#ffffff"
                    },
                    "polygon": {
                        "nb_sides": 5
                    },
                    "image": {
                        "src": "./image/starburst_white_300_drop_2.png",
                        "width": 100,
                        "height": 100
                    }
                },
                "opacity": {
                    "value": 0.3,
                    "random": false,
                    "anim": {
                        "enable": false,
                        "speed": 1,
                        "opacity_min": 0.1,
                        "sync": false
                    }
                },
                "size": {
                    "value": 3,
                    "random": true,
                    "anim": {
                        "enable": false,
                        "speed": 40,
                        "size_min": 0.1,
                        "sync": false
                    }
                },
                "line_linked": {
                    "enable": true,
                    "distance": 150,
                    "color": "#aaaaaa",
                    "opacity": 0.4,
                    "width": 1
                },
                "move": {
                    "enable": true,
                    "speed": 3,
                    "direction": "none",
                    "random": false,
                    "straight": false,
                    "out_mode": "out",
                    "attract": {
                        "enable": false,
                        "rotateX": 600,
                        "rotateY": 1200
                    }
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": {
                        "enable": false,
                        "mode": "grab"
                    },
                    "onclick": {
                        "enable": false,
                        "mode": "push"
                    },
                    "resize": true
                },
                "modes": {
                    "grab": {
                        "distance": 150,
                        "line_linked": {
                            "opacity": 1
                        }
                    },
                    "bubble": {
                        "distance": 200,
                        "size": 40,
                        "duration": 2,
                        "opacity": 8,
                        "speed": 3
                    },
                    "repulse": {
                        "distance": 200
                    },
                    "push": {
                        "particles_nb": 1
                    },
                    "remove": {
                        "particles_nb": 2
                    }
                }
            },
            "retina_detect": true
        }

    );
}