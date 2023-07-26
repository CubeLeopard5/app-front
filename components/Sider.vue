<template>
    <a-affix :offset-top="top">
        <SiderHead/>
        <a-divider/>
        <SiderMenu/>
    </a-affix>
</template>

<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
    setup() {
        const top = ref(24);
        return {
            top,
        }
    },
});
</script>