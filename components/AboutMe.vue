<template>
    <div :style="{ 'color': store.themes[store.themes.selected].text }">
        <div style="margin-bottom: 12px;">
            <span style="font-weight: bold; font-size: 18px; color: #0f6a08;"> About me </span>
        </div>
        <div>
            <span> Ayant suivi la formation de l'école Epitech, je suis animé des technologies web et possède de larges compétences en C, CPP, Javascript et VueJS. </span>
        </div>
        <div>
            <span> Ce que je peux faire: </span>
        </div>
        <div style="padding: 12px 0px 12px 24px;">
            <div v-for="el, i in done" :key="i">
                <span> {{ el }} </span>
            </div>
        </div>
        <div>
            <span> Mes nombreuses expériences professionnelles me permettent d'efficacement répondre à vos besoins et d'exceller dans mon domaine. </span>
        </div>
        <div>
            <span> Je suis toujours à la cherche de nouvelles collaborations afin d’apporter mon expertise à vos projets. </span>
        </div>
    </div>
</template>

<script>
import { defineComponent, ref } from 'vue';
import { useMainStore } from '~/store/main';

export default defineComponent({
    setup() {
        const store = useMainStore();
        const done = ref([
            '- Réaliser une application web pour vos besoins',
            '- Traduire un design de site internet en code',
            '- Travailler avec des équipes de développeurs frontend et backend',
            '- Répondre à des besoins de services backend',
            '- Réaliser des scripts d\'automatisation de vos tâches'
        ])
        return {
            done,
            store,
        };
    },
});
</script>