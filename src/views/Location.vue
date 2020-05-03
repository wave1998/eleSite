<template>
    <div class="address">
        <!--头部-->
        <header class="header">
            <!-- 左侧返回按钮 -->
            <div class="header-button is-left">
                <i class="iconfont iconfanhui"></i>
                <button @click="$router.go(-1)">返回</button>
            </div>
            <!-- 标题 -->
            <h1 class="header-title">请选择收货地址</h1>
        </header>
        <div class="city_search">
            <div class="search">
        <span class="city">
          北京
          <i class="iconfont iconicon"></i>
        </span>
                <i class="iconfont iconxingtaiduICON_sousuo--"></i>
                <input type="text" ref="keyword" @input="$store.dispatch('autoComplete',$refs.keyword.value)" placeholder="请输入地址">
            </div>

            <div>
                <div class="title">当前定位</div>
                <div class="des">
                    <i class="iconfont icondaohang"></i>
                    <span>{{$store.state.Location.province}}</span>
                </div>
            </div>

        </div>
        <div class="area">
            <ul class="area_list" v-for="(item,index) in $store.state.Location.tips"
                @click="$store.commit('CHANGE_LOCATION',{formattedAddress:item.name}),$router.push('/')"
                :key="item.id+index">
                <li>
                    <h4>{{item.district}}</h4>
                    <p>{{item.name}}</p>
                </li>
            </ul>
        </div>
    </div>
    
</template>

<script>
    export default {
        name: "Location",
        mounted() {
            this.$store.commit("CHANGE_TIPS",[])
        }
    }
</script>

<style scoped>
    .address {
        width: 100%;
        height: 100%;
        overflow: auto;
        box-sizing: border-box;
        padding-top: 45px;
    }

    .city_search {
        background-color: #fff;
        padding: 10px 20px;
        color: #333;
    }

    .search {
        background-color: #eee;
        height: 40px;
        border-radius: 10px;
        box-sizing: border-box;
        line-height: 40px;
    }
    .search .city {
        padding: 0 10px;
    }
    .city i {
        margin-right: 10px;
    }
    .search input {
        margin-left: 5px;
        background-color: #eee;
        outline: none;
        border: none;
    }

    .area {
        margin-top: 16px;
        background: #fff;
    }
    .area li {
        border-bottom: 1px solid #eee;
        padding: 8px 16px;
        color: #aaa;
    }
    .area li h4 {
        font-weight: bold;
        color: #333;
        margin-bottom: 5px;
    }

    .title {
        margin: 10px 0;
        font-size: 12px;
    }
    .des i {
        color: #009eef;
    }
    .des span {
        color: #333;
        font-weight: bold;
        margin-left: 5px;
        display: inline-block;
        width: 90%;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    /****************头部*******************************************/
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

    .header-button button {
        background-color: transparent;
        border: 0;
        box-shadow: none;
        color: inherit;
        display: inline-block;
        padding: 0;
        font-size: inherit;
        outline: none;
    }
    .header-title {
        flex: 1;
    }
    .is-left {
        text-align: left;
    }
    .is-right {
        text-align: right;
    }
</style>