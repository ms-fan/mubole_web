import Vue from 'vue';
    import Vuex from 'vuex';
    Vue.use(Vuex);
    const state = { //要设置的全局访问的state对象
    	isPhoneP: true,
    	//要设置的初始属性值
    };
const getters = {   //实时监听state值的变化(最新状态)
    isShow(state) {  //方法名随意,主要是来承载变化的showFooter的值
       return state.isPhoneP
    },
  
};
    const store = new Vuex.Store({
    	state,
		getters,

    });
    export default store;
