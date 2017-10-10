import { Injectable } from '@angular/core';

@Injectable()
export class AppService {
private showL:boolean=false;
  constructor() { }
  setshow(){
  	this.showL=!this.showL;
  }
  getshow(){
  	return this.showL;
  }
     getMoves(){
    return [
            {
                "id":3571,
                "name":"缝纫机乐队",
                "cover":{
                    "origin":"https://pic.maizuo.com/usr/movie/efef5a9e615e5d97ef1bc7ff004035d8.jpg"
                },
                "poster":{
                    "origin":"https://pic.maizuo.com/usr/movie/ee9f0fb9fa6bfb8265b64eec62b4554d.jpg",
                    "thumbnail":"https://pic.maizuo.com/usr/movie/ee9f0fb9fa6bfb8265b64eec62b4554d.jpg?x-oss-process=image/resize,m_fixed,h_0,w_300"
                },
                "intro":"大鹏组乐队 摇滚需保卫",
                "premiereAt":1506614400000,
                "grade":"8.0",
                "watchCount":5539,
                "cinemaCount":0,
                "scheduleCount":0,
                "isPromotion":true,
                "isNowPlaying":"",
                "isComingSoon":true,
                "isPresold":""
            },
            {
                "id":3861,
                "name":"空天猎",
                "cover":{
                    "origin":"https://pic.maizuo.com/usr/movie/45c88dc07e10401f5cc2db3c3742c725.jpg"
                },
                "poster":{
                    "origin":"https://pic.maizuo.com/usr/movie/f1a8e7cdd7e262d95daaf13a8fd78090.jpg",
                    "thumbnail":"https://pic.maizuo.com/usr/movie/f1a8e7cdd7e262d95daaf13a8fd78090.jpg?x-oss-process=image/resize,m_fixed,h_0,w_300"
                },
                "intro":"空战射猎振人心 火力全开现豪情",
                "premiereAt":1506614400000,
                "grade":"8.0",
                "watchCount":6752,
                "cinemaCount":0,
                "scheduleCount":0,
                "isPromotion":true,
                "isNowPlaying":"",
                "isComingSoon":true,
                "isPresold":""
            },
            {
                "id":3858,
                "name":"英伦对决",
                "cover":{
                    "origin":"https://pic.maizuo.com/usr/movie/63fc1d3086b328799d85da07ae908d44.jpg"
                },
                "poster":{
                    "origin":"https://pic.maizuo.com/usr/movie/37f528066d46a5069b55771f46884e9c.jpg",
                    "thumbnail":"https://pic.maizuo.com/usr/movie/37f528066d46a5069b55771f46884e9c.jpg?x-oss-process=image/resize,m_fixed,h_0,w_300"
                },
                "intro":"千金遭袭遇难 老爸提枪复仇",
                "premiereAt":1506700800000,
                "grade":"8.5",
                "watchCount":7555,
                "cinemaCount":0,
                "scheduleCount":0,
                "isPromotion":true,
                "isNowPlaying":"",
                "isComingSoon":true,
                "isPresold":""
            }
        ]    
  }
  getMoves1(){
  	return [
            {
                "id":3842,
                "name":"猩球崛起3：终极之战",
                "cover":{
                    "origin":"https://pic.maizuo.com/usr/movie/eb4332520afe67ea34ee997eab7bf1a1.jpg"
                },
                "poster":{
                    "origin":"https://pic.maizuo.com/usr/movie/86ad3da3ed31c9744aef66174829b88f.jpg",
                    "thumbnail":"https://pic.maizuo.com/usr/movie/86ad3da3ed31c9744aef66174829b88f.jpg?x-oss-process=image/resize,m_fixed,h_0,w_300"
                },
                "intro":"黑暗面燃起 开启终极战役",
                "premiereAt":1505404800000,
                "grade":"8.3",
                "watchCount":1280268,
                "cinemaCount":197,
                "scheduleCount":2221,
                "isPromotion":true,
                "isNowPlaying":true,
                "isComingSoon":"",
                "isPresold":""
            },
            {
                "id":3860,
                "name":"羞羞的铁拳",
                "cover":{
                    "origin":"https://pic.maizuo.com/usr/movie/0c6da631c27b40d8a937880017e5a4ba.jpg"
                },
                "poster":{
                    "origin":"https://pic.maizuo.com/usr/movie/d30375c7c6ada960457460b3ec76ded4.jpg",
                    "thumbnail":"https://pic.maizuo.com/usr/movie/d30375c7c6ada960457460b3ec76ded4.jpg?x-oss-process=image/resize,m_fixed,h_0,w_300"
                },
                "intro":"落魄拳手洒热血 欢喜冤家换灵魂",
                "premiereAt":1506700800000,
                "grade":"8.5",
                "watchCount":16748,
                "cinemaCount":191,
                "scheduleCount":4830,
                "isPromotion":true,
                "isNowPlaying":true,
                "isComingSoon":"",
                "isPresold":""
            },
            {
                "id":3858,
                "name":"英伦对决",
                "cover":{
                    "origin":"https://pic.maizuo.com/usr/movie/63fc1d3086b328799d85da07ae908d44.jpg"
                },
                "poster":{
                    "origin":"https://pic.maizuo.com/usr/movie/37f528066d46a5069b55771f46884e9c.jpg",
                    "thumbnail":"https://pic.maizuo.com/usr/movie/37f528066d46a5069b55771f46884e9c.jpg?x-oss-process=image/resize,m_fixed,h_0,w_300"
                },
                "intro":"千金遭袭遇难 老爸提枪复仇",
                "premiereAt":1506700800000,
                "grade":"8.5",
                "watchCount":7555,
                "cinemaCount":184,
                "scheduleCount":3692,
                "isPromotion":true,
                "isNowPlaying":true,
                "isComingSoon":"",
                "isPresold":""
            },
            {
                "id":3571,
                "name":"缝纫机乐队",
                "cover":{
                    "origin":"https://pic.maizuo.com/usr/movie/efef5a9e615e5d97ef1bc7ff004035d8.jpg"
                },
                "poster":{
                    "origin":"https://pic.maizuo.com/usr/movie/ee9f0fb9fa6bfb8265b64eec62b4554d.jpg",
                    "thumbnail":"https://pic.maizuo.com/usr/movie/ee9f0fb9fa6bfb8265b64eec62b4554d.jpg?x-oss-process=image/resize,m_fixed,h_0,w_300"
                },
                "intro":"大鹏组乐队 摇滚需保卫",
                "premiereAt":1506614400000,
                "grade":"8.0",
                "watchCount":5539,
                "cinemaCount":190,
                "scheduleCount":3212,
                "isPromotion":true,
                "isNowPlaying":true,
                "isComingSoon":"",
                "isPresold":""
            },
            {
                "id":3861,
                "name":"空天猎",
                "cover":{
                    "origin":"https://pic.maizuo.com/usr/movie/45c88dc07e10401f5cc2db3c3742c725.jpg"
                },
                "poster":{
                    "origin":"https://pic.maizuo.com/usr/movie/f1a8e7cdd7e262d95daaf13a8fd78090.jpg",
                    "thumbnail":"https://pic.maizuo.com/usr/movie/f1a8e7cdd7e262d95daaf13a8fd78090.jpg?x-oss-process=image/resize,m_fixed,h_0,w_300"
                },
                "intro":"空战射猎振人心 火力全开现豪情",
                "premiereAt":1506614400000,
                "grade":"8.0",
                "watchCount":6752,
                "cinemaCount":191,
                "scheduleCount":2950,
                "isPromotion":true,
                "isNowPlaying":true,
                "isComingSoon":"",
                "isPresold":""
            }
        ];  
  }
  getScollAD(){
  	return [
            {
                "imageUrl":"https://pic.maizuo.com/h5PicUpload/7ff4af809108bee5b9f69f5f26b7a687.jpg"
            },
            {
                "imageUrl":"https://pic.maizuo.com/h5PicUpload/bcb20d9fa5d448cc8fe499b3b9aa45bb.jpg"
            }
        ]
  }


     getFilms(){
    return [
            {
                "id":3842,
                "name":"猩球崛起3：终极之战",
                "cover":{
                    "origin":"https://pic.maizuo.com/usr/movie/eb4332520afe67ea34ee997eab7bf1a1.jpg"
                },
                "poster":{
                    "origin":"https://pic.maizuo.com/usr/movie/86ad3da3ed31c9744aef66174829b88f.jpg",
                    "thumbnail":"https://pic.maizuo.com/usr/movie/86ad3da3ed31c9744aef66174829b88f.jpg?x-oss-process=image/resize,m_fixed,h_0,w_300"
                },
                "intro":"黑暗面燃起 开启终极战役",
                "premiereAt":1505404800000,
                "grade":"8.3",
                "watchCount":1315131,
                "cinemaCount":43,
                "scheduleCount":141,
                "isPromotion":true,
                "isNowPlaying":true,
                "isComingSoon":"",
                "isPresold":""
            },
            {
                "id":3860,
                "name":"羞羞的铁拳",
                "cover":{
                    "origin":"https://pic.maizuo.com/usr/movie/0c6da631c27b40d8a937880017e5a4ba.jpg"
                },
                "poster":{
                    "origin":"https://pic.maizuo.com/usr/movie/d30375c7c6ada960457460b3ec76ded4.jpg",
                    "thumbnail":"https://pic.maizuo.com/usr/movie/d30375c7c6ada960457460b3ec76ded4.jpg?x-oss-process=image/resize,m_fixed,h_0,w_300"
                },
                "intro":"落魄拳手洒热血 欢喜冤家换灵魂",
                "premiereAt":1506700800000,
                "grade":"8.5",
                "watchCount":57726,
                "cinemaCount":200,
                "scheduleCount":6596,
                "isPromotion":true,
                "isNowPlaying":true,
                "isComingSoon":"",
                "isPresold":""
            },
            {
                "id":3858,
                "name":"英伦对决",
                "cover":{
                    "origin":"https://pic.maizuo.com/usr/movie/63fc1d3086b328799d85da07ae908d44.jpg"
                },
                "poster":{
                    "origin":"https://pic.maizuo.com/usr/movie/37f528066d46a5069b55771f46884e9c.jpg",
                    "thumbnail":"https://pic.maizuo.com/usr/movie/37f528066d46a5069b55771f46884e9c.jpg?x-oss-process=image/resize,m_fixed,h_0,w_300"
                },
                "intro":"千金遭袭遇难 老爸提枪复仇",
                "premiereAt":1506700800000,
                "grade":"8.4",
                "watchCount":25338,
                "cinemaCount":198,
                "scheduleCount":5102,
                "isPromotion":true,
                "isNowPlaying":true,
                "isComingSoon":"",
                "isPresold":""
            },
            {
                "id":3861,
                "name":"空天猎",
                "cover":{
                    "origin":"https://pic.maizuo.com/usr/movie/45c88dc07e10401f5cc2db3c3742c725.jpg"
                },
                "poster":{
                    "origin":"https://pic.maizuo.com/usr/movie/f1a8e7cdd7e262d95daaf13a8fd78090.jpg",
                    "thumbnail":"https://pic.maizuo.com/usr/movie/f1a8e7cdd7e262d95daaf13a8fd78090.jpg?x-oss-process=image/resize,m_fixed,h_0,w_300"
                },
                "intro":"空战射猎振人心 火力全开现豪情",
                "premiereAt":1506614400000,
                "grade":"8.4",
                "watchCount":32365,
                "cinemaCount":195,
                "scheduleCount":2701,
                "isPromotion":true,
                "isNowPlaying":true,
                "isComingSoon":"",
                "isPresold":""
            },
            {
                "id":3571,
                "name":"缝纫机乐队",
                "cover":{
                    "origin":"https://pic.maizuo.com/usr/movie/efef5a9e615e5d97ef1bc7ff004035d8.jpg"
                },
                "poster":{
                    "origin":"https://pic.maizuo.com/usr/movie/ee9f0fb9fa6bfb8265b64eec62b4554d.jpg",
                    "thumbnail":"https://pic.maizuo.com/usr/movie/ee9f0fb9fa6bfb8265b64eec62b4554d.jpg?x-oss-process=image/resize,m_fixed,h_0,w_300"
                },
                "intro":"大鹏组乐队 摇滚需保卫",
                "premiereAt":1506614400000,
                "grade":"8.0",
                "watchCount":35344,
                "cinemaCount":181,
                "scheduleCount":1511,
                "isPromotion":true,
                "isNowPlaying":true,
                "isComingSoon":"",
                "isPresold":""
            },
            {
                "id":3890,
                "name":"王牌保镖",
                "cover":{
                    "origin":"https://pic.maizuo.com/usr/movie/73500e4942a9d9bd270442ea4f4a1f7a.jpg"
                },
                "poster":{
                    "origin":"https://pic.maizuo.com/usr/movie/6831004ef5a32d09e836190e709b9ded.jpg",
                    "thumbnail":"https://pic.maizuo.com/usr/movie/6831004ef5a32d09e836190e709b9ded.jpg?x-oss-process=image/resize,m_fixed,h_0,w_300"
                },
                "intro":"杀手携保镖 亡命满天涯",
                "premiereAt":1506009600000,
                "grade":"8.4",
                "watchCount":257173,
                "cinemaCount":39,
                "scheduleCount":96,
                "isPromotion":true,
                "isNowPlaying":true,
                "isComingSoon":"",
                "isPresold":""
            },
            {
                "id":3841,
                "name":"蜘蛛侠：英雄归来",
                "cover":{
                    "origin":"https://pic.maizuo.com/usr/movie/b99e389546f016bd822735a7d7c3cbbd.jpg"
                },
                "poster":{
                    "origin":"https://pic.maizuo.com/usr/movie/cf11b4a20fe4739eabb6352714142903.jpg",
                    "thumbnail":"https://pic.maizuo.com/usr/movie/cf11b4a20fe4739eabb6352714142903.jpg?x-oss-process=image/resize,m_fixed,h_0,w_300"
                },
                "intro":"钢铁侠实力助阵 小蜘蛛大战秃鹰",
                "premiereAt":1504800000000,
                "grade":"8.4",
                "watchCount":1555845,
                "cinemaCount":10,
                "scheduleCount":23,
                "isPromotion":true,
                "isNowPlaying":true,
                "isComingSoon":"",
                "isPresold":""
            }
        ]
  }
  getFilms1(){
    return [
            {
                "id":3809,
                "name":"那一场呼啸而过的青春",
                "cover":{
                    "origin":"https://pic.maizuo.com/usr/movie/7c18e3d8f2868c91f306626425a11d38.jpg"
                },
                "poster":{
                    "origin":"https://pic.maizuo.com/usr/movie/8a1b07b993edd2f0836a27f8b5970de3.jpg",
                    "thumbnail":"https://pic.maizuo.com/usr/movie/8a1b07b993edd2f0836a27f8b5970de3.jpg?x-oss-process=image/resize,m_fixed,h_0,w_300"
                },
                "intro":"禁书变电影 黑道也深情 ",
                "premiereAt":1507132800000,
                "grade":"8.0",
                "watchCount":698,
                "cinemaCount":0,
                "scheduleCount":0,
                "isPromotion":true,
                "isNowPlaying":"",
                "isComingSoon":true,
                "isPresold":""
            },
            {
                "id":3808,
                "name":"引爆者",
                "cover":{
                    "origin":"https://pic.maizuo.com/usr/movie/1a2a8ee55adb85f8f5f393a921de696a.jpg"
                },
                "poster":{
                    "origin":"https://pic.maizuo.com/usr/movie/4d39e547acaafd93d352940a11dfd630.jpg",
                    "thumbnail":"https://pic.maizuo.com/usr/movie/4d39e547acaafd93d352940a11dfd630.jpg?x-oss-process=image/resize,m_fixed,h_0,w_300"
                },
                "intro":"火线被引爆 自救逃亡道",
                "premiereAt":1509033600000,
                "grade":"8.0",
                "watchCount":0,
                "cinemaCount":0,
                "scheduleCount":0,
                "isPromotion":true,
                "isNowPlaying":"",
                "isComingSoon":true,
                "isPresold":""
            },
            {
                "id":3559,
                "name":"芳华",
                "cover":{
                    "origin":"https://pic.maizuo.com/usr/movie/bcaac8f2ba3ac2e5ee5865824a674c17.jpg"
                },
                "poster":{
                    "origin":"https://pic.maizuo.com/usr/movie/f8d5512427d5a3863447ced5f6c98dcf.jpg",
                    "thumbnail":"https://pic.maizuo.com/usr/movie/f8d5512427d5a3863447ced5f6c98dcf.jpg?x-oss-process=image/resize,m_fixed,h_0,w_300"
                },
                "intro":"少年文工团 青春很迷茫",
                "premiereAt":1514649600000,
                "grade":"8.4",
                "watchCount":3860,
                "cinemaCount":0,
                "scheduleCount":0,
                "isPromotion":true,
                "isNowPlaying":"",
                "isComingSoon":true,
                "isPresold":""
            },
            {
                "id":3915,
                "name":"母亲的肖像",
                "cover":{
                    "origin":"https://pic.maizuo.com/usr/movie/3f416bb4b4239b89f859d49fcae20648.jpg"
                },
                "poster":{
                    "origin":"https://pic.maizuo.com/usr/movie/b2eedce3380e89c86911e3198c1e3021.jpg",
                    "thumbnail":"https://pic.maizuo.com/usr/movie/b2eedce3380e89c86911e3198c1e3021.jpg?x-oss-process=image/resize,m_fixed,h_0,w_300"
                },
                "intro":"母爱默默不经意 可已悄悄入心扉",
                "premiereAt":1507046400000,
                "grade":"8.0",
                "watchCount":0,
                "cinemaCount":0,
                "scheduleCount":0,
                "isPromotion":false,
                "isNowPlaying":"",
                "isComingSoon":true,
                "isPresold":""
            },
            {
                "id":3953,
                "name":"光影之城",
                "cover":{
                    "origin":"https://pic.maizuo.com/usr/movie/fc20bcf733b2c3f6ee4f83b06c69e948.jpg"
                },
                "poster":{
                    "origin":"https://pic.maizuo.com/usr/movie/d73e261a224f7b3cec311cb6b4d08d64.jpg",
                    "thumbnail":"https://pic.maizuo.com/usr/movie/d73e261a224f7b3cec311cb6b4d08d64.jpg?x-oss-process=image/resize,m_fixed,h_0,w_300"
                },
                "intro":"",
                "premiereAt":1507046400000,
                "grade":"8.0",
                "watchCount":0,
                "cinemaCount":0,
                "scheduleCount":0,
                "isPromotion":false,
                "isNowPlaying":"",
                "isComingSoon":true,
                "isPresold":""
            },
            {
                "id":3930,
                "name":"怨灵2",
                "cover":{
                    "origin":"https://pic.maizuo.com/usr/movie/31aded5387041c20e9d2509e5c4eb669.jpg"
                },
                "poster":{
                    "origin":"https://pic.maizuo.com/usr/movie/31b8186bb04f295a0855613a6b8408e5.jpg",
                    "thumbnail":"https://pic.maizuo.com/usr/movie/31b8186bb04f295a0855613a6b8408e5.jpg?x-oss-process=image/resize,m_fixed,h_0,w_300"
                },
                "intro":"误入猛鬼酒店 生死悬于一线",
                "premiereAt":1507737600000,
                "grade":"8.0",
                "watchCount":0,
                "cinemaCount":0,
                "scheduleCount":0,
                "isPromotion":false,
                "isNowPlaying":"",
                "isComingSoon":true,
                "isPresold":""
            },
            {
                "id":3951,
                "name":"十八洞村",
                "cover":{
                    "origin":"https://pic.maizuo.com/usr/movie/35b7d6fff0e9fdfee24e5c93f08cae4f.jpg"
                },
                "poster":{
                    "origin":"https://pic.maizuo.com/usr/movie/5067bb05fbfe8806d5a22ed33b38942f.jpg",
                    "thumbnail":"https://pic.maizuo.com/usr/movie/5067bb05fbfe8806d5a22ed33b38942f.jpg?x-oss-process=image/resize,m_fixed,h_0,w_300"
                },
                "intro":"",
                "premiereAt":1507737600000,
                "grade":"8.0",
                "watchCount":0,
                "cinemaCount":0,
                "scheduleCount":0,
                "isPromotion":false,
                "isNowPlaying":"",
                "isComingSoon":true,
                "isPresold":""
            }
        ]
  }
}
