<template>
  <div>
		<!-- 引用头部模块 -->
    <myheader></myheader>
    <div class="wrap">
		<!-- 主栏目 -->
      <div class="main">
        <ul class="list-news" id="news">
          <li :key="index" v-for="(data1,index) in data.data">
            <h3><a :href="data1.url1" :title="data1.title" target="_blank">{{ data1.title }}</a></h3>
            <div class="con">
              {{ data1.content }}<a :href="data1.url1" target="_blank" class="red-more">[详情]</a>
            </div>
            <p class="date"><i></i>{{ data1.time5 }}</p>
          </li>
        </ul>
        <a href="http://news.mysteel.com/" target="_blank" class="clickMore hide">点击查看更多</a>
      </div>
  	</div>

  </div>
</template>

<script>
import jsonp from 'jsonp'
import myheader from '../../components/myheader.vue'

export default {
  asyncData(context) {
    return {
      data: {}
    }
  },
  //创建生命周期
  created() {
    this.fetchData();
  },
  methods:{
    //获取详情页内容
    fetchData() {
      var _this = this
      var callfun = function(response){
        _this.data = response;
      }
      //console.log(this)
      //判断运行环境，jsonp只支持浏览器端运行
      if (process.browser) {
        jsonp('https://mysteelapi.steelphone.com/tpl/newarticle_list.html?type=a&channel=4935&breedId=&cityId=&pageon=1&pagesize=15&debug=true&liveNews=false', null, function (err, response) {
          if (err) {
            console.error(err.message);
          } else {
            _this.data = response;
          }
        });
      }
    }
  },
  //注册组件
  components:{
      myheader
  },
  head: {
    text:"文章列表页",
    title: '$!{cityTool.name($!{cityId})}$!{breedTool.name($!{breedId})}钢材价格行情列表_我的钢铁',
    meta: [
      { charset: 'utf-8', hid: 'charset' },
      { "http-equiv": 'X-UA-Compatible',hid: 'http-equiv', content: 'IE=edge,chrome=1' },
      { renderer: 'X-UA-Compatible',hid: 'renderer', content: 'webkit' },
      { name: 'viewport',hid: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'description',hid: 'description', content: '我的钢铁网提供最新最全的$!{cityTool.name($!{cityId})}$!{breedTool.name($!{breedId})}价格行情' },
      { name: 'keywords',hid: 'keywords', content: '$!{breedTool.name($!{breedId})}价格行情,$!{cityTool.name($!{cityId})}$!{breedTool.name($!{breedId})}价格行情' }
    ],
    //引用外部链接
    link: [
      { rel: 'stylesheet', type: 'text/css', href: 'https://a.mysteelcdn.com/common/3.0/content/2012/gclist.css?v=201207121050' }
    ]
  }
}
</script>
<style>
.wrap {
  margin: 0 auto 55px !important; width: 980px;}
  .wrap .list-news li {
    border-bottom: 1px solid #dcdee6;
    padding: 14px 0; }
    .wrap .list-news li h3 {
      font-size: 20px;
      font-weight: bold;
      height: 25px;
      margin-bottom: 9px;
      overflow: hidden; }
    .wrap .list-news li .con {
      max-height: 84px;
      line-height: 28px;
      color: #666;
      overflow: hidden;
      position: relative;
      z-index: 1; }
    .wrap .list-news li .red-more {
      position: absolute;
      right: 0;
      z-index: 2;
      bottom: 0;
      background: #fff; }
    .wrap .list-news li .con-figure {
      padding-top: 5px;
      overflow: hidden;
      zoom: 1; }
      .wrap .list-news li .con-figure dt {
        padding-top: 5px;
        float: left;
        overflow: hidden; }
      .wrap .list-news li .con-figure .newsImg {
        width: 150px;
        height: 105px; }
      .wrap .list-news li .con-figure dd {
        width: 605px;
        height: 110px;
        float: right;
        overflow: hidden; }
      .wrap .list-news li .con-figure .analyst-img {
        width: 79px;
        padding-top: 0; }
        .wrap .list-news li .con-figure .analyst-img .img {
          width: 75px;
          height: 75px;
          border: 2px solid #b2c4e5;
          border-radius: 50%;
          overflow: hidden; }
        .wrap .list-news li .con-figure .analyst-img p {
          text-align: center;
          height: 22px;
          color: #3861ab;
          font-size: 16px;
          margin-top: 8px;
          overflow: hidden; }
      .wrap .list-news li .con-figure .analystCon {
        width: 670px !important;
        max-height: 144px !important;
        height: auto;
        *max-height: 140px !important; }
        .wrap .list-news li .con-figure .analystCon h3 {
          margin-bottom: 12px; }
  .wrap .newsList li.dashed {
    border-bottom: 1px dashed #c2c6d4;
    background: none;
    height: 1px;
    margin: 11px 0;
    *margin: 0;
    font-size: 0;
    overflow: hidden; }
  .wrap .clickMore {
    display: block;
    height: 43px;
    line-height: 43px;
    text-align: center;
    background: #e9f1ff;
    border: 1px solid #dcdee6;
    font-size: 16px;
    color: #3861ab;
    margin-top: 30px;
    cursor: pointer; }
  .wrap .clickMore:hover {
    text-decoration: none; }
  .wrap .readMore {
    padding-bottom: 15px; }
    .wrap .readMore h3 {
      border-bottom: 3px solid #dadada;
      padding: 0 0 8px 33px;
      height: 26px;
      line-height: 25px;
      font-size: 20px;
      color: #dc3535;}
  .wrap .pageBox {
    position: relative;
    font-size: 14px;
    margin-top: 30px;
    height: 43px;
    line-height: 40px; }
    .wrap .pageBox .home-page {
      display: inline-block; }
    .wrap .pageBox .last-page {
      display: inline-block;
      float: right;
      margin-right: 160px; }
    .wrap .pageBox a.current, .wrap .pageBox span.current {
      color: #fff !important;
      background: #3861ab !important; }
    .wrap .pageBox a, .wrap .pageBox a.current, .wrap .pageBox span.current {
      display: inline-block;
      margin-right: 5px;
      padding: 0 5px;
      text-align: center;
      border-radius: 2px;
      height: 28px;
      line-height: 28px;
      -moz-box-shadow: 1px 1px 1px #d9d9d9;
      box-shadow: 1px 1px 1px #d9d9d9;
      color: #656565;
      background: #efefef; }
    .wrap .pageBox a:hover {
      color: #fff;
      background: #3861ab;
      text-decoration: none; }
    .wrap .pageBox .page-right {
      position: absolute;
      right: 0;
      bottom: 3px;
      *bottom: 0;
      font-size: 13px; }
      .wrap .pageBox .page-right .goPage input[type="text"] {
        width: 26px;
        height: 26px;
        border: 1px solid #ccc;
        text-align: center;
        *position: relative;
        *bottom: -3px; }
      .wrap .pageBox .page-right .goPage input[type="button"] {
        background: #efefef;
        cursor: pointer;
        border: none;
        outline: none;
        padding: 0 5px;
        height: 28px;
        line-height: 28px;
        border-radius: 2px;
        -moz-box-shadow: 1px 1px 1px #d9d9d9;
        box-shadow: 1px 1px 1px #d9d9d9;
        color: #333;
        *position: relative;
        *bottom: -2px; }
      .wrap .pageBox .page-right .goPage input[type="button"]:hover {
        background: #3861ab;
        color: #fff; }
  .wrap .page {
    position: absolute;
    width: 85%;
    padding-right: 15%;
    text-align: center;
    bottom: 3px; }
  .wrap .iframeBox {
    margin-top: 15px; }
</style>
