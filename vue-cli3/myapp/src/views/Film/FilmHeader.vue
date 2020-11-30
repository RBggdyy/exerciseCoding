<template>
    <div>
        <ul>
            <router-link to="/film/nowplaying" tag="li" activeClass="active">正在热映</router-link>
            <router-link to="/film/comingsoon" tag="li" activeClass="active">即将上演</router-link>
        </ul>
    </div>
</template>

<style lang="scss" scoped>
    ul {
        display: flex;
        li{
            flex:1;
            height: 40px;
            line-height: 40px;
            text-align: center;
            background: white;
        }
    }
    .active{
        color:red;
        border-bottom:1px solid red;
    }
    .fixed{
        position: fixed;
        top:0px;
        left:0px;
        width: 100%;
        height: 40px;
        background:white;
    }
</style>
