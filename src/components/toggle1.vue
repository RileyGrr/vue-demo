<template>
    <div class="templace">
        toggle1里的num: {{ num }}
    </div>
</template>
<script>
import {myMixin} from '@/mixins/toggle.js'
export default {
    mixins: [myMixin],
    created(){
        this.num++
        this.one()
        this.two()
    },
    methods: {
        // one(){
        //     // console.log("one 组件")
        // },
        two(){
            console.log("two 组件")
        }
    }
}
</script>
<style scoped lang="scss">
    .templace {
        color: red
    }
</style>