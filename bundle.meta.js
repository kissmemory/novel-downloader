// ==UserScript==
// @name           小说下载器
// @version        3.7.5.1626607200128
// @author         bgme
// @description    一个可扩展的通用型小说下载器。
// @supportURL     https://github.com/yingziwu/novel-downloader
// @match          *://www.ciweimao.com/chapter-list/*
// @match          *://book.sfacg.com/Novel/*/MainIndex/
// @match          *://book.qidian.com/info/*
// @match          *://www.jjwxc.net/onebook.php?novelid=*
// @match          *://www.gongzicp.com/novel-*.html
// @match          *://book.zongheng.com/showchapter/*.html
// @match          *://huayu.zongheng.com/showchapter/*.html
// @match          *://www.linovel.net/book/*.html
// @match          *://www.17k.com/list/*.html
// @match          *://www.shuhai.com/book/*.htm
// @match          *://mm.shuhai.com/book/*.htm
// @match          *://www.tadu.com/book/catalogue/*
// @match          *://www.qimao.com/shuku/*/
// @match          *://sosad.fun/threads/*/profile*
// @match          *://wenzhan.org/threads/*/profile*
// @match          *://sosadfun.com/threads/*/profile*
// @match          *://xn--pxtr7m5ny.com/threads/*/profile*
// @match          *://xn--pxtr7m.com/threads/*/profile*
// @match          *://xn--pxtr7m5ny.net/threads/*/profile*
// @match          *://xn--pxtr7m.net/threads/*/profile*
// @match          *://sosadfun.link/threads/*/profile*
// @match          *://www.sosad.fun/threads/*/profile*
// @match          *://www.wenzhan.org/threads/*/profile*
// @match          *://www.sosadfun.com/threads/*/profile*
// @match          *://www.xn--pxtr7m5ny.com/threads/*/profile*
// @match          *://www.xn--pxtr7m.com/threads/*/profile*
// @match          *://www.xn--pxtr7m5ny.net/threads/*/profile*
// @match          *://www.xn--pxtr7m.net/threads/*/profile*
// @match          *://www.sosadfun.link/threads/*/profile*
// @match          *://www.uukanshu.com/b/*/
// @match          *://www.yruan.com/article/*.html
// @match          *://www.biquwoo.com/bqw*/
// @match          *://www.biquwo.org/bqw*/
// @match          *://www.shuquge.com/txt/*/index.html
// @match          *://www.sizhicn.com/txt/*/index.html
// @match          *://www.dingdiann.net/ddk*/
// @match          *://www.xkzw.org/xkzw*/
// @match          *://www.lewenn.com/lw*/
// @match          *://www.klxs.la/info-*/
// @match          *://www.266ks.com/*_*/
// @match          *://www.266ks.com/*_*/index*.html
// @match          *://www.hetushu.com/book/*/index.html
// @match          *://www.shouda8.com/*/
// @match          *://www.shouda88.com/*/
// @match          *://www.gebiqu.com/biquge_*/
// @match          *://www.meegoq.com/book*.html
// @match          *://www.viviyzw.com/book*.html
// @match          *://www.xiaoshuodaquan.com/*/
// @match          *://www.1pwx.com/*/
// @match          *://www.81book.com/book/*/
// @match          *://m.yuzhaige.cc/*/*/
// @match          *://www.wanben.org/*/
// @match          *://www.xinwanben.com/*/
// @match          *://www.idejian.com/book/*/
// @match          *://www.wenku8.net/novel/*/*/index.htm
// @match          *://www.dmzj.com/info/*.html
// @match          *://www.westnovel.com/*/*/
// @match          *://www.mht.tw/*/
// @match          *://www.dierbanzhu1.com/*_*/
// @match          *://www.xbiquge.so/book/*/
// @match          *://www.hongyeshuzhai.com/shuzhai/*/
// @match          *://www.linovelib.com/novel/*/catalog
// @match          *://www.luoqiuzw.com/book/*/
// @match          *://www.yibige.la/*/
// @match          *://www.fushuwang.org/*/*/*/*.html
// @match          *://www.fushuwang.org/*/*/*/*.html?*
// @match          *://www.soxscc.net/*/
// @match          *://www.soxscc.org/*/
// @match          *://www.soxs.cc/*/
// @match          *://www.soshuw.com/*/
// @match          *://www.shubaowa.org/*_*/
// @match          *://www.fuguoduxs.com/*_*/
// @match          *://www.xyqxs.cc/html/*/*/index.html
// @match          *://www.630shu.net/shu/*.html
// @match          *://www.qingoo.cn/details?bookId=*
// @match          *://www.trxs.cc/tongren/*.html
// @match          *://www.trxs123.com/tongren/*.html
// @match          *://www.tongrenquan.org/tongren/*.html
// @match          *://www.jpxs123.com/*/*.html
// @match          *://www.imiaobige.com/read/*/
// @match          *://www.256wxc.com/read/*/index.html
// @match          *://www.256wxc.com/read/*/
// @match          *://www.biquge66.com/biquge*/
// @match          *://*.lofter.com/
// @match          *://*.lofter.com/?page=*
// @name:en        novel-downloader
// @description:en An scalable universal novel downloader.
// @namespace      https://blog.bgme.me
// @icon           https://cdn.jsdelivr.net/gh/yingziwu/novel-downloader/assets/icon.png
// @license        AGPL-3.0
// @run-at         document-end
// @noframes       true
// @compatible     Firefox 77+
// @compatible     Chrome 85+
// @compatible     Edge 85+
// @compatible     Opera 71+
// @compatible     Safari 13.1+
// @incompatible   Internet Explorer
// @exclude        *://www.jjwxc.net/onebook.php?novelid=*&chapterid=*
// @exclude        *://www.meegoq.com/book/*.html
// @exclude        *://www.viviyzw.com/book/*.html
// @exclude        *://www.yruan.com/article/*/*.html
// @exclude        *://m.yuzhaige.cc/tag/*/
// @exclude        *://m.yuzhaige.cc/sort/*/
// @exclude        *://m.yuzhaige.cc/top/*/
// @exclude        *://m.yuzhaige.cc/full/*/
// @exclude        *://m.yuzhaige.cc/book/*/
// @exclude        *://www.linovel.net/book/*/*.html
// @exclude        *://www.qimao.com/shuku/*-*/
// @exclude        *://www.trxs.cc/tongren/*/*.html
// @exclude        *://www.trxs123.com/tongren/*/*.html
// @exclude        *://www.tongrenquan.org/tongren/*/*.html
// @exclude        *://www.jpxs123.com/*/*/*.html
// @grant          unsafeWindow
// @grant          GM_info
// @grant          GM_xmlhttpRequest
// @grant          GM_getTab
// @grant          GM_saveTab
// @grant          GM_getTabs
// @grant          GM_setValue
// @grant          GM_getValue
// @grant          GM_deleteValue
// @grant          GM.info
// @grant          GM.xmlHttpRequest
// @grant          GM.setValue
// @grant          GM.getValue
// @grant          GM.deleteValue
// @connect        self
// @connect        shouda8.com
// @connect        shouda88.com
// @connect        qidian.com
// @connect        yuewen.com
// @connect        kuangxiangit.com
// @connect        sinaimg.cn
// @connect        jjwxc.net
// @connect        image.gebiqu.com
// @connect        qpic.cn
// @connect        zongheng.com
// @connect        17k.com
// @connect        img.uukanshu.com
// @connect        aliyuncs.com
// @connect        cdn.bcebos.com
// @connect        rs.sfacg.com
// @connect        shuhai.com
// @connect        ch-intel.com
// @connect        huluxia.com
// @connect        linovel.net
// @connect        ax1x.com
// @connect        tadu.com
// @connect        zhangyue01.com
// @connect        cdn.wtzw.com
// @connect        wenku8.com
// @connect        dmzj.com
// @connect        hongyeshuzhal.com
// @connect        hongyeshuzhai.com
// @connect        linovelib.com
// @connect        soxscc.net
// @connect        soxscc.org
// @connect        soxs.cc
// @connect        soshuw.com
// @connect        idejian.com
// @connect        img.imiaobige.com
// @connect        postimg.cc
// @connect        lofter.com
// @connect        lf127.net
// @connect        126.net
// @connect        *
// @require        https://cdn.jsdelivr.net/npm/file-saver@2.0.5/dist/FileSaver.min.js#sha512-Qlv6VSKh1gDKGoJbnyA5RMXYcvnpIqhO++MhIM2fStMcGT9i2T//tSwYFlcyoRRDcDZ+TYHpH8azBBCyhpSeqw==
// @require        https://cdn.jsdelivr.net/npm/crypto-js@4.0.0/crypto-js.js#sha512-t4HzsbLJw+4jV+nmiiIsz/puioH2aKIjuI1ho1NIqJAJ2GNVLPTy51IklYefYdrkRE583KEzTcgmO5Wb6jVgYw==
// @downloadURL    https://github.com/yingziwu/novel-downloader/raw/gh-pages/bundle.user.js
// @updateURL      https://github.com/yingziwu/novel-downloader/raw/gh-pages/bundle.meta.js
// ==/UserScript==
