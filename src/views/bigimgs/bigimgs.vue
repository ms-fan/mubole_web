<template>
  <div class="bigimgs">
    <div class="bg" @click="handleBlack">
      <div class="bg_2"  @click.stop>
        <div class="banner2" :style="{backgroundImage:'url(' + img + ')'}"> </div>
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
        img: ''
      }
    },

    computed: {},

    watch: {},

    created() {
      this.img = this.$route.query.img;
    },

    mounted() {},

    destroyed() {},

    methods: {
      handleClick: function(e) {
        console.log(e)

      },
      handleBlack:function(){
        this.$router.go(-1);//返回上一层
      }
    }
  };
</script>

<style lang="less">
  .bg {
    position: absolute;
    height: 100vh;
    width: 100%;
    top: 0;
    left: 0;
    background: #000;
    z-index: 1000;


  }
</style>
