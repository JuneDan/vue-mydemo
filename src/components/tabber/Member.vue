<template>
    <div>
		<ul class="mui-table-view mui-table-view-chevron">
			<li class="mui-table-view-cell mui-media">
				<router-link class="mui-navigate-right" to="/member/one">
					<img class="mui-media-object mui-pull-left head-img" id="head-img" src="https://avatars3.githubusercontent.com/u/46219372?s=40&v=4">
					<div class="mui-media-body">
						Hello MR.June
						<p class='mui-ellipsis'>账号:JuneDan</p>
					</div>
				</router-link>
			</li>
		</ul>
		<ul class="mui-table-view mui-table-view-chevron">
			<li class="mui-table-view-cell">
				<router-link to="/member/one" class="mui-navigate-right">账号与安全</router-link>
			</li>
		</ul>
		<ul class="mui-table-view mui-table-view-chevron">
			<li class="mui-table-view-cell">
				<router-link to="/member/two" class="mui-navigate-right">新消息通知</router-link>
			</li>
			<li class="mui-table-view-cell">
				<router-link to="/member/three" class="mui-navigate-right">隐私</router-link>
			</li>
			<li class="mui-table-view-cell">
				<router-link to="/member/four" class="mui-navigate-right">通用</router-link>
			</li>
		</ul>
		<ul class="mui-table-view mui-table-view-chevron">
			<li class="mui-table-view-cell">
				<router-link to="/member/five" class="mui-navigate-right">关于 <i class="mui-pull-right update">V6.6.6</i></router-link>
			</li>
		</ul>
		<ul class="mui-table-view">
			<li class="mui-table-view-cell" style="text-align: center;">
				<a>退出登录</a>
			</li>
		</ul>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
.mui-navigate-right {
    font-size: 15px;
}
.mui-ellipsis {
    font-size: 13px;
}
</style>