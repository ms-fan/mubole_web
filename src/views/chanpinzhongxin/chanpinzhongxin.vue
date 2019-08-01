<template>
  <div class="chanpinzhongxin">
    <div id="info" class="info_bg">
      <div class="container">
        <div class="i-product">
          <h3 class="info-title"><span>产品中心</span><small style="line-height:22px;">美是我们的外表，健康是我们的内在，环保是我们的终极追求</small></h3>
          <!-- 导航部分s -->
          <nav class="navbar navbar-default" role="navigation">
            <div class="container-fluid">
              <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#example-navbar-collapse">
                  <span class="sr-only">切换导航</span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="#">产品分类</a>
              </div>
              <div class="collapse navbar-collapse" id="example-navbar-collapse">
                <ul class="nav navbar-nav">
                  <li><a @click.prevent></a></li>
                  <li><a @click.prevent></a></li>
                  <li :class="isActive==0?'chanping_active':''"><a href="#" @click.prevent="handleCai(0)">生态板</a></li>
                  <li><a @click.stop></a></li>
                  <li :class="isActive==1?'chanping_active':''"><a href="#" @click.prevent="handleCai(1)">五金辅材</a></li>
                  <li><a @click.stop></a></li>
                  <li :class="isActive==2?'chanping_active':''"><a href="#" @click.prevent="handleCai(2)">线条</a></li>
                  <li><a @click.stop></a></li>
                  <li :class="isActive==3?'chanping_active':''"><a href="#" @click.prevent="handleCai(3)">胶水</a></li>
                  <li><a @click.stop></a></li>
                  <li :class="isActive==4?'chanping_active':''"><a href="#" @click.prevent="handleCai(4)">石膏板</a></li>
                </ul>
              </div>
            </div>
          </nav>
          <!-- 导航部分e -->
          <!-- 线条s -->
          <div class="product">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12  wow fadeInRightSmall" style="padding-bottom: 5rem;">
              <ul class="pro-list">
                <li class="col-lg-3 col-md-3 col-sm-3 col-xs-6" v-for="(item,index) in listImages" :key="index">
                  <p><img :src="item.img" :alt="item.name" class="img-responsive" /></p>
                  <h5 class="chanping_font">{{item.name}}</h5>
                </li>

              </ul>
            </div>
          </div>
          <!-- 线条e -->
          <ul class="pro-type">
            <li>
              <img src="/static/utils/uploads/180225/1-1P225150G2H3.jpg" alt="产品分类一" class="col-lg-3 col-md-3 col-sm-5 col-xs-6" />
              <div class="col-lg-7 col-md-7 col-sm-7 col-xs-6"> <b>产品分类一</b> <small class="hidden-xs">1、单彩真石漆 产品说明
                  单彩石材调是一种采用高级水性纯丙耐候树脂，配合天然无机石材，调制而成的耐候性厚涂材涂料。色石大小结合，颜色衬托别致，是天然岩石最佳的替代涂料 产品特色
                  1涂层表面较为粗犷，能轻易的创造出有如天然石材般...</small>
                <a href="#">了解详情 ></a> </div>
            </li>

            <li>
              <img src="/static/utils/uploads/180225/1-1P225150K3T5.jpg" alt="产品分类二" class="col-lg-3 col-md-3 col-sm-5 col-xs-6" />
              <div class="col-lg-7 col-md-7 col-sm-7 col-xs-6"> <b>产品分类二</b> <small class="hidden-xs">产品说明
                  反射隔热涂料是由优质纯丙烯酸酯共聚乳液最新反射隔热功能性涂料，金红石型钛白粉及其它颜填料，进口助剂，应用独特工艺技术精制而成，是一种具有各种优异性能的外墙面用漆，保温隔热性能效果突出，本品为安全无毒，为绿色环保节能涂料。...</small>
                <a href="#">了解详情 ></a> </div>
            </li>

            <li>
              <img src="/static/utils/uploads/180225/1-1P22515093GE.jpg" alt="产品分类三" class="col-lg-3 col-md-3 col-sm-5 col-xs-6" />
              <div class="col-lg-7 col-md-7 col-sm-7 col-xs-6"> <b>产品分类三</b> <small class="hidden-xs">1、平面型水包水多彩涂料 产品说明
                  牌花岗岩多彩涂料是采用优质超耐候型纯丙烯酸树脂为基料，超耐候无机颜料，进口助剂和水应用独特工艺精制而成的一种水性环保涂料，与石材的相似度几近99.99%，模仿石材，超越石材，达到进口顶级石材的标...</small>
                <a href="#">了解详情 ></a> </div>
            </li>

            <li>
              <img src="/static/utils/uploads/180225/1-1P225151101326.jpg" alt="产品分类四" class="col-lg-3 col-md-3 col-sm-5 col-xs-6" />
              <div class="col-lg-7 col-md-7 col-sm-7 col-xs-6"> <b>产品分类四</b> <small class="hidden-xs">1、粘魔师瓷砖粘结剂 产品介绍：
                  从家装墙砖市场风靡以来，市场上一直对墙砖空鼓、渗水、脱落现象得不到控制，成为瓷砖界的一大难题。我们公司研发团队为了攻克这个难题，运用纳米技术和先进的制胶技术，反复做了多次实验与试验，最...</small>
                <a href="#/">了解详情 ></a> </div>
            </li>


          </ul>
          <div class="page"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {
    listImage0,
    listImage1,
    listImage2,
    listImage3,
    listImage4
  } from '../../assets/js/listdata.js'
  export default {
    name: '',

    mixins: [],

    components: {

    },

    props: {},

    data() {
      return {
        isActive: 0,
        listImages: [],
      }
    },

    computed: {},

    watch: {},
    created() {
      this.listImages = JSON.parse(listImage0());
    },

    mounted() {

    },

    destroyed() {},

    methods: {
      handleClick: function(e) {
        console.log(e)

      },
      handleCai: function(n) {
        let listData = '';
        switch (parseInt(n)) {
          case 0:
            listData = JSON.parse(listImage0());
            break;
          case 1:
            listData = JSON.parse(listImage1());
            break;
          case 2:
            listData = JSON.parse(listImage2());
            break;
          case 3:
            listData = JSON.parse(listImage3());
            break;
          case 4:
            listData = JSON.parse(listImage4());

        }
        this.listImages = listData;
        this.isActive = n;
      }
    }
  };
</script>

<style lang="less">
  .product .pro-list li p {
    background: #999;
  }

  .chanping {
    &_active {
      background: #44914a;
    }

    &_active a {
      color: #fff !important;
    }

    &_font {
      padding: 1.4rem;
      background: #f7f7f7;
      text-align: center;
      color: #000;

      &:hover {
        transition: all .3s;
        -moz-transition: all .3s;
        -webkit-transition: all .3s;
        -o-transition: all .3s;
        background: #44914a;
        color: #fff;
      }
    }
  }
</style>
