<template>
    <div class="cart">
        <el-menu
                :default-active="defaultActive"
                class="cart-nav"
                mode="horizontal"
                background-color="#fff"
                text-color="#222"
                active-text-color="#f63">
            <el-menu-item index="1">
                <router-link :to="{ name: 'NoDelay'}">Корзина</router-link>
            </el-menu-item>
            <!--<el-menu-item index="2">-->
                <!--<router-link :to="{ name: 'Delay'}">Отложенные</router-link>-->
            <!--</el-menu-item>-->
        </el-menu>
        <router-view/>
    </div>
</template>

<script>
    import store from '@/store'
    import {DEBUG} from '@/consts/api'

    export default {
        name: "Cart",
        store,
        created: function(){
            if (!DEBUG) {
                store.dispatch('init')
            }
        },
        computed: {
            defaultActive(){
                switch (this.$route.name){
                    case "Delay":
                        return "2";
                    case "NoDelay":
                        return "1";
                    default:
                        return "1";
                }
            }
        }
    }
</script>

<style>

    .cart-nav{
        display: flex;
        align-items: center;
        height: 40px;
    }

    .el-menu-item{
        line-height: 38px;
        height: 38px !important;
        margin: 0 !important;
        padding: 0 !important;
    }

    .el-menu-item:hover{
        background-color: #fff !important;
    }

    .el-menu-item:hover a{
        color: #f63 !important;
    }

    .cart-nav a{
        display: block;
        color: #000;
        padding: 5px;
        line-height: 28px;
    }

    /*.cart-nav a:hover{*/
        /**/
    /*}*/

</style>