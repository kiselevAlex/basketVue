<template>
    <div class="progress-block">
        <el-progress type="circle" color="#f63" :percentage="percent" :status="status"></el-progress>
    </div>
</template>

<script>
    export default {
        name: "circle-progress",
        props: {
            percent: {
                type: Number,
                default: 0
            },
            status: {
                type: String,
                default: ''
            }
        }
    }
</script>

<style scoped>

</style>