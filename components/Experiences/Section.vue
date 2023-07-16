<template>
    <div :style="{ 'color': store.themes[store.themes.selected].text }">
        <div style="margin-bottom: 12px;">
            <span style="font-weight: bold; font-size: 18px; color: #0f6a08;"> Experiences </span>
        </div>
        <div v-for="el, i in data" :key="i">
            <ExperiencesItem :data="el"/>
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
            {
                img: "https://media.licdn.com/dms/image/C4D0BAQF-wEYKyORg8Q/company-logo_100_100/0/1589361975632?e=1697068800&v=beta&t=mdv1hWWqnYwFJR36glnvW1w76NpBLwwnblqLeUr01JY",
                title: "Développeur Back-end",
                compagny: "ESPRI Digital",
                place: "Argentan, Normandie, France",
                time: "Avril 2022 - Juillet 2022",
                description: "Réalisation d'un système de sauvegarde de bases de données avec des conteneurs managés par Kubernetes.",
            },
            {
                img: "https://media.licdn.com/dms/image/C560BAQElVcz7IY1a1w/company-logo_100_100/0/1519808666182?e=1697068800&v=beta&t=Xd4EO8COJFs3MRVsEBV_rqkHkJg2AbIXWZz_TPZA8oI",
                title: "Développeur Front-end",
                compagny: "Axxone System",
                place: "Lyon, Auvergne-Rhône-Alpes, France",
                time: "Septembre 2021 - Mars 2022",
                description: "Refonte du site de la Mutuelle Générale de Prévoyance.",
            },
            {
                img: "https://media.licdn.com/dms/image/C560BAQElVcz7IY1a1w/company-logo_100_100/0/1519808666182?e=1697068800&v=beta&t=Xd4EO8COJFs3MRVsEBV_rqkHkJg2AbIXWZz_TPZA8oI",
                title: "Développeur FullStack",
                compagny: "Axxone System",
                place: "Lyon, Auvergne-Rhône-Alpes, France",
                time: "Juillet 2020 - Décembre 2020",
                description: "Création d'éléments en vue js, avec également la mise en place de système de recherche et d\'indexation full-text.",
            },
        ])
        return {
            store,
            data,
        };
    },
});
</script>