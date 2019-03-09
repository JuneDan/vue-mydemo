<template>
    <div>
		<ul class="mui-table-view mui-table-view-chevron">
			<li class="mui-table-view-cell mui-media">
				<a class="mui-navigate-right" href="#account">
					<img class="mui-media-object mui-pull-left head-img" id="head-img" src="https://avatars3.githubusercontent.com/u/46219372?s=40&v=4">
					<div class="mui-media-body">
						Hello MR.June
						<p class='mui-ellipsis'>账号:JuneDan</p>
					</div>
				</a>
			</li>
		</ul>
		<ul class="mui-table-view mui-table-view-chevron">
			<li class="mui-table-view-cell">
				<a href="#account" class="mui-navigate-right">账号与安全</a>
			</li>
		</ul>
		<ul class="mui-table-view mui-table-view-chevron">
			<li class="mui-table-view-cell">
				<a href="#notifications" class="mui-navigate-right">新消息通知</a>
			</li>
			<li class="mui-table-view-cell">
				<a href="#privacy" class="mui-navigate-right">隐私</a>
			</li>
			<li class="mui-table-view-cell">
				<a href="#general" class="mui-navigate-right">通用</a>
			</li>
		</ul>
		<ul class="mui-table-view mui-table-view-chevron">
			<li class="mui-table-view-cell">
				<a href="#about" class="mui-navigate-right">关于 <i class="mui-pull-right update">V3.1.0</i></a>
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