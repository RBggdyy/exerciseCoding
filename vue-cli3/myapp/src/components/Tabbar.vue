<template>
    <div class="tabbar">
        <ul class="tabbar-ul">
            <router-link to="/film" tag="li" activeClass="myactive">
                <i class="iconfont icon-form"></i>
                film
            </router-link>
            <router-link to="/cinema"  tag="li" activeClass="myactive">
                <i class="iconfont icon-form"></i>
                cinema
            </router-link>
            <router-link to="/center"  tag="li" activeClass="myactive">
                <i class="iconfont icon-form"></i>
                center
            </router-link>
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
    .tabbar{
        position: fixed;
        bottom: -1px;
        left: 0px;
        width: 100%;
        height: 50px;
        background: #fff;
        border-top:1px solid gray;
        z-index: 9;
        .tabbar-ul{
            display: flex;
            li{
                flex: 1;
                line-height: 50px;
                text-align: center;
            }
        }
    }
</style>
