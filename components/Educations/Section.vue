<template>
    <div :style="{ 'color': store.themes[store.themes.selected].text }">
        <div style="margin-bottom: 12px;">
            <span style="font-weight: bold; font-size: 18px; color: #0f6a08;"> Formation </span>
        </div>
        <div v-for="el, i in data" :key="i">
            <EducationsItem :data="el"/>
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
                description: "Le Programme Grande Ecole est le cursus historique d’Epitech Technology. Il se déroule en 5 ans pour former des experts en informatique. Il propose un contenu technique dense et évolutif, comprenant une diversité de projets de programmation et couvrant de nombreux langages qui permettront à l’étudiant d’aborder toutes les nouvelles technologies.",
            },
            {
                img: "https://media.licdn.com/dms/image/D560BAQGSIrnzer9Z8w/company-logo_100_100/0/1686323844105?e=1697673600&v=beta&t=HCvUXKlAVIwXqwOQhohdKp2yGT56aFHEUVbfcojjsJ0",
                title: "Faculty of engineering and computing",
                compagny: "Dublin City University",
                place: "Dublin, Irlande",
                time: "Septembre 2022 - Mai 2023",
                description: "J'ai éffectué ma quatrième année d'étude à Dublin City University en Irlande. Celle-ci m'a permis d'étendre mes compétences en web design, gestion de projets et apprendre de nouvelles technologies.",
            },
            {
                img: "https://eduscol.education.fr/sti/system/files/images/concours-examens/14557/14557-13857-logo-si-2019.png",
                title: "Bac Sciences de l'ingénieur",
                compagny: "Lycée Albert Camus",
                place: "Lyon, Auvergne-Rhône-Alpes, France",
                time: "2019",
                description: "Obtention de mon bac Sciences de l'ingénieur avec optien Informatique et Sciences du Numériques (ISN).",
            },
        ])
        return {
            store,
            data,
        };
    },
});
</script>