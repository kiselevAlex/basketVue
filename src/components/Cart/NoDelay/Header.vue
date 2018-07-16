<template>
    <div class="row cart_header">
        <div class="add_to_basket_by_code col-md-9">
            <div class="myoring">Добавление товаров в корзину по коду</div>
            <div class="mr-bottom mr-top">Введите шестизначный код товара и его колличество, нажмите кнопку
                «Добавить»
            </div>
            <div class="add_to_basket_by_code-form">
                <label class="add_to_basket_by_code-label" for="addBasketByCode_code">Код
                    товара:</label>
                <input type="text" id="addBasketByCode_code mr-top-10" autocomplete="off"
                       name="addBasketByCode_code" placeholder="Код" class="add_to_basket_by_code-code"
                       v-model="prepCode" maxlength="6"/>
                <div class="add_to_basket_by_code-countBlock"><span></span>
                    <Counter :startCount="prepCountAct" :timeout=10 :actionCh="changePrepCount"/>
                    <el-button v-on:click="addToCart" :disabled="isTrue" type="primary" size="small">Добавить
                    </el-button>
                </div>
                <div class="add_to_basket_by_code-result">
                    <Result v-for="item in results" :key="item.CODE" :about="item" :deleteAct="deleteResult"/>
                </div>
            </div>
        </div>
        <div class="col-lg-3 col-md-12">
            <div class="list-header-count">Всего товаров: {{count}} шт.</div>
            <div class="list-header-sum mr-bottom mr-top">Сумма: {{summa}} <i class="fa fa-rub"></i></div>
            <div>
                <!--С учетом НДС: 3813.45 <i class="fa fa-rub"></i> !-->
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    import _ from 'lodash'
    import Counter from '@/components/Lego/Counter'
    import Result from './Header/ResultSerach'

    export default {
        name: "header",
        components: {
            Counter,
            Result
        },
        data() {
            return {
                prepCode: "",
                prepCount: 1,
                isTrue: true,
                results: []
            }
        },
        watch: {
            prepCode: function (val) {
                this.prepCode = val.toString().replace(/[^0-9]/g, '')
                if (this.prepCode.length == 6)
                    this.checkCode()
                else {
                    this.isTrue = true
                }
            }
        },
        methods: {
            deleteResult: function(){
                this.results = [];
            },
            checkCode: _.debounce(function () {
                if (this.prepCode.length == 6) {
                    if (this.results.length >= 1) this.results.pop(0);
                    axios.get('http://www.burocratopt.ru/api/search/byCode/', {params: {"code": this.prepCode}})
                        .then((msg) => {
                            console.log(msg)
                            if (msg.status != 404) {
                                this.results.push(
                                    {
                                        Name: msg.data.NAME.replace(/&quot;/g, '"'),
                                        Code: this.prepCode,
                                        Price: msg.data.PRICE
                                    }
                                )
                                this.isTrue = false
                            } else {
                                this.$notify({
                                    title: 'Ошибка',
                                    message: 'Товар с кодом ' + this.prepCode + ' не найден',
                                    type: 'warning'
                                });
                                this.results.push(
                                    {
                                        Name: 'Товар с кодом ' + this.prepCode + ' не найден',
                                        Code: '',
                                        Price: ''
                                    }
                                )
                                this.isTrue = true
                            }
                        }).catch((msg) => {
                            this.results.push(
                            {
                                Name: 'Товар с кодом ' + this.prepCode + ' не найден',
                                Code: '',
                                Price: ''
                            }
                        )
                        this.isTrue = true
                    })
                }
            }, 1000),
            addToCart: function () {
                this.$store.dispatch('addByCode', {
                    code: this.prepCode,
                    count: this.prepCount
                })
                this.prepCode = ""
                this.prepCount = 1
                this.isTrue = true
            },
            changePrepCount(val) {
                this.prepCount = val;
            }
        },
        computed: {
            count() {
                return this.$store.state.items.filter((el) => {
                    return el.DELAY == 'N'
                }).length;
            },
            summa() {
                let res = 0;
                this.$store.state.items.filter((el) => {
                    return el.DELAY == 'N'
                }).map((el) => {
                    res += el.PRICE * el.QUANTITY
                });
                return res.toFixed(2);
            },
            prepCountAct: {
                get: function () {
                    return this.prepCount
                },
                set: function (val) {
                    this.prepCount = val
                }
            }
        }
    }
</script>

<style scoped>
    .cart_header {
        background-color: #eee;
        padding: 10px;
    }

    .myoring {
        color: #ff6633;
    }

    .add_to_basket_by_code-label {
        color: #222;
        font-weight: bold;
        vertical-align: top;
        line-height: 34px;
    }

    .add_to_basket_by_code-result {
        position: absolute;
        top: 100%;
        width: 100%;
        z-index: 1;
        display: flex;
        flex-wrap: wrap-reverse;
    }

    .list-header-sum {
        font-size: 28px;
    }

    .list-header-count {
        font-size: 23px;
    }

    .add_to_basket_by_code-form {
        display: inline-block;
        position: relative;
    }

    .add_to_basket_by_code-code {
        margin-left: 5px;
        margin-right: 5px;
        line-height: 20px;
        padding: 8px;
        text-align: center;
        width: 101px;
        border: none;
        border-radius: 3px;
        vertical-align: top;
    }

    .res_search {
        position: absolute;
    }

    .add_to_basket_by_code-countBlock {
        display: inline-flex;
    }

    .add_to_basket_by_code-count {
        border: none;
        width: 60px;
        line-height: 18px;
        margin-left: -2px;
        margin-right: -2px;
    }

    .add_to_basket_by_code-minus {
        line-height: 19px;
        width: 30px;
        display: inline-block;
        text-align: center;
        border-bottom-left-radius: 3px;
        border-top-left-radius: 3px;
        background-color: #333;
        color: #fff !important;
        margin-right: -2px;
        padding: 6px;
        transition: background-color 0.2s;
    }

    .add_to_basket_by_code-count {
        border: none;
        width: 60px;
        line-height: 21px;
        text-align: center;
        padding: 5px;
    }

    .add_to_basket_by_code-plus {
        display: inline-block;
        width: 30px;
        line-height: 19px;
        text-align: center;
        background-color: #333;
        color: #fff !important;
        margin-left: -3px;
        border-top-right-radius: 3px;
        border-bottom-right-radius: 3px;
        padding: 6px;
        transition: background-color 0.2s;
    }

    .add_to_basket_by_code-minus:hover,
    .add_to_basket_by_code-plus:hover {
        background-color: #ff6633;
        border: none;
    }

    .add_to_basket_by_code-add {
        line-height: 19px;
        display: inline-block;
        margin-left: 10px;
        background-color: #ff6633;
        color: #fff !important;
        border-radius: 3px;
        padding: 6px;
    }

    @media (max-width: 575px) {
        .add_to_basket_by_code-label,
        .add_to_basket_by_code-code,
        .add_to_basket_by_code-countBlock {
            display: none;
        }
    }

    .mr-top {
        margin-top: 10px;
    }

    .mr-bottom {
        margin-bottom: 10px;
    }
</style>