<template>
    <transition
            name="custom-classes-transition"
            enter-active-class="animated rollIn"
            leave-active-class="animated rollOut"
    >
        <div class="add_to_basket_result">
            <div>
                <div>{{about.Name}}</div>
                <div v-if="about.Code != ''">Код: <span class="oringText">{{about.Code}}</span></div>
                <div v-if="about.Price != ''">Цена: <span class="oringText">{{about.Price}} <i class="fa fa-rub"></i></span></div>
            </div>
            <div class="add_to_basket_result-controls">
                <div>
                    <el-button type="danger" size="small" v-on:click="deleteAct" icon="el-icon-circle-close-outline"></el-button>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
    export default {
        name: "result-serach",
        props: ['about', 'deleteAct']
    }
</script>

<style scoped>

    .add_to_basket_result{
        background-color: #fff;
        padding: 10px;
        border-radius: 3px;
        border: 1px solid #f63;
        display: flex;
        justify-content: space-between;
        width: 100%;
        margin-top: 3px;
    }

</style>