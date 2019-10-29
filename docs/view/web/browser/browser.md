<!--
 * @version: 1.0.0
 * @Date: 2019-09-25 19:39:01
 * @LastEditTime: 2019-09-25 20:51:33
 -->
# 浏览器

##### 1.浏览器解析

```mermaid
graph LR;
    网站输入-->DNS{DNS解析};
    DNS{DNS解析}-->本地缓存;
    本地缓存-->浏览器缓存-->服务器IP;
    本地缓存-->本地hosts-->服务器IP;
    DNS{DNS解析}-->DNS查询-->服务器IP;
```

##### 2. 建立TCP连接([TCP连接三次握手四次挥手](https://blog.csdn.net/qq_38950316/article/details/81087809))

字段|含义
---|:--:
URG|紧急指针是否有效。为1，表示某一位需要被优先处理
ACK|确认号是否有效，一般置为1。
PSH|提示接收端应用程序立即从TCP缓冲区把数据读走。
RST|对方要求重新建立连接，复位。
SYN|请求建立连接，并在其序列号的字段进行序列号的初始值设定。建立连接，设置为1
FIN|希望断开连接
seq|报文段中的第一个字节的数据编号
ack|期待收到对方下一个报文段的第一个数据字节的序号

```mermaid
sequenceDiagram
    participant c as 客户端
    participant s as 服务器
        loop 每次请求
            c-->s: 请求连接
            opt 三次握手
                c->>s: SYN=1,seq=x
                Note left of c: SYN_RECV
                s->>c: SYN=1,ACK=1,seq=y,ack=x+1
                Note right of s: SYN_RECV
                c->>s: ACK=1,seq=x+1,ack=y+1
            end
            s-->c: 数据传输(ESTABLISHED)
            opt 四次挥手
                c->>s: FIN=1,seq=u
                Note left of c: FIN-WAIT-1
                s->>c: ACK=1,seq=v,ack=u+1
                Note right of s: CLOSE-WAIT
                s-->c: 数据传输
                Note left of c: FIN-WAIT-2
                s->>c: FIN=1,ACK=1,seq=w,ack=u+1
                Note right of s: LAST-ACK
                c->>s: ACK=1,seq=u+1,ack=w+1
                Note left of c: TIME-WAIT
                Note right of s: ClOSED
                Note left of c: ClOSED
            end
            c-->s: 中断连接
        end
```

##### 3. 缓存资源加载：

分类：Service Workers、Memory Cache 内存缓存(强缓存)、Disk Cache 磁盘缓存(强缓存)、Push Cache。

![这流程画不出来┗|｀O′|┛ 嗷~~,只能这样了将就着看吧](https://www.nikai.site/cache.jpg)

##### 5. 浏览器渲染：

```mermaid
graph LR;
    HTML文件--解析-->DOM树;
    CSS文件--解析-->CSS规则表;
    DOM树-->合成渲染树;
    CSS规则表-->合成渲染树;
    合成渲染树-->渲染;
    渲染-->|外观风格变更|重绘-->渲染;
    渲染-->|形状大小变更|重排/回流-->重绘;
```

##### 备注([状态码](https://help.aliyun.com/knowledge_detail/36393.html?spm=5176.13394938.0.0.5f4f2813vEprwy))