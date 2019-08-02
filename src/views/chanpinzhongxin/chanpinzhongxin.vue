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
