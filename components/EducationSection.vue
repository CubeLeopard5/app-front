<template>
    <div :style="{ 'color': store.themes[store.themes.selected].text }">
        <div style="margin-bottom: 12px;">
            <span style="font-weight: bold; font-size: 18px; color: #0f6a08;"> Education </span>
        </div>
        <div v-for="el, i in data" :key="i">
            <Education :data="el"/>
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
                img: "https://media.licdn.com/dms/image/C560BAQEogO0_6QTmdg/company-logo_100_100/0/1594123399589?e=1697673600&v=beta&t=wegXSqD_xefDQtUCFVKA5IDrGwxM1tuFf3FyR2l66nk",
                title: "Master Epitech (En cours)",
                compagny: "EPITECH",
                place: "Paris, Ile-de-France, France",
                time: "Septembre 2019 - Août 2024",
                description: "Un stage chez ESPRI Digital où j'ai réalisé un système de sauvegarde de bases de données avec des conteneurs managés par Kubernetes.",
            },
            {
                img: "https://media.licdn.com/dms/image/D560BAQGSIrnzer9Z8w/company-logo_100_100/0/1686323844105?e=1697673600&v=beta&t=HCvUXKlAVIwXqwOQhohdKp2yGT56aFHEUVbfcojjsJ0",
                title: "Faculty of engineering and computing",
                compagny: "Dublin City University",
                place: "Dublin, Irlande",
                time: "Septembre 2022 - Mai 2023",
                description: "Un travail en part-time où j'ai réalisé la refonte du site de la Mutuelle Générale de Prévoyance.",
            },
            {
                img: "https://eduscol.education.fr/sti/system/files/images/concours-examens/14557/14557-13857-logo-si-2019.png",
                title: "Bac Sciences de l'ingénieur",
                compagny: "Lycée Albert Camus",
                place: "Lyon, Auvergne-Rhône-Alpes, France",
                time: "2019",
                description: "Un travail en part-time où j'ai réalisé la refonte du site de la Mutuelle Générale de Prévoyance.",
            },
        ])
        return {
            store,
            data,
        };
    },
});
</script>