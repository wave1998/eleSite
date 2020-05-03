<template>
    <div class="index">

        <div class="home">
            <div class="header">
                <div class="address_map" @click="$router.push('/Location')">
                    <i class="iconfont iconicon-dibiao"></i>
                    <span>{{$store.state.Location.formattedAddress}}</span>
                    <i class="iconfont iconsanjiaojiantou1"></i>
                </div>
            </div>

        </div>

    </div>
</template>

<script>
    export default {
        name: "EleHeader",
        mounted() {
            this.$store.dispatch("getLocation")
        }
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



</style>