<template>
    <div class="app-contaniner">
        <!--头部-->
        <mt-header fixed title="购物商城">
			<span slot="left" @click="goback" v-show="flag">
				<mt-button icon="back">〈 返回</mt-button>
			</span>
		</mt-header>
        <!--内容区-->
        <transition>
		<router-view></router-view>
        </transition>
        <!--尾部-->
        <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item" to="/search">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
			<router-link class="mui-tab-item" to="/shopcar">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">0</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item" to="/member">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">个人</span>
			</router-link>	
		</nav>
    </div>
</template>
<script>

	export default {
		data() {
			return {
				flag: false
			};
		},
		methods: {
			goback() {
				this.$router.go(-1);
			}
		},
		created() {
			this.flag = this.$route.path === '/home'? false : true;
		},
		watch: {
			'$route.path': function(newval) {
				if(newval === '/home') {
					this.flag = false
				}else{
					this.flag = true
				}
			}
		}
	}
</script>
<style lang="scss" scoped>
    .app-contaniner {
		padding-top: 40px;
		padding-bottom: 50px;
		overflow-x: hidden;
	}
	.v-enter {
		opacity: 0;
		transform: translateX(100%);
	}
	.v-leave-to {
		opacity: 0;
		transform: translateX(-100%);
		position: absolute;
	}
	.v-enter-active,
	.v-leave-active {
		transition: all 0.5s ease;
	}
</style>
