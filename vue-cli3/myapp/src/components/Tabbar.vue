<template>
    <div>
        <ul>
            <router-link to="/film" tag="li" activeClass="myactive">film</router-link>
            <router-link to="/cinema"  tag="li" activeClass="myactive">cinema</router-link>
            <router-link to="/center"  tag="li" activeClass="myactive">center</router-link>
        </ul>
    </div>
</template>
<!-- window.onhashchange 监听路径的切换
    声明式导航
-->
<style lang="scss" scoped>
    .myactive{
        color: red;
    }
</style>
