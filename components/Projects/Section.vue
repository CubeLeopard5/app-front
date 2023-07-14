<template>
    <div :style="{ 'color': store.themes[store.themes.selected].text }">
        <div style="margin-bottom: 12px;">
            <span style="font-weight: bold; font-size: 18px; color: #0f6a08;"> Projects </span>
        </div>
        <a-row>
            <a-col :span="6">
                <div style="display: flex; flex-direction: column; align-items: center; padding: 0px 24px 0px 0px; gap: 6px;">
                    <img src="../../assets/Erudia_Logo_Black.png" alt="logo" style="width: 50%; height: 50%;" v-if="store.themes.selected == 'light'"/>
                    <img src="../../assets/Erudia_Logo.png" alt="logo" style="width: 50%; height: 50%;" v-else/>
                </div>
            </a-col>
            <a-col :span="18">
                <div style="display: flex; flex-direction: row; justify-content: space-between;">
                    <span style="font-weight: bold; font-size: 18px;"> Erudia </span>
                    <span> 2024 </span>
                </div>
                <div style="display: flex; flex-direction: column; gap: 8px; padding: 0px 24px 0px 0px; margin-top: 12px;">
                    <span> null part </span>
                    <span> un projet </span>
                </div>
            </a-col>
        </a-row>
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
        };
    },
});
</script>