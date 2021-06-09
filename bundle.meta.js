// ==UserScript==
// @name           小说下载器
// @version        3.6.4.1623256877250
// @author         bgme
// @description    一个可扩展的通用型小说下载器。
// @supportURL     https://github.com/yingziwu/novel-downloader
// @match          *://www.ciweimao.com/chapter-list/*
// @match          *://book.sfacg.com/Novel/*/MainIndex/
// @match          *://book.qidian.com/info/*
// @match          *://www.jjwxc.net/onebook.php?novelid=*
// @match          *://www.gongzicp.com/v4/novel-*.html
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
// @match          *://www.shuquge.com/txt/*/index.html
// @match          *://www.dingdiann.net/ddk*/
// @match          *://www.xkzw.org/xkzw*/
// @match          *://www.lewenn.com/lw*/
// @match          *://www.klxs.la/info-*/
// @match          *://www.266ks.com/*/
// @match          *://www.266ks.com/*/index*.html
// @match          *://www.hetushu.com/book/*/index.html
// @match          *://www.shouda8.com/*/
// @match          *://www.shouda88.com/*/
// @match          *://www.gebiqu.com/biquge_*/
// @match          *://www.meegoq.com/book*.html
// @match          *://www.viviyzw.com/book*.html
// @match          *://www.xiaoshuodaquan.com/*/
// @match          *://www.81book.com/book/*/
// @match          *://m.yuzhaige.cc/*/*/
// @match          *://www.xinwanben.com/*/
// @match          *://www.idejian.com/book/*/
// @match          *://www.wenku8.net/novel/*/*/index.htm
// @match          *://www.dmzj.com/info/*.html
// @match          *://www.dmzj1.com/info/*.html
// @match          *://www.westnovel.com/*/*/
// @match          *://www.mht.tw/*/
// @match          *://www.01bzw.org/*_*/
// @match          *://www.dierbanzhu1.com/*_*/
// @match          *://www.xbiquge.so/book/*/
// @match          *://www.hongyeshuzhai.com/shuzhai/*/
// @match          *://www.linovelib.com/novel/*/catalog
// @name:en        novel-downloader
// @description:en An scalable universal novel downloader.
// @namespace      https://blog.bgme.me
// @icon           https://cdn.jsdelivr.net/gh/yingziwu/novel-downloader/assets/icon.png
// @license        AGPL-3.0
// @run-at         document-end
// @noframes       true
// @incompatible   Greasemonkey
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
// @grant          unsafeWindow
// @grant          GM_info
// @grant          GM_xmlhttpRequest
// @grant          GM_getTab
// @grant          GM_saveTab
// @grant          GM_getTabs
// @grant          GM.info
// @grant          GM.xmlHttpRequest
// @connect        self
// @connect        img.shouda8.com
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
// @connect        dmzj1.com
// @connect        img.hongyeshuzhal.com
// @connect        linovelib.com
// @connect        *
// @require        https://cdn.jsdelivr.net/npm/file-saver@2.0.5/dist/FileSaver.min.js#sha512-Qlv6VSKh1gDKGoJbnyA5RMXYcvnpIqhO++MhIM2fStMcGT9i2T//tSwYFlcyoRRDcDZ+TYHpH8azBBCyhpSeqw==
// @require        https://cdn.jsdelivr.net/npm/jszip@3.6.0/dist/jszip.min.js#sha512-uVSVjE7zYsGz4ag0HEzfugJ78oHCI1KhdkivjQro8ABL/PRiEO4ROwvrolYAcZnky0Fl/baWKYilQfWvESliRA==
// @require        https://cdn.jsdelivr.net/npm/crypto-js@4.0.0/crypto-js.js#sha512-t4HzsbLJw+4jV+nmiiIsz/puioH2aKIjuI1ho1NIqJAJ2GNVLPTy51IklYefYdrkRE583KEzTcgmO5Wb6jVgYw==
// @downloadURL    https://github.com/yingziwu/novel-downloader/raw/gh-pages/bundle.user.js
// @updateURL      https://github.com/yingziwu/novel-downloader/raw/gh-pages/bundle.meta.js
// ==/UserScript==
