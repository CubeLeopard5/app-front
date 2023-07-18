<template>
    <div :style="{ 'color': store.themes[store.themes.selected].text }">
        <div style="margin-bottom: 12px;">
            <span style="font-weight: bold; font-size: 24px; color: #0f6a08;"> {{ $t('skills.title') }} </span>
        </div>
        <div style="display: grid; grid-template-columns: repeat(3, 1fr); grid-template-rows: repeat(3, 120px); margin-top: 24px; font-size: 18px;">
            <div v-for="el, i in data" :key="i">
                <SkillsItem :data="el"/>
            </div>
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
                img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png",
                title: "Vue.js",
            },
            {
                img: "https://www.javatpoint.com/js/nodejs/images/node-js-tutorial.png",
                title: "Node js",
            },
            {
                img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/C_Programming_Language.svg/1200px-C_Programming_Language.svg.png",
                title: "C",
            },
            {
                img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1200px-ISO_C%2B%2B_Logo.svg.png",
                title: "CPP",
            },
            {
                img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png",
                title: "Javascript",
            },
            {
                img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/935px-Python-logo-notext.svg.png",
                title: "Python",
            },
            {
                img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png",
                title: "HTML5",
            },
            {
                img: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",
                title: "CSS",
            },{
                img: "https://variwiki.com/images/a/a1/Docker.png",
                title: "Docker",
            },
            {
                img: "https://orion42.net/wp-content/uploads/2019/10/full_colored_dark_green42.png",
                title: "Bash",
            },
            {
                img: "https://upload.wikimedia.org/wikipedia/commons/4/45/NuxtJS_Logo.png",
                title: "Nuxt.js",
            },
            {
                img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/250px-Git_icon.svg.png",
                title: "Git",
            },
        ])
        return {
            store,
            data,
        };
    },
});
</script>