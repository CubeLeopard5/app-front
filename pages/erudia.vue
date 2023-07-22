<template>
    <div class="box">
        <div class="col-text">
            <span class="title" style="margin-bottom: 12px; margin-top: 12px;"> Erudia </span>
            <div style="display: flex; flex-direction: row; align-items: center; width: 100%; justify-content: space-between;">
                <NuxtLink to="/" style="margin-left: 12px;"> {{ $t('projects.back') }} </NuxtLink>
                <a href="https://erudia.fr" target="_blank" style="margin-right: 12px;"> {{ $t('projects.link') }} </a>
            </div>
            <div class="description">
                <div class="descriptin-box">
                    <span class="title" style="padding-left: 12px;"> {{ $t('erudia.description.title') }} </span>
                    <div style="padding-left: 24px;" class="descriptin-box">
                        <span> {{ $t('erudia.description.first') }} </span>
                        <span> {{ $t('erudia.description.second') }} </span>
                        <span> {{ $t('erudia.description.third') }} </span>
                        <span> {{ $t('erudia.description.fourth') }} </span>
                        <span> {{ $t('erudia.description.fifth') }} </span>
                        <span> {{ $t('erudia.description.sixth') }} </span>
                    </div>
                </div>
                <div class="descriptin-box">
                    <span class="title" style="padding-left: 12px;"> Technical resources </span>
                    <div style="display: grid; grid-template-columns: repeat(3, 1fr); grid-template-rows: repeat(3, 120px);" :style="{ 'font-size': (width > 1400) ? '18px' : '16px' }">
                        <div v-for="el, i in data" :key="i">
                            <SkillsItem :data="el"/>
                        </div>
                    </div>
                </div>
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

<script>
import { defineComponent, ref } from 'vue';
import { useWindowSize } from '@vueuse/core';

export default defineComponent({
    setup() {
        const { width } = useWindowSize();
        const data = ref([
            {
                img: "https://cdn.iconscout.com/icon/free/png-256/free-django-11-1175036.png",
                title: "Django",
            },
            {
                img: "https://variwiki.com/images/a/a1/Docker.png",
                title: "Docker",
            },
            {
                img: "https://upload.wikimedia.org/wikipedia/commons/3/3c/Nuxt-js.png",
                title: "Nuxt.js",
            },
            {
                img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/250px-Git_icon.svg.png",
                title: "Git",
            },
            {
                img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1200px-Postgresql_elephant.svg.png",
                title: "postGreSQL",
            },
            {
                img: "https://kazupon.github.io/vue-i18n/vue-i18n-logo.png",
                title: "Vue-i18n",
            },
        ])
        return {
            data,
            width,
        };
    },
});
</script>

<style scoped>
.box {
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

.descriptin-box {
    display: flex;
    flex-direction: column;
    gap: 12px;
}

.description {
    display: flex;
    flex-direction: column;
    gap: 12px;
    height: 90vh;
    overflow-y: scroll;
    font-size: 18px;
}

.description::-webkit-scrollbar {
    display: none;
}

.box-images {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
    width: 100%;
    padding: 24px;
    overflow-y: scroll;
    height: 90vh;
}

.box-images::-webkit-scrollbar {
    display: none;
}

.title {
    font-weight: bold;
    font-size: 24px;
}
</style>