<template>
  <div class="chanpinmingchen">
    <!-- info -->
    <div id="info" class="info_bg" style="padding-bottom: 50px;">
      <div class="container" style="background: none;">
        <div class="i-product">
          <div class="col-lg-8 col-md-8 col-sm-8 col-xs-12 i-product-content">
            <div class="i-p-left">
              <h3 class="info-t">{{name}}</h3>
              <div class="info_img_detail" style="text-align: center"> <img :src='img'
                  :alt="name" style="max-width:100%;"> </div>
              <div class="content_p"> <span class="sp"><small>详细说明：</small></span>
                <p>
                  柔性质感涂料是以天然沙石与合成树脂为主体的砂壁状涂料，具有优良的耐候性和柔韧性，可长时间保护建筑物的美观，该产品颜色和纹理丰富，可以让用户涂饰出各种粗犷别致的砂状效果。用户只要采用不同的施工工具和施工技巧就能渲染出多种随心所欲的艺术性纹理。</p>
                <p>
                  产品特色</p>
                <p>
                  1、装饰效果媲美外墙砖：色彩上可模仿面砖，立体感强，用于外墙可创造出面砖所无法比拟的艺术境界。</p>
                <p>
                  2、具有更低的综合成本：以卓越的涂料特征和极富想象力的艺术感，创造出全新的外墙涂料新概念，价格低于面砖的价格，可谓价廉物美。</p>
                <p>
                  3、更加安全性：与传统的外墙砖等相比，其涂层薄，自重轻、只有普通砖的1/10，不仅与基层牢固结合，而且彻底杜绝了外墙砖似的脱落隐患。</p>
                <p>
                  4、耐候性强：能经受南北方地区极端的气候环境，品质稳定有保障。</p>
                <p>
                  5、抗污性好：污物难以附着，自洁性好，人工或雨水自然冲洗过后，依然亮丽如新。</p>
                <p>
                  施工工艺</p>
                <p>
                  1.平整基层墙体</p>
                <p>
                  在外墙墙面上批刮弹性腻子1&mdash;2遍，直至平整。</p>
                <p>
                  2.滚涂底漆</p>
                <p>
                  腻子干燥后，用砂纸打磨掉毛面和批刀痕迹后，用永阳牌专用有色底漆(一般为接缝线条色)滚涂2遍。</p>
                <p>
                  参考用量：0.16-O.2kg/㎡</p>
                <p>
                  3.弹出分隔线</p>
                <p>
                  底漆干燥后，用墨线根据砖面设计要求，弹出分隔线条。</p>
                <p>
                  4.按分隔线贴胶带条</p>
                <p>
                  用厚约1.2mm的胶带条，按照横墨线的左边贴出分割线线条，整条的贴。</p>
                <p>
                  5.制作条砖线框（仅限仿砖）</p>
                <p>
                  用裁纸刀切割不需要分割线部分和横竖重叠部分胶带，而后分别揭去不需要分割线部分和横竖重叠部分胶带。</p>
                <p>
                  6.批刮/喷质感漆</p>
                <p>
                  用批刀(或喷枪)按照胶带厚度批刮(或喷)质感漆，批刮(或喷)的方向一致．(如劈开砖风格要求拉出横纹或竖纹)</p>
                <p>
                  参考用量：2-4kg/㎡</p>
                <p>
                  7.揭分割线条胶带</p>
                <p>
                  稍干后(约15-20分钟)，用小刀揭掉贴缝胶带，此时砖与缝即成型。如需混拼其它色彩砖时，须随手把施工混拼色彩砖部分的主色彩砖漆铲除。</p>
                <p>
                  8.仅适用于混拼色彩砖的工艺</p>
                <p>
                  主色砖所批刮的质感漆稍干后(约2天)，在已铲除主色质感漆的部位，沿着砖的四周外框重新贴上接缝胶带，而后批刮混拼砖色彩的质感漆。</p>
                <p>
                  9.打磨修边</p>
                <p>
                  彩砖漆干燥后(约2天)，用抹砂板(或砂纸)刮抹层的毛刺和边口不平整的凸出涂层，其中阳角部分可用砂纸适当打磨一下(或打磨成一小R角)，使得阳角不要太尖锐。</p>
                <p>
                  10.修正缺陷</p>
                <p>
                  用永阳牌彩砖专用底漆，描一下接缝中的缺陷。(包括线条被污染的部分)</p>
                <p>
                  11.罩面</p>
                <p>
                  扫清污灰后，滚涂或喷涂透明罩面涂层。(建议采用永阳牌透明罩光清漆)<br />
                  参考用量：O.15-0.2kg/㎡</p>
                <p>
                  产品用途</p>
                <p>
                  大型中高档房产项目，具有乡村风格的楼盘、别墅，或是内墙的局部装饰。</p>

              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-4 col-sm-4 hidden-xs">
            <div class="i-p-right">
              <div class="i-p-mesg"> <span>随时欢迎您与我们详细沟通</span> <img src="static/utils/img/p-mesg.jpg" alt="" class="img-responsive" />
               <router-link to='zixunzhongxin'>
                  <img src="/static/utils/img/mes.png" alt="" /><small>我要咨询+</small>
                </router-link>
              </div>
              <div class="i-p-case">
                <h2>产品中心</h2>
                <ul>
                  <li><img :src="img"/> </li>
                </ul>
                <router-link to='chanpinzhongxin'>
                  <img src="/static/utils/img/more.png" alt="" /><small>了解详情+</small>
                </router-link>
              </div>
            </div>
          </div>
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
        img:'',
        name:'',
      }
    },

    computed: {},

    watch: {},

    created() {
      let img = this.$route.query.img;
      let name = this.$route.query.name;
      this.img = img;
      this.name = name;
    },

    mounted() {},

    destroyed() {},

    methods: {
      handleClick: function(e) {
        console.log(e)

      },
    }
  };
</script>

<style lang="less">
</style>
