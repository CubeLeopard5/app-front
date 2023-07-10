<template>
    <div style="display: flex; flex-direction: column; align-items: center; margin-top: 24px;">
        <AboutMe :style="{ 'background': store.themes[store.themes.selected].primary }" class="card"/>
    </div>
</template>

<script setup>
import { useMainStore } from '~/store/main';

const store = useMainStore();
</script>

<style scoped>
.card {
    max-width: 60%;
    padding: 16px 16px 16px 16px;
    border-radius: 12px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    border: solid 1px #0f6a08;
    animation-name: article-card-unselected;
  	animation-duration: 0.5s;
    transform: scale(1);
}

@keyframes article-card-selected {
  0%   {transform: scale(1);}
  100% {transform: scale(1.05);}
}

@keyframes article-card-unselected {
  0%   {transform: scale(1.05);}
  100% {transform: scale(1);}
}

.card:hover {
    animation-name: article-card-selected;
  	animation-duration: 0.5s;
    transform: scale(1.05);
}
</style>