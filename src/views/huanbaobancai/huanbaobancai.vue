<template>
  <div class="haunbaobancai">
    <!-- 主体部分s -->
    <div id="info">
      <div class="container">

          <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 pre" style="padding: 0;">
            <img src="/static/utils/uploads/huanbaobancai//1.jpg" class="bao_big_img" alt="楠香木生态免漆板" style="width: 100%;">
            <div class="pao bao_big_box">
              <div class="bao_big_box_cai">环保板材</div>
              <div class="bao_big_box_ke">A+级饰面选样标准 至臻自然亦科技</div>
              <div>查看详情</div>
            </div>
          </div>
          <div class="bao_big_bg pre">
            <div v-for="(item,index) in images" :key="index" class="col-xs-6 col-sm-6 col-md-6 col-lg-6 pre bao_big_bg_color"
              style="padding: 0;">
              <div class="bao_big_bg_font">
                <div class="bao_big_bg_font1">{{item.t1}}</div>
                <div class="bao_big_bg_font2">{{item.t2}}</div>
                <div class="bao_big_bg_font3">{{item.t3}}</div>
              </div>
              <img :src="item.img" alt="" class="bao_big_bg_img">
            </div>
          </div>

      </div>
    </div>
    <!-- 主体部分e -->
  </div>
</template>

<script>
  export default {
    name: '',

    mixins: [],

    components: {},

    props: {},

    data() {
      return {
        images: [{
          img: '/static/utils/uploads/huanbaobancai/2.jpg',
          t1: '生态免漆板',
          t2: '一面科技 一面艺术',
          t3: '查看详情'
        }, {
          img: '/static/utils/uploads/huanbaobancai/3.png',
          t1: '3D实木板',
          t2: '3D实木板',
          t3: '查看详情'
        }, {
          img: '/static/utils/uploads/huanbaobancai/4.png',
          t1: '饰面板',
          t2: '饰面板',
          t3: '查看详情'
        }, {
          img: '/static/utils/uploads/huanbaobancai/5.png',
          t1: '细木工板',
          t2: '细木工板',
          t3: '查看详情'
        }, {
          img: '/static/utils/uploads/huanbaobancai/6.png',
          t1: '多层板',
          t2: '多层板',
          t3: '查看详情'
        }, {
          img: '/static/utils/uploads/huanbaobancai/7.png',
          t1: 'OSB板',
          t2: 'OSB板',
          t3: '查看详情'
        }, {
          img: '/static/utils/uploads/huanbaobancai/8.png',
          t1: '阻燃板',
          t2: '阻燃板',
          t3: '查看详情'
        }, {
          img: '/static/utils/uploads/huanbaobancai/9.png',
          t1: '集成材',
          t2: '集成材',
          t3: '查看详情'
        }, {
          img: '/static/utils/uploads/huanbaobancai/10.png',
          t1: '石膏板',
          t2: '石膏板',
          t3: '查看详情'
        }],
      }
    },

    computed: {},

    watch: {},

    created() {},

    mounted() {},

    destroyed() {},

    methods: {

    }
  };
</script>

<style lang="less">
  .pre {
    position: relative
  }

  .pao_lt0 {
    position: absolute;
    left: 0;
    top: 0;
  }

  .dis_y_center {
    display: flex;
    flex-direction: column;
    align-items: center
  }

  .pao {
    .dis_y_center();
    .pao_lt0();
    width: 100%;
    height: 100%;
    padding-top: 5%;
    box-sizing: border-box;
  }

  .bao_big_box {
    color: #fff;

    &_cai {
      font-size: 24px;
      line-height: 40px;
      margin-bottom: 5px;
      letter-spacing: 8px;
      font-weight: 600;
    }

    ;

    &_img {
      width: 100%;
    }
  }

  .bao_big_bg {
    width: 100%;
    box-sizing: border-box;

    &_color {
      background: #F5F5F5;
    }

    &_img {
      width: 100%;
      background: #fff;
    }

    &_font {
      width: 100%;
      height: 30%;
      box-sizing: border-box;
      .dis_y_center();
      padding-top: 15%;
      background: #fff;
    }
  }
</style>
