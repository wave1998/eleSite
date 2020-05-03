<template>
    <div>
        <nav>
            <router-link active-class="yellow" exact to="/discover">发现主食</router-link> |
            <router-link active-class="yellow" to="/discover/nonstaplefood">发现副食</router-link> |
            <router-link active-class="yellow" to="/discover/snack">发现零食</router-link> |
        </nav>
        <router-view></router-view>
    </div>

</template>

<script>
    export default {
        name: "Discover"
    }
</script>

<style scoped>
.yellow{
    color:yellow;
}
</style>