<template>
    <div class="cart_el-count">
        <a v-on:click="minus" href="javascript:void(0);">-</a>
        <input v-on:change="checkData" v-on:keyup="upCount" v-model="prepCount" type="text" autocomplete="false"/>
        <a v-on:click="plus" href="javascript:void(0);">+</a>
    </div>
</template>

<script>
    import _ from 'lodash'

    export default {
        name: "counter",
        props: {
            startCount: {
                type: Number
            },
            actionCh: {
                default: () => {}
            },
            timeout: {
                type: Number,
                default: 1000
            }
        },
        created: function(){
            this.$data.prepCount = parseInt(this.$props['startCount']);
        },
        data() {
            return {
                prepCount: 0
            }
        },
        computed: {
            count: {
                get: function() {
                    return this.prepCount
                }
            }
        },
        watch: {
            prepCount: function (val) {
                this.prepCount = val.toString().replace(/[^0-9]/g,'')
            }
        },
        methods: {
            plus: function(){
                this.prepCount = isNaN(this.prepCount) ? 1 : parseInt(this.prepCount) + 1
                this.checkData()
            },
            minus: function(){
                if (this.prepCount == 0) return
                this.prepCount = isNaN(this.prepCount) ? 1 : parseInt(this.prepCount) - 1
                this.checkData()
            },
            checkData: _.debounce(function() {
                if (this.$props['startCount'] != this.prepCount && this.$props['actionCh']
                    && {}.toString.call(this.$props['actionCh']) === '[object Function]')
                    this.$props['actionCh'](this.prepCount)
            }, 1000),
            upCount: function(){
                if (this.prepCount !== ""){
                    this.checkData()
                }
            }
        }
    }
</script>

<style scoped>
    .cart_el-count {
        display: flex;
        justify-content: center;
        text-align: center;
    }

    input:active, input:focus{
        outline: none;
    }

    .cart_el-count a:first-child {
        border-top-left-radius: 3px;
        border-bottom-left-radius: 3px;
    }

    .cart_el-count a:last-child {
        border-top-right-radius: 3px;
        border-bottom-right-radius: 3px;
    }

    .cart_el-count a {
        padding: 6px;
        width: 30px;
        display: inline-block;
        background-color: #222;
        color: #fff !important;
    }

    .cart_el-count a:hover {
        background-color: #ff6633;
        border: none;
    }

    .cart_el-count input {
        width: 70px;
        border-color: #aaa;
        border-width: 1px;
        text-align: center;
        border-style: dotted;
        border-right: none;
        border-left: none;
    }

</style>