<template>
    <a-layout>
        <a-layout-header :style="{ 'background': store.themes[store.themes.selected].primary }">
            <Header/>
        </a-layout-header>
        <a-layout>
            <a-layout-content :style="{ 'background': store.themes[store.themes.selected].secondary, 'min-height': '100vh' }">
                <NuxtPage/>
            </a-layout-content>
        </a-layout>
    </a-layout>
</template>

<script setup>
import { useMainStore } from '~/store/main';

const store = useMainStore();
</script>