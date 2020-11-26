<template>
    <div>
        <ul>
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
    div{
        position: fixed;
        bottom: 0px;
        left: 0px;
        width: 100%;
        height: 50px;
        background: #fff;
        border-top:1px solid gray;
        ul{
            display: flex;
            li{
                flex: 1;
                line-height: 50px;
                text-align: center;
            }
        }
    }
</style>
