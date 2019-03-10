<template>
    <div>
        <ul class="mui-table-view">
			<li class="mui-table-view-divider">通讯录</li>
			<li class="mui-table-view-cell">
				加我为朋友时需要验证
				<div class="mui-switch mui-active mui-switch-mini">
					<div class="mui-switch-handle"></div>
				</div>
			</li>
		</ul>
		<ul class="mui-table-view">
			<li class="mui-table-view-cell">
				向我推荐QQ好友
				<div class="mui-switch mui-switch-mini">
					<div class="mui-switch-handle"></div>
				</div>
			</li>
			<li class="mui-table-view-cell">
				通过QQ号搜索到我
				<div class="mui-switch mui-switch-mini">
					<div class="mui-switch-handle"></div>
				</div>
			</li>
		</ul>
		<ul class="mui-table-view">
			<li class="mui-table-view-cell">
				可通过手机号搜索到我
				<div class="mui-switch mui-active mui-switch-mini">
					<div class="mui-switch-handle"></div>
				</div>
			</li>
			<li class="mui-table-view-cell">
				向我推荐通讯录朋友
				<div class="mui-switch mui-switch-mini">
					<div class="mui-switch-handle"></div>
				</div>
			</li>
			<li class="mui-table-view-divider">开启后，为你推荐已经开通HBuilder的手机联系人</li>
		</ul>
		<ul class="mui-table-view">
			<li class="mui-table-view-cell">
				通过GitHub账号搜索到我
				<div class="mui-switch mui-active mui-switch-mini">
					<div class="mui-switch-handle"></div>
				</div>
			</li>
			<li class="mui-table-view-divider">关闭后，其他用户将不能通过GitHub号搜索到你</li>
		</ul>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
.mui-table-view-divider{
    font-size: 14px;
}
</style>