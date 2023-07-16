<template>
    <div :style="{ 'color': store.themes[store.themes.selected].text }">
        <a-row>
            <a-col :span="12" style="display: flex; flex-direction: column; gap: 12px;">
                <span class="title" style="display: flex; flex-direction: row; justify-content: center; margin-bottom: 12px;"> Erudia </span>
                <div>
                    <span> Projet de fin d'étude à Epitech. Erudia est une plateforme permettant aux chercheurs de publier et reviewer des articles scientifiques. Elle permet également de rechercher des articles et de s'assurer de leur fiabilité. </span>
                </div>
            </a-col>
            <a-col :span="12" style="display: flex; flex-direction: column; align-items: center;">
                <span class="title" style="margin-bottom: 12px;"> Images </span>
                <div style="display: flex; flex-direction: column; align-items: center; gap: 12px;">
                    <img src="@/assets/erudia_1.png" alt="" style="width: 90%; height: 90%;">
                    <img src="@/assets/erudia_2.png" alt="" style="width: 90%; height: 90%;">
                    <img src="@/assets/erudia_3.png" alt="" style="width: 90%; height: 90%;">
                </div>
            </a-col>
        </a-row>
    </div>
</template>

<script setup>
import { useMainStore } from '~/store/main';

const store = useMainStore();
</script>

<style scoped>
.title {
    font-weight: bold;
    font-size: 24px;
}
</style>