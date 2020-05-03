<template>
<!--    <div>-->
<!--        <span class="iconfont .iconicon-test1"></span>-->
<!--        <nav>-->
<!--            <router-link to="/">首页</router-link> |-->
<!--            <router-link to="/order">订单</router-link> |-->
<!--            <router-link to="/discover">发现</router-link> |-->
<!--            <router-link to="/my">我的</router-link> |-->
<!--        </nav>-->
<!--        <router-view></router-view>-->
<!--    </div>-->

    <div class="index">

        <router-view></router-view>
        <TabBar></TabBar>

    </div>

</template>

<script>
    export default {
        name: "Index",
        components:{
            TabBar:()=>import("@/components/tabBar.vue")
        }
    }
</script>

<style scoped>
    .index {
        width: 100%;
        height: calc(100% - 45px);
    }


    /****************首页*******************************************/
    .home {
        width: 100%;
        height: 100%;
        overflow: auto;
        box-sizing: border-box;
    }
    .header,
    .search_wrap {
        background-color: #009eef;
        padding: 10px 16px;
    }
    .header .address_map {
        color: #fff;
        font-weight: bold;
    }
    .address_map i {
        margin: 0 3px;
        font-size: 18px;
    }
    .address_map span {
        display: inline-block;
        width: 80%;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    .search_wrap .shop_search {
        /* margin-top: 10px; */
        background-color: #fff;
        padding: 10px 0;
        border-radius: 4px;
        text-align: center;
        color: #aaa;
    }

    .search_wrap {
        position: sticky;
        top: 0px;
        z-index: 999;
        box-sizing: border-box;
    }

    .fixedview {
        width: 100%;
        position: fixed;
        top: 0px;
        z-index: 999;
    }

</style>
