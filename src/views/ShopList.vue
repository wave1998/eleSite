<template>
    <div>
        <header class="header">
            <GoBack></GoBack>
        </header>
        <div class="shoplist" style="margin-top:45px">
            <section class="index-container" v-for="item in shopList">
                <div class="index-shopInfo">
                    <!-- 左侧图片 -->
                    <div class="logo_container">
                        <img :src="'/ele/'+item.shopPic">
                    </div>
                    <!-- 右侧内容 -->
                    <div class="index_main">
                        <!-- 第一行 品牌 -->
                        <div class="index_shopname">
                            <i>品牌</i>
                            <span>{{item.shopName}}</span>
                        </div>

                        <!-- 第二行 星级 -->
                        <div class="index-rateWrap">
                            <div>
                                <span>月售12单</span>
                            </div>
                            <div class="delivery">
                                <span class="icon-hollow">推荐</span>
                            </div>
                        </div>

                        <!-- 第三行 配送 -->
                        <div class="index-moneylimit">
                            <div>
                                薪资：100元/天
                            </div>
                            <div class="index-distanceWrap">
                                <span>1.5km</span>
                                |
                                <span>10分钟</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    </div>
</template>

<script>
    export default {
        name: "ShopList",
        data(){
            return {
                shopList:[],
                shopTypeId:this.$route.query.shopTypeId,
            }
        },
        components:{
            GoBack:()=>import("@/components/common/GoBack")
        },
        async mounted() {
            const data = await this.$axios.get("/shopListById",{
                params:{
                    shopTypeId:this.shopTypeId
                }
            })
            console.log(data)
            if(data.ok===1)
                this.shopList = data.shopList
        }
    }
</script>

<style scoped>
    .header {
        align-items: center;
        background-color: #009eef;
        box-sizing: border-box;
        color: #fff;
        display: flex;
        font-size: 16px;
        height: 45px;
        line-height: 1;
        padding: 0 10px;
        position: relative;
        text-align: center;
        white-space: nowrap;
        position: fixed;
        width: 100%;
        top: 0;
        z-index: 99;
    }
    .index-container {
        background: #fff;
        color: #666;
        padding: 4vw 0;
        border-bottom: 0.133333vw solid #eee;
    }
    .index-shopInfo {
        display: flex;
        justify-content: flex-start;
        padding: 0 2.666667vw;
        align-items: stretch;
    }
    .logo_container {
        width: 17.333333vw;
        height: 17.333333vw;
    }
    .logo_container img {
        display: block;
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        border: 0.133333vw solid rgba(0, 0, 0, 0.08);
        border-radius: 0.533333vw;
    }
    .index_main {
        display: flex;
        justify-content: space-between;
        overflow: hidden;
        flex-direction: column;
        padding-left: 2.666667vw;
        font-size: 0.2rem;
        flex-grow: 1;
    }
    .index_shopname {
        align-items: center;
        color: #333;
        font-weight: 700;
        font-size: 0.9rem;
    }
    .index_shopname i {
        background: #ffe800;
        margin-right: 1.333333vw;
        padding: 0.266667vw 0.666667vw;
        text-align: center;
        white-space: nowrap;
        font-size: 0.6rem;
    }
    .index_shopname span {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .index-rateWrap {
        display: flex;
        align-items: center;
        overflow: hidden;
        justify-content: space-between;
    }

    .index-rateWrap .rate {
        margin-right: 1.066667vw;
    }
    .index-moneylimit {
        width: 100%;
        display: flex;
        justify-content: space-between;
    }
    .index-moneylimit .index-distanceWrap {
        color: #999;
    }
    .delivery {
        display: flex;
        align-items: center;
        font-size: 0.6rem;
        margin-left: 1.066667vw;
    }
    .delivery .icon-hollow {
        color: #fff;
        background-color: #2395ff;
        padding: 2px;
        box-sizing: border-box;
    }
</style>
