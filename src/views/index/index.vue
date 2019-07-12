<template>
	<div class="index">
		<div class="banner">
			<!-- Swiper -->
			<el-carousel indicator-position="outside" height="38rem">
				<el-carousel-item v-for="item in imgs" :key="item">
					<el-image style="width: 100%; height: 100%" :src="item" fit="cover"></el-image>
				</el-carousel-item>
			</el-carousel>
		</div>
		</header>
		<div class="hot-search hidden-l">
			<div class="container">
				<p> <i class="iconfont icon-dianhua"></i> <span>全国咨询热线：</span> <b>400-123-4567</b> </p>
				<form action="">
					<input type="text" placeholder="-- 输入搜索关键字 --" name="q" />
					<input type="submit" value="搜索" />
				</form>
			</div>
		</div>
		<!--main-->
		<div id="main">
			<!--company-->
			<div class="com-nav">
				<div class="container">
					<ul>
						<li class="col-lg-4 col-md-4 col-sm-4 col-xs-12 wow fadeInUpSmall"> <a href="#">
								<p><img src="/static/utils/uploads/180225/1-1P225110155Z0.jpg" alt="" class="center-block img-responsive" /></p>
								<div> <b>关于我们</b> <small>ABOUT</small> </div>
							</a> </li>
						<li class="col-lg-4 col-md-4 col-sm-4 col-xs-12 wow fadeInUpSmall"> <a href="#">
								<p><img src="/static/utils/uploads/180225/1-1P22511033R64.jpg" alt="" class="center-block img-responsive" /></p>
								<div> <b>产品中心</b> <small>PRODUCT</small> </div>
							</a> </li>
						<li class="col-lg-4 col-md-4 col-sm-4 col-xs-12 wow fadeInUpSmall"> <a href="#">
								<p><img src="/static/utils/uploads/180225/1-1P225110510V2.jpg" alt="" class="center-block img-responsive" /></p>
								<div> <b>工程案例</b> <small>CASE</small> </div>
							</a> </li>
					</ul>
				</div>
			</div>
			<!--product-->
			<div class="product">
				<div class="container">
					<div class="main-title  wow fadeInUpSmall"> <b>产品中心</b> <small class="hidden-l">美是我们的外表，健康是我们的内在，环保是我们的终极追求</small>
						<a href="#">了解更多+</a> </div>
					<div class="pro-img col-lg-3 col-md-3 col-sm-3 col-sm-12 hidden-xs  wow fadeInLeft"> <img src="/static/utils/img/pdc-l.jpg"
						 class="img-responsive" /> </div>
					<div class="col-lg-9 col-md-9 col-sm-9 col-xs-12  wow fadeInRightSmall">
						<ul class="pro-list">
							<li class="col-lg-4 col-md-4 col-sm-4 col-xs-6"> <a href="#">
									<p><img src="/static/utils/uploads/gongchenganli/6.jpg" alt="产品名称六" class="img-responsive" /></p>
									<div> <b class="hidden-xs"></b> <span>产品名称六</span> <i class="iconfont icon-arrow-right"></i> </div>
								</a> </li>
							<li class="col-lg-4 col-md-4 col-sm-4 col-xs-6"> <a href="#">
									<p><img src="/static/utils/uploads/gongchenganli/5.jpg" alt="产品名称五" class="img-responsive" /></p>
									<div> <b class="hidden-xs"></b> <span>产品名称五</span> <i class="iconfont icon-arrow-right"></i> </div>
								</a> </li>
							<li class="col-lg-4 col-md-4 col-sm-4 col-xs-6"> <a href="#">
									<p><img src="/static/utils/uploads/gongchenganli/4.jpg" alt="产品名称四" class="img-responsive" /></p>
									<div> <b class="hidden-xs"></b> <span>产品名称四</span> <i class="iconfont icon-arrow-right"></i> </div>
								</a> </li>
							<li class="col-lg-4 col-md-4 col-sm-4 col-xs-6"> <a href="#">
									<p><img src="/static/utils/uploads/gongchenganli/3.jpg" alt="产品名称三" class="img-responsive" /></p>
									<div> <b class="hidden-xs"></b> <span>产品名称三</span> <i class="iconfont icon-arrow-right"></i> </div>
								</a> </li>
							<li class="col-lg-4 col-md-4 col-sm-4 col-xs-6"> <a href="#">
									<p><img src="/static/utils/uploads/gongchenganli/2.jpg" alt="产品名称二" class="img-responsive" /></p>
									<div> <b class="hidden-xs"></b> <span>产品名称二</span> <i class="iconfont icon-arrow-right"></i> </div>
								</a> </li>
							<li class="col-lg-4 col-md-4 col-sm-4 col-xs-6"> <a href="#">
									<p><img src="/static/utils/uploads/gongchenganli/1.png" alt="产品名称一" class="img-responsive" /></p>
									<div> <b class="hidden-xs"></b> <span>产品名称一</span> <i class="iconfont icon-arrow-right"></i> </div>
								</a> </li>

						</ul>
					</div>
				</div>
			</div>
			<!--company-->

			<div class="company">
				<div class="container">
					<h4> <small class="wow fadeInUpSmall">ABOUT</small> <span class="wow fadeInUpSmall" data-wow-delay="0..2s">关于我们</span>
					</h4>
					<span class="wow fadeInUpSmall">Treezo是千年舟的国际识别名称，Treezo具有“绿色地带”之意，专门设计的字型嵌入舟型图案，犹如一枚木刻印信。标识造型方圆并济，内敛而不保守，发展而不张扬，形成千年舟独特的标识符号。深绿色图形，金色文字，开启了千年舟“自然、经典、永恒”的家居图腾文化
						...</span>
					<ul class="hidden-xs">
						<li class="wow fadeInLeftSmall"> <a href="#"> <img src="/static/utils/uploads/180225/1-1P2251132405G.png" alt="" />
								<b>品牌介绍</b> <small>2014年成功上榜《涂料工业》杂志，是中国建筑外墙装饰涂料推荐使用品牌。</small> </a> </li>
						<li class="wow fadeInLeftSmall"> <a href="#"> <img src="/static/utils/uploads/180225/1-1P225113324T1.png" alt="" />
								<b>发展历程</b> <small>耐候保色性好，由于采用进口原料，确保了涂饰后的色彩鲜艳亮丽，年限持久。</small> </a> </li>
						<li class="wow fadeInLeftSmall"> <a href="#"> <img src="/static/utils/uploads/180225/1-1P225113303462.png" alt="" />
								<b>企业资质</b> <small>荣获了“信用（合同）AAA级企业”、“国家装饰装修二级资质企业”、“常州市建材行业产业十强产品”等多项荣誉。</small> </a> </li>
					</ul>
				</div>
			</div>

			<!--adv-->
			<div class="adv">
				<div class="container">
					<div class="adv-txt">
						<h4> <span class="wow fadeInUpSmall">ADVANTAGE</span> <small class="wow fadeInUpSmall">公司优势</small> </h4>
						<ul>

							<li class="wow fadeInUpSmall"> <span><img src="/static/utils/uploads/180225/1-1P225113K01D.png" alt="" />某某材料</span>
								<small>创立于上世纪九十年代，总部坐落于美丽的江南水乡，我公司深信基让长育之道，在于道法自然。十六年的耕耘，十年的专注，十六年的孜孜以求。</small>
							</li>

							<li class="wow fadeInUpSmall"> <span><img src="/static/utils/uploads/180225/1-1P22511395U92.png" alt="" />前沿实力</span>
								<small>某某材料后工业时代的环保卫士，美是我们的外表，健康是我们的内在，环保是我们的终极追求。我们一直在原有
									的基础上不断突破，提升自己。</small> </li>

							<li class="wow fadeInUpSmall"> <span><img src="" alt="" />管理优势</span> <small>严格的市场经营管理 保护统一的终端服务体系 快捷的物流配发体系
									全方位产品及施工技术支持</small> </li>

							<li class="wow fadeInUpSmall"> <span><img src="" alt="" />自动化生产</span> <small>标准化建设的厂区，引逬顶级的生产设备，规范
									员工操作流程，为人类创造一个无毒、无害、绿色、环保的生产环境。</small> </li>

							<li class="wow fadeInUpSmall"> <span><img src="/static/utils/uploads/180225/1-1P2251143252N.png" alt="" />产品优势</span>
								<small>产品结构完整，适用于不同人群和工程需要。质感细腻，漆膜丰满，深层表面光滑。性价比高，由于单位涂刷面积大，施工整体成本低。</small>
							</li>

							<li class="wow fadeInUpSmall"> <span><img src="" alt="" />全方位服务</span> <small>某某涂料将继续坚持“成就客户、员工为本、执行高效，诚信求实”的核心价值观。致力于为客户提供更加优质的服务。</small>
							</li>

						</ul>
						<a href="#" class="wow fadeInUpSmall">了解更多+</a>
					</div>
				</div>
			</div>
			<!--friend-->
			<div class="friend">
				<div class="container">
					<div class="main-title wow fadeInUpSmall"> <b>合作伙伴</b> <small class="hidden-l">导入企业品质必需的技术与人才，提供消费者放心满意的产品，服务社会、追求企业的永续经营。</small>
					</div>
					<div class="friend-right col-lg-12 col-md-12 col-sm-12 col-xs-12 wow fadeInRightSmall">
						<ul class="friend-list">
							<li class="col-lg-3 col-md-3 col-sm-3 col-xs-6"> <a href="#" target="_blank"> <img src="/static/utils/uploads/allimg/180225/1-1P2251155460-L.png"
									 alt="合作伙伴八" class="img-responsive" /> </a> </li>
							<li class="col-lg-3 col-md-3 col-sm-3 col-xs-6"> <a href="#" target="_blank"> <img src="/static/utils/uploads/allimg/180225/1-1P2251155260-L.png"
									 alt="合作伙伴七" class="img-responsive" /> </a> </li>
							<li class="col-lg-3 col-md-3 col-sm-3 col-xs-6"> <a href="#" target="_blank"> <img src="/static/utils/uploads/allimg/180225/1-1P2251155030-L.png"
									 alt="合作伙伴六" class="img-responsive" /> </a> </li>
							<li class="col-lg-3 col-md-3 col-sm-3 col-xs-6"> <a href="#" target="_blank"> <img src="/static/utils/uploads/allimg/180225/1-1P2251154310-L.png"
									 alt="合作伙伴五" class="img-responsive" /> </a> </li>
							<li class="col-lg-3 col-md-3 col-sm-3 col-xs-6"> <a href="#" target="_blank"> <img src="/static/utils/uploads/allimg/180225/1-1P2251154040-L.png"
									 alt="合作伙伴四" class="img-responsive" /> </a> </li>
							<li class="col-lg-3 col-md-3 col-sm-3 col-xs-6"> <a href="#" target="_blank"> <img src="/static/utils/uploads/allimg/180225/1-1P2251153370-L.jpg"
									 alt="合作伙伴三" class="img-responsive" /> </a> </li>
							<li class="col-lg-3 col-md-3 col-sm-3 col-xs-6"> <a href="#" target="_blank"> <img src="/static/utils/uploads/allimg/180225/1-1P2251153220-L.jpg"
									 alt="合作伙伴二" class="img-responsive" /> </a> </li>
							<li class="col-lg-3 col-md-3 col-sm-3 col-xs-6"> <a href="#" target="_blank"> <img src="/static/utils/uploads/allimg/180225/1-1P2251152470-L.jpg"
									 alt="合作伙伴一" class="img-responsive" /> </a> </li>

						</ul>
					</div>
				</div>
			</div>
			<!--news-->
			<div class="news">
				<div class="container">
					<h4> <small class="wow fadeInUpSmall">时刻了解最新行业资讯</small> <span class="wow fadeInUpSmall" data-wow-delay="0.2s">NEWS
							CENTER</span> <b class="wow fadeInUpSmall">新闻动态</b> </h4>
					<ul>
						<li class="col-lg-4 col-md-4 col-sm-4 col-xs-12 wow fadeInLeftSmall"> <a href="#">
								<p> <img src="/static/utils/uploads/180225/1-1P2251H332647.jpg" alt="" class="img-responsive" /> <span>2018-02-25</span>
								</p>
								<div> <span>木板的介绍</span> <small>　木板就是采用完整的木材制成的木板材。这些板材坚固耐用、纹路自然，是装修中优中之选。此类板材造价高，木板一般按照板材实质名称分类，没有统一的标准规格。</small> </div>
							</a> </li>

						<li class="col-lg-4 col-md-4 col-sm-4 col-xs-12 wow fadeInLeftSmall"> <a href="#">
								<p> <img src="/static/utils/uploads/180225/1-1P2251H249627.jpg" alt="" class="img-responsive" /> <span>2018-02-25</span>
								</p>
								<div> <span>木板的选购</span> <small>　木板是家装中经常使用的材料，选购木板的时候，一定要看清它的纹路、纹路清晰，一般最好不要有断纹</small> </div>
							</a> </li>

            <li class="col-lg-4 col-md-4 col-sm-4 col-xs-12 wow fadeInLeftSmall"> <a href="#">
              <p> <img src="/static/utils/uploads/180225/1-1P2251H3114H.jpg" alt="" class="img-responsive" /> <span>2018-02-25</span>
              </p>
              <div> <span>8月迎来家装旺季 木板承担着重要角色</span> <small>　时至五月，到了家庭装修的旺季，五月份处于春夏交界，天气条件相对适中，装修材料不易变...</small> </div>
            </a> </li>

					</ul>
					<a href="#">了解更多+</a>
				</div>
			</div>
			<!--time-->
			<div class="time">
				<div class="indexcoo">
					<div class="container">
						<ul class="list">
							<li class="wow fadeInUpSmall">
								<div class="num">
									<p style="color: #691879"><b>20</b></p>
								</div>
								<div class="text">二十年的优质涂料品牌</div>
							</li>
							<li class="wow fadeInUpSmall">
								<div class="num">
									<p style="color: #de0858"><b>200</b><small>+</small></p>
								</div>
								<div class="text">二百多行业尖端的技术人才</div>
							</li>
							<li class="wow fadeInUpSmall">
								<div class="num">
									<p style="color: #006bb2"><b>24</b></p>
								</div>
								<div class="text">24小时预约专业服务</div>
							</li>
							<li class="wow fadeInUpSmall">
								<div class="num">
									<p style="color: #03a172"><b>10</b></p>
								</div>
								<div class="text">建材行业十强品牌</div>
							</li>
							<li class="center-block wow fadeInUpSmall">
								<div class="num">
									<p style="color: #ee4e07"><b>5000</b><small>+</small></p>
								</div>
								<div class="text">五千多行业成功案例</div>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>


	</div>
</template>

<script>
	import {
		index
	} from '@/request/api'; // 导入我们的api接口
	export default {
		name: '',

		mixins: [],

		components: {

		},

		props: {},

		data() {
			return {
				imgs: [
					'/static/utils/uploads/allimg/180225/1-1P2251121280-L.jpg',
					'/static/utils/uploads/allimg/180225/1-1P2251121150-L.jpg',
					'/static/utils/uploads/allimg/180225/1-1P2251121000-L.jpg'
				]
			}
		},

		computed: {},

		watch: {},

		created() {
			// 接口测试
			index({
				type: 0,
				sort: 1
			}).then(res => {
				console.log(res)
			}).catch(err => {
				console.log(err)
			});

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
