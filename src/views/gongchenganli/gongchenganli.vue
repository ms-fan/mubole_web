<template>
  <div class="gongchenganli">
     <div class="img_responsive_box" @click="handleImg" v-if="isShow">
      <img :src="bigImg" class="img-responsive" alt="响应式图像" @click.stop>
    </div>
    <!-- info -->

    <div id="info" class="info_bg">
      <div class="container">
        <div class="i-case">
          <h3 class="info-title"><span>工程案例</span><small></small></h3>
        </div>
        <ul class="case-list gallery">


          <li class="col-lg-4 col-md-4 col-sm-4 col-xs-6" v-for="(item,index) in images" :key="index"  @click.stop="handleClose(item.img)">
            <a>
              <p>
                <img :src="item.img" :alt="item.img"/>
                <span><i class="iconfont icon-sousuo"></i><small>MORE+</small></span>
              </p>
              <small>{{item.name}}</small>
            </a>
          </li>

        </ul>
        <div class="page">
          <span class="pageinfo">共 <strong>1</strong>页<strong>{{images.length}}</strong>条记录</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: '',

    mixins: [],

    components: {

    },

    props: {},

    data() {
      return {
        images: [{
          img: '/static/utils/uploads/gongchenganli/8.jpg',
          name: '案例展示八'
        }, {
          img: '/static/utils/uploads/gongchenganli/7.jpg',
          name: '案例展示七'
        }, {
          img: '/static/utils/uploads/gongchenganli/6.jpg',
          name: '案例展示六'
        }, {
          img: '/static/utils/uploads/gongchenganli/5.jpg',
          name: '案例展示五'
        }, {
          img: '/static/utils/uploads/gongchenganli/4.jpg',
          name: '案例展示四'
        }, {
          img: '/static/utils/uploads/gongchenganli/3.jpg',
          name: '案例展示三'
        }, {
          img: '/static/utils/uploads/gongchenganli/2.jpg',
          name: '案例展示二'
        }, {
          img: '/static/utils/uploads/gongchenganli/1.png',
          name: '案例展示一'
        }],
        isShow:false,
        bigImg:''
      }
    },

    computed: {},

    watch: {},

    created() {},

    mounted() {},

    destroyed() {},

    methods: {
      handleClick: function(e) {

      },
      handleClose: function(img) {
        this.bigImg = img;
        this.isShow = true
      },
      handleImg:function(){
        this.isShow = false
      }
    }
  };
</script>

<style lang="less">
  .img_responsive_box {
    position: fixed;
    top: 0px;
    left: 0rpx;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    background: rgba(0, 0, 0, .8);
    z-index: 10000;

    .img-responsive {
      display: inline-block;
      height: auto;
      max-width: 100%;
    }
  }
</style>
