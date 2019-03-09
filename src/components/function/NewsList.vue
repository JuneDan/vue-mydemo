<template>
    <div>
        <ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media" v-for="i in newslist" :key="i.id">
					<a href="javascript:;">
						<img class="mui-media-object mui-pull-left" :src="i.img_url">
						<div class="mui-media-body">
							<h1>{{i.title}}</h1>
							<p class='mui-ellipsis'>
                                <span>time:{{ i.add_time }}</span>
                                <span>click:{{ i.click}}</span>
                            </p>
						</div>
					</a>
				</li>
			</ul>
    </div>    
</template>
<script>
import { Toast } from "mint-ui"
export default {
    data() {
        return {
            newslist: []
        };
    },
    created() {
        this.getNewsList();
    },
    methods: {
        getNewsList() {
            this.$http.get('').then(result => {
                if(result.body.status === 0) {
                    this.newslist = result.body.message;
                }else{
                    Toast('列表获取失败...')
                }

            })
        }
    }
}
</script>
<style lang="scss" scoped>
    .mui-table-view {
        li {
            h1 {
                font-size: 14px;
            }
            .mui-ellipsis {
                font-size: 16px;
                color: #226aff;
                display: flex;
                justify-content: space-between;
            }
        }
    }
</style>

