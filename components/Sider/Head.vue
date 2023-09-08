<template>
    <div class="head">
        <div class="head-logo-name">
            <img src="@/assets/Logo_MIDI.png" class="logo-etp" alt="company logo"/>
            <span> Adrien Michaud </span>
        </div>
        <div style="display: flex; flex-direction: row; justify-content: space-between;">
            <a-switch aria-label="Switch language" class="switch-theme" v-model:checked="state.checkedL" @change="(e) => { (e == true) ? $i18n.locale = 'fr' : $i18n.locale = 'en'; }">
                <template #checkedChildren>
                    <span> FR </span>
                </template>
                <template #unCheckedChildren>
                    <span> EN </span>
                </template>
            </a-switch>
            <a-switch aria-label="Switch color theme" class="switch-theme" v-model:checked="state.checkedT" @change="(e) => { (e == true) ? $colorMode.preference = 'light' : $colorMode.preference = 'dark'; }">
                <template #checkedChildren>
                    <img style="display: flex;" src="@/assets/sun-svgrepo-com.svg" alt="">
                </template>
                <template #unCheckedChildren>
                    <img style="display: flex;" src="@/assets/moon-svgrepo-com.svg" alt="">
                </template>
            </a-switch>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue';

const state = reactive({
    checkedT: true,
    checkedL: true,
});
</script>

<style scoped>
.logo-etp {
    height: 200px;
    width: 200px;
}

.switch-theme {
    background: var(--color-primary);
}

.head {
    display: flex;
    flex-direction: column;
    gap: 24px;
    font-size: 18px;
}

.head-logo-name {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
}
</style>