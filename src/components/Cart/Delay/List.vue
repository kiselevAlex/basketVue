<template>
    <div class="list nodelay container-fluid">
        <Header/>
        <Spinner v-if="isLoad"/>
        <Item v-else v-for="el in list" :key="el.ID" :id="el.ID" :item_id="el.ID"/>
        <div class="emptyBasket" v-if="list.length < 1">
            <i class="fa fa-shopping-cart" aria-hidden="true"></i>
            <span>У Вас нет отложенных товаров</span>
        </div>
    </div>
</template>

<script>
    import Header from '@/components/Cart/Delay/Header'
    import Item from '@/components/Cart/Delay/Item'
    import Spinner from '@/components/Lego/Spinner'

    export default {
        name: "list",
        components: {
            Header,
            Item,
            Spinner
        },
        computed: {
            list(){
                return this.$store.getters.getDelayItem;
            },
            isLoad(){
                return this.$store.state.isLoad;
            }
        }
    }
</script>

<style scoped>
    .left_block {
        display: none;
    }
</style>
