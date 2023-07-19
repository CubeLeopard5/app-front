<template>
    <div :style="{ 'color': store.themes[store.themes.selected].text }" class="box">
        <div class="col-text">
            <span class="title" style="margin-bottom: 12px; margin-top: 12px;"> Erudia </span>
            <div style="display: flex; flex-direction: row; align-items: center; width: 100%; justify-content: space-between;">
                <NuxtLink to="/" style="margin-left: 12px;"> Retour </NuxtLink>
                <a href="https://erudia.fr" target="_blank" style="margin-right: 12px;"> Lien </a>
            </div>
        </div>
        <div class="col-text">
            <span class="title" style="margin-bottom: 12px; margin-top: 12px;"> Illustrations </span>
            <div class="box-images">
                <img src="@/assets/erudia_1.png" alt="" style="width: 90%; height: 90%;">
                <img src="@/assets/erudia_2.png" alt="" style="width: 90%; height: 90%;">
                <img src="@/assets/erudia_3.png" alt="" style="width: 90%; height: 90%;">
            </div>
        </div>
    </div>
</template>

<script setup>
import { useMainStore } from '~/store/main';

const store = useMainStore();
</script>

<style scoped>
.box {
    background: white;
    border-radius: 12px;
    margin: 24px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}

.col-text {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;
    gap: 12px;
}

.box-images {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
    width: 100%;
    padding: 24px;
}

.title {
    font-weight: bold;
    font-size: 24px;
}
</style>