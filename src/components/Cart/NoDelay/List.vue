<template>
    <div class="list nodelay container-fluid">
        <Header/>
        <div class="list-top row">
            <div>
                <Check check="top-control" :toogle="checkedAll" :checkAction="allCheckAction"/>
                <label for="lego-check-id-top-control">Выделить все</label>
            </div>
            <div>
                <span>С выделенными: </span>
                <el-button-group>
                    <el-button type="danger" size="small" v-on:click="deleteChecked" icon="el-icon-delete"> Удалить из корзины</el-button>
                    <el-button type="success" size="small" icon="el-icon-document"> Выгрузить в Excel</el-button>
                </el-button-group>
                <el-cascader
                        :options="filterOptions"
                        v-model="filterType"
                        size="small">
                </el-cascader>
            </div>
        </div>
        <Spinner v-if="isLoad"/>
        <Progress v-else-if="isProgress" :status="isProgressStatus" :percent="isProgressStep"/>
        <Item v-else v-for="el in list" :key="el.ID" :id="el.ID" :item_id="el.ID"/>
        <div class="emptyBasket" v-if="list.length < 1">
            <i class="fa fa-shopping-cart" aria-hidden="true"></i>
            <span>Ваша корзина пуста</span>
        </div>
        <Header/>
        <div class="bottom-controls" v-if="list.length > 0">
            <a class="el-button el-button--primary" href="/catalog/">Продолжить покупки</a>
            <a class="el-button el-button--success" href="/personal/order/make/">Оформить заказ</a>
        </div>
    </div>
</template>

<script>
    import Header from '@/components/Cart/NoDelay/Header'
    import Item from '@/components/Cart/NoDelay/Item'
    import Spinner from '@/components/Lego/Spinner'
    import Check from '@/components/Lego/Check'
    import Progress from '@/components/Lego/CircleProgress'

    export default {
        name: "list",
        components: {
            Header,
            Item,
            Spinner,
            Check,
            Progress
        },
        data() {
            return {
                filterType: ["NAME", "true"],
                filterOptions: [{
                    value: "NAME",
                    label: "По имени",
                    children: [{
                        value: "true",
                        label: "А - Я"
                    }, {
                        value: "false",
                        label: "Я - А"
                    }]
                }, {
                    value: "PRICE",
                    label: "По цене",
                    children: [{
                        value: "true",
                        label: "дешевле - дороже"
                    }, {
                        value: "false",
                        label: "дороже - дешевле"
                    }]
                }, {
                    value: "SUMMA",
                    label: "По сумме",
                    children: [{
                        value: "true",
                        label: "дешевле - дороже"
                    },{
                        value: "false",
                        label: "дороже - дешевле"
                    }]
                }]
            }
        },
        methods: {
            allCheckAction: function(){
                this.$store.dispatch('updateCheckAll', 'N')
            },
            deleteChecked: function(){
                this.$store.dispatch('deleteCheckedElement', 'N')
            }
        },
        computed: {
            list() {
                return this.$store.getters.getNotDelayItem.sort((a, b)=>{
                    let prop = this.filterType[0]
                    let impl = this.filterType[1] == 'true'
                    let x = a[prop];
                    let y = b[prop];
                    switch (prop){
                        case "PRICE":
                            x = parseInt(x);
                            y = parseInt(y);
                            break;
                        case "SUMMA":
                            x = parseFloat(a['PRICE']) * parseInt(a["QUANTITY"])
                            y = parseFloat(b['PRICE']) * parseInt(b["QUANTITY"])
                            break;
                    }
                    return (impl) ? x >= y : x < y;
                });
            },
            isLoad() {
                return this.$store.state.isLoad;
            },
            isProgress(){
                return this.$store.state.progress.run;
            },
            isProgressStatus(){
                return this.$store.state.progress.status;
            },
            isProgressStep(){
                return this.$store.state.progress.step;
            },
            checkedAll() {
                return this.$store.state.checkedItems === true;
            }
        }
    }
</script>

<style scoped>
    .left_block {
        display: none;
    }

    .bottom-controls {
        float: right;
        margin-top: 20px;
        margin-bottom: 20px;
    }

    .list-top {
        display: flex;
        justify-content: space-between;
        align-items: center;
        box-shadow: 0px 1px 6px -3px #555;
        padding: 5px 13px;
        color: #555;
        font-size: 14px;
    }

    .list-top > div:first-child {
        display: inline-flex;
        align-items: center;
    }

    .list-top > div:first-child > label {
        margin: 0;
        margin-left: 5px;
    }

    .el-cascader{
        line-height: 33px;
        top: 1px;
    }

    .progress-block{
        position: relative;
        min-height: 300px;
    }
</style>
