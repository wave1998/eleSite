<template>
    <div class="header-button is-left">
        <i class="iconfont iconfanhui"></i>
        <button @click="$router.go(-1)">返回</button>
    </div>
</template>

<script>
    export default {
        name: "GoBack"
    }
</script>

<style scoped>


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
</style>