<template>
    <div class="search_wrap">
        <div class="shop_search" @click="$router.push('/searchShop')">
            <i class="iconfont iconxingtaiduICON_sousuo--" ></i>
            搜索公司 职位名称
        </div>
    </div>
</template>

<script>
    export default {
        name: "Search"
    }
</script>

<style scoped>

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
