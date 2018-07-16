<template>
    <transition
            name="custom-classes-transition"
            enter-active-class="animated"
            leave-active-class="animated bounceOutRight"
    >
        <div class="row cart_el">
            <div class="cart_el-img col-sm-6 col-md-4 col-xl-3">
                <Check :check="item_id"/>
                <img :src="img">
            </div>
            <div class="cart_el-description col-sm-6 col-md-8 col-xl-3">
                <div class="cart_el-name">{{name}}</div>
            </div>
            <div class="cart_el-costInfo col-sm-4 col-md-4 col-xl-2">
                <div class="cart_el-code">Код: {{code}}</div>
                <div class="cart_el-exs">В наличие</div>
            </div>
            <div class="cart_el-summa col-sm-4 col-md-4 col-xl-2">
                <div class="cart_el-cost">{{price}} <i class="fa fa-rub"></i></div>
            </div>
            <Controls mode="DELAY" :id="item_id"/>
        </div>
    </transition>
</template>

<script>
    import Counter from '@/components/Lego/Counter'
    import Controls from '@/components/Cart/Lego/Controls'
    import Check from '@/components/Lego/Check'
    import {URL} from '@/consts/api'

    export default {
        name: "item",
        props: ['item_id'],
        components:{
            Counter,
            Controls,
            Check
        },
        computed: {
            name(){
                return this.$store.getters.getItemByID(this.$props['item_id']).NAME;
            },
            price(){
                return parseFloat(this.$store.getters.getItemByID(this.$props['item_id']).PRICE).toFixed(2);
            },
            count(){
                return this.$store.getters.getItemByID(this.$props['item_id']).QUANTITY;
            },
            img(){
                return URL + this.$store.getters.getItemByID(this.$props['item_id']).DETAIL_PICTURE.SRC;
            },
            code(){
                return this.$store.getters.getItemByID(this.$props['item_id']).PROPERTY.CODE.VALUE;
            }
        }
    }
</script>

<style scoped>

    .cart_el {
        border-bottom: 1px dotted #aaa;
        padding-bottom: 10px;
        padding-top: 10px;
        height: 100px;
    }

    .cart_el-img{
        display: flex;
    }

    .cart_el-img img {
        height: 100%;
        width: auto;
        display: inline-block;
        object-fit: contain;
        vertical-align: top;
    }

    .cart_el-costInfo {
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .cart_el-costInfo i {
        margin-left: 5px;
    }

    .cart_el-exs {
        display: inline-block;
        color: #ff6633;
        padding-left: 5px;

    }

    .cart_el-code {
        display: inline-flex;
        padding-right: 5px;
        border-right: 1px solid #ccc;
    }

    .cart_el-cost {
        text-align: center;
        font-size: 24px;
        font-weight: 700;
    }

    .cart_el-summa {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .cart_el-check {
        display: inline-block;
        height: 100%;
        padding: 4%;
        vertical-align: top;
        width: 15%;
    }

    .cart_el-check input {
        display: none;
    }

    .check_cart_lab {
        border-radius: 5px;
        width: 20px;
        height: 20px;
        background: #fff;
        border: 1px #eee solid;
        margin: 0;
        display: block;
        position: absolute;
        top: 50%;
        margin-top: -10px;
        transition: background-color 0.2s;
    }

    .check_cart_lab:hover {
        background-color: #ff6633;
    }

    input:checked + .check_cart_lab {
        background-color: #ff6633;
    }

    .cart_el-description {
        padding-top: 10px;
    }

    @media (max-width: 1200px) {
        .cart_el-img {
            min-height: 250px;
        }
    }

    @media (max-width: 767px) {
        .cart_el-img {
            order: 1;
            min-height: 150px;
        }

        .cart_el-description {
            order: 2;
        }

        .cart_el-costInfo {
            order: 3;
        }

        .cart_el-summa {
            order: 4;
        }

    }
</style>