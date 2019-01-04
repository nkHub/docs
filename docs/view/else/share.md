# 第三方 - 分享

#### 1. 微信

```
    //接口内
    const shareData = { //分享数据
        "imgUrl" : share_img,
        "link"   : share_link,
        "title"  : share_title,
        "desc"   : share_sec
    };
    const signPackage = {}; //接口返回参数
    wx.config({
        debug: false,
        appId: signPackage.appId,
        timestamp: parseInt(signPackage.timestamp),
        nonceStr: signPackage.nonceStr,
        signature: signPackage.signature,
        jsApiList: [
            'onMenuShareTimeline',
            'onMenuShareAppMessage',
            'onMenuShareQQ',
            'onMenuShareWeibo',
            'onMenuShareQZone'
        ]
    });
    wx.ready(function () {
        wx.onMenuShareTimeline(shareData);
        wx.onMenuShareAppMessage(shareData);
        wx.onMenuShareQQ(shareData);
        wx.onMenuShareWeibo(shareData);
        wx.onMenuShareQZone(shareData);

        //ios视频自动播放需要在该回调内调用video.play();
    });
    wx.error(function(res){
       alert(res.errMsg);
    });
```

#### 2. QQ

```
    //移动端（QQ会自动抓取分享数据）
    <head>
        <meta charset="utf-8">
        <title></title>
        <!-- QQ分享测试 -->
        <meta name="description" itemprop="description" content="QQ分享测试">
        <meta itemprop="name" content="QQ分享测试标题">
        <meta itemprop="image" content="http://nikai.site/share/pic.jpg">
        <!-- QQ分享测试end -->
    </head>

    //PC端
    https://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?title=24国&url=url&desc=desc&summary=summary&pics=pics;
```

#### 3. 微博

```
    //PC端
    http://v.t.sina.com.cn/share/share.php?title=title&url=url&content=utf-8&sourceUrl=url&pic=pic;
```