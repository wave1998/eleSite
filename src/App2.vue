<template>
    <div id="app">
        <div id="nav" v-if="!$route.meta.isHide">
            <router-link  class="gray" active-class="red"  exact to="/">Home</router-link> |
            <router-link  class="gray" active-class="red" to="/order">Order</router-link> |
            <router-link  class="gray" active-class="red" to="/my">My</router-link> |
            <router-link  class="gray" active-class="red" to="/discover">发现</router-link>
        </div>
        <router-view/>
    </div>
</template>

<style lang="less">
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }

    #nav {
        padding: 30px;
        .gray {
            color:gray;
        }
        .red{
            color: red;
        }

        /*a {*/
        /*  font-weight: bold;*/
        /*  color: #2c3e50;*/

        /*  &.router-link-exact-active {*/
        /*    color: #42b983;*/
        /*  }*/
        /*}*/
    }
</style>
