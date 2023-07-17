<template>
    <div :style="{ 'color': store.themes[store.themes.selected].text }">
        <div style="margin-bottom: 12px;">
            <span style="font-weight: bold; font-size: 18px; color: #0f6a08; font-size: 24px;"> Experiences </span>
        </div>
        <div v-for="el, i in data" :key="i">
            <ExperiencesItem :img="el" :index="i"/>
            <a-divider v-if="i < data.length - 1"/>
        </div>
    </div>
</template>

<script>
import { defineComponent, ref } from 'vue';
import { useMainStore } from '~/store/main';

export default defineComponent({
    setup() {
        const store = useMainStore();
        const data = ref([
            "https://media.licdn.com/dms/image/C4D0BAQF-wEYKyORg8Q/company-logo_100_100/0/1589361975632?e=1697068800&v=beta&t=mdv1hWWqnYwFJR36glnvW1w76NpBLwwnblqLeUr01JY",
            "https://media.licdn.com/dms/image/C560BAQElVcz7IY1a1w/company-logo_100_100/0/1519808666182?e=1697068800&v=beta&t=Xd4EO8COJFs3MRVsEBV_rqkHkJg2AbIXWZz_TPZA8oI",
            "https://media.licdn.com/dms/image/C560BAQElVcz7IY1a1w/company-logo_100_100/0/1519808666182?e=1697068800&v=beta&t=Xd4EO8COJFs3MRVsEBV_rqkHkJg2AbIXWZz_TPZA8oI",
        ])
        return {
            store,
            data,
        };
    },
});
</script>