<template>
    <div class="templace2">
        toggle2里的num: {{ num }}
    </div>
</template>
<script>
import {myMixin} from '@/mixins/toggle.js'
export default {
    mixins: [myMixin],
    created(){
        this.num = 5
    }
}
</script>
<style scoped lang="scss">
    .templace {
        color: blue;
        font-size: 28px;
    }
</style>