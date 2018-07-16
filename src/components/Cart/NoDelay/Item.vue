<template>
    <transition
            name="custom-classes-transition"
            enter-active-class="animated"
            leave-active-class="animated bounceOutRight"
    >
        <div class="row cart_el">
            <div class="cart_el-img col-sm-6 col-md-4 col-xl-3">
                <Check :check="item_id" :toogle="check" :checkAction="checkAction"/>
                <img :src="img">
            </div>
            <div class="cart_el-description col-sm-6 col-md-8 col-xl-3">
                <div class="cart_el-name">{{name}}</div>
                <div class="prop-disp">
                    <div class="tags">
                        <span v-if="attrNew" class="new">New</span>
                        <span v-if="attrHit" class="sale">Hit</span>
                    </div>
                    <div v-if="attrManu" class="cart_el-manufactur">Производитель: {{attrManu}}</div>
                    <div v-if="attrCountry" class="cart_el-manufactur">Страна: {{attrCountry}}</div>
                    <div v-if="attrMin" class="cart_el-manufactur">Минимальная партия: {{attrMin}}</div>
                </div>
            </div>
            <div class="cart_el-costInfo col-sm-12 col-md-4 col-xl-2">
                <div>
                    <div class="cart_el-code">Код: {{code}}</div>
                    <div class="cart_el-exs">В наличие</div>
                </div>
                <div class="cart_el-cost">{{price}} <i class="fa fa-rub"></i></div>
                <Counter :actionCh="updateCount" :startCount="count"/>
            </div>
            <div class="cart_el-summa col-sm-6 col-md-4 col-xl-2">
                <div class="cart_el-summa_value">
                    {{ sum }} <i class="fa fa-rub"></i>
                </div>
            </div>
            <Controls :id="item_id"/>
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
        methods:{
            updateCount: function(count){
                this.$store.dispatch('updateCount', {
                    id: this.$props['item_id'],
                    count: count
                })
            },
            checkAction: function(){
                console.log('OK');
                this.$store.commit('updateCheck', this.$props['item_id'])
            }
        },
        computed: {
            name(){
                return this.$store.getters.getItemByID(this.$props['item_id']).NAME;
            },
            price(){
                return parseFloat(this.$store.getters.getItemByID(this.$props['item_id']).PRICE).toFixed(2);
            },
            count(){
                return parseInt(this.$store.getters.getItemByID(this.$props['item_id']).QUANTITY);
            },
            img(){
                return URL + this.$store.getters.getItemByID(this.$props['item_id']).DETAIL_PICTURE.SRC;
            },
            sum(){
                return (this.count * this.price).toFixed(2);
            },
            code(){
                return this.$store.getters.getItemByID(this.$props['item_id']).PROPERTY.CODE.VALUE;
            },
            check(){
                return this.$store.getters.getItemByID(this.$props['item_id']).CHECKED === true;
            },
            attrNew(){
                try {
                    return this.$store.getters.getItemByID(this.$props['item_id']).PROPERTY.NEWPRODUCT.VALUE
                } catch(e) {
                    return ''
                }
            },
            attrHit(){
                try {
                    return this.$store.getters.getItemByID(this.$props['item_id']).PROPERTY.SALELEADER.VALUE
                } catch(e) {
                    return ''
                }
            },
            attrMin(){
                try {
                    return this.$store.getters.getItemByID(this.$props['item_id']).PROPERTY.MINCOUNT.VALUE
                } catch(e) {
                    return ''
                }
            },
            attrCountry(){
                try {
                    return this.$store.getters.getItemByID(this.$props['item_id']).PROPERTY.COUNTRY.VALUE
                } catch(e) {
                    return ''
                }
            },
            attrManu(){
                try {
                    return this.$store.getters.getItemByID(this.$props['item_id']).PROPERTY.ACODE18700.VALUE
                } catch(e) {
                    return ''
                }
            }
        }
    }
</script>

<style scoped>

    .tags{
        margin-bottom: 10px;
    }

    .tags span {
        display: inline-block;
        height: 21px;
        margin: 0 2px 0 10px;
        padding: 0 7px 0 14px;
        white-space: nowrap;
        position: relative;

        background: -moz-linear-gradient(top, #fed970 0%, #febc4a 100%);
        background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#fed970), color-stop(100%,#febc4a));
        background: -webkit-linear-gradient(top, #fed970 0%,#febc4a 100%);
        background: -o-linear-gradient(top, #fed970 0%,#febc4a 100%);
        background: linear-gradient(to bottom, #fed970 0%,#febc4a 100%);
        background-color: #FEC95B;

        color: #963;
        font: bold 11px/20px Arial, Tahoma, sans-serif;
        text-decoration: none;
        text-shadow: 0 1px rgba(255,255,255,0.4);

        border-top: 1px solid #EDB14A;
        border-bottom: 1px solid #CE922E;
        border-right: 1px solid #DCA03B;
        border-radius: 1px 3px 3px 1px;
        box-shadow: inset 0 1px #FEE395, 0 1px 2px rgba(0,0,0,0.21);
    }

    .tags span:before {
        content: '';
        position: absolute;
        top: 5px;
        left: -6px;
        width: 10px;
        height: 10px;

        background: -moz-linear-gradient(45deg, #fed970 0%, #febc4a 100%);
        background: -webkit-gradient(linear, left bottom, right top, color-stop(0%,#fed970), color-stop(100%,#febc4a));
        background: -webkit-linear-gradient(-45deg, #fed970 0%,#febc4a 100%);
        background: -o-linear-gradient(45deg, #fed970 0%,#febc4a 100%);
        background: linear-gradient(135deg, #fed970 0%,#febc4a 100%);
        background-color: #FEC95B;

        border-left: 1px solid #EDB14A;
        border-bottom: 1px solid #CE922E;
        border-radius: 0 0 0 2px;
        box-shadow: inset 1px 0 #FEDB7C, 0 2px 2px -2px rgba(0,0,0,0.33);

        -webkit-transform: scale(1, 1.5) rotate(45deg);
        -moz-transform: scale(1, 1.5) rotate(45deg);
        -ms-transform: scale(1, 1.5) rotate(45deg);
        transform: scale(1, 1.5) rotate(45deg);
    }

    .tags span:after {
        content: '';
        position: absolute;
        top: 7px;
        left: 1px;
        width: 5px;
        height: 5px;
        background: #FFF;
        border-radius: 4px;
        border: 1px solid #DCA03B;
        box-shadow: 0 1px 0 rgba(255,255,255,0.2), inset 0 1px 1px rgba(0,0,0,0.21);
    }

    .tags span.new {
        display: inline-block;
        height: 21px;
        margin: 0 2px 0 10px;
        padding: 0 7px 0 14px;
        white-space: nowrap;
        position: relative;

        background: -moz-linear-gradient(top, #008dd2 0%, #00a7f5 100%);
        background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#008dd2), color-stop(100%,#00a7f5));
        background: -webkit-linear-gradient(top, #008dd2 0%,#00a7f5 100%);
        background: -o-linear-gradient(top, #008dd2 0%,#00a7f5 100%);
        background: linear-gradient(to bottom, #008dd2 0%,#00a7f5 100%);
        background-color: #008dd2;

        color: #fff;
        font: bold 11px/20px Arial, Tahoma, sans-serif;
        text-decoration: none;
        text-shadow: 0 1px rgba(255,255,255,0.4);

        border-top: 1px solid #008dd2;
        border-bottom: 1px solid #008dd2;
        border-right: 1px solid #008dd2;
        border-radius: 1px 3px 3px 1px;
        box-shadow: inset 0 1px #008dd2, 0 1px 2px rgba(0,0,0,0.21);
    }

    .tags span.new:before {
        content: '';
        position: absolute;
        top: 5px;
        left: -6px;
        width: 10px;
        height: 10px;

        background: -moz-linear-gradient(45deg, #008dd2 0%, #00a7f5 100%);
        background: -webkit-gradient(linear, left bottom, right top, color-stop(0%,#008dd2), color-stop(100%,#00a7f5));
        background: -webkit-linear-gradient(-45deg, #008dd2 0%,#00a7f5 100%);
        background: -o-linear-gradient(45deg, #008dd2 0%,#00a7f5 100%);
        background: linear-gradient(135deg, #008dd2 0%,#00a7f5 100%);
        background-color: #008dd2;

        border-left: 1px solid #008dd2;
        border-bottom: 1px solid #008dd2;
        border-radius: 0 0 0 2px;
        box-shadow: inset 1px 0 #008dd2, 0 2px 2px -2px rgba(0,0,0,0.33);

        -webkit-transform: scale(1, 1.5) rotate(45deg);
        -moz-transform: scale(1, 1.5) rotate(45deg);
        -ms-transform: scale(1, 1.5) rotate(45deg);
        transform: scale(1, 1.5) rotate(45deg);
    }

    .tags span.new:after {
        content: '';
        position: absolute;
        top: 7px;
        left: 1px;
        width: 5px;
        height: 5px;
        background: #FFF;
        border-radius: 4px;
        border: 1px solid #008dd2;
        box-shadow: 0 1px 0 rgba(255,255,255,0.2), inset 0 1px 1px rgba(0,0,0,0.21);
    }

    .tags span.sale {
        display: inline-block;
        height: 21px;
        margin: 0 2px 0 10px;
        padding: 0 7px 0 14px;
        white-space: nowrap;
        position: relative;

        background: -moz-linear-gradient(top, #dc143c 0%, #ec1542 100%);
        background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#dc143c), color-stop(100%,#ec1542));
        background: -webkit-linear-gradient(top, #dc143c 0%,#ec1542 100%);
        background: -o-linear-gradient(top, #dc143c 0%,#ec1542 100%);
        background: linear-gradient(to bottom, #dc143c 0%,#ec1542 100%);
        background-color: #dc143c;

        color: #fff;
        font: bold 11px/20px Arial, Tahoma, sans-serif;
        text-decoration: none;
        text-shadow: 0 1px rgba(255,255,255,0.4);

        border-top: 1px solid #dc143c;
        border-bottom: 1px solid #dc143c;
        border-right: 1px solid #dc143c;
        border-radius: 1px 3px 3px 1px;
        box-shadow: inset 0 1px #dc143c, 0 1px 2px rgba(0,0,0,0.21);
    }

    .tags span.sale:before {
        content: '';
        position: absolute;
        top: 5px;
        left: -6px;
        width: 10px;
        height: 10px;

        background: -moz-linear-gradient(45deg, #dc143c 0%, #ec1542 100%);
        background: -webkit-gradient(linear, left bottom, right top, color-stop(0%,#dc143c), color-stop(100%,#ec1542));
        background: -webkit-linear-gradient(-45deg, #dc143c 0%,#ec1542 100%);
        background: -o-linear-gradient(45deg, #dc143c 0%,#ec1542 100%);
        background: linear-gradient(135deg, #dc143c 0%,#ec1542 100%);
        background-color: #dc143c;

        border-left: 1px solid #dc143c;
        border-bottom: 1px solid #dc143c;
        border-radius: 0 0 0 2px;
        box-shadow: inset 1px 0 #dc143c, 0 2px 2px -2px rgba(0,0,0,0.33);

        -webkit-transform: scale(1, 1.5) rotate(45deg);
        -moz-transform: scale(1, 1.5) rotate(45deg);
        -ms-transform: scale(1, 1.5) rotate(45deg);
        transform: scale(1, 1.5) rotate(45deg);
    }

    .tags span.sale:after {
        content: '';
        position: absolute;
        top: 7px;
        left: 1px;
        width: 5px;
        height: 5px;
        background: #FFF;
        border-radius: 4px;
        border: 1px solid #dc143c;
        box-shadow: 0 1px 0 rgba(255,255,255,0.2), inset 0 1px 1px rgba(0,0,0,0.21);
    }

    .cart_el-manufactur:first-child{
        margin-top: 10px;
    }

    .cart_el-manufactur {
        font-size: 14px;
    }

    .cart_el {
        border-bottom: 1px dotted #aaa;
        padding-bottom: 15px;
        padding-top: 10px;
    }

    .cart_el > div{
        max-height: 170px;
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
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding-top: 10px;
    }

    .cart_el-costInfo > div{
        display: flex;
        justify-content: center;
    }

    .cart_el-costInfo i {
        margin-left: 5px;
        margin-top: 12px;
        font-size: 18px;
    }

    .cart_el-exs {
        display: inline-block;
        color: #ff6633;
        font-size: 15px;
        margin-left: 5px;
    }

    .cart_el-code {
        display: inline-flex;
        padding-right: 5px;
        font-size: 15px;
        border-right: 1px solid #ccc;
    }

    .cart_el-cost {
        text-align: center;
        font-size: 24px;
        font-weight: 700;
    }

    .cart_el-manufactur {
        color: #555;
    }

    .cart_el-summa{
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .cart_el-summa_value {
        line-height: 40px;
        font-size: 37px;
        font-weight: 500;
    }

    .cart_el-summa_value{
        font-size: 27px;
    }

    .cart_el-description {
        padding-top: 10px;
    }

    @media (max-width: 1200px) {
        .cart_el-img {
            min-height: 250px;
        }

        .cart_el-cost{
            padding: 20px;
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
            min-height: 110px;
        }

    }

    @media (max-width: 575px) {
        .cart_el-controls{
            min-height: 110px;
        }

        .cart_el-name{
            text-align: center;
        }

        .add_to_basket_by_code-label,
        .add_to_basket_by_code-code,
        .add_to_basket_by_code-countBlock{
            display: none;
        }
    }
</style>