<template>
    <div class="check">
        <input :id="check_id" v-model="state" type="checkbox"/>
        <label class="check_lab" :for="check_id"></label>
    </div>
</template>

<script>
    export default {
        name: "check",
        props: ['check', 'checkAction', 'toogle'],
        computed: {
            check_id(){
                return 'lego-check-id-' + this.$props['check']
            },
            state: {
                get: function() {
                    return this.$props['toogle']
                },
                set: function(newValue){
                    this.$props['checkAction']()
                }
            }
        }
    }
</script>

<style scoped>
    .check {
        height: 100%;
        display: inline-flex;
        justify-content: center;
        align-items: center;
    }

    .check input {
        display: none;
    }

    .check_lab {
        border-radius: 5px;
        width: 20px;
        height: 20px;
        background: #fff;
        border: 1px #ccc solid;
        transition: background-color 0.2s;
        margin: 0;
    }

    .check_lab:hover {
        background-color: #eee;
    }

    input:checked + .check_lab {
        background-color: #ff6633;
        border-color: #eee;
    }
</style>