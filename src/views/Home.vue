<template>
    <div class="home">
        <EleHeader></EleHeader>
        <Search></Search>
        <div id="container">

        </div>
<!--        轮播图-->
        <mt-swipe :auto="4000" class="entries">
            <mt-swipe-item  class="entry_wrap" v-for="(item,index) in shopTypeList" :key="index" >
                <div  class="foodentry" v-for="infoList in item" :key="infoList._id" @click="$router.push({name:'ShopList',query:{shopTypeId:infoList._id}})" >
                    <div class="img_wrap" >
                            <img :src="'/ele/'+infoList.shopTypePic" >
                        <span>{{infoList.shopTypeName}}</span>
                    </div>
                </div>
            </mt-swipe-item>
        </mt-swipe>



        <div class="shoplist-title">推荐公司</div>
            <!--        店铺列表-->
        <div class="shoplist">
                <!--        下拉刷新-->
            <mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore">
                <section class="index-container" v-for="item in reShopList" :key="item._id">
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
                                    <span class="icon-hollow">精选</span>
                                </div>
                            </div>

                            <!-- 第三行 配送 -->
                            <div class="index-moneylimit">
                                <div>
                                    薪资：100元/天
                                </div>
                                <div class="index-distanceWrap">
                                    <span>电话</span>
                                    ：
                                    <span>15738530353</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </mt-loadmore>
        </div>

    </div>
</template>

<script>
    export default {
        name: "Home",
        data(){
          return {
              shopTypeList:[],
              reShopList:[],
              pageIndex:1,
              allLoaded:false,
          }
        },
        methods:{
            loadTop(){
                this.pageIndex =1;
                this.getReShopList()
                    .then(data=>{
                        this.reShopList = data.reShopList;
                        this.$refs.loadmore.onTopLoaded();
                    })
            },
            loadBottom(){
                this.getReShopList().then(data=>{
                    this.reShopList = [
                        ...this.reShopList,
                        ...data.reShopList
                    ];
                    if(data.pageSum === this.pageIndex){
                        this.allLoaded=true;
                    }else{
                        this.pageIndex++;
                    }
                    if(this.$refs.loadmore)
                        this.$refs.loadmore.onBottomLoaded();
                })
            },
            async getReShopList(){
                const data = await this.$axios.get("/reShopList",{
                    params:{
                        pageIndex:this.pageIndex,
                    }
                })
                return data
            },
        },
        components:{
            EleHeader:()=>import('@/components/Home/EleHeader'),
            Search:()=>import('@/components/Home/Search')
        },
        async mounted() {
            document.title="ele"
            const data = await this.$axios.get("/shopTypeList",{params:{
                    limit:30
                }})
            this.shopTypeList = data.shopTypeList
            this.getReShopList().then(data=>{
                this.reShopList = data.reShopList
            })
        }
    }
</script>

<style scoped>

    .home {
        width: 100%;
        height: 100%;
        overflow: auto;
        box-sizing: border-box;
    }
    #container{
        overflow: hidden;
        position: relative;
    }
    .entries {
        background: #fff;
        height: 47.2vw;
        text-align: center;
        overflow: hidden;
    }
    .foodentry {
        width: 20%;
        float: left;
        position: relative;
        margin-top: 2.933333vw;
    }
    .foodentry .img_wrap {
        position: relative;
        display: inline-block;
        width: 12vw;
        height: 12vw;
    }
    .img_wrap img {
        width: 100%;
        height: 100%;
    }
    .foodentry span {
        display: block;
        color: #666;
        font-size: 0.32rem;
    }

    /******推荐商家***********/
    .shoplist-title {
        display: flex;
        align-items: flex-start;
        justify-content: center;
        height: 9.6vw;
        line-height: 9.6vw;
        font-size: 16px;
        color: #333;
        background: #fff;
    }
    .shoplist-title:after,
    .shoplist-title:before {
        display: block;
        content: "一";
        width: 5.333333vw;
        height: 0.266667vw;
        color: #999;
    }
    .shoplist-title:before {
        margin-right: 3.466667vw;
    }
    .shoplist-title:after {
        margin-left: 3.466667vw;
    }

    .fixedview {
        width: 100%;
        position: fixed;
        top: 0px;
        z-index: 999;
    }
    /* 商家列表 */
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
