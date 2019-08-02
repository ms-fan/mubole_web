<template>
  <div class="haunbaobancai">
     <div class="img_responsive_box" @click="handleImg" v-if="isShow">
      <img :src="bigImg" class="img-responsive" alt="响应式图像" @click.stop>
    </div>
    <!-- info -->

   <div id="info" class="info_bg">
      <div class="container">
        <div class="i-case">
          <h3 class="info-title"><span>环保板材</span><small></small></h3>
        </div>
        <ul class="case-list gallery"></ul></div></div>

   <!-- <div class="wrap">
      <div class="product-list">

        <div class="item big-item hover-img" onclick="location.href='#">

          <div class="pro-title">
            <div class="t1">楠香木</div>
            <div class="t2">A+级饰面选样标准 至臻自然亦科技</div>
            <div class="t3">查看详情<span class="pline"></span></div>
          </div>
          <a href="#" title="楠香木生态免漆板">
            <img src="/static/utils/uploads/huanbaobancai/1.jpg" alt="楠香木生态免漆板" width="1200" height="600">
          </a>
        </div>

        <div class="item pitem" data-type="生态免漆板" onclick="location.href='/pc/product/board/208.html'">
          <div class="pro-title">
            <div class="t1">生态免漆板</div>
            <div class="t2">一面科技 一面艺术</div>
            <div class="t3">查看详情<span class="pline"></span></div>
          </div>
          <div class="img"><img src="/static/utils/uploads/huanbaobancai/2.jpg" width="580" height="420"></div>
        </div> <div class="item pitem" data-type="3D实木板" onclick="location.href='/pc/product/board/356.html'">
        <div class="pro-title">
          <div class="t1">3D实木板</div>
          <div class="t2">3D实木板</div>
          <div class="t3">查看详情<span class="pline"></span></div>
        </div>
        <div class="img"><img src="/static/utils/uploads/huanbaobancai/3.png" width="580" height="420"></div>
      </div> <div class="item pitem" data-type="饰面板" onclick="location.href='/pc/product/board/359.html'">
        <div class="pro-title">
          <div class="t1">饰面板</div>
          <div class="t2">饰面板</div>
          <div class="t3">查看详情<span class="pline"></span></div>
        </div>
        <div class="img"><img src="/static/utils/uploads/huanbaobancai/4.png" width="580" height="420"></div>
      </div> <div class="item pitem" data-type="细木工板" onclick="location.href='/pc/product/board/361.html'">
        <div class="pro-title">
          <div class="t1">细木工板</div>
          <div class="t2">细木工板</div>
          <div class="t3">查看详情<span class="pline"></span></div>
        </div>
        <div class="img"><img src="/static/utils/uploads/huanbaobancai/5.png" width="580" height="420"></div>
      </div> <div class="item pitem" data-type="多层板" onclick="location.href='/pc/product/board/362.html'">
        <div class="pro-title">
          <div class="t1">多层板</div>
          <div class="t2">多层板</div>
          <div class="t3">查看详情<span class="pline"></span></div>
        </div>
        <div class="img"><img src="/static/utils/uploads/huanbaobancai/6.png" width="580" height="420"></div>
      </div> <div class="item pitem" data-type="OSB板" onclick="location.href='/pc/product/board/363.html'">
        <div class="pro-title">
          <div class="t1">OSB板</div>
          <div class="t2">OSB板</div>
          <div class="t3">查看详情<span class="pline"></span></div>
        </div>
        <div class="img"><img src="/static/utils/uploads/huanbaobancai/7.png" width="580" height="420"></div>
      </div> <div class="item pitem" data-type="阻燃板" onclick="location.href='/pc/product/board/364.html'">
        <div class="pro-title">
          <div class="t1">阻燃板</div>
          <div class="t2">阻燃板</div>
          <div class="t3">查看详情<span class="pline"></span></div>
        </div>
        <div class="img"><img src="/static/utils/uploads/huanbaobancai/8.png" width="580" height="420"></div>
      </div> <div class="item pitem" data-type="集成材" onclick="location.href='/pc/product/board/365.html'">
        <div class="pro-title">
          <div class="t1">集成材</div>
          <div class="t2">集成材</div>
          <div class="t3">查看详情<span class="pline"></span></div>
        </div>
        <div class="img"><img src="/static/utils/uploads/huanbaobancai/9.png" width="580" height="420"></div>
      </div> <div class="item pitem" data-type="石膏板" onclick="location.href='/pc/product/board/366.html'">
        <div class="pro-title">
          <div class="t1">石膏板</div>
          <div class="t2">石膏板</div>
          <div class="t3">查看详情<span class="pline"></span></div>
        </div>
        <div class="img"><img src="/static/utils/uploads/huanbaobancai/10.png" width="580" height="420"></div>
      </div>






        <div class="cls"></div>
      </div>

    </div>-->



            <div class="pro-title1" align="center">
              <div class="pro-title">
                <div class="t1">楠香木</div>
                <div class="t2">A+级饰面选样标准 至臻自然亦科技</div>
                <div class="t3">查看详情<span class="pline"></span></div>
              </div>
              <a href="#" title="楠香木生态免漆板">
                <img src="/static/utils/uploads/huanbaobancai//1.jpg" alt="楠香木生态免漆板" width="1200" height="600" align="center">
              </a>
            </div>
    <br/>
          <div class="product-list">
            <ul class="pro-list">
            <li class="col-lg-4 col-md-4 col-sm-4 col-xs-6" v-for="(item,index) in images" :key="index"  @click.stop="handleClose(item.img)">
               <div class="item" data-type="item.t1">
                <div class="pro-title">
                  <div class="t1">{{item.t1}}</div>
                  <div class="t2">{{item.t2}}</div>
                  <div class="t3">{{item.t3}}<span class="pline"></span></div>
                </div>
              </div>
              <div class="img"><img :src="item.img" :alt="item.img"  width="580" height="420"/></div>
            </li>
            </ul>
          </div>
        <div class="page">
          <span class="pageinfo">共 <strong>1</strong>页<strong>{{images.length}}</strong>条记录</span>
        </div>
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
        },{
          img: '/static/utils/uploads/huanbaobancai/3.png',
          t1: '3D实木板',
          t2: '3D实木板',
          t3: '查看详情'
        },{
          img: '/static/utils/uploads/huanbaobancai/4.png',
          t1: '饰面板',
          t2: '饰面板',
          t3: '查看详情'
        },{
          img: '/static/utils/uploads/huanbaobancai/5.png',
          t1: '细木工板',
          t2: '细木工板',
          t3: '查看详情'
        },{
          img: '/static/utils/uploads/huanbaobancai/6.png',
          t1: '多层板',
          t2: '多层板',
          t3: '查看详情'
        },{
          img: '/static/utils/uploads/huanbaobancai/7.png',
          t1: 'OSB板',
          t2: 'OSB板',
          t3: '查看详情'
        },{
          img: '/static/utils/uploads/huanbaobancai/8.png',
          t1: '阻燃板',
          t2: '阻燃板',
          t3: '查看详情'
        },{
          img: '/static/utils/uploads/huanbaobancai/9.png',
          t1: '集成材',
          t2: '集成材',
          t3: '查看详情'
        },{
          img: '/static/utils/uploads/huanbaobancai/10.png',
          t1: '石膏板',
          t2: '石膏板',
          t3: '查看详情'
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
