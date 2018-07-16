<template>
    <div class="cart_el-controls col-sm-6 col-md-4 col-xl-2">
        <div class="cart_el-controls_del">
            <el-button v-on:click="deleteEl" type="danger" size="small" icon="el-icon-delete" :loading="isDelete">{{textDelete}}</el-button>
        </div>
        <!--<div class="cart_el-controls_delay">-->
            <!--<el-button v-on:click="delayEl" type="primary" size="small" icon="el-icon-time" :loading="isDelay">{{textDelay}}</el-button>-->
        <!--</div>-->
    </div>
</template>

<script>
    export default {
        name: "controls",
        props: ['id', 'mode'],
        data() {
            return {
                isDelete: false,
                isDelay: false
            }
        },
        computed: {
            textDelete(){
                return (this.isDelete) ? "" : "Удалить";
            },
            textDelay(){
                return (this.isDelay) ? ""
                    : (this.$props['mode'] == 'DELAY') ?
                        "В корзину" : "Отложить";
            }
        },
        methods: {
            deleteEl: function(e) {
                this.isDelete = true;
                this.$store.dispatch('deleteElement', this.$props['id'])
            },
            delayEl: function(e) {
                this.isDelay = true;
                this.$store.dispatch((this.$props['mode'] == 'DELAY') ?
                    'undelayElement' : 'delayElement', this.$props['id'])
            }
        },
    }
</script>

<style scoped>
    .cart_el-controls_del,
    .cart_el-controls_delay {
        position: relative;
        height: 64%;
    }


    .cart_el-controls_delay button:focus,
    .cart_el-controls_del button:focus,
    .cart_el-controls_delay button:active,
    .cart_el-controls_del button:active{
        border: none;
        outline: none;
    }

    .cart_el-controls_delay button,
    .cart_el-controls_del button {
        text-align: center;
        width: 106px;
        position: absolute;
        display: block;
        padding-top: 10px;
        padding-bottom: 10px;
        background-color: #ff6633;
        color: #fff !important;
        border-radius: 4px;
        bottom: 5px;
        left: 50%;
        margin-left: -48px;
        border: none;
        transition: background-color  0.2s;
    }

    .cart_el-controls_delay button {
        bottom: auto;
        top: 5px;
    }

    .cart_el-controls_delay button:hover,
    .cart_el-controls_delay button:disabled,
    .cart_el-controls_del button:hover,
    .cart_el-controls_del button:disabled {
        background: #222 !important;
        border: none;
    }

    @media (max-width: 767px) {

        .cart_el-controls {
            order: 5;
        }
    }
</style>