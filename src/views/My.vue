<template>
    <div>
        <button @click="$store.commit('OUT_LOGIN')">退出登录</button>
    </div>
</template>

<script>
    export default {
        name: "My",
        // beforeRouteEnter(to,from,next){
        //     next("/login")
        // }
    }
</script>

<style scoped>

</style>