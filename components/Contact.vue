<template>
    <div class="contact" :style="{ background: store.themes[store.themes.selected].primary, color: store.themes[store.themes.selected].text }">
        <span> Contact </span>
        <a-divider style="margin: 0px;"/>
        <div>
            <span> Mail: </span>
            <span> michaudadrien78@gmail.com </span>
        </div>
       <div>
            <span> Téléphone: </span>
            <span> 06 07 91 04 31 </span>
       </div>
        <div>
            <a href="https://www.malt.fr/profile/adrienmichaud" target="_blank"> Malt </a>
        </div>
        <div>
            <a href="https://www.linkedin.com/in/adrienmichaud/" target="_blank"> LinkedIn </a>
        </div>
    </div>
</template>

<script>
import { defineComponent, ref } from 'vue';
import { useMainStore } from '~/store/main';

export default defineComponent({
    setup() {
        const store = useMainStore();
        return {
            store,
        }
    },
});
</script>

<style scoped>
.contact {
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 16px;
    margin-top: 12px;
}
</style>