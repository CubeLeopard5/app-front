<template>
    <a-affix :offset-top="top">
        <div class="contact" :style="{ border: `solid 1px ${store.themes[store.themes.selected].tertiary}`, background: store.themes[store.themes.selected].primary, color: store.themes[store.themes.selected].text }">
            <span> Mail: jkdhdkqsjhd </span>
            <span> Téléphone: qsldjlqkdjq </span>
            <span> Malt </span>
            <span> LinkedIn </span>
        </div>
    </a-affix>
</template>

<script>
import { defineComponent, ref } from 'vue';
import { useMainStore } from '~/store/main';

export default defineComponent({
    setup() {
        const top = ref(10);
        const store = useMainStore();
        return {
            top,
            store,
        }
    },
});
</script>

<style scoped>
.contact {
    background: white;
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 16px;
    margin-top: 12px;
    border-radius: 12px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}
</style>