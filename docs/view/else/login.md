# 第三方 - 登录

QQ申请不下来，，暂时没有。微信和微博可用

#### 1. 前端

```
    const appid = ######;
    const client_id = ######;
    let redirect = '';

    //微信两个appid不同
    //微信移动端
    redirect = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid='
    + appid + '&redirect_uri=' + redirect
    +'&response_type=code&scope=snsapi_userinfo&state=1#wechat_redirect';

     //微信pc端
    redirect = 'https://open.weixin.qq.com/connect/qrconnect?appid='
    + appid + '&redirect_uri=' + redirect
    +'&response_type=code&scope=snsapi_login&state=1#wechat_redirect';

     //QQ
    redirect = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid='
    + appid + '&redirect_uri=' + redirect
    +'&response_type=code&scope=snsapi_userinfo&state=1#wechat_redirect';

    //微博
    redirect = 'https://api.weibo.com/oauth2/authorize?client_id='
    + client_id +'&response_type=code&redirect_uri=' + redirect;


    //三方跳转成功登录后会携带code返回redirect地址，请求后端获取用户信息
```


#### 2. 后端

```
<?php

if(isset($_POST['type'])){
    switch ($_POST['type']) {
        case 'weixin':
            //获取openid
            if($_POST['isWeChat'] == 'false'){ //pc端扫码登录
                $appId = '**************';
                $WXscrect = '********************';
            }else{
                $appId = '**************';
                $WXscrect = '********************';
            }

            $accessTokenUrl = 'https://api.weixin.qq.com/sns/oauth2/access_token?appid='
            .$appId.'&secret='.$WXscrect.'&code='.$_POST['code'].
            '&grant_type=authorization_code';
            //请求返回值
            $tokenReturn = file_get_contents($accessTokenUrl);
            $tokenTmp = json_decode($tokenReturn);
            if(isset($tokenTmp->errcode)){
                if($tokenTmp->errcode == 40029 || $tokenTmp->errcode == 40163){
                    $reVal['code'] = '0';
                    $reVal['msg'] = '获取授权已失效，请重新进入'; //code已使用
                    echo json_encode($reVal);
                }else{
                    echo json_encode($tokenTmp);
                }
            }else{
                $token = $tokenTmp->access_token;
                $openId = $tokenTmp->openid;
                $userInfoGetUrl = 'https://api.weixin.qq.com/sns/userinfo?access_token='
                .$token.'&openid='.$openId.'&lang=zh_CN';
                $infoReturn = file_get_contents($userInfoGetUrl);
                //未作判断需添加
                $infoReturn['nickname'] = $infoReturn['nickname'];
                $infoReturn['headimgurl'] = $infoReturn['headimgurl'];
                $infoReturn['openId'] = $infoReturn['openid'];
                $reVal['code'] = '1';
                $reVal['data'] = $infoReturn;
                echo json_encode($reVal);
            }
        break;
        case 'qq':
            $reVal['code'] = '1';
            $reVal['data'] = json_encode($_POST);
            echo json_encode($reVal);
        break;
        case 'weibo':
            $clientId = '41689426**';
            $weiboScrect = '0cd763e900ff627dba140ca31e3e51**';
            $weiboTokenUrl = 'https://api.weibo.com/oauth2/access_token?client_id='
            .$clientId.'&client_secret='
            .$weiboScrect.'&grant_type=authorization_code&redirect_uri='.
            "http%3A%2F%2Fnikai.site%2Fshare%2Findex.html%3Ftype%3Dweibo"
            .'&code='.$_POST['code'];
            $post_data = [];
            $weiboToken = post_url($weiboTokenUrl,$post_data);
            $weiboTokenTmp = json_decode($weiboToken);
            if(isset($weiboTokenTmp->access_token)){
                $weiToken = $weiboTokenTmp->access_token;
                $weiUid = $weiboTokenTmp->uid;
                $weiboUserUrl = 'https://api.weibo.com/2/users/show.json?access_token='
                .$weiToken.'&uid='.$weiUid;
                $weiboUser = file_get_contents($weiboUserUrl);
                $userData = json_decode($weiboUser);
                if(isset($userData->name)){
                    $infoReturn['nickname'] = $userData->name;
                    $infoReturn['headimgurl'] = $userData->profile_image_url;
                    $infoReturn['uid'] = $userData->id;
                    $reVal['code'] = '1';
                    $reVal['data'] = $infoReturn;
                    $reVal['userdata'] = $userData;
                    echo json_encode($reVal);
                }else{
                    $reVal['code'] = '0';
                    $reVal['data'] = $userData->error;
                    echo json_encode($reVal);
                }
            }else{
                $reVal['code'] = '0';
                $reVal['msg'] = '获取授权已失效，请重新进入';
                $reVal['origin_msg'] = $weiboTokenTmp->error_description;
                echo json_encode($reVal);
            }
        break;
        default:
            $reVal['code'] = '0';
            $reVal['msg'] = '账号类型错误';
            echo json_encode($reVal);
            break;
    }
}else{
    $reVal['code'] = '0';
    $reVal['msg'] = '账号类型错误';
    echo json_encode($reVal);
}
/**
 * [post请求]
 * @param  [type] $url       [请求地址]
 * @param  [type] $post_data [请求数据]
 * @return [type]            [post请求返回的数据]
 */
function post_url($url,$post_data){
    $curl = curl_init();
    curl_setopt($curl, CURLOPT_URL,$url);
    curl_setopt($curl, CURLOPT_POST, 1);
    curl_setopt($curl, CURLOPT_POSTFIELDS, $post_data);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER,1);
    $data = curl_exec($curl);
    curl_close($curl);
    return $data;
}
```